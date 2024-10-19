import grafo from './algoritmos/aestrela.js';
import aEstrela from './algoritmos/aestrela.js';

// Definindo os dados do grafo
const nodes = [
];

const links = [
];

const loadNodes = async () => {Object.keys(grafo.grafo).forEach(chave => {
    const vertice = grafo.grafo[chave];
    if(vertice.xx && vertice.yy)
        nodes.push({ id: vertice.nome, x: vertice.xx, y: vertice.yy, vertice: vertice });
})}

const loadLinks = async () => {Object.keys(grafo.grafo).forEach(chave => {
    const vertice = grafo.grafo[chave];
    vertice.adjacentes.forEach(adjacente => {
        if(adjacente.vertice.xx && adjacente.vertice.yy && vertice.xx && vertice.yy)
            links.push({ source: vertice.nome, target: adjacente.vertice.nome });
    });
})}

await loadNodes();
await loadLinks();

// Dimensões do SVG
const width = window.innerWidth;
const height = window.innerHeight;

// Criando o SVG
const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

let selectedNodes = []; // Array para armazenar a origem e o destino selecionados

// Simulação de força (para layout de grafo)
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(80))
    .force("charge", d3.forceManyBody().strength(-100))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

// Desenhando as arestas (links)
const link = svg.selectAll(".edge")
    .data(links)
    .enter().append("line")
    .attr("class", "edge");

// Desenhando os nós (nodes)
const node = svg.selectAll(".node")
    .data(nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 10)
    .on("click", handleNodeClick)  // Adicionando o evento de clique aos nós
    // .call(drag(simulation));

// Adicionando rótulos aos nós
const labels = svg.selectAll("text")
    .data(nodes)
    .enter().append("text")
    .text(d => d.id)
    .attr("x", 12)
    .attr("y", 3);

// Função para atualizar a simulação
function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

    labels
        .attr("x", d => d.x + 12)
        .attr("y", d => d.y + 3);
}

// Função de clique no nó
function handleNodeClick(event, d) {
    // Selecione o nó clicado (origem ou destino)
    if (selectedNodes.length < 2) {
        selectedNodes.push(d.vertice);

        // Mudando a cor do nó selecionado
        d3.select(this).style("fill", "orange");

        // Se dois nós foram selecionados, destacar o caminho
        if (selectedNodes.length === 2) {
            highlightPath();
        }
    } else {
        // Reiniciar a seleção
        selectedNodes = [];
        resetGraphColors();
    }
}

// Função para destacar o caminho entre a origem e o destino
function highlightPath() {
    const [origin, destination] = selectedNodes;

    console.log("Origem:", origin);
    console.log("Destino:", destination);

    // Encontra o caminho entre origem e destino usando A*
    const path = aEstrela.aEstrela(origin, destination).totalCaminho.map(v => v.nome);
    console.log(path)
    // Destacar as arestas no caminho
    link
        .style("stroke", d => {
            return path.includes(d.source.id) && path.includes(d.target.id) &&
                   Math.abs(path.indexOf(d.source.id) - path.indexOf(d.target.id)) === 1
                ? "red"
                : "#999";
        })
        .style("stroke-width", d => {
            return path.includes(d.source.id) && path.includes(d.target.id) &&
                   Math.abs(path.indexOf(d.source.id) - path.indexOf(d.target.id)) === 1
                ? 4
                : 2;
        });
}

// Função para resetar as cores do grafo
function resetGraphColors() {
    // Resetar cor dos nós
    node.style("fill", "steelblue");

    // Resetar cor das arestas
    link
        .style("stroke", "#999")
        .style("stroke-width", 2);
}
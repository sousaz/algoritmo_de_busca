import grafo from './algoritmos/aestrela.js';
import aEstrela from './algoritmos/aestrela.js';

// Definindo os dados do grafo
const nodes = [
];

const links = [
    // { source: "Galpão", target: "Saida de emergencia do bloco F" },
    // { source: "Galpão", target: "Bloco H" },
    // { source: "Galpão", target: "Almoxarifado" },
];

const loadNodes = async () => {Object.keys(grafo.grafo).forEach(chave => {
    const vertice = grafo.grafo[chave];
    if(vertice.xx && vertice.yy)
        nodes.push({ id: vertice.nome, label: "chama", x: vertice.xx, y: vertice.yy });
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

// Função de arrastar os nós
// function drag(simulation) {
//     function dragstarted(event) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         event.subject.fx = event.subject.x;
//         event.subject.fy = event.subject.y;
//     }

//     function dragged(event) {
//         event.subject.fx = event.x;
//         event.subject.fy = event.y;
//     }

//     function dragended(event) {
//         if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//     }

//     return d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended);
// }

// Função de clique no nó
function handleNodeClick(event, d) {
    // Selecione o nó clicado (origem ou destino)
    if (selectedNodes.length < 2) {
        selectedNodes.push(d);

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

// Função heurística para o A*
// function heuristic(nodeA, nodeB) {
//     const dx = nodeA.x - nodeB.x;
//     const dy = nodeA.y - nodeB.y;
//     return Math.sqrt(dx * dx + dy * dy);  // Distância euclidiana
// }

// // Função para encontrar o caminho mais curto usando A*
// function aStar(origin, destination) {
//     const openSet = [origin];  // Nós a serem avaliados
//     const cameFrom = new Map();  // Para reconstruir o caminho

//     const gScore = new Map(nodes.map(n => [n.id, Infinity]));  // Distância do nó inicial
//     gScore.set(origin.id, 0);

//     const fScore = new Map(nodes.map(n => [n.id, Infinity]));  // Estimativa de custo total
//     fScore.set(origin.id, heuristic(origin, destination));

//     while (openSet.length > 0) {
//         // Encontre o nó com menor fScore
//         let current = openSet.reduce((a, b) => (fScore.get(a.id) < fScore.get(b.id) ? a : b));

//         // Se chegamos ao destino, reconstruir o caminho
//         if (current.id === destination.id) {
//             let totalPath = [current];
//             while (cameFrom.has(current.id)) {
//                 current = cameFrom.get(current.id);
//                 totalPath.unshift(current);
//             }
//             return totalPath;
//         }

//         // Remover o nó atual do openSet
//         openSet.splice(openSet.indexOf(current), 1);

//         // Avaliar os vizinhos
//         links.forEach(link => {
//             let neighbor = null;
//             if (link.source.id === current.id) {
//                 neighbor = link.target;
//             } else if (link.target.id === current.id) {
//                 neighbor = link.source;
//             }

//             if (neighbor) {
//                 let tentative_gScore = gScore.get(current.id) + heuristic(current, neighbor);

//                 if (tentative_gScore < gScore.get(neighbor.id)) {
//                     // Este caminho é o melhor até agora
//                     cameFrom.set(neighbor.id, current);
//                     gScore.set(neighbor.id, tentative_gScore);
//                     fScore.set(neighbor.id, tentative_gScore + heuristic(neighbor, destination));

//                     // Adiciona o vizinho ao openSet se ainda não estiver lá
//                     if (!openSet.includes(neighbor)) {
//                         openSet.push(neighbor);
//                     }
//                 }
//             }
//         });
//     }

//     // Se não encontrar caminho
//     return [];
// }

// Função para destacar o caminho entre a origem e o destino
function highlightPath() {
    const [origin, destination] = selectedNodes;

    console.log("Origem:", origin);
    console.log("Destino:", destination);

    // Encontra o caminho entre origem e destino usando A*
    const path = aEstrela.aEstrela(origin, destination);

    // Destacar as arestas no caminho
    link
        .style("stroke", d => {
            return path.includes(d.source) && path.includes(d.target) &&
                   Math.abs(path.indexOf(d.source) - path.indexOf(d.target)) === 1
                ? "red"
                : "#999";
        })
        .style("stroke-width", d => {
            return path.includes(d.source) && path.includes(d.target) &&
                   Math.abs(path.indexOf(d.source) - path.indexOf(d.target)) === 1
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
import grafo from "./algoritmos/aestrela.js";
import aEstrela from "./algoritmos/aestrela.js";
import dijkstra from "./algoritmos/dijkstra.js";
import buscaGulosa from "./algoritmos/gulosa.js";

const opcoes = new Map()

const loadNodes = async () => {
    Object.keys(grafo.grafo).forEach(chave => {
        const vertice = grafo.grafo[chave];
        opcoes.set(vertice.nome, vertice);
    });
}
loadNodes();

document.addEventListener("DOMContentLoaded", () => {
    const selectOrigem = document.getElementById("origem");
    const selectDestino = document.getElementById("destino");
    const selectAlgoritmo = document.getElementById("algoritmo");
    const button = document.getElementById("buscar");
    const caminhoDiv = document.getElementById("caminho");
    const custoDiv = document.getElementById("custo");

    opcoes.forEach((_, nome) => {
        const optionOrigem = document.createElement("option");
        optionOrigem.value = nome;
        optionOrigem.textContent = nome;
        selectOrigem.appendChild(optionOrigem);

        const optionDestino = document.createElement("option");
        optionDestino.value = nome;
        optionDestino.textContent = nome;
        selectDestino.appendChild(optionDestino);
    });

    function mostrarCaminho(caminho) {
        caminhoDiv.textContent = caminho.totalCaminho.map(v => v.nome).join(" ➡️ ");
        custoDiv.innerHTML = `Custo: <div class="text-blue-800"> ${caminho.totalCusto}m</div>`
    }

    button.addEventListener("click", () => {
        const origem = opcoes.get(selectOrigem.value)
        const destino = opcoes.get(selectDestino.value)
        const algoritmo = selectAlgoritmo.value;
        let caminho = [];

        if (algoritmo === "a") {
            caminho = aEstrela.aEstrela(origem, destino)
        } else if (algoritmo === "g") {
            caminho = buscaGulosa(origem, destino);
            console.log(caminho);
        } else if (algoritmo === "d") {
            caminho = dijkstra.buscar(origem, destino);
            console.log(caminho);
        }

        mostrarCaminho(caminho);

    });

});

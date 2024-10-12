class Vertice {
    constructor(rotulo) {
        this.rotulo = rotulo;
        this.visitado = false;
        this.adjacentes = [];
    }

    adicionaAdjacente(adjacente) {
        this.adjacentes.push(adjacente);
    }

    mostraAdjacentes() {
        for (let i in this.adjacentes) {
            console.log(this.adjacentes[i].vertice.rotulo, this.adjacentes[i].custo);
        }
    }
}

class Adjacente {
    constructor(vertice, custo) {
        this.vertice = vertice;
        this.custo = custo;
    }
}

class Grafo {
    constructor() {
        this.arad = new Vertice("arad");
        this.zerind = new Vertice("zerind");
        this.oradea = new Vertice("oradea");
        this.sibiu = new Vertice("sibiu");
        this.timisoara = new Vertice("timisoara");
        this.lugoj = new Vertice("lugoj");
        this.mehadia = new Vertice("mehadia");
        this.dobreta = new Vertice("dobreta");
        this.craiova = new Vertice("craiova");
        this.rimnicu = new Vertice("rimnicu");
        this.fagaras = new Vertice("fagaras");
        this.pitesti = new Vertice("pitesti");
        this.bucharest = new Vertice("bucharest");
        this.giurgiu = new Vertice("giurgiu");

        this.arad.adicionaAdjacente(new Adjacente(this.zerind, 75));
        this.arad.adicionaAdjacente(new Adjacente(this.sibiu, 140));
        this.arad.adicionaAdjacente(new Adjacente(this.timisoara, 118));

        this.zerind.adicionaAdjacente(new Adjacente(this.arad, 75));
        this.zerind.adicionaAdjacente(new Adjacente(this.oradea, 71));

        this.oradea.adicionaAdjacente(new Adjacente(this.zerind, 71));
        this.oradea.adicionaAdjacente(new Adjacente(this.sibiu, 151));

        this.sibiu.adicionaAdjacente(new Adjacente(this.oradea, 151));
        this.sibiu.adicionaAdjacente(new Adjacente(this.arad, 140));
        this.sibiu.adicionaAdjacente(new Adjacente(this.fagaras, 99));
        this.sibiu.adicionaAdjacente(new Adjacente(this.rimnicu, 80));

        this.timisoara.adicionaAdjacente(new Adjacente(this.arad, 118));
        this.timisoara.adicionaAdjacente(new Adjacente(this.lugoj, 111));

        this.lugoj.adicionaAdjacente(new Adjacente(this.timisoara, 111));
        this.lugoj.adicionaAdjacente(new Adjacente(this.mehadia, 70));

        this.mehadia.adicionaAdjacente(new Adjacente(this.lugoj, 70));
        this.mehadia.adicionaAdjacente(new Adjacente(this.dobreta, 75));

        this.dobreta.adicionaAdjacente(new Adjacente(this.mehadia, 75));
        this.dobreta.adicionaAdjacente(new Adjacente(this.craiova, 120));

        this.craiova.adicionaAdjacente(new Adjacente(this.dobreta, 120));
        this.craiova.adicionaAdjacente(new Adjacente(this.pitesti, 138));
        this.craiova.adicionaAdjacente(new Adjacente(this.rimnicu, 146));

        this.rimnicu.adicionaAdjacente(new Adjacente(this.craiova, 146));
        this.rimnicu.adicionaAdjacente(new Adjacente(this.sibiu, 80));
        this.rimnicu.adicionaAdjacente(new Adjacente(this.pitesti, 97));

        this.fagaras.adicionaAdjacente(new Adjacente(this.sibiu, 99));
        this.fagaras.adicionaAdjacente(new Adjacente(this.bucharest, 211));

        this.pitesti.adicionaAdjacente(new Adjacente(this.rimnicu, 97));
        this.pitesti.adicionaAdjacente(new Adjacente(this.craiova, 138));
        this.pitesti.adicionaAdjacente(new Adjacente(this.bucharest, 101));

        this.bucharest.adicionaAdjacente(new Adjacente(this.fagaras, 211));
        this.bucharest.adicionaAdjacente(new Adjacente(this.pitesti, 101));
        this.bucharest.adicionaAdjacente(new Adjacente(this.giurgiu, 90));
    }
}


class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this.bubbleUp();
    }

    pop() {
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return top;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][0] >= this.heap[parentIndex][0]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[0] < element[0]) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[0] < element[0]) ||
                    (swap !== null && rightChild[0] < leftChild[0])
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class Dijkstra {
    constructor(grafo) {
        this.grafo = grafo;
    }

    buscar(comeco, fim){
        let heap = new PriorityQueue()
        heap.push([0, comeco])
        let visitados = new Set()
        let predecesoores = new Map()
        let custos = new Map();
        custos.set(comeco, 0)

        while(!heap.isEmpty()){
            const [custo, vertice] = heap.pop()
            if(visitados.has(vertice)) continue

            visitados.add(vertice)

            if(vertice === fim){
                return {caminho: this.caminho(predecesoores, fim), custo}
            } 

            for(const adjcente of vertice.adjacentes){
                const vizinho = adjcente.vertice
                const c = adjcente.custo
                if(visitados.has(vizinho)) continue

                const novoCusto = custo + c
                if(novoCusto < (custos.get(vizinho) || Infinity)){
                    custos.set(vizinho, novoCusto)
                    predecesoores.set(vizinho, vertice)
                    heap.push([custo + c, vizinho])
                }
            }
        }
        return -1
    }

    caminho(predecesoores, fim){
        let caminho = []
        let atual = fim
        while(atual){
            caminho.push(atual.rotulo)
            atual = predecesoores.get(atual)
        }
        return caminho.reverse().join(' - ')
    }
}

const grafo = new Grafo()

const dijkstra = new Dijkstra(grafo)
console.log(dijkstra.buscar(grafo.arad, grafo.bucharest))
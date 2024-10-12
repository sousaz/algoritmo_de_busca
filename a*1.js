class Vertice {
  constructor(rotulo, distanciaObjetivo) {
    this.rotulo = rotulo;
    this.distanciaObjetivo = distanciaObjetivo;
    this.visitado = false;
    this.adjacentes = [];
  }

  adicionaAdjacente(adjacente) {
    this.adjacentes.push(adjacente);
  }

  mostraAdjacentes(){
    for(let i in this.adjacentes){
      console.log(this.adjacentes[i].vertice.rotulo, this.adjacentes[i].custo);
    }
  }
}

class Adjacente {
  constructor(vertice, custo) {
    this.vertice = vertice;
    this.custo = custo;
    this.distanciaAEstrela = this.vertice.distanciaObjetivo + this.custo;
  }
}

class Grafo {
    constructor() {
        this.arad = new Vertice("arad", 360);
        this.zerind = new Vertice("zerind", 374);
        this.oradea = new Vertice("oradea", 380);
        this.sibiu = new Vertice("sibiu", 253);
        this.timisoara = new Vertice("timisoara", 329);
        this.lugoj = new Vertice("lugoj", 244);
        this.mehadia = new Vertice("mehadia", 241);
        this.dobreta = new Vertice("dobreta", 242);
        this.craiova = new Vertice("craiova", 160);
        this.rimnicu = new Vertice("rimnicu", 193);
        this.fagaras = new Vertice("fagaras", 178);
        this.pitesti = new Vertice("pitesti", 98);
        this.bucharest = new Vertice("bucharest", 0);
        this.giurgiu = new Vertice("giurgiu", 77);

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

class VetorOrdenado{
    constructor(capacidade){
        this.capacidade = capacidade;
        this.ultimaPosicao = -1;
        this.valores = new Array(this.capacidade);
    }

    inserir(adjacente){
        if(this.ultimaPosicao === this.capacidade - 1){
            console.log("Capacidade máxima atingida");
            return
        }
        let posicao = 0
        for(let i = 0; i <= this.ultimaPosicao; i++){
            posicao = i
            if(this.valores[i].distanciaAEstrela > adjacente.distanciaAEstrela) break

            if(i === this.ultimaPosicao) posicao = i + 1
        }
        let x = this.ultimaPosicao
        while(x >= posicao){
            this.valores[x + 1] = this.valores[x]
            x--
        }
        this.valores[posicao] = adjacente
        this.ultimaPosicao++
    }

    imprimir(){
        if(this.ultimaPosicao === -1) console.log("Vetor vazio")
        else{
            for(let i = 0; i <= this.ultimaPosicao; i++){
                console.log(i, " - ", this.valores[i].vertice.rotulo, " - ",
                    this.valores[i].custo, " - ",
                    this.valores[i].vertice.distanciaObjetivo, " - ",
                    this.valores[i].distanciaAEstrela
                )
            }
        }
    }
}

class AEstrela{
    constructor(objetivo){
        this.objetivo = objetivo
        this.encontrado = false
    }

    buscar(atual){
        console.log("--------------------------------")
        console.log("Atual: ", atual.rotulo)
        atual.visitado = true

        if(atual === this.objetivo) this.encontrado = true
        else{
            let vo = new VetorOrdenado(atual.adjacentes.length)
            for(let i in atual.adjacentes){
                if(atual.adjacentes[i].vertice.visitado === false){
                    atual.adjacentes[i].vertice.visitado = true
                    vo.inserir(atual.adjacentes[i])
                }
            }
            vo.imprimir()

            if(vo.valores[0] != null){
                this.buscar(vo.valores[0].vertice)
            }
        }
    }
}

const grafo = new Grafo()

const aEstrela = new AEstrela(grafo.bucharest)
aEstrela.buscar(grafo.arad)
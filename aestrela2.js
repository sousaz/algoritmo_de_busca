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
    constructor(vertice, custo, dificuldade = 0.9) {
        this.vertice = vertice;
        this.custo = custo;
        this.distanciaAEstrela = this.custo * dificuldade;
    }
}

class Grafo {
    constructor() {
        this.sala01 = new Vertice("Sala 01");
        this.sala02 = new Vertice("Sala 02");
        this.escada01 = new Vertice("Escada 01");
        this.escada02 = new Vertice("Escada 02");
        this.sala03 = new Vertice("Sala 03");

        this.sala01.adicionaAdjacente(new Adjacente(this.sala02, 10));
        this.sala01.adicionaAdjacente(new Adjacente(this.escada01, 20));

        this.sala02.adicionaAdjacente(new Adjacente(this.sala01, 10));
        this.sala02.adicionaAdjacente(new Adjacente(this.escada02, 20));

        this.escada01.adicionaAdjacente(new Adjacente(this.sala01, 20));
        this.escada01.adicionaAdjacente(new Adjacente(this.sala03, 10));

        this.escada02.adicionaAdjacente(new Adjacente(this.sala02, 20));
        // this.escada02.adicionaAdjacente(new Adjacente(this.sala03, 10));

        this.sala03.adicionaAdjacente(new Adjacente(this.escada01, 10));
        this.sala03.adicionaAdjacente(new Adjacente(this.escada02, 10));
    }
}

class VetorOrdenado {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.ultimaPosicao = -1;
        this.valores = new Array(this.capacidade);
    }

    inserir(adjacente) {
        if (this.ultimaPosicao === this.capacidade - 1) {
            console.log("Capacidade máxima atingida");
            return
        }
        let posicao = 0
        for (let i = 0; i <= this.ultimaPosicao; i++) {
            posicao = i
            if (this.valores[i].distanciaAEstrela > adjacente.distanciaAEstrela) break

            if (i === this.ultimaPosicao) posicao = i + 1
        }
        let x = this.ultimaPosicao
        while (x >= posicao) {
            this.valores[x + 1] = this.valores[x]
            x--
        }
        this.valores[posicao] = adjacente
        this.ultimaPosicao++
    }

    imprimir() {
        if (this.ultimaPosicao === -1) console.log("Vetor vazio")
        else {
            for (let i = 0; i <= this.ultimaPosicao; i++) {
                console.log(i, " - ", this.valores[i].vertice.rotulo, " - ",
                    this.valores[i].custo, " - ",
                    this.valores[i].distanciaAEstrela
                )
            }
        }
    }
}

class AEstrela {
    constructor(objetivo) {
        this.objetivo = objetivo
        this.encontrado = false
    }

    buscar(atual) {
        console.log("--------------------------------")
        console.log("Atual: ", atual.rotulo)
        atual.visitado = true

        if (atual === this.objetivo) this.encontrado = true
        else {
            let vo = new VetorOrdenado(atual.adjacentes.length)
            for (let i in atual.adjacentes) {
                if (atual.adjacentes[i].vertice.visitado === false) {
                    atual.adjacentes[i].vertice.visitado = true
                    vo.inserir(atual.adjacentes[i])
                }
            }
            vo.imprimir()

            if (vo.valores[0] != null) {
                this.buscar(vo.valores[0].vertice)
            }
        }
    }
}

const grafo = new Grafo()

const aEstrela = new AEstrela(grafo.sala03)
aEstrela.buscar(grafo.sala01)

class Vertice {
    constructor(rotulo, x, y) {
        this.rotulo = rotulo;
        this.x = x;
        this.y = y;
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

    heuristica(objetivo) {
        return Math.abs(this.x - objetivo.x) + Math.abs(this.y - objetivo.y);
    }
}

class Adjacente {
    constructor(vertice, custo) {
        this.vertice = vertice;
        this.custo = custo;
        this.distanciaAEstrela = 0;
    }

    calcularDistanciaAEstrela(objetivo) {
        this.distanciaAEstrela = this.custo + this.vertice.heuristica(objetivo);
    }
}

class Grafo {
    constructor() {
        this.blocof = new Vertice("Bloco F", 23, 16);
        this.f09 = new Vertice("F09", 21, 15);
        this.escada = new Vertice("Escada", 25, 17);
        this.blocoe = new Vertice("Bloco E", 31, 16);
        this.e08 = new Vertice("E08", 29, 14);

        this.blocof.adicionaAdjacente(new Adjacente(this.f09, 2));
        this.blocof.adicionaAdjacente(new Adjacente(this.escada, 4));

        this.f09.adicionaAdjacente(new Adjacente(this.blocof, 2));

        this.escada.adicionaAdjacente(new Adjacente(this.blocof, 4));
        this.escada.adicionaAdjacente(new Adjacente(this.blocoe, 8));

        this.blocoe.adicionaAdjacente(new Adjacente(this.escada, 4));
        this.blocoe.adicionaAdjacente(new Adjacente(this.e08, 2));

        this.e08.adicionaAdjacente(new Adjacente(this.blocoe, 2));
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
            return;
        }
        let posicao = 0;
        for (let i = 0; i <= this.ultimaPosicao; i++) {
            posicao = i;
            if (this.valores[i].distanciaAEstrela > adjacente.distanciaAEstrela) break;

            if (i === this.ultimaPosicao) posicao = i + 1;
        }
        let x = this.ultimaPosicao;
        while (x >= posicao) {
            this.valores[x + 1] = this.valores[x];
            x--;
        }
        this.valores[posicao] = adjacente;
        this.ultimaPosicao++;
    }

    imprimir(aEstrela) {
        if (this.ultimaPosicao === -1) console.log("Vetor vazio");
        else {
            for (let i = 0; i <= this.ultimaPosicao; i++) {
                console.log(
                    this.valores[i].vertice.rotulo,
                    " - ",
                    this.valores[i].custo,
                    " - ",
                    this.valores[i].distanciaAEstrela
                );
            }

            console.log("Custo total até o momento: ", aEstrela.custoTotal);
        }
    }

    pegar() {
        if (this.ultimaPosicao === -1) return null;
        return this.valores;
    }
}

class AEstrela {
    constructor(objetivo) {
        this.objetivo = objetivo;
        this.encontrado = false;
        this.custoTotal = 0;
        this.caminho = [];
    }

    buscar(atual) {
        // console.log("--------------------------------");
        // console.log("Atual: ", atual.rotulo);
        atual.visitado = true;
        this.caminho.push(atual.rotulo);

        if (atual === this.objetivo) {
            this.encontrado = true;
            return { caminho: this.caminho, custoTotal: this.custoTotal };
        } else {
            let vo = new VetorOrdenado(atual.adjacentes.length);
            for (let i in atual.adjacentes) {
                if (atual.adjacentes[i].vertice.visitado === false) {
                    atual.adjacentes[i].vertice.visitado = true;
                    atual.adjacentes[i].calcularDistanciaAEstrela(this.objetivo);
                    vo.inserir(atual.adjacentes[i]);
                }
            }
            // vo.imprimir(this);

            if (vo.valores[0] != null) {
                this.custoTotal += vo.valores[0].custo;
                return this.buscar(vo.valores[0].vertice);
            }
        }
        return null
    }
}

const grafo = new Grafo();

const aEstrela = new AEstrela(grafo.e08);
const res = aEstrela.buscar(grafo.f09);

// console.log(res)
res.caminho.forEach((caminho) => {
    console.log(caminho);
})
console.log("Custo total: ", res.custoTotal);

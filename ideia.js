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
        return Math.sqrt(Math.pow(this.x - objetivo.x, 2) + Math.pow(this.y - objetivo.y, 2));
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
        this.estacionamento1 = new Vertice("Estacionamento aberto direito", -27.02663806683797, -51.14560902532833);
        this.guarita = new Vertice("Guarita", -27.026564, -51.145827);
        this.administracao = new Vertice("Administracao", -27.026616295257014, -51.145333626448696);
        this.pedagogico = new Vertice("Pedagogico", -27.02700555458725, -51.14496477139793);
        this.morro1 = new Vertice("Morro direita", -27.027155870877557, -51.145131983547394);
        this.copa = new Vertice("Copa", -27.027304557972506, -51.1451148639717);
        this.refeitorio = new Vertice("Refeitorio", -27.02815219775592, -51.14560562515259);
        this.entradaprincipal = new Vertice("Entrada principal", -27.026753929487572, -51.144971904554474);
        this.biblioteca = new Vertice("Biblioteca", -27.02728265474534, -51.144695565939344);


        // adjacentes do estacionamento aberto direito
        this.estacionamento1.adicionaAdjacente(new Adjacente(this.administracao, 36));
        this.estacionamento1.adicionaAdjacente(new Adjacente(this.guarita, 23));

        // adjacentes da guarita
        this.guarita.adicionaAdjacente(new Adjacente(this.estacionamento1, 23));
        this.guarita.adicionaAdjacente(new Adjacente(this.morro1, 96));

        // adjacentes da administracao
        this.administracao.adicionaAdjacente(new Adjacente(this.estacionamento1, 36));
        this.administracao.adicionaAdjacente(new Adjacente(this.pedagogico, 72));
        this.administracao.adicionaAdjacente(new Adjacente(this.entradaprincipal, 68));

        // adjacentes do pedagogico
        this.pedagogico.adicionaAdjacente(new Adjacente(this.administracao, 72));
        this.pedagogico.adicionaAdjacente(new Adjacente(this.entradaprincipal, 28));
        this.pedagogico.adicionaAdjacente(new Adjacente(this.morro1, 39));

        // adjacentes do morro direita
        this.morro1.adicionaAdjacente(new Adjacente(this.pedagogico, 39));
        this.morro1.adicionaAdjacente(new Adjacente(this.guarita, 96));
        this.morro1.adicionaAdjacente(new Adjacente(this.copa, 14));
        this.morro1.adicionaAdjacente(new Adjacente(this.biblioteca, 77));
        this.morro1.adicionaAdjacente(new Adjacente(this.refeitorio, 158));

        // adjacentes da copa
        this.copa.adicionaAdjacente(new Adjacente(this.morro1, 14));

        // adjacentes do refetorio
        this.refeitorio.adicionaAdjacente(new Adjacente(this.morro1, 158));

        // adjacentes da biblioteca
        this.biblioteca.adicionaAdjacente(new Adjacente(this.morro1, 77));

        // adjacentes da entrada principal
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.administracao, 68));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.pedagogico, 28));

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
        // atual.visitado = true;
        this.caminho.push(atual.rotulo);

        if (atual === this.objetivo) {
            this.encontrado = true;
            return { caminho: this.caminho, custoTotal: this.custoTotal };
        } else {
            let vo = new VetorOrdenado(atual.adjacentes.length);
            for (let i in atual.adjacentes) {
                console.log(atual.adjacentes[i].vertice);
                if (atual.adjacentes[i].vertice.visitado === false) {
                    const adj = atual.adjacentes[i];
                    // adj.vertice.visitado = true;
                    adj.calcularDistanciaAEstrela(this.objetivo);
                    vo.inserir(atual.adjacentes[i]);
                }
            }

            if (vo.valores[0] != null) {
                vo.valores[0].vertice.visitado = true;
                this.custoTotal += vo.valores[0].custo;
                return this.buscar(vo.valores[0].vertice);
            }
        }
        return null
    }
}

const grafo = new Grafo();

const aEstrela = new AEstrela(grafo.refeitorio);
const res = aEstrela.buscar(grafo.guarita);

console.log(res)


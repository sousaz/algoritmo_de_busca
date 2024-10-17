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
        this.galpao = new Vertice("Galpão", 0, 0);
        this.saida1 = new Vertice("Saida emergencia Bloco F", 1, 0);
        this.blocof = new Vertice("Bloco F", 2, 0);
        this.f01 = new Vertice("F01", 2, 1);
        this.f02 = new Vertice("F02", 3, 1);
        this.f03 = new Vertice("F03", 4, 1);
        this.f04 = new Vertice("F04", 5, 1);
        this.f05 = new Vertice("F05", 2, 0);
        this.f06 = new Vertice("F06", 3, 0);
        this.f07 = new Vertice("F07", 4, 0);
        this.f08 = new Vertice("F08", 5, 0);
        this.f09 = new Vertice("F09", 6, 0);
        this.f10 = new Vertice("F10 - Datacenter", 7, 0);
        this.escada1 = new Vertice("Escada central", 8, 0);
        this.escada2 = new Vertice("Escada na esquerda", 8, 1);
        this.ap1 = new Vertice("Area publica na parte esquerda", 9, 1);
        this.ap2 = new Vertice("Area publica na parte central", 9, 0);
        this.banheiroF = new Vertice("Banheiro do bloco F", 10, 0);
        this.blocod = new Vertice("Bloco D", 11, 0);
        this.d01 = new Vertice("D01", 10, 1);
        this.d02 = new Vertice("D02", 11, 1);
        this.d03 = new Vertice("D03", 12, 1);
        this.d04 = new Vertice("D04", 13, 1);
        this.d05 = new Vertice("D05", 10, 0);
        this.d06 = new Vertice("D06", 11, 0);
        this.d07 = new Vertice("D07", 12, 0);
        this.d08 = new Vertice("D08", 13, 0);
        this.banheirod = new Vertice("Banheiro do bloco D", 14, 0);
        this.elevador = new Vertice("Elevador", 15, 0);
        this.blocob = new Vertice("Bloco B", 16, 0);
        this.b01 = new Vertice("B01", 15, 1);
        this.b02 = new Vertice("B02", 16, 1);
        this.b03 = new Vertice("mini auditorio", 17, 1);
        this.b03s = new Vertice("mini auditorio saida", 17, 1);
        this.b04 = new Vertice("B04", 18, 1);
        this.b05 = new Vertice("B05", 15, 0);
        this.b06 = new Vertice("B06", 16, 0);
        this.b07 = new Vertice("B07", 17, 0);
        this.banheirob = new Vertice("Banheiro do bloco B", 18, 0);
        this.blocoa = new Vertice("Bloco A", 19, 0);
        this.a01 = new Vertice("A01", 18, 1);
        this.a02 = new Vertice("A02", 19, 1);
        this.a03 = new Vertice("A03", 20, 1);
        this.a04 = new Vertice("A04", 21, 1);
        this.a05 = new Vertice("A05", 18, 0);
        this.a06 = new Vertice("A06", 19, 0);
        this.a07 = new Vertice("A07", 20, 0);
        this.a08 = new Vertice("A08", 21, 0);
        this.banheiroa = new Vertice("Banheiro do bloco A", 22, 0);
        this.sba = new Vertice("Saida bloco A", 23, 0);
        this.almoxarifado = new Vertice("Almoxarifado", 24, 0);
        this.rampa1 = new Vertice("Rampa 1", 25, 0);
        this.estacionamento1 = new Vertice("Estacionamento aberto direito", 26, 0);
        this.estacionamento2 = new Vertice("Estacionamento aberto esquerdo", 26, 0);
        this.estacionamento3 = new Vertice("Estacionamento coberto", 27, 0);
        this.guarita = new Vertice("Guarita", 28, 0);
        this.administracao = new Vertice("Administracao", 29, 0);
        this.pedagogico = new Vertice("Pedagogico", 30, 0);
        this.m01 = new Vertice("M01", 29, 1);
        this.m02 = new Vertice("M02", 30, 1);
        this.m03 = new Vertice("M03", 31, 1);
        this.m04 = new Vertice("M04", 32, 1);
        this.m05 = new Vertice("M05", 29, 0);
        this.m06 = new Vertice("M06", 30, 0);
        this.m07 = new Vertice("M07", 31, 0);
        this.m08 = new Vertice("M08", 32, 0);
        this.m09 = new Vertice("M09", 33, 0);
        this.m10 = new Vertice("M10", 34, 0);
        this.m11 = new Vertice("M11", 35, 0);
        this.m12 = new Vertice("M12", 36, 0);
        this.m13 = new Vertice("M13", 37, 0);
        this.m14 = new Vertice("M14", 38, 0);
        this.m15 = new Vertice("M15", 39, 0);
        this.m16 = new Vertice("M16", 40, 0);
        this.m17 = new Vertice("M17", 41, 0);
        this.m18 = new Vertice("M18", 42, 0);
        this.m19 = new Vertice("M19", 43, 0);
        this.m20 = new Vertice("M20", 44, 0);
        this.m21 = new Vertice("M21", 45, 0);
        this.m22 = new Vertice("M22", 46, 0);
        this.banheirom = new Vertice("Banheiro do bloco M", 47, 0);
        this.sbm = new Vertice("Saida bloco M", 48, 0);
        this.morro1 = new Vertice("Morro direita", 49, 0);
        this.copa = new Vertice("Copa", 50, 0);
        this.biblioteca = new Vertice("Biblioteca", 51, 0);
        this.k01 = new Vertice("K01", 50, 1);
        this.k02 = new Vertice("K02", 51, 1);
        this.k03 = new Vertice("K03", 52, 1);
        this.computadores = new Vertice("Sala de computadores", 53, 1);
        this.banheirobf = new Vertice("Banheiro feminio biblioteca", 50, 0);
        this.banheiromb = new Vertice("Banheiro masculino biblioteca", 51, 0);
        this.areaestudo = new Vertice("Area de estudo", 54, 0);
        this.auditorio = new Vertice("Auditorio", 55, 0);
        this.morro2 = new Vertice("Morro esquerda", 56, 0);
        this.blocoh = new Vertice("Bloco H", 57, 0);
        this.h01 = new Vertice("H01", 56, 1);
        this.h02 = new Vertice("H02", 57, 1);
        this.h03 = new Vertice("H03", 58, 1);
        this.h04 = new Vertice("H04", 59, 1);
        this.h05 = new Vertice("H05", 56, 0);
        this.h06 = new Vertice("H06", 57, 0);
        this.h07 = new Vertice("H07", 58, 0);
        this.h08 = new Vertice("H08", 59, 0);
        this.h09 = new Vertice("H09", 60, 0);
        this.h10 = new Vertice("H10", 61, 0);
        this.banheiroh = new Vertice("Banheiro do bloco H", 62, 0);
        this.refeitorio = new Vertice("Refeitorio", 63, 0);
        this.academia = new Vertice("Academia", 64, 0);
        this.ginasio = new Vertice("Ginásio", 65, 0);

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

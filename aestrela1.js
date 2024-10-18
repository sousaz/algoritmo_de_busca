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
        this.galpao = new Vertice("Galpão", 22, 2);
        this.saida1 = new Vertice("Saida emergencia Bloco F", 22, 6);
        this.blocof = new Vertice("Bloco F", 23, 11);
        this.f01 = new Vertice("F01", 25, 14);
        this.f02 = new Vertice("F02", 25, 12);
        this.f03 = new Vertice("F03", 25, 10);
        this.f04 = new Vertice("F04", 25, 8);
        this.f05 = new Vertice("F05", 21, 8);
        this.f06 = new Vertice("F06", 21, 10);
        this.f07 = new Vertice("F07", 21, 12);
        this.f08 = new Vertice("F08", 21, 14);
        this.f09 = new Vertice("F09", 21, 15);
        this.f10 = new Vertice("F10 - Datacenter", 21, 19);
        this.escada1 = new Vertice("Escada central", 23, 36);
        this.escada2 = new Vertice("Escada na esquerda", 27, 17);
        this.ap1 = new Vertice("Area publica na parte esquerda", 25, 19);
        this.ap2 = new Vertice("Area publica na parte central", 20, 30);
        this.banheirof = new Vertice("Banheiro do bloco F", 21, 17);
        this.blocod = new Vertice("Bloco D", 23, 24);
        this.d01 = new Vertice("D01", 25, 29);
        this.d02 = new Vertice("D02", 25, 27);
        this.d03 = new Vertice("D03", 25, 25);
        this.d04 = new Vertice("D04", 25, 23);
        this.d05 = new Vertice("D05", 25, 21 );
        this.d06 = new Vertice("D06", 21, 21);
        this.d07 = new Vertice("D07", 21, 23);
        this.d08 = new Vertice("D08", 21, 25);
        this.banheirod = new Vertice("Banheiro do bloco D", 21, 27);
        this.elevador = new Vertice("Elevador", 21, 38);
        this.blocob = new Vertice("Bloco B", 13, 37);
        this.b01 = new Vertice("B01", 12, 35);
        this.b02 = new Vertice("B02", 10, 35);
        this.b03 = new Vertice("mini auditorio", 8, 37);
        this.b03s = new Vertice("mini auditorio saida", 4, 37);
        this.b04 = new Vertice("B04", 10, 39);
        this.b05 = new Vertice("B05", 12, 39);
        this.b06 = new Vertice("B06", 14, 39);
        this.b07 = new Vertice("B07", 16, 39);
        this.banheirob = new Vertice("Banheiro do bloco B", 14, 35);
        this.blocoa = new Vertice("Bloco A", 13, 44);
        this.a01 = new Vertice("A01", 14, 42);
        this.a02 = new Vertice("A02", 12, 42);
        this.a03 = new Vertice("A03", 10, 42);
        this.a04 = new Vertice("A04", 10, 46);
        this.a05 = new Vertice("A05", 12, 46);
        this.a06 = new Vertice("A06", 14, 46);
        this.a07 = new Vertice("A07", 16, 46);
        this.a08 = new Vertice("A08", 17, 46);
        this.banheiroa = new Vertice("Banheiro do bloco A", 16, 42);
        this.sba = new Vertice("Saida bloco A", 8, 44);
        this.almoxarifado = new Vertice("Almoxarifado", 37, 10);
        this.rampae = new Vertice("Rampa esquerda", 40, 22);
        this.estacionamento1 = new Vertice("Estacionamento aberto direito", 47, 64);
        this.estacionamento2 = new Vertice("Estacionamento aberto esquerdo", 47, 39);
        this.estacionamento3 = new Vertice("Estacionamento coberto", 57, 31);
        this.guarita = new Vertice("Guarita", 55, 70);
        this.administracao = new Vertice("Administracao", 42, 47);
        this.pedagogico = new Vertice("Pedagogico", 15, 59);
        this.m01 = new Vertice("M01", 16, 61);
        this.m02 = new Vertice("M02", 16, 63);
        this.m03 = new Vertice("M03", 16, 64);
        this.m04 = new Vertice("M04", 15, 65);
        this.m05 = new Vertice("M05", 14, 64);
        this.m06 = new Vertice("M06", 13, 64);
        this.m07 = new Vertice("M07", 12, 64);
        this.m08 = new Vertice("M08", 11, 64);
        this.m09 = new Vertice("M09", 10, 64);
        this.m10 = new Vertice("M10", 10, 62);
        this.m11 = new Vertice("M11", 11, 62);
        this.m12 = new Vertice("M12", 12, 62);
        this.m13 = new Vertice("M13", 13, 62);
        this.m14 = new Vertice("M14", 14, 62);
        this.m15 = new Vertice("M15", 14, 61);
        this.m16 = new Vertice("M16", 14, 60);
        this.m17 = new Vertice("M17", 7, 64);
        this.m18 = new Vertice("M18", 6, 64); 
        this.m19 = new Vertice("M19", 6, 62);
        this.m20 = new Vertice("M20", 7, 62);
        this.m21 = new Vertice("M21", 8, 61);
        this.m22 = new Vertice("M22", 9, 62);
        this.banheirom = new Vertice("Banheiro do bloco M", 9, 64);
        this.sbm = new Vertice("Saida bloco M", 8, 65);
        this.morro1 = new Vertice("Morro direita", 13, 68);
        this.copa = new Vertice("Copa", 12, 71);
        this.biblioteca = new Vertice("Biblioteca", 4, 54);
        this.k01 = new Vertice("K01", 5, 57);
        this.k02 = new Vertice("K02", 5, 51);
        this.k03 = new Vertice("K03", 7, 57);
        this.computadores = new Vertice("Sala de computadores", 7, 51);
        this.banheirobf = new Vertice("Banheiro feminino biblioteca", 9, 51);
        this.banheiromb = new Vertice("Banheiro masculino biblioteca", 9, 57);
        this.areaestudo = new Vertice("Area de estudo", 10, 54);
        this.auditorio = new Vertice("Auditorio", 4, 27);
        this.morro2 = new Vertice("Morro esquerda", 8, 21);
        this.blocoh = new Vertice("Bloco H", 9, 18);
        this.h01 = new Vertice("H01", 12, 17);
        this.h02 = new Vertice("H02", 12, 15);
        this.h03 = new Vertice("H03", 12, 13);
        this.h04 = new Vertice("H04", 11, 12);
        this.h05 = new Vertice("H05", 9, 12);
        this.h06 = new Vertice("H06", 7, 12);
        this.h07 = new Vertice("H07", 6, 14);
        this.h08 = new Vertice("H08", 6, 16);
        this.h09 = new Vertice("H09", 4, 14);
        this.h10 = new Vertice("H10", 4, 16);
        this.banheiroh = new Vertice("Banheiro do bloco H", 5, 12);
        this.refeitorio = new Vertice("Refeitorio", 4, 98);
        this.academia = new Vertice("Academia", 20, 110);
        this.ginasio = new Vertice("Ginásio", 24, 113);
        this.blocoe = new Vertice("Bloco E", 31, 11);
        this.e01 = new Vertice("E01", 33, 14);
        this.e02 = new Vertice("E02", 33, 12);
        this.e03 = new Vertice("E03", 33, 10);
        this.e04 = new Vertice("E04", 33, 8);
        this.e05 = new Vertice("E05", 29, 8);
        this.e06 = new Vertice("E06", 29, 10);
        this.e07 = new Vertice("E07", 29, 12);
        this.e08 = new Vertice("E08", 29, 14);
        this.banheiroe = new Vertice("Banheiro do bloco E", 29, 17);
        this.entradae = new Vertice("Entrada bloco E", 33, 19);
        this.saidae = new Vertice("Saida bloco E", 29, 19);
        this.blococ = new Vertice("Bloco C", 31, 24);
        this.c01 = new Vertice("C01 - reprografia", 33, 29);
        this.c02 = new Vertice("C02 - cozinha", 33, 27);
        this.c03 = new Vertice("C03", 33, 25);
        this.c04 = new Vertice("C04", 33, 23);
        this.c05 = new Vertice("C05", 33, 21);
        this.c06 = new Vertice("C06", 29, 21);
        this.c07 = new Vertice("C07", 29, 23);
        this.c08 = new Vertice("C08", 29, 25);
        this.c09 = new Vertice("C09", 29, 29 );
        this.banheiroc = new Vertice("Banheiro do bloco C", 29, 27);
        this.entradaprincipal = new Vertice("Entrada principal", 28, 39);
        this.saidaprincipal = new Vertice("Saida principal", 24, 38);
        this.escadaentre = new Vertice("Escada entre blocos", 7, 48);

        // adajcentes do galpão
        this.galpao.adicionaAdjacente(new Adjacente(this.blocoh, 96));
        this.galpao.adicionaAdjacente(new Adjacente(this.saidae, 86));
        this.galpao.adicionaAdjacente(new Adjacente(this.saida1, 40));
        this.galpao.adicionaAdjacente(new Adjacente(this.almoxarifado, 50));

        // adjacentes do almoxarifado
        this.almoxarifado.adicionaAdjacente(new Adjacente(this.galpao, 50));
        this.almoxarifado.adicionaAdjacente(new Adjacente(this.saida1, 30));
        this.almoxarifado.adicionaAdjacente(new Adjacente(this.estacionamento3, 50));

        // adjacentes da saida emergencia bloco f
        // falta fazer por dentro
        this.saida1.adicionaAdjacente(new Adjacente(this.galpao, 40));
        this.saida1.adicionaAdjacente(new Adjacente(this.almoxarifado, 30));

        // adjacentes do estacionamento coberto
        this.estacionamento3.adicionaAdjacente(new Adjacente(this.almoxarifado, 50));
        this.estacionamento3.adicionaAdjacente(new Adjacente(this.estacionamento2, 5));
        this.estacionamento3.adicionaAdjacente(new Adjacente(this.rampae, 20));

        // adjacentes do estacionamento aberto esquerdo
        this.estacionamento2.adicionaAdjacente(new Adjacente(this.estacionamento3, 5));
        this.estacionamento2.adicionaAdjacente(new Adjacente(this.rampae, 15));
        this.estacionamento2.adicionaAdjacente(new Adjacente(this.estacionamento1, 40));
        this.estacionamento2.adicionaAdjacente(new Adjacente(this.administracao, 30));

        // adjacentes do estacionamento aberto direito
        this.estacionamento1.adicionaAdjacente(new Adjacente(this.estacionamento2, 40));
        this.estacionamento1.adicionaAdjacente(new Adjacente(this.administracao, 15));
        this.estacionamento1.adicionaAdjacente(new Adjacente(this.guarita, 10));

        // adjacentes da guarita
        this.guarita.adicionaAdjacente(new Adjacente(this.estacionamento1, 10));
        this.guarita.adicionaAdjacente(new Adjacente(this.morro2, 65));

        // adjacentes da administracao
        this.administracao.adicionaAdjacente(new Adjacente(this.estacionamento2, 30));
        this.administracao.adicionaAdjacente(new Adjacente(this.estacionamento1, 15));
        this.administracao.adicionaAdjacente(new Adjacente(this.pedagogico, 50));
        this.administracao.adicionaAdjacente(new Adjacente(this.entradaprincipal, 34));

        // adjacentes do pedagogico
        //falta a parte de dentro
        this.pedagogico.adicionaAdjacente(new Adjacente(this.administracao, 50));
        this.pedagogico.adicionaAdjacente(new Adjacente(this.entradaprincipal, 42));
        this.pedagogico.adicionaAdjacente(new Adjacente(this.escadaentre, 13));
        this.pedagogico.adicionaAdjacente(new Adjacente(this.morro2, 11));

        // adjacentes do morro direita
        this.morro2.adicionaAdjacente(new Adjacente(this.pedagogico, 11));
        this.morro2.adicionaAdjacente(new Adjacente(this.guarita, 65));
        this.morro2.adicionaAdjacente(new Adjacente(this.copa, 11));
        this.morro2.adicionaAdjacente(new Adjacente(this.sbm, 5));
        this.morro2.adicionaAdjacente(new Adjacente(this.biblioteca, 30));
        this.morro2.adicionaAdjacente(new Adjacente(this.refeitorio, 93));

        // adjacentes da copa
        this.copa.adicionaAdjacente(new Adjacente(this.morro2, 11));

        // adjacentes do refetorio
        this.refeitorio.adicionaAdjacente(new Adjacente(this.morro2, 93));
        this.refeitorio.adicionaAdjacente(new Adjacente(this.academia, 42));

        // adjacentes da academia
        this.academia.adicionaAdjacente(new Adjacente(this.refeitorio, 42));
        this.academia.adicionaAdjacente(new Adjacente(this.ginasio, 7));

        // adjacentes do ginasio
        this.ginasio.adicionaAdjacente(new Adjacente(this.academia, 7));

        // adjacentes da biblioteca
        //falta parte de dentro
        this.biblioteca.adicionaAdjacente(new Adjacente(this.morro2, 30));
        this.biblioteca.adicionaAdjacente(new Adjacente(this.escadaentre, 10));
        this.biblioteca.adicionaAdjacente(new Adjacente(this.b03s, 12));

        // adjacentes da escada entre blocos
        this.escadaentre.adicionaAdjacente(new Adjacente(this.biblioteca, 10));
        this.escadaentre.adicionaAdjacente(new Adjacente(this.pedagogico, 13));
        this.escadaentre.adicionaAdjacente(new Adjacente(this.sbc, 8));
        this.escadaentre.adicionaAdjacente(new Adjacente(this.b03s, 20));

        // adjacentes da saida do mini auditorio
        //falta fazer por dentro
        this.b03s.adicionaAdjacente(new Adjacente(this.biblioteca, 12));
        this.b03s.adicionaAdjacente(new Adjacente(this.escadaentre, 20));
        this.b03s.adicionaAdjacente(new Adjacente(this.auditorio, 12));

        // adjacentes do auditorio
        this.auditorio.adicionaAdjacente(new Adjacente(this.b03s, 12));
        this.auditorio.adicionaAdjacente(new Adjacente(this.morro1, 12));

        // adjacentes do morro esquerda
        this.morro1.adicionaAdjacente(new Adjacente(this.auditorio, 12));
        this.morro1.adicionaAdjacente(new Adjacente(this.blocoh, 5));

        // adjacentes do bloco H
        // falta fazer por dentro
        this.blocoh.adicionaAdjacente(new Adjacente(this.morro1, 5));
        this.blocoh.adicionaAdjacente(new Adjacente(this.galpao, 96));
        this.blocoh.adicionaAdjacente(new Adjacente(this.saidae, 10));
        this.blocoh.adicionaAdjacente(new Adjacente(this.saidaprincipal, 45));

        // adjacentes da saida principal
        this.saidaprincipal.adicionaAdjacente(new Adjacente(this.blocoh, 45));
        this.saidaprincipal.adicionaAdjacente(new Adjacente(this.entradaprincipal, 24));
        this.saidaprincipal.adicionaAdjacente(new Adjacente(this.saidae, 56));

        // adjacentes da entrada principal
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.saidaprincipal, 24));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.administracao, 34));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.pedagogico, 42));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.rampae, 30));

        // adjacentes da rampa esquerda
        this.rampae.adicionaAdjacente(new Adjacente(this.estacionamento3, 20));
        this.rampae.adicionaAdjacente(new Adjacente(this.estacionamento2, 15));
        this.rampae.adicionaAdjacente(new Adjacente(this.entradaprincipal, 30));
        this.rampae.adicionaAdjacente(new Adjacente(this.entradae, 20));

        // adjacentes da entrada bloco E
        // falta fazer por dentro
        this.entradae.adicionaAdjacente(new Adjacente(this.rampae, 20));
        this.entradae.adicionaAdjacente(new Adjacente(this.saidae, 18));

        // adjacentes da saida bloco E
        // falta fazer por dentro
        this.saidae.adicionaAdjacente(new Adjacente(this.entradae, 18));
        this.saidae.adicionaAdjacente(new Adjacente(this.galpao, 86));
        this.saidae.adicionaAdjacente(new Adjacente(this.saidaprincipal, 56));
        this.saidae.adicionaAdjacente(new Adjacente(this.blocoh, 10));

        // adjacentes da saida de emergencia bloco F
        // falta fazer por dentro
        this.saida1.adicionaAdjacente(new Adjacente(this.galpao, 40));
        this.saida1.adicionaAdjacente(new Adjacente(this.almoxarifado, 30));

        // adjacentes da saida do bloco A
        this.sba.adicionaAdjacente(new Adjacente(this.escadaentre, 8));

        // adjacentes saida do bloco M
        this.sbm.adicionaAdjacente(new Adjacente(this.morro2, 5));




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

const aEstrela = new AEstrela(grafo.entradaprincipal);
const res = aEstrela.buscar(grafo.guarita);

// console.log(res)
res.caminho.forEach((caminho) => {
    console.log(caminho);
})
console.log("Custo total: ", res.custoTotal);

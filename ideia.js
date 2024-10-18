class Vertice {
    constructor(rotulo, x, y) {
        this.rotulo = rotulo;
        this.x = (x * 110_000);
        this.y = (y * 110_000 * Math.cos(((x * 110_000) * (Math.PI / 180))));
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
        this.galpao = new Vertice("Galpão", -27.02590280477437, -51.14375765250265);
        this.sbf = new Vertice("Saida de emergencia do bloco F", -27.026029956919142, -51.14421776701581);
        this.almoxarifado = new Vertice("Almoxarifado", -27.026084291753943, -51.14445217070017);
        this.estacioamentocoberto = new Vertice("Estacionamento coberto", -27.026145606376335, -51.14511264457188);
        this.estacionamentoesquerda = new Vertice("Estacionamento parte esquerda", -27.02626985041974, -51.145181040909726);
        this.estacionamentodireita = new Vertice("Estacionamento parte direita", -27.026637803114337, -51.14560617103235);
        this.guarita = new Vertice("Guarita", -27.026564, -51.145827);
        this.administracao = new Vertice("Administracao", -27.026616295257014, -51.145333626448696);
        this.rampae = new Vertice("Rampa esquerda", -27.026340334957855, -51.14501742616217);
        this.entradae = new Vertice("Entrada bloco E", -27.02627821299441, -51.144664715681884);
        this.pedagogico = new Vertice("Pedagogico", -27.02700555458725, -51.14496477139793);
        this.morro1 = new Vertice("Morro direita", -27.027155870877557, -51.145131983547394);
        this.copa = new Vertice("Copa", -27.027304557972506, -51.1451148639717);
        this.refeitorio = new Vertice("Refeitorio", -27.02815219775592, -51.14560562515259);
        this.entradaprincipal = new Vertice("Entrada principal", -27.026753929487572, -51.144971904554474);
        this.biblioteca = new Vertice("Biblioteca", -27.02728265474534, -51.144695565939344);
        this.sbm = new Vertice("Saida do bloco M", -27.027231542436404, -51.14496713473651);
        this.escadaentre = new Vertice("Escada entre blocos", -27.027164291010124, -51.14462420439472);
        this.sb03 = new Vertice("Saida mini auditorio 03", -27.027067065689327, -51.144514538657226);
        this.auditorio = new Vertice("Auditorio", -27.026940354371916, -51.144190218662686);
        this.morro2 = new Vertice("Morro esquerda", -27.026729168520205, -51.14415133818872);
        this.blocoh = new Vertice("Bloco H", -27.026556001821813, -51.144173626784834);
        this.sbe = new Vertice("Saida bloco E", -27.026426008891647, -51.14450535579341);
        this.saidaprincipal = new Vertice("Saida principal", -27.02672861514435, -51.14473102721073);
        this.academia = new Vertice("Academia", -27.02800836138837, -51.14631058951586);
        this.sba = new Vertice("Saida bloco A", -27.027094081204723, -51.14451275165327);
        this.ginasio = new Vertice("Ginasio", -27.027954815487057, -51.14651783775598);
        this.h01 = new Vertice("H01", -27.02649045191663, -51.144287075427);
        this.h02 = new Vertice("H02", -27.02644483562465, -51.14424155683089);
        this.h03 = new Vertice("H03", -27.026405977287236, -51.14419603823478);
        this.h04 = new Vertice("H04", -27.026427940696987, -51.14415431285502);
        this.h05 = new Vertice("H05", -27.026463420042138, -51.144106897650744);
        this.h06 = new Vertice("H06", -27.026529310224802, -51.144013963850355);
        this.banheiroh = new Vertice("Banheiro do bloco H", -27.02653775768132, -51.14392861648266);
        this.h07 = new Vertice("H07", -27.026581684445002, -51.14402344689122);
        this.h08 = new Vertice("H08", -27.026639127110045, -51.144086034960864);
        this.h09 = new Vertice("H09", -27.026581684445002, -51.14402344689122);
        this.h10 = new Vertice("H10", -27.026639127110045, -51.144086034960864);
        this.blocoe = new Vertice("Bloco E", -27.026200890388267, -51.14444872963042);
        this.e01 = new Vertice("E01", -27.02621406051128, -51.14455670155904);
        this.e02 = new Vertice("E02", -27.02613581063681, -51.14449232854308);
        this.e03 = new Vertice("E03", -27.026082648477242, -51.14442460276588);
        this.e04 = new Vertice("E04", -27.02600678782397, -51.14435017146619);
        this.e05 = new Vertice("E05", -27.026101165639076, -51.144224107643495);
        this.e06 = new Vertice("E06", -27.02615731442682, -51.14428445734595);
        this.e07 = new Vertice("E07", -27.026233174978433, -51.14436157085465);
        this.e08 = new Vertice("E08", -27.026291713006863, -51.144423932213854);
        this.banheiroe = new Vertice("Banheiro do bloco E", -27.026368170793955, -51.144491657991054);
        this.blococ = new Vertice("Bloco C", -27.02649481088289, -51.14474372856489);
        this.c01 = new Vertice("C01 - reprografia", -27.02653901296748, -51.14491740159752);
        this.c02 = new Vertice("C02 - cozinha", -27.02650138146413, -51.1448671101788);
        this.c03 = new Vertice("C03", -27.026445830174247, -51.14482486538708);
        this.c04 = new Vertice("C04", -27.026388486878435, -51.14476786844587);
        this.c05 = new Vertice("C05", -27.026330546226898, -51.14470684819117);
        this.c06 = new Vertice("C06", -27.026445232848396, -51.14456737332327);
        this.c07 = new Vertice("C07", -27.02650197878968, -51.14461766474197);
        this.c08 = new Vertice("C08", -27.026561114003254, -51.144684719966925);
        this.banheiroc = new Vertice("Banheiro do bloco C", -27.026612483961483, -51.14473635249014);
        this.c09 = new Vertice("C09 - onde pegava as chaves", -27.026672813766158, -51.14479200832685);
        this.blocoa = new Vertice("Bloco A", -27.02680901085835, -51.14484144135482);
        this.a01 = new Vertice("A01", -27.026862229691307, -51.144653677145875);
        this.a02 = new Vertice("A02", -27.026868987636547, -51.14465178053771);
        this.a03 = new Vertice("A03", -27.02692558541194, -51.144574019602686);
        this.a04 = new Vertice("A04", -27.027112273397275, -51.14462522802359);
        this.a05 = new Vertice("A05", -27.02705652045767, -51.14469540252592);
        this.a06 = new Vertice("A06", -27.02699738852178, -51.14477411176502);
        this.a07 = new Vertice("A07", -27.026961909345307, -51.14483669983466);
        this.a08 = new Vertice("A08", -27.026903622102495, -51.144901184512484);
        this.banheiroa = new Vertice("Banheiro do bloco A", -27.026807321371177, -51.144729541472714);
        this.blocob = new Vertice("Bloco B", -27.02680901085835, -51.14484144135482);
        this.b01 = new Vertice("B01", -27.0269053115882, -51.14460910685413);
        this.b02 = new Vertice("B02", -27.026940790782554, -51.1445654848662);
        this.b03 = new Vertice("B03 - mini auditorio", -27.026999078006092, -51.1446176415909);
        this.b04 = new Vertice("B04", -27.02706834684111, -51.144686867789154);
        this.b05 = new Vertice("B05", -27.027025265009723, -51.14474661094654);
        this.b06 = new Vertice("B06", -27.026952617178193, -51.144843337963266);
        this.b07 = new Vertice("B07", -27.026901087873853, -51.144908770945165);
        this.banheirob = new Vertice("Banheiro do bloco B", -27.02684280059946, -51.144694454221835);
        this.blocod = new Vertice("Bloco D", -27.02649481088289, -51.14474372856489);
        this.d01 = new Vertice("D01", -27.02653901296748, -51.14491740159752);
        this.d02 = new Vertice("D02", -27.02650138146413, -51.1448671101788);
        this.d03 = new Vertice("D03", -27.026445830174247, -51.14482486538708);
        this.d04 = new Vertice("D04", -27.026388486878435, -51.14476786844587);
        this.d05 = new Vertice("D05", -27.026330546226898, -51.14470684819117);
        this.d06 = new Vertice("D06", -27.026445232848396, -51.14456737332327);
        this.d07 = new Vertice("D07", -27.02650197878968, -51.14461766474197);
        this.d08 = new Vertice("D08", -27.026561114003254, -51.144684719966925);
        this.banheirod = new Vertice("Banheiro do bloco D", -27.026612483961483, -51.14473635249014);
        this.blocof = new Vertice("Bloco F", -27.026310827456236, -51.144558713215794);
        this.f01 = new Vertice("F01", -27.02621406051128, -51.14455670155904);
        this.f02 = new Vertice("F02", -27.02613581063681, -51.14449232854308);
        this.f03 = new Vertice("F03", -27.026082648477242, -51.14442460276588);
        this.f04 = new Vertice("F04", -27.02600678782397, -51.14435017146619);
        this.f05 = new Vertice("F05", -27.026101165639076, -51.144224107643495);
        this.f06 = new Vertice("F06", -27.02615731442682, -51.14428445734595);
        this.f07 = new Vertice("F07", -27.026233174978433, -51.14436157085465);
        this.f08 = new Vertice("F08", -27.026291713006863, -51.144423932213854);
        this.f09 = new Vertice("F09 - fabrica de software", -27.02630105757458, -51.14443614697374);
        this.banheirof = new Vertice("Banheiro do bloco F", -27.026368170793955, -51.144491657991054);
        this.escadaprincipal = new Vertice("Escada principal", -27.026723714133993, -51.14489659175099);
        this.escadaesquerda = new Vertice("Escada esquerda", -27.026324896813083, -51.14457180551996);
        this.elevador = new Vertice("Elevador", -27.026793029846264, -51.14481313973304);

        // adjacentes da escada principal
        this.escadaprincipal.adicionaAdjacente(new Adjacente(this.entradaprincipal, 7));
        this.escadaprincipal.adicionaAdjacente(new Adjacente(this.blococ, 30));
        this.escadaprincipal.adicionaAdjacente(new Adjacente(this.blocoa, 10));
        this.escadaprincipal.adicionaAdjacente(new Adjacente(this.elevador, 11));
        this.escadaprincipal.adicionaAdjacente(new Adjacente(this.blocod, 28));

        // adjacentes da escada esquerda
        this.escadaesquerda.adicionaAdjacente(new Adjacente(this.blococ, 24));
        this.escadaesquerda.adicionaAdjacente(new Adjacente(this.blocoe, 2));
        this.escadaesquerda.adicionaAdjacente(new Adjacente(this.blocof, 2));
        this.escadaesquerda.adicionaAdjacente(new Adjacente(this.blocod, 24));
        this.escadaesquerda.adicionaAdjacente(new Adjacente(this.entradae, 11));
        this.escadaesquerda.adicionaAdjacente(new Adjacente(this.sbe, 13));

        // adjacentes do elevador
        this.elevador.adicionaAdjacente(new Adjacente(this.escadaprincipal, 11));
        this.elevador.adicionaAdjacente(new Adjacente(this.blocoa, 4));
        this.elevador.adicionaAdjacente(new Adjacente(this.entradaprincipal, 16));
        this.elevador.adicionaAdjacente(new Adjacente(this.saidaprincipal, 10));
        this.elevador.adicionaAdjacente(new Adjacente(this.blocob, 4));



        // adjacentes do bloco F
        this.blocof.adicionaAdjacente(new Adjacente(this.escadaesquerda, 2));
        this.blocof.adicionaAdjacente(new Adjacente(this.f01, 10));
        this.blocof.adicionaAdjacente(new Adjacente(this.f02, 20));
        this.blocof.adicionaAdjacente(new Adjacente(this.f03, 30));
        this.blocof.adicionaAdjacente(new Adjacente(this.f04, 40));
        this.blocof.adicionaAdjacente(new Adjacente(this.f05, 40));
        this.blocof.adicionaAdjacente(new Adjacente(this.f06, 30));
        this.blocof.adicionaAdjacente(new Adjacente(this.f07, 20));
        this.blocof.adicionaAdjacente(new Adjacente(this.f08, 10));
        this.blocof.adicionaAdjacente(new Adjacente(this.f09, 8));
        this.blocof.adicionaAdjacente(new Adjacente(this.banheirof, 10));
        this.blocof.adicionaAdjacente(new Adjacente(this.sbf, 40));
        this.blocof.adicionaAdjacente(new Adjacente(this.blocod, 27));

        // adjacentes do F01
        this.f01.adicionaAdjacente(new Adjacente(this.blocof, 10));

        // adjacentes do F02
        this.f02.adicionaAdjacente(new Adjacente(this.blocof, 20));

        // adjacentes do F03
        this.f03.adicionaAdjacente(new Adjacente(this.blocof, 30));

        // adjacentes do F04
        this.f04.adicionaAdjacente(new Adjacente(this.blocof, 40));

        // adjacentes do F05
        this.f05.adicionaAdjacente(new Adjacente(this.blocof, 40));

        // adjacentes do F06
        this.f06.adicionaAdjacente(new Adjacente(this.blocof, 30));

        // adjacentes do F07
        this.f07.adicionaAdjacente(new Adjacente(this.blocof, 20));

        // adjacentes do F08
        this.f08.adicionaAdjacente(new Adjacente(this.blocof, 10));

        // adjacentes do F09
        this.f09.adicionaAdjacente(new Adjacente(this.blocof, 8));

        // adjacentes do banheiro do bloco F
        this.banheirof.adicionaAdjacente(new Adjacente(this.blocof, 10));

        // adjacentes do bloco D
        this.blocod.adicionaAdjacente(new Adjacente(this.escadaesquerda, 24));
        this.blocod.adicionaAdjacente(new Adjacente(this.d01, 30));
        this.blocod.adicionaAdjacente(new Adjacente(this.d02, 20));
        this.blocod.adicionaAdjacente(new Adjacente(this.d03, 10));
        this.blocod.adicionaAdjacente(new Adjacente(this.d04, 10));
        this.blocod.adicionaAdjacente(new Adjacente(this.d05, 20));
        this.blocod.adicionaAdjacente(new Adjacente(this.d06, 20));
        this.blocod.adicionaAdjacente(new Adjacente(this.d07, 10));
        this.blocod.adicionaAdjacente(new Adjacente(this.d08, 10));
        this.blocod.adicionaAdjacente(new Adjacente(this.banheirod, 20));
        this.blocod.adicionaAdjacente(new Adjacente(this.blocob, 37));
        this.blocod.adicionaAdjacente(new Adjacente(this.escadaprincipal, 28));

        // adjacentes do D01
        this.d01.adicionaAdjacente(new Adjacente(this.blocod, 30));

        // adjacentes do D02
        this.d02.adicionaAdjacente(new Adjacente(this.blocod, 20));

        // adjacentes do D03
        this.d03.adicionaAdjacente(new Adjacente(this.blocod, 10));

        // adjacentes do D04
        this.d04.adicionaAdjacente(new Adjacente(this.blocod, 10));

        // adjacentes do D05
        this.d05.adicionaAdjacente(new Adjacente(this.blocod, 20));

        // adjacentes do D06
        this.d06.adicionaAdjacente(new Adjacente(this.blocod, 20));

        // adjacentes do D07
        this.d07.adicionaAdjacente(new Adjacente(this.blocod, 10));

        // adjacentes do D08
        this.d08.adicionaAdjacente(new Adjacente(this.blocod, 10));

        // adjacentes do banheiro do bloco D
        this.banheirod.adicionaAdjacente(new Adjacente(this.blocod, 20));

        // adjacentes do bloco B
        this.blocob.adicionaAdjacente(new Adjacente(this.elevador, 4));
        this.blocob.adicionaAdjacente(new Adjacente(this.b01, 20));
        this.blocob.adicionaAdjacente(new Adjacente(this.b02, 30));
        this.blocob.adicionaAdjacente(new Adjacente(this.b03, 40));
        this.blocob.adicionaAdjacente(new Adjacente(this.b04, 30));
        this.blocob.adicionaAdjacente(new Adjacente(this.b05, 20));
        this.blocob.adicionaAdjacente(new Adjacente(this.b06, 10));
        this.blocob.adicionaAdjacente(new Adjacente(this.b07, 5));
        this.blocob.adicionaAdjacente(new Adjacente(this.banheirob, 10));
        this.blocob.adicionaAdjacente(new Adjacente(this.blocod, 37));

        // adjacentes do B01
        this.b01.adicionaAdjacente(new Adjacente(this.blocob, 20));

        // adjacentes do B02
        this.b02.adicionaAdjacente(new Adjacente(this.blocob, 30));

        // adjacentes do B03
        this.b03.adicionaAdjacente(new Adjacente(this.blocob, 40));
        this.b03.adicionaAdjacente(new Adjacente(this.sb03, 11));

        // adjacentes do B04
        this.b04.adicionaAdjacente(new Adjacente(this.blocob, 30));

        // adjacentes do B05
        this.b05.adicionaAdjacente(new Adjacente(this.blocob, 20));

        // adjacentes do B06
        this.b06.adicionaAdjacente(new Adjacente(this.blocob, 10));

        // adjacentes do B07
        this.b07.adicionaAdjacente(new Adjacente(this.blocob, 5));

        // adjacentes do banheiro do bloco B
        this.banheirob.adicionaAdjacente(new Adjacente(this.blocob, 10));

        // adjacentes do bloco A
        this.blocoa.adicionaAdjacente(new Adjacente(this.elevador, 4));
        this.blocoa.adicionaAdjacente(new Adjacente(this.sba, 41));
        this.blocoa.adicionaAdjacente(new Adjacente(this.a01, 20));
        this.blocoa.adicionaAdjacente(new Adjacente(this.a02, 30));
        this.blocoa.adicionaAdjacente(new Adjacente(this.a03, 40));
        this.blocoa.adicionaAdjacente(new Adjacente(this.a04, 40));
        this.blocoa.adicionaAdjacente(new Adjacente(this.a05, 30));
        this.blocoa.adicionaAdjacente(new Adjacente(this.a06, 20));
        this.blocoa.adicionaAdjacente(new Adjacente(this.a07,12));
        this.blocoa.adicionaAdjacente(new Adjacente(this.a08, 10));
        this.blocoa.adicionaAdjacente(new Adjacente(this.banheiroa, 10));
        this.blocoa.adicionaAdjacente(new Adjacente(this.entradaprincipal, 10));
        this.blocoa.adicionaAdjacente(new Adjacente(this.escadaprincipal, 10));

        // adjacentes do A01
        this.a01.adicionaAdjacente(new Adjacente(this.blocoa, 20));

        // adjacentes do A02
        this.a02.adicionaAdjacente(new Adjacente(this.blocoa, 30));

        // adjacentes do A03
        this.a03.adicionaAdjacente(new Adjacente(this.blocoa, 40));

        // adjacentes do A04
        this.a04.adicionaAdjacente(new Adjacente(this.blocoa, 40));

        // adjacentes do A05
        this.a05.adicionaAdjacente(new Adjacente(this.blocoa, 30));

        // adjacentes do A06
        this.a06.adicionaAdjacente(new Adjacente(this.blocoa, 20));

        // adjacentes do A07
        this.a07.adicionaAdjacente(new Adjacente(this.blocoa, 12));

        // adjacentes do A08
        this.a08.adicionaAdjacente(new Adjacente(this.blocoa, 10));

        // adjacentes do banheiro do bloco A
        this.banheiroa.adicionaAdjacente(new Adjacente(this.blocoa, 10));

        // adjacentes do bloco C
        this.blococ.adicionaAdjacente(new Adjacente(this.escadaesquerda, 24));
        this.blococ.adicionaAdjacente(new Adjacente(this.escadaprincipal, 30));
        this.blococ.adicionaAdjacente(new Adjacente(this.c01, 30));
        this.blococ.adicionaAdjacente(new Adjacente(this.c02, 20));
        this.blococ.adicionaAdjacente(new Adjacente(this.c03, 10));
        this.blococ.adicionaAdjacente(new Adjacente(this.c04, 10));
        this.blococ.adicionaAdjacente(new Adjacente(this.c05, 20));
        this.blococ.adicionaAdjacente(new Adjacente(this.c06, 20));
        this.blococ.adicionaAdjacente(new Adjacente(this.c07, 10));
        this.blococ.adicionaAdjacente(new Adjacente(this.c08, 10));
        this.blococ.adicionaAdjacente(new Adjacente(this.c09, 30));
        this.blococ.adicionaAdjacente(new Adjacente(this.banheiroc, 20));
        this.blococ.adicionaAdjacente(new Adjacente(this.blocoe, 27));
        this.blococ.adicionaAdjacente(new Adjacente(this.sbe, 35));
        this.blococ.adicionaAdjacente(new Adjacente(this.entradae, 32));
        this.blococ.adicionaAdjacente(new Adjacente(this.entradaprincipal, 37)); 

        // adjacentes do C01
        this.c01.adicionaAdjacente(new Adjacente(this.blococ, 30));

        // adjacentes do C02
        this.c02.adicionaAdjacente(new Adjacente(this.blococ, 20));

        // adjacentes do C03
        this.c03.adicionaAdjacente(new Adjacente(this.blococ, 10));

        // adjacentes do C04
        this.c04.adicionaAdjacente(new Adjacente(this.blococ, 10));

        // adjacentes do C05
        this.c05.adicionaAdjacente(new Adjacente(this.blococ, 20));

        // adjacentes do C06
        this.c06.adicionaAdjacente(new Adjacente(this.blococ, 20));
        
        // adjacentes do C07
        this.c07.adicionaAdjacente(new Adjacente(this.blococ, 10));

        // adjacentes do C08
        this.c08.adicionaAdjacente(new Adjacente(this.blococ, 10));

        // adjacentes do C09
        this.c09.adicionaAdjacente(new Adjacente(this.blococ, 30));

        // adjacentes do banheiro do bloco C
        this.banheiroc.adicionaAdjacente(new Adjacente(this.blococ, 20));

        // adjacentes do bloco E
        this.blocoe.adicionaAdjacente(new Adjacente(this.entradae, 11));
        this.blocoe.adicionaAdjacente(new Adjacente(this.sbe, 13));
        this.blocoe.adicionaAdjacente(new Adjacente(this.e01, 10));
        this.blocoe.adicionaAdjacente(new Adjacente(this.e02, 20));
        this.blocoe.adicionaAdjacente(new Adjacente(this.e03, 30));
        this.blocoe.adicionaAdjacente(new Adjacente(this.e04, 40));
        this.blocoe.adicionaAdjacente(new Adjacente(this.e05, 40));
        this.blocoe.adicionaAdjacente(new Adjacente(this.e06, 30));
        this.blocoe.adicionaAdjacente(new Adjacente(this.e07, 20));
        this.blocoe.adicionaAdjacente(new Adjacente(this.e08, 10));
        this.blocoe.adicionaAdjacente(new Adjacente(this.banheiroe, 10));
        this.blocoe.adicionaAdjacente(new Adjacente(this.blococ, 27));
        this.blocoe.adicionaAdjacente(new Adjacente(this.escadaesquerda, 2));

        // adjacentes do banheiro do bloco E
        this.banheiroe.adicionaAdjacente(new Adjacente(this.blocoe, 10));

        // adjacentes do E01
        this.e01.adicionaAdjacente(new Adjacente(this.blocoe, 10));

        // adjacentes do E02
        this.e02.adicionaAdjacente(new Adjacente(this.blocoe, 20));

        // adjacentes do E03
        this.e03.adicionaAdjacente(new Adjacente(this.blocoe, 30));

        // adjacentes do E04
        this.e04.adicionaAdjacente(new Adjacente(this.blocoe, 40));

        // adjacentes do E05
        this.e05.adicionaAdjacente(new Adjacente(this.blocoe, 40));

        // adjacentes do E06
        this.e06.adicionaAdjacente(new Adjacente(this.blocoe, 30));

        // adjacentes do E07
        this.e07.adicionaAdjacente(new Adjacente(this.blocoe, 20));

        // adjacentes do E08
        this.e08.adicionaAdjacente(new Adjacente(this.blocoe, 10));


        // adjacentes do galpao
        this.galpao.adicionaAdjacente(new Adjacente(this.blocoh, 125));
        this.galpao.adicionaAdjacente(new Adjacente(this.sbe, 95));
        this.galpao.adicionaAdjacente(new Adjacente(this.sbf, 59));
        this.galpao.adicionaAdjacente(new Adjacente(this.almoxarifado, 88));

        // adjacentes do almoxarifado
        this.almoxarifado.adicionaAdjacente(new Adjacente(this.galpao, 88));
        this.almoxarifado.adicionaAdjacente(new Adjacente(this.sbf, 36));
        this.almoxarifado.adicionaAdjacente(new Adjacente(this.estacioamentocoberto, 68));

        // adjacentes da saida emergencia bloco f
        // falta fazer por dentro
        this.sbf.adicionaAdjacente(new Adjacente(this.galpao, 59));
        this.sbf.adicionaAdjacente(new Adjacente(this.almoxarifado, 36));

        // adjacentes do estacionamento coberto
        this.estacioamentocoberto.adicionaAdjacente(new Adjacente(this.almoxarifado, 68));
        this.estacioamentocoberto.adicionaAdjacente(new Adjacente(this.estacionamentoesquerda, 15));
        this.estacioamentocoberto.adicionaAdjacente(new Adjacente(this.rampae, 23));

        // adjacentes do estacionamento aberto esquerdo
        this.estacionamentoesquerda.adicionaAdjacente(new Adjacente(this.estacioamentocoberto, 15));
        this.estacionamentoesquerda.adicionaAdjacente(new Adjacente(this.rampae, 19));
        this.estacionamentoesquerda.adicionaAdjacente(new Adjacente(this.estacionamentodireita, 58));
        this.estacionamentoesquerda.adicionaAdjacente(new Adjacente(this.administracao, 46));

        // adjacentes do estacionamento aberto direito
        this.estacionamentodireita.adicionaAdjacente(new Adjacente(this.administracao, 36));
        this.estacionamentodireita.adicionaAdjacente(new Adjacente(this.guarita, 23));
        this.estacionamentodireita.adicionaAdjacente(new Adjacente(this.estacionamentoesquerda, 58));

        // adjacentes da guarita
        this.guarita.adicionaAdjacente(new Adjacente(this.estacionamentodireita, 23));
        this.guarita.adicionaAdjacente(new Adjacente(this.morro1, 96));

        // adjacentes da administracao
        this.administracao.adicionaAdjacente(new Adjacente(this.estacionamentodireita, 36));
        this.administracao.adicionaAdjacente(new Adjacente(this.pedagogico, 72));
        this.administracao.adicionaAdjacente(new Adjacente(this.entradaprincipal, 68));
        this.administracao.adicionaAdjacente(new Adjacente(this.estacionamentoesquerda, 46));

        // adjacentes do pedagogico
        // falta a parte de dentro
        this.pedagogico.adicionaAdjacente(new Adjacente(this.administracao, 72));
        this.pedagogico.adicionaAdjacente(new Adjacente(this.entradaprincipal, 28));
        this.pedagogico.adicionaAdjacente(new Adjacente(this.morro1, 39));
        this.pedagogico.adicionaAdjacente(new Adjacente(this.escadaentre, 42));

        // adjacentes do morro direita
        this.morro1.adicionaAdjacente(new Adjacente(this.pedagogico, 39));
        this.morro1.adicionaAdjacente(new Adjacente(this.guarita, 96));
        this.morro1.adicionaAdjacente(new Adjacente(this.copa, 14));
        this.morro1.adicionaAdjacente(new Adjacente(this.biblioteca, 77));
        this.morro1.adicionaAdjacente(new Adjacente(this.refeitorio, 158));
        this.morro1.adicionaAdjacente(new Adjacente(this.sbm, 16));

        // adjacentes saida do bloco M
        this.sbm.adicionaAdjacente(new Adjacente(this.morro1, 16));

        // adjacentes da escada entre blocos
        this.escadaentre.adicionaAdjacente(new Adjacente(this.pedagogico, 42));
        this.escadaentre.adicionaAdjacente(new Adjacente(this.sb03, 42));
        this.escadaentre.adicionaAdjacente(new Adjacente(this.biblioteca, 34));
        this.escadaentre.adicionaAdjacente(new Adjacente(this.sba, 14));

        // adjacentes da saida bloco A
        this.sba.adicionaAdjacente(new Adjacente(this.escadaentre, 14));
        this.sba.adicionaAdjacente(new Adjacente(this.blocoa, 41));

        // adjacentes da saida mini auditorio 03
        this.sb03.adicionaAdjacente(new Adjacente(this.escadaentre, 42));
        this.sb03.adicionaAdjacente(new Adjacente(this.auditorio, 44));
        this.sb03.adicionaAdjacente(new Adjacente(this.biblioteca, 52));
        this.sb03.adicionaAdjacente(new Adjacente(this.b03, 11));

        // adjacentes da copa
        this.copa.adicionaAdjacente(new Adjacente(this.morro1, 14));

        // adjacentes do refetorio
        this.refeitorio.adicionaAdjacente(new Adjacente(this.morro1, 158));
        this.refeitorio.adicionaAdjacente(new Adjacente(this.academia, 75));

        // adjacentes da academia
        this.academia.adicionaAdjacente(new Adjacente(this.refeitorio, 75));
        this.academia.adicionaAdjacente(new Adjacente(this.ginasio, 25));

        // adjacentes do ginasio
        this.ginasio.adicionaAdjacente(new Adjacente(this.academia, 25));

        // adjacentes da biblioteca
        this.biblioteca.adicionaAdjacente(new Adjacente(this.morro1, 77));
        this.biblioteca.adicionaAdjacente(new Adjacente(this.escadaentre, 34));
        this.biblioteca.adicionaAdjacente(new Adjacente(this.sb03, 52));

        // adjacentes da entrada principal
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.elevador, 16));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.administracao, 68));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.pedagogico, 28));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.rampae, 52));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.saidaprincipal, 25));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.blococ, 37));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.blocoa, 10));
        this.entradaprincipal.adicionaAdjacente(new Adjacente(this.escadaprincipal, 7));

        // adjacentes da saida principal
        this.saidaprincipal.adicionaAdjacente(new Adjacente(this.entradaprincipal, 25));
        this.saidaprincipal.adicionaAdjacente(new Adjacente(this.sbe, 56));
        this.saidaprincipal.adicionaAdjacente(new Adjacente(this.blocoh, 58));
        this.saidaprincipal.adicionaAdjacente(new Adjacente(this.elevador, 10));

        // adjacentes do bloco H
        this.blocoh.adicionaAdjacente(new Adjacente(this.saidaprincipal, 58));
        this.blocoh.adicionaAdjacente(new Adjacente(this.galpao, 125));
        this.blocoh.adicionaAdjacente(new Adjacente(this.sbe, 36));
        this.blocoh.adicionaAdjacente(new Adjacente(this.morro2, 20));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h01, 12));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h02, 13));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h03, 16));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h04, 14));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h05, 12));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h06, 16));
        this.blocoh.adicionaAdjacente(new Adjacente(this.banheiroh, 24));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h07, 15));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h08, 13));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h09, 66));
        this.blocoh.adicionaAdjacente(new Adjacente(this.h10, 58));

        // adjacentes do H01
        this.h01.adicionaAdjacente(new Adjacente(this.blocoh, 12));

        // adjacentes do H02
        this.h02.adicionaAdjacente(new Adjacente(this.blocoh, 13));

        // adjacentes do H03
        this.h03.adicionaAdjacente(new Adjacente(this.blocoh, 16));

        // adjacentes do H04
        this.h04.adicionaAdjacente(new Adjacente(this.blocoh, 14));

        // adjacentes do H05
        this.h05.adicionaAdjacente(new Adjacente(this.blocoh, 12)); 

        // adjacentes do H06
        this.h06.adicionaAdjacente(new Adjacente(this.blocoh, 16));

        // adjacentes do banheiro do bloco H
        this.banheiroh.adicionaAdjacente(new Adjacente(this.blocoh, 24));

        // adjacentes do H07
        this.h07.adicionaAdjacente(new Adjacente(this.blocoh, 15));

        // adjacentes do H08
        this.h08.adicionaAdjacente(new Adjacente(this.blocoh, 13));

        // adjacentes do H09
        this.h09.adicionaAdjacente(new Adjacente(this.blocoh, 66));

        // adjacentes do H10
        this.h10.adicionaAdjacente(new Adjacente(this.blocoh, 58));

        // adjacentes do morro esquerda
        this.morro2.adicionaAdjacente(new Adjacente(this.blocoh, 20));
        this.morro2.adicionaAdjacente(new Adjacente(this.auditorio, 42));

        // adjacentes do auditorio
        this.auditorio.adicionaAdjacente(new Adjacente(this.morro2, 42));
        this.auditorio.adicionaAdjacente(new Adjacente(this.sb03, 44));

        // adjacentes da saida bloco E
        // falta fazer por dentro
        this.sbe.adicionaAdjacente(new Adjacente(this.galpao, 95));
        this.sbe.adicionaAdjacente(new Adjacente(this.blocoh, 36));
        this.sbe.adicionaAdjacente(new Adjacente(this.saidaprincipal, 56));
        this.sbe.adicionaAdjacente(new Adjacente(this.entradae, 23));
        this.sbe.adicionaAdjacente(new Adjacente(this.blocoe, 13));
        this.sbe.adicionaAdjacente(new Adjacente(this.blococ, 35));
        this.sbe.adicionaAdjacente(new Adjacente(this.escadaesquerda, 13));

        // adjacentes da entrada bloco E
        // falta fazer por dentro
        this.entradae.adicionaAdjacente(new Adjacente(this.sbe, 23));
        this.entradae.adicionaAdjacente(new Adjacente(this.rampae, 44));
        this.entradae.adicionaAdjacente(new Adjacente(this.blocoe, 11));
        this.entradae.adicionaAdjacente(new Adjacente(this.blococ, 32));
        this.entradae.adicionaAdjacente(new Adjacente(this.escadaesquerda, 11));

        // adjacentes da rampa esquerda
        this.rampae.adicionaAdjacente(new Adjacente(this.entradae, 44));
        this.rampae.adicionaAdjacente(new Adjacente(this.estacioamentocoberto, 23));
        this.rampae.adicionaAdjacente(new Adjacente(this.entradaprincipal, 52));
        this.rampae.adicionaAdjacente(new Adjacente(this.estacionamentoesquerda, 19));

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
                    " - ",
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
        console.log("atual: ", atual.rotulo);
        atual.visitado = true;
        this.caminho.push(atual.rotulo);

        if (atual === this.objetivo) {
            this.encontrado = true;
            return { caminho: this.caminho, custoTotal: this.custoTotal };
        } else {
            let vo = new VetorOrdenado(atual.adjacentes.length);
            for (let i in atual.adjacentes) {
                // console.log(atual.adjacentes[i].vertice);
                if (atual.adjacentes[i].vertice.visitado === false) {
                    const adj = atual.adjacentes[i];
                    adj.vertice.visitado = true;
                    adj.calcularDistanciaAEstrela(this.objetivo);
                    vo.inserir(atual.adjacentes[i]);
                }
            }
            vo.imprimir(this);

            if (vo.valores[0] != null) {
                // vo.valores[0].vertice.visitado = true;
                this.custoTotal += vo.valores[0].custo;
                return this.buscar(vo.valores[0].vertice);
            }
        }
        return null
    }
}

const grafo = new Grafo();

const aEstrela = new AEstrela(grafo.d04);
const res = aEstrela.buscar(grafo.f01);

console.log(res)


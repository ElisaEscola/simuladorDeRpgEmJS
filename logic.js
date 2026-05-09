let nomeP = "Porca Filomena";
let vidaP = 10;
let ataqueP = 2;

let nomeF = "Fazendeiro Manoel";
let vidaF = 10;
let ataqueF = 2;

console.log(" A BATALHA COMEÇOU! ");
console.log(`${nomeP} vs ${nomeF}\n---------------------------`);

function realizarAtaque(atacante, alvoNome, vidaAlvo, dano) {
    // Probabilidade de ataque crítico
    let chanceCritico = Math.floor(Math.random() * 100) + 1;

    // crítico =  20% de chance
    if (chanceCritico <= 20) {
        dano *= 2;
        console.log("ATAQUE CRÍTICO!!!");
    }

    let novaVida = vidaAlvo - dano;
    
    //Evita que a vida de qualquer um fique negativa ;)
    if (novaVida < 0) {
        novaVida = 0
    };

    console.log(`${atacante} atacou ${alvoNome} e causou ${dano} de dano!`);
    console.log(`Vida atual de ${alvoNome}: ${novaVida}`);
    console.log("---------------------------");

    return novaVida; // Retorna o valor para usar no loop.
}

// bora fazer a cura pq a esquiva é bem mais complicado. :)
function curar(personagem, vida) {

    vida += 1;

    console.log(`${personagem} comeu o milho premium!`);
    console.log(`Recuperou 3 de vida!`);
    console.log(`Vida atual: ${vida}`);
    console.log("----------------");

    return vida;
}

// probabilidade das ações!!
function acao(){

        let numero = Math.floor(Math.random() * 100) + 1;

        if(numero <= 70){
            return "Atacar";
        } else{
            return "Cura";
        }
}
//Loop

 while (vidaP > 0 && vidaF > 0) {

    // TURNO DA PORCA
    let acaoP = acao();

    if(acaoP === "Atacar"){

        vidaF = realizarAtaque(
            nomeP,
            nomeF,
            vidaF,
            ataqueP
        );
    }

    else{

        vidaP = curar(nomeP, vidaP);
    }

    // Verifica derrota
    if (vidaF <= 0) {

        console.log(` ${nomeF} foi massacrado!`);
        console.log(`${nomeP} conseguiu sair viva da batalha, e foge da fazenda com seus filhotinhos, mas ao atravessarem a rua foram todos atropelados e morrerram!`);

        break;
    }

    // TURNO DO FAZENDEIRO
    let acaoF = acao();

    if(acaoF === "Atacar"){

        vidaP = realizarAtaque(
            nomeF,
            nomeP,
            vidaP,
            ataqueF
        );
    }

    else{

        vidaF = curar(nomeF, vidaF);
    }

    // Verifica derrota
    if (vidaP <= 0) {

        console.log(` ${nomeP} foi finalizada!`);
        console.log(`${nomeF} limpou a porca e fez um belo almoço para a família que passava fome a dias`);

        break;
    }
}
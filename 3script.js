let nomeP = "porco";
let vidaP = 20;
let ataqueP = 2;

let nomeF = "fazendeiro Manoel";
let vidaF = 20;
let ataqueF = 2;

while (vidaP > 0 & vidaF > 0) {
    console.log(`${nomeP} ataca ${nomeF} causando ${ataqueP} de dano!`);
    vidaF -= ataqueP;

    if (vidaF <= 0) {
        console.log(`--- ${nomeF} foi derrotado! A vitória é de ${nomeP}! ---`);
        break;
    }
    if (vidaF <= 0) {
        console.log(`--- ${nomeF} foi derrotado! A vitória é de ${nomeP}! ---`);
        break;
    }
    console.log(`${nomeF} contra-ataca ${nomeP} causando ${ataqueF} de dano!`);
    vidaP -= ataqueF;
    if (vidaP <= 0) {
        console.log(`--- ${nomeP} caiu em batalha... O fazendeiro Manoel venceu. ---`);
        break;
    }
};


function acaoDoTurno(){
    let numeroSortido = Math.floor(Math.random() * 100) + 1;
    if (numeroSortido <= 50){
        return "Ataca!!"

    }
    else if (numeroSortido <= 75){
        return "Cura";
    }
    else { 
        return "Esquiva";
    }
}

let porquinho = {
    nome : "Filomena",
    vida : 30,
    decidirAcao(){
        let acao = acaoDoTurno();
        if(acao === "Ataca!!"){
            console.log("Filomena está atacando!")

        }
        else if (acao === "Cura"){
            this.vida += 5;
            console.log("Filomena está usando cura")
        }
        else {
            console.log("Filomena está esquivando")
        }

    }

}
porquinho.decidirAcao();


let fazendeiro = {
    nome : "Manuel",
    vida : 30,
    decidirAcao(){
        let acao = acaoDoTurno();
        if(acao === "Ataca!!"){
            console.log("Manoel está atacando!")

        }
        else if (acao === "Cura"){
            this.vida += 5;
            console.log("Manoel está usando cura")
        }
        else {
            console.log("Manoel está esquivando")
        }

    }

}
fazendeiro.decidirAcao();

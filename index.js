function partidas(vitorias, derrotas){
    let resultado = vitorias - derrotas;
    return resultado;
}

function rank(){
    let resultadopartidas = partidas(1200,20)
    let nivel = ""
    if (resultadopartidas <=10){
        nivel = "Ferro"
    }else if (resultadopartidas <=20){
        nivel = "Bronze"
    }else if(resultadopartidas <= 50){
        nivel = "Prata"
    }else if (resultadopartidas <= 80){
        nivel = "Ouro"
    }else if (resultadopartidas <= 90){
        nivel = "Diamante"
    }else if(resultadopartidas  <= 100){
        nivel = "Lendario"
    }else if (resultadopartidas >= 100){
        nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${resultadopartidas} e está no nível de ${nivel}`
}

console.log(rank())
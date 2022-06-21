let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

/*Agora vamos imprimir pra ver se funciona e incluir value no input html, pois se não inserir o valor sera mostrado somente os elementos*/

/*console.log(inputAdultos.value, inputCrianças.value, inputDuracao.value);*/

/*Alem dos inputs anteriores preciso chamar o resultado*/

let resultado = document.getElementById("resultado");

/*tbem precio criar uma função para o botão calcular e lincar no html o evento onclick...e quando eu clicar no botão sera mostrado em console: calculando...*/

/*Agora na function Calcular vou chamar os inputs com seu valor para que o botao calcular comece a fazer os calculos de tudo o que gente precisa  */

function Calcular(){

    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let crianças = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao)*adultos+(carnePP(duracao)/2*crianças);
    let qtdTotalCerveja = cervejaPP(duracao)*adultos;
    let qtdTotalBebidas = bebidasPP(duracao)*adultos+(bebidasPP(duracao)/2*crianças);

    /*console.log(qtdTotalCarne);*/
    /*aqui embaixo vou colocar o resultado...Math.ceil arredonda o numero p/cima */

    resultado.innerHTML =`<p>${qtdTotalCarne/1000} kg de carne</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qtdTotalCerveja/355)} Latas de cerveja</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qtdTotalBebidas/2000)} Garrafas de 2l de refri</p>`

}

/*No entanto, tais valores não atendem os valores acima de 6h, logo precio criar outra função*/

/*Agora passo a funcao carnePP() em let qtdTotalCarne, mas antes vou chamar a referencia "duracao" na function calcular()*/

function carnePP(duracao){

    if (duracao >=6){return 650;}
    else{return 400;}
}

function cervejaPP(duracao){

    if(duracao >=6){return 2000;}
    else{return 1200;}
}

function bebidasPP(duracao){

    if(duracao >=6){return 1500;}
    else{return 1000;}
}
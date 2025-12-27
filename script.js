function somatorio(){

//entrada de dados
let altura = document.getElementById("altura").value;
let peso = document.getElementById("peso").value;

//processameento
let somaImc=peso/(altura*altura);
//saida e dados


if((somaImc => 18.5)&&(somaImc<25.0)){
     document.getElementById("saida").textContent="Peso normal: "+somaImc;
}else{
    document.getElementById("saida").textContent="Sobrepeso: "+somaImc;
}
if(somaImc<18.5){
    document.getElementById("saida").textContent="Abaixo do peso: "+somaImc; 
}
}

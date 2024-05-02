const temFome = prompt("Você está com fome? (sim/nao)")
const temDinheiro = prompt("Voce tem Dinheiro? (sim/nao)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/nao)")

if (temFome === "nao" || temDinheiro == "nao") {
    console.log("Hoje a janta será em casa")
} else if (temDinheiro === "sim" && restauranteAberto === "sim"){
    console.log("Hoje a janta será no restaurante!");
} else{
    console.log("Peça um delivery")
}
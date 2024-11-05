let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria (){
let palavras = ["Fera", "PERNA","BID","FERAXIS"];
return random(palavras);
} 


function inicializaCores(){

  background("purple");
  fill("white");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1 , palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto , 200, 200);
  
 /* if(mouseX < 50){
    let palavra = "F";
    text(palavra,200,200)
  } else if(mouseX < 100){
    let palavra ="Fe";
    text(palavra,200,200)
 } else if (mouseX < 150){
 let palavra = "Fer";
   text(palavra, 200, 200);
} else if (mouseX < 200){
 let palavra = "Fera";
   text(palavra, 200, 200);
}*/

}

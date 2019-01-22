let sprite = 180
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
//création d'un tableau réduit pour pouvoir placer les éléments avec une taille de sprite précis.
// test sans fonctionnement en objet, on a donc du basique, il faudra créer un fichier texte ou une base de données (préférence fichier texte) pour les données
  background(51);
  for(i=0;i<8;i++){
    for(g=0;g<4;g++){
      if (!(g == 0 & i != 0 & i != 7)){
      square(i*sprite + 10*i + 200, g*sprite + 10*g + 100, sprite);
      //affichage d'un element
      textSize(60);
      textFont('Georgia');
      text("EL", i*sprite + 10*i + 255, g*sprite + 10*g + 220);
      //affichage numero atomique
      textSize(20);
      text("N°A", i*sprite + 10*i + 210, g*sprite + 10*g + 130);
      //affichage masse molaire
      textSize(20);
      text("M-El", i*sprite + 10*i + 325, g*sprite + 10*g + 130);
      textSize(15);
      text("nom element", i*sprite + 10*i + 250, g*sprite + 10*g + 260);
    }

    }
  }
}

//
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

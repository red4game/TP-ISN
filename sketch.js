let maballe;
var deltaX=2;
var deltaY=0.5;
 
function setup() {
  // put setup code here
    createCanvas(640, 480);
    maballe=new Balle(200,100); 
   }

function draw() {
  // put drawing code here
  background(0);
// affichage à l'écran de  l'instance créée
  activer();
}

function activer(){
    maballe.afficher();
    maballe.deplacer();
    maballe.rebondir();
    maballe.gravite();
}

class Balle
{ // constructeur des données constituant l'objet
  // ces données sont nommées "propriétés"
  	 constructor(xent,yent){
        this.x=xent;
  	    this.y=yent;
    }
  // déclaration de fonctions internes à 
  // l'objet, elles sont nommées "méthodes"
  	afficher()
	{
        fill(255);
        ellipse(this.x,this.y,20,20);
  	}
    deplacer(){
        this.x=this.x+deltaX;
        this.y=this.y+deltaY;        
    }
    rebondir(){
        if(this.x<=10 ||this.x>=width-10){deltaX=-deltaX;
        }
        if(this.y<=10 ||this.y>=height-10){deltaY=-deltaY;
        }
    }
    gravite(){deltaY+=0.2;}
 }

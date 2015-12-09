'use strict';

var MixTourTestCase = TestCase("MixTourTestCase");
var monPlateau =  new Plateau();

MixTourTestCase.prototype.testInitPlateau = function() {
    console.log("");
    console.log(" --- INIT PLATEAU ---");
    monPlateau.init();

    ///// Paramètre la couleur du joueur Soit W:Blanc ou B:Bleu
    monPlateau.setColorPlayer("W");

    console.log("Le joueur en cour est :"+monPlateau.getPlayerProgress());

    console.log("Pion sur le plateau ? : "+monPlateau.pionOnPlateau());
    monPlateau.addPion(0, 0, "G");//1

    monPlateau.addPion(0, 4, "L");//1
    monPlateau.addPion(1, 4, "F");//1
    monPlateau.addPion(2, 4, "V");//1
    monPlateau.addPion(3, 4, "W");//1

   // monPlateau.movePions(0,0,1,0,4);//Départ en (0;0) on prend les pions à partir de la hauteur 2 et on les déplacenet en (0;1)
    monPlateau.movePions(3,4,1,0,4)
    monPlateau.movePions(2,4,1,0,4)
    monPlateau.movePions(1,4,1,0,4)

    monPlateau.checkMovePion(0,0,0,4);
};

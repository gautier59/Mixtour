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
    monPlateau.addPion(0, 0, "W");//1
    monPlateau.addPion(0, 0, "H");//2
    monPlateau.addPion(0, 0, "W");//3
    monPlateau.addPion(0, 1, "B");
    monPlateau.addPion(1, 2, "W");
    monPlateau.addPion(4, 2, "W");
    monPlateau.addPion(4, 2, "W");
    monPlateau.viewListPionPlateau();


    monPlateau.viewListPionPosition(1,2);

    console.log("");
    console.log(" --- CELLS EMPTY ---");
    monPlateau.getCellEmpty(); // On recupère les celulles vides
    monPlateau.movePions(0,0,2,0,1)//Départ en (0;0) on prend les pions à partir de la hauteur 2 et on les déplacenet en (0;1)
    monPlateau.viewListPionPosition(0,1);
    monPlateau.viewListPionPosition(0,0);
};
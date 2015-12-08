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
    monPlateau.addPion(0, 2, monPlateau.getPlayerProgress());
    monPlateau.addPion(0, 2, monPlateau.getPlayerProgress());
    monPlateau.addPion(2, 2, monPlateau.getPlayerProgress());
    monPlateau.addPion(3, 2, monPlateau.getPlayerProgress());

    monPlateau.viewListPionPosition(1,2);

    console.log("");
    console.log(" --- CELLS EMPTY ---");
    monPlateau.getCellEmpty(); // On recupère les celulles vides
};
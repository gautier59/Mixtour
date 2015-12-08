'use strict';

var MixTourTestCase = TestCase("MixTourTestCase");
var monPlateau =  new Plateau();

MixTourTestCase.prototype.testInitPlateau = function() {
    console.log("");
    console.log(" --- INIT PLATEAU ---");
    monPlateau.init();

    ///// Paramètre la couleur du joueur Soit W:Blanc ou B:Bleu
    monPlateau.setColorPlayer("W");

    console.log("Pion sur le plateau ? : "+monPlateau.pionOnPlateau());
    monPlateau.addPion(1, 2, "W");
    monPlateau.addPion(1, 2, "B");
    monPlateau.addPion(1, 2, "B");
    monPlateau.addPion(1, 2, "B");
    monPlateau.addPion(1, 2, "W");
    monPlateau.addPion(4, 2, "W");
    monPlateau.addPion(4, 2, "W");
    monPlateau.viewListPionPlateau();

    monPlateau.viewListPionPosition(1,2);

    console.log("");
    console.log(" --- CELLS EMPTY ---");
    monPlateau.getCellEmpty(); // On recupère les celulles vides
};
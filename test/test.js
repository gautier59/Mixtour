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
    monPlateau.addPion(0, 1, "O");//2
    monPlateau.addPion(0, 2, "L");//3
    monPlateau.addPion(0, 3, "F");
    monPlateau.viewListPionPlateau();

    monPlateau.addPion(0, 2, monPlateau.getPlayerProgress());
    console.log(monPlateau.checkHeightTower(0,2));

    monPlateau.addPion(0, 2, monPlateau.getPlayerProgress());
    monPlateau.addPion(2, 2, monPlateau.getPlayerProgress());
    monPlateau.addPion(3, 2, monPlateau.getPlayerProgress());

    console.log(" TEST DELETE ")
    monPlateau.viewListPionPosition(0,2);
    monPlateau.deleteTower(0,2);
    monPlateau.viewListPionPosition(0,2);
    console.log(" FIN TEST DELETE ");

    console.log("");
    console.log(" --- CELLS EMPTY ---");
    monPlateau.getCellEmpty(); // On recupère les celulles vides
    monPlateau.movePions(0,3,1,0,2);//Départ en (0;0) on prend les pions à partir de la hauteur 2 et on les déplacenet en (0;1)
    monPlateau.movePions(0,2,1,0,1);
    monPlateau.movePions(0,1,2,0,0);
    //monPlateau.movePions(0,2,1,0,0);
   // monPlateau.movePions(0,1,1,0,0);
    monPlateau.viewListPionPosition(0,0);
    monPlateau.viewListPionPosition(0,1);

};
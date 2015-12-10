'use strict';

var MixTourTestCase = TestCase("MixTourTestCase");
var monPlateau =  new Plateau();

MixTourTestCase.prototype.testInitPlateau = function() {
    console.log("");
    console.log(" --- INIT PLATEAU ---");
    monPlateau.init();

    monPlateau.setColorPlayer("W");

    console.log("Le joueur en cour est :"+monPlateau.getPlayerProgress());

    console.log("Pion sur le plateau ? : "+monPlateau.pionOnPlateau());

    console.log(" TEST DELETE ");
    monPlateau.viewListPionPosition(0,0);
    console.log(monPlateau.getPlayerProgress());
    monPlateau.addPion(0,0,monPlateau.getPlayerProgress());//
    monPlateau.addPion(0,1,monPlateau.getPlayerProgress());
    monPlateau.addPion(0,2,monPlateau.getPlayerProgress());
    monPlateau.movePions(0,2,1,0,1);
    monPlateau.movePions(0,1,1,0,0);
    monPlateau.viewListPionPosition(0,0);
    console.log("");
    console.log("DEUXIEME LIGNE");
    monPlateau.addPion(1,2,monPlateau.getPlayerProgress());
    monPlateau.addPion(1,3,monPlateau.getPlayerProgress());
    monPlateau.addPion(1,4,monPlateau.getPlayerProgress());
    monPlateau.movePions(1,2,1,1,3);
    monPlateau.movePions(1,3,1,1,4);
    monPlateau.viewListPionPosition(0,0);
    monPlateau.viewListPionPosition(1,4);
    console.log("");
    console.log("EMPILEMENT");

    console.log(" FIN TEST DELETE ");
    monPlateau.viewListPionPosition(0,0);

    monPlateau.generateGameIA();
};

'use strict';

var MixTourTestCase = TestCase("MixTourTestCase");
var monPlateau =  new Plateau();

MixTourTestCase.prototype.testInitPlateau = function() {
    console.log("");
    console.log(" --- INIT PLATEAU ---");
    monPlateau.init();
    monPlateau.addPion(0, 0, "G");//1
    monPlateau.addPion(0, 1, "O");//1

    console.log(" --- MOVE ---");
    monPlateau.movePions(0,0,1,0,1)
    monPlateau.addPion(0,0,"L")
    monPlateau.viewListPionPosition(0,1);
    monPlateau.movePions(0,1,1,0,0)
    monPlateau.viewListPionPosition(0,0);
    //console.log(monPlateau.checkMovePion(1,4,0,4));
};

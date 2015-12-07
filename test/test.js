'use strict';

var MixTourTestCase = TestCase("MixTourTestCase");
var monPlateau =  new Plateau();

MixTourTestCase.prototype.testInitPlateau = function(){
    console.log("");
    console.log(" --- INIT PLATEAU ---");
    monPlateau.init();
    monPlateau.getSizePlateau();
    monPlateau.addPion(0,0,1,"blanc");
};
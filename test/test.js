'use strict';

var MixTourTestCase = TestCase("MixTourTestCase");
var monPlateau =  new Plateau();
var ia = new IA(true);

MixTourTestCase.prototype.testInitPlateau = function(){
    console.log("");
    console.log(" --- INIT PLATEAU ---");
    monPlateau.init();
    ia.rndPosition();
};
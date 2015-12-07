'use strict';

var MixTourTestCase = TestCase("MixTourTestCase");
var monPlateau =  new Plateau();

MixTourTestCase.prototype.testInitPlateau = function(){
    console.log("");
    console.log(" --- INIT PLATEAU ---");
    monPlateau.init();
};
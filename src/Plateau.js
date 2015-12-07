/**
 * Created by Maxime on 07/12/2015.
 */
'use strict';

var Plateau = function () {
    var plateau;
    var nbPions;
    var sizePlateau = 0
    var listPions = [];


    this.init = function () {
        plateau = new Array(5);
        for (var i = 0; i < plateau.length; i++) {
            plateau[i] = new Array(5);
            for (var o = 0; o < 5; o++) {
                plateau[i][o] = "o";
                sizePlateau++;
            }
        }
    };

    this.addPion = function (line,column,height,color) {
        var pion =  new Pion(line,column,height,color);
        listPions.push(pion);
        nbPions++;
    }

    this.getNbPions = function() {
        return nbPions;
    }

    this.getSizePlateau = function() {
        console.log(sizePlateau);
        return plateau.length;
    }

};
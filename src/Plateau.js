/**
 * Created by Maxime on 07/12/2015.
 */
'use strict';

var Plateau = function () {
    var plateau;

    this.init = function () {
        plateau = new Array(5);
        for (var i = 0; i < plateau.length; i++) {
            plateau[i] = new Array(5);
            for (var o = 0; o < 5; o++) {
                plateau[i][o] = "o";
            }
        }
    };
};
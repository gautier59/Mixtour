/**
 * Created by kevin on 07/12/2015.
 */
/**
 * Created by kevin on 07/12/2015.
 */
'use strict';
var IA = function(isPlayed){
    var line,column,statementPlayer,isEmpty;

    this.initIA = function () {
        statementPlayer = isPlayed;
        if(statementPlayer){
            this.checkPlateau();
        }
    }
    // A donner pour la classe plateau
    this.checkPlateau = function(){
        isEmpty = false;
        for(var i=0; i<plateau.length;i++){
            for(var y=0;y<plateau.length;y++){
                if(plateau[i][y]  != null || plateau[i][y] != "")
                    return true;
            }
        }
        return isEmpty;
    }

    this.rndPosition = function () {
        var randomPosition = 0;
        randomPosition =  Math.random() * (44 - 0) + 0;
        console.log(randomPosition);
        return parseInt(randomPosition);
    }
}
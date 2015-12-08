/**
 * Created by Maxime on 07/12/2015.
 */
'use strict';

var Plateau = function () {
    var plateau;
    var colorPlayer = "W";
    var colorIA = "B";
    var listPion = [];
    var playerProgress = "W"; // Par d�faut c'est au joueur blanc de commencer

    this.init = function () {
        plateau = new Array(5);
        for (var i = 0; i < plateau.length; i++) {
            plateau[i] = new Array(5);
            for (var o = 0; o < 5; o++) {
                plateau[i][o] = "o";
            }
        }
    };

    this.setColorPlayer = function(color){
        colorPlayer = color;

        if(color = "W")
            colorIA = "B";
        else
            colorIA = "W";
    };

    this.pionOnPlateau = function(){
        if(listPion.length != 0)
            return true;
        else
            return false;
    };

    this.addPion = function(line, columns, color){
        var nbPionCell = this.getListPionPosition(line,columns).length;
        if(nbPionCell == 0) {
            var pion = new Pion(line, columns, (nbPionCell + 1), color);
            listPion.push(pion);
            this.changePlayer();
            return true;
        }
        else{
            console.log("[ERR] Placement impossible: La case L:"+line+" C:"+columns+" n'est pas vide");
            return false;
        }
    };

    this.viewListPionPlateau = function(){
        console.log("  --- PION PLACE ---");
        console.log("            Number pion:"+listPion.length);
        for(var i = 0; i < listPion.length ; i++) {
            console.log("            line:" +listPion[i].line +" column:"+listPion[i].column+" height:"+listPion[i].height + " color:" + listPion[i].color);
        }
        console.log(" --- ---");
    };


    this.viewListPionPosition = function(line , column){
        var listPionCell = [];

        for(var i = 0 ; i < listPion.length ; i++){
            if((listPion[i].line == line) && (listPion[i].column == column))
            {
                listPionCell.push(listPion[i]);
            }
        }
        listPionCell.sort(function(a, b) {
            if (a.height < b.height) //sort string ascending
                return -1
            if (a.height > b.height)
                return 1
            return 0 //
        });

        console.log("  --- PION PLACE (L:"+line+" C:"+column+") ---");
        console.log("            Number pion:"+listPionCell.length);
        for(var i = 0; i < listPionCell.length ; i++) {
            console.log("            line:" +listPionCell[i].line +" column:"+listPionCell[i].column+" height:"+listPionCell[i].height + " color:" + listPionCell[i].color);
        }
        console.log(" --- ---");
    };

    this.getListPionPosition = function(line , column) {
        var listPionCell = [];
        var count = 1;

        for (var i = 0; i < listPion.length; i++) {
            if ((listPion[i].line == line) && (listPion[i].column == column)) {
                listPionCell.push(listPion[i]);
            }
        }

        listPionCell.sort(function(a, b) {
            if (a.height < b.height) //sort string ascending
                return -1
            if (a.height > b.height)
                return 1
            return 0 //
        });

        for (var i = 0; i < listPionCell.length; i++) {
            console.log(listPionCell[i].height);
        }

        return listPionCell;
    };

    this.getCellEmpty = function(){
        var arrayCellEmpty = [];

        for(var i = 0; i <5 ; i++){
            for(var o = 0; o < 5 ; o++) {
                if (this.getListPionPosition(i,o).length == 0){
                    arrayCellEmpty.push("{"+i+";"+o+"}");
                    console.log("---{"+i+";"+o+"}");
                }
            }
        }
        return arrayCellEmpty;
    };

    this.movePions = function(positionStartLine, positionStartColumn,positionStartHeight, positionEndLine, positionEndColumn) {
        var listPionTmp = this.getListPionPosition(positionStartLine,positionStartColumn);
        var lstTmp = listPionTmp.slice(positionStartHeight-1, listPionTmp.length+1); //On prend 2 et 3
        for(var i = 0; i < lstTmp.length  ; i++) {
            lstTmp[i].line = positionEndLine;
            lstTmp[i].column = positionEndColumn;
            lstTmp[i].height = this.getListPionPosition(positionEndLine,positionEndColumn).length;
            console.log(lstTmp[i].line + " " + lstTmp[i].column);
        }
    };

    this.changePlayer = function(){
        if(playerProgress == "W")
            playerProgress = "B";
        else
            playerProgress = "W";

        console.log("C'est au tour du joueur :"+playerProgress);
    };

    this.getPlayerProgress = function(){
        return playerProgress;
    }


};
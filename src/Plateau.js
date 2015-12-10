/**
 * Created by Maxime on 07/12/2015.
 */
'use strict';

var Plateau = function () {
    var plateau;
    var colorPlayer = "W";
    var colorIA = "B";
    var listPion = [];
    var playerProgress = "W"; // Par dÃ©faut c'est au joueur blanc de commencer
    var pointPlayer = 0;
    var pointIA = 0;
    var lastCoup = [];

    this.init = function () {
        plateau = new Array(5);
        for (var i = 0; i < plateau.length; i++) {
            plateau[i] = new Array(5);
            for (var o = 0; o < 5; o++) {
                plateau[i][o] = "o";
            }
        }
    }


    this.setColorPlayer = function (color) {
        colorPlayer = color;
        console.log("This color player is " + colorPlayer);

        if (color == "W")
            colorIA = "B";
        else
            colorIA = "W";
    };

    this.pionOnPlateau = function () {
        if (listPion.length != 0)
            return true;
        else
            return false;
    };

    this.addPion = function (line, columns, color) {
        var nbPionCell = this.getListPionPosition(line, columns).length;
        if (nbPionCell == 0) {
            var pion = new Pion(line, columns, (nbPionCell + 1), color);
            listPion.push(pion);
            this.changePlayer();
            return true;
        }
        else {
            console.log("[ERR] Placement impossible: La case L:" + line + " C:" + columns + " n'est pas vide");
            this.viewListPionPosition(line, columns);

            return false;
        }
    };

    this.setColorPlayer = function (color) {
        colorPlayer = color;

        if (color = "W")
            colorIA = "B";
        else
            colorIA = "W";
    };

    this.pionOnPlateau = function () {
        if (listPion.length != 0)
            return true;
        else
            return false;
    };

    this.addPion = function (line, columns, color) {
        var nbPionCell = this.getListPionPosition(line, columns).length;
        if (nbPionCell == 0) {
            var pion = new Pion(line, columns, (nbPionCell + 1), color);
            listPion.push(pion);
            this.changePlayer();
            return true;
        }
        else {
            console.log("[ERR] Placement impossible: La case L:" + line + " C:" + columns + " n'est pas vide");
            return false;
        }
    };

    this.viewListPionPlateau = function () {
        console.log("  --- PION PLACE ---");
        console.log("            Number pion:" + listPion.length);
        for (var i = 0; i < listPion.length; i++) {
            console.log("            line:" + listPion[i].line + " column:" + listPion[i].column + " height:" + listPion[i].height + " color:" + listPion[i].color);
        }
        console.log(" --- ---");
    };


    this.viewListPionPosition = function (line, column) {
        var listPionCell = [];

        for (var i = 0; i < listPion.length; i++) {
            if ((listPion[i].line == line) && (listPion[i].column == column)) {
                listPionCell.push(listPion[i]);
            }
        }
        listPionCell.sort(function (a, b) {
            if (a.height < b.height) //sort string ascending
                return -1
            if (a.height > b.height)
                return 1
            return 0 //
        });

        console.log("  --- PION PLACE (L:" + line + " C:" + column + ") ---");
        console.log("            Number pion:" + listPionCell.length);
        for (var i = 0; i < listPionCell.length; i++) {
            console.log("            line:" + listPionCell[i].line + " column:" + listPionCell[i].column + " height:" + listPionCell[i].height + " color:" + listPionCell[i].color);
        }
        console.log(" --- ---");
    };

    this.getListPionPosition = function (line, column) {
        var listPionCell = [];
        var count = 1;

        for (var i = 0; i < listPion.length; i++) {
            if ((listPion[i].line == line) && (listPion[i].column == column)) {
                listPionCell.push(listPion[i]);
            }
        }

        listPionCell.sort(function (a, b) {
            if (a.height < b.height) //sort string ascending
                return -1
            if (a.height > b.height)
                return 1
            return 0 //
        });

        return listPionCell;
    };


    this.getCellEmpty = function () {
        var arrayCellEmpty = [];

        for (var i = 0; i < 5; i++) {
            for (var o = 0; o < 5; o++) {
                if (this.getListPionPosition(i, o).length == 0) {
                    arrayCellEmpty.push("{" + i + ";" + o + "}");
                    //console.log("---{"+i+";"+o+"}");
                }
            }
        }
        return arrayCellEmpty;
    };

    this.movePions = function (positionStartLine, positionStartColumn, positionStartHeight, positionEndLine, positionEndColumn) {
        if (this.getListPionPosition(positionEndLine, positionEndColumn).length != 0) {
            var listPionTmp = this.getListPionPosition(positionStartLine, positionStartColumn);
            var lstTmp = listPionTmp.slice(positionStartHeight - 1, listPionTmp.length + 1); //On prend 2 et 3
            for (var i = 0; i < lstTmp.length; i++) {
                lstTmp[i].line = positionEndLine;
                lstTmp[i].column = positionEndColumn;
                lstTmp[i].height = (this.getListPionPosition(positionEndLine, positionEndColumn).length);
                //console.log(lstTmp[i].line + " " + lstTmp[i].column);
                console.log("Deplacement de L:" + positionStartLine + " C:" + positionStartColumn + " H:" + lstTmp[i].height + " vers L:" + positionEndLine + " H:" + positionEndColumn);
            }
            this.checkHeightTower(positionEndLine, positionEndColumn);
            this.changePlayer();
            return true;
        } else {
            console.log("[ERR] Le déplacement est imposible la cellule est VIDE !");
            return false;
        }
        //this.checkMovePion(positionStartLine,positionStartColumn,positionEndLine,positionEndColumn)
    };

    this.changePlayer = function () {
        if (playerProgress == "W")
            playerProgress = "B";
        else
            playerProgress = "W";

        console.log("C'est au tour du joueur :" + playerProgress);
    };

    this.getPlayerProgress = function () {
        return playerProgress;
    };

    this.checkHeightTower = function (line, column) {
        var tower = this.getListPionPosition(line, column);
        var colorLastPion = tower[tower.length - 1].color;
        if (tower.length >= 5) {
            if (colorLastPion == colorPlayer)
                pointPlayer++;
            else
                playerProgress = "W";
            console.log("C'est au tour du joueur :" + playerProgress);
        }
        ;

        this.getPlayerProgress = function () {
            return playerProgress;
        };

        this.checkHeightTower = function (line, column) {
            var tower = this.getListPionPosition(line, column);
            var colorLastPion = tower[tower.length - 1].color;
            if (tower.length >= 5) {
                if (colorLastPion == colorPlayer)
                    pointPlayer++;
                else
                    pointIA++;

                console.log("Le joueur " + colorLastPion + " a gagner !!");
                this.deleteTower(line, column);
            }
        };

        this.getScorePlayer = function () {
            return pointPlayer;
        };

        this.getScoreIA = function () {
            return pointIA;
        };

        this.deleteTower = function (line, column) {
            var tower = this.getListPionPosition(line, column);

            for (var i = 0; i < tower.length; i++) {
                for (var j = 0; j < listPion.length; j++) {
                    if (tower[i] == listPion[j]) {
                        listPion.splice(j, 1);
                    }
                }
            }
        };

        this.checkMovePion = function (startLine, startColumn, endLine, endColumn) {
            var h = this.getHeightCell(endLine, endColumn);
            console.log(h)
            if (Math.abs(startLine - endLine) == Math.abs(startColumn - endColumn == h)
                || Math.abs(startLine - endLine) == h && startColumn == endColumn || Math.abs(startColumn - endColumn) == h && startLine - endLine) {
                var deltaX = (startLine == endLine) ? 0 : (endLine > startLine) ? 1 : -1;
                var deltaY = (startColumn == endColumn) ? 0 : (endColumn > startColumn) ? 1 : -1;
                for (var x = startLine + deltaX; x !== endLine; x = x + deltaX) {
                    for (var y = startColumn + deltaY; y !== endColumn; y = y + deltaY) {
                        console.log("X " + x + " Y " + y);
                        if (this.getListPionPosition(x, y).length != 0) {
                            console.log("FALSE");
                            return false;
                        } else {
                            console.log("TRUE");
                        }
                    }
                }
                if (startLine == endLine) {
                    return true;
                }
                if (startColumn == endColumn) {
                    return true;
                }
                if (Math.abs(startLine - endLine) == Math.abs(startColumn - endColumn)) {
                    return true;
                }
                console.log("False DÃ©placement")
                return false //Ne respecte pas les dÃ©placements autorisÃ©s
            }
            console.log("False Distance")
            return false; //Mauvaise distance
        }

        this.getHeightCell = function (line, column) {
            return this.getListPionPosition(line, column).length;
        }

        this.setLastCoup = function (positionStartLine, positionStartColumn, positionEndLine, positionEndColumn, nbPions) {
            lastCoup["startLine"] = positionStartLine;
            lastCoup["startColumn"] = positionStartColumn;
            lastCoup["endLine"] = positionEndLine;
            lastCoup["endColumn"] = positionEndColumn;
            lastCoup["nbPions"] = nbPions;
        }

        this.comparaCoup = function (positionStartLine, positionStartColumn, positionEndLine, positionEndColumn, nbPions) {
            console.log("___Comparaison de coup : ");
            console.log("___Nouveau coup : DÃ©part : " + positionStartLine + " " + positionStartColumn + " ArrivÃ© : "
                + positionEndLine + " " + positionEndColumn);
            console.log("___Ancien coup : DÃ©part : " + lastCoup.startLine + " " + lastCoup.startColumn + " ArrivÃ© : "
                + lastCoup.endLine + " " + lastCoup.endColumn);
            if (positionEndLine == lastCoup.startLine && positionEndColumn == lastCoup.startColumn && positionStartLine == lastCoup.endLine
                && positionStartColumn == lastCoup.endColumn && nbPions == lastCoup.nbPions) {
                console.log("TRUE")
            }
        }

    }

    this.checkPlayerProgressIsIA = function () {
        if (playerProgress == colorIA) {
            var result = this.generateGameIA();
            console.log("IA generer:" + result);
            return result;
        }
        else
            return -1;
    };

    this.generateGameIA = function () {



        //console.log("   ---   IA DEPLACER PIONS   ---   ");


        var towerLowerLine = -1;
        var towerLowerColumn = -1;
        var towerHigherLine = -1;
        var towerHigherColumn = -1;
        var towerHigherHeight = -1;
        var tmp_towerLowerHeight = -1;

        var cellTowerSame = this.getTowerSameColorFirstPion("W");
        if (cellTowerSame.length > 0) {
            for (var i = 0; i < cellTowerSame.length; i++) { // Permet de parcourir la liste est prendre la meilleure solution
                if (cellTowerSame[i].charAt(5) > towerHigherHeight) {
                    towerHigherLine = cellTowerSame[i].charAt(1);
                    towerHigherColumn = cellTowerSame[i].charAt(3);
                    towerHigherHeight = cellTowerSame[i].charAt(5);
                }
            }
            //var randomSelectTowerHigher = getRandomInt(0, cellTowerSame.length);
            //towerHigherLine = cellTowerSame[randomSelectTowerHigher].charAt(1);
            //towerHigherColumn = cellTowerSame[randomSelectTowerHigher].charAt(3);
            //towerHigherHeight = cellTowerSame[randomSelectTowerHigher].charAt(5);
            console.log(" - TOWER HIGHER SELECT IS L:" + towerHigherLine + " C:" + towerHigherColumn + " avec H:" + towerHigherHeight);


            /// Récupèration de notre TOWER basse
            var cellTowerMore = this.getTowerWithMorePionParameter(5 - towerHigherHeight, towerHigherLine, towerHigherColumn);
            if (cellTowerMore.length > 0) {
                for (var i = 0; i < cellTowerMore.length; i++) { // Permet de parcourir la liste est prendre la meilleure solution
                    if (cellTowerMore[i].charAt(5) > tmp_towerLowerHeight) {
                        towerLowerLine = cellTowerMore[i].charAt(1);
                        towerLowerColumn = cellTowerMore[i].charAt(3);
                    }
                }
                //var randomSelectTowerLower = getRandomInt(0,cellTowerMore.length);
                //towerLowerLine = cellTowerMore[randomSelectTowerLower].charAt(1);
                //towerLowerColumn = cellTowerMore[randomSelectTowerLower].charAt(3);
                console.log(" - TOWER LOWER SELECT IS L:" + towerLowerLine + " C:" + towerLowerColumn);

                this.movePions(towerHigherLine, towerHigherColumn, 0, towerLowerLine, towerLowerColumn);
                return "{d:" + towerHigherLine + ":" + towerHigherColumn + ":" + 0 + ":" + towerLowerLine + ":" + towerLowerColumn + "}";

            } else {
                console.log("NOUS N'AVOUS PAS DE TOUR QUI PERMETTENT DE PRENDRE UN POINT DIRECTEMENT");

                console.log("  ----   IA PLACER PIONS   ---   ");
                var cellsEmpty = this.getCellEmpty();
                var rand = getRandomInt(0, cellsEmpty.length);
                this.addPion(cellsEmpty[rand].charAt(1), cellsEmpty[rand].charAt(3), colorIA);
                return "{p:" + cellsEmpty[rand].charAt(1) + ":" + cellsEmpty[rand].charAt(3) + "}";

            }


        }
        else {
            console.log("NOUS N'AVONS PAS DE TOUR AVEC NOTRE COULEUR EN HAUT");

            console.log("  ----   IA PLACER PIONS   ---   ");
            var cellsEmpty = this.getCellEmpty();
            var rand = getRandomInt(0, cellsEmpty.length);
            this.addPion(cellsEmpty[rand].charAt(1), cellsEmpty[rand].charAt(3), colorIA);
            return "{p:" + cellsEmpty[rand].charAt(1) + ":" + cellsEmpty[rand].charAt(3) + "}";

        }
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    this.getTowerSameColorFirstPion = function (color) { // Retourne une liste de cellules ayant des tour donc le pion le plus haut est celui de ca couleur : {0;0;3)  = {L;C;HauteurTotal}
        var arrayCellWithTowerSameColorFirstPion = [];

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if (this.getListPionPosition(i, j).length > 0) { // On est sur une cells qui contient une tour
                    var pionCell = this.getListPionPosition(i, j);
                    if (pionCell[pionCell.length - 1].color == playerProgress) { // Compare le pion le plus haut avec la couleur du joueur
                        arrayCellWithTowerSameColorFirstPion.push("{" + i + ";" + j + ";" + pionCell.length + "}");
                    }
                }
            }
        }
        return arrayCellWithTowerSameColorFirstPion;
    }

    this.getTowerWithMorePionParameter = function (heightmin, lineTowerHigher, columnTowerHigher) { // Récupère la liste des cells avec des colonnes qui ont au minimum la hauteur passer en paramètre et différent de la cell de la tour haute
        var arrayCellWithMorePionParameter = [];

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if (this.getListPionPosition(i, j).length >= heightmin) { // On est sur une cells qui contient une tour
                    if ((i != lineTowerHigher) || (j != columnTowerHigher)) { // Vérifier si on est pas sur la même cellules que la tour haute !
                        var pionCell = this.getListPionPosition(i, j);
                        arrayCellWithMorePionParameter.push("{" + i + ";" + j + ";" + pionCell.length + "}");
                    }
                }
            }
        }

        return arrayCellWithMorePionParameter;
    };
};

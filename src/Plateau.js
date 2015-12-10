/**
 * Created by Maxime on 07/12/2015.
 */
'use strict';

var Plateau = function () {
        var plateau;
        var colorPlayer = "W";
        var colorIA = "B";
        var listPion = [];
        var playerProgress = "W"; // Par défaut c'est au joueur blanc de commencer
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
                        console.log("---{" + i + ";" + o + "}");
                    }
                }
            }
            return arrayCellEmpty;
        };

        this.movePions = function (positionStartLine, positionStartColumn, positionStartHeight, positionEndLine, positionEndColumn) {
            if (this.getListPionPosition(positionEndLine, positionEndColumn).length != 0) {
                if (this.checkMovePion(positionStartLine, positionStartColumn, positionEndLine, positionEndColumn)) {
                    var listPionTmp = this.getListPionPosition(positionStartLine, positionStartColumn);
                    var lstTmp = listPionTmp.slice(positionStartHeight - 1, listPionTmp.length + 1);
                    for (var i = 0; i < lstTmp.length; i++) {
                        lstTmp[i].line = positionEndLine;
                        lstTmp[i].column = positionEndColumn;
                        lstTmp[i].height = this.getListPionPosition(positionEndLine, positionEndColumn).length;
                    }
                    this.checkHeightTower(positionEndLine, positionEndColumn);
                    if (this.comparaCoup(positionStartLine, positionStartColumn, positionEndLine, positionEndColumn, lstTmp.length)) {
                        console.log("[ERR] Le coup est identique au précédent !");
                        return false;
                    } else {
                        console.log("Le coup est OK")
                        this.setLastCoup(positionStartLine, positionStartColumn, positionEndLine, positionEndColumn, lstTmp.length);
                        return true;
                    }
                } else {
                    console.log("[ERR] Le déplacement est imposible mauvaise distance ou direction !");
                    return false;

                }
            }
            else {
                console.log("[ERR] Le déplacement est imposible la cellule est VIDE !");
                return false;
            }
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
            for (var i = 0; i < listPion.length; i++) {
                for (var j = 0; j < tower.length; j++) {
                    if (listPion[i] == tower[j]) {
                        console.log("SUPPRESSION L:" + listPion[i].line + " C:" + listPion[i].column + " H:" + listPion[i].height + " C:" + listPion[i].color);
                        listPion.splice(j, 1);
                    }
                }
            }
        }

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
                console.log("False Déplacement")
                return false //Ne respecte pas les déplacements autorisés
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
            console.log("___Nouveau coup : Départ : " + positionStartLine + " " + positionStartColumn + " Arrivé : "
                + positionEndLine + " " + positionEndColumn);
            console.log("___Ancien coup : Départ : " + lastCoup.startLine + " " + lastCoup.startColumn + " Arrivé : "
                + lastCoup.endLine + " " + lastCoup.endColumn);
            if (positionEndLine == lastCoup.startLine && positionEndColumn == lastCoup.startColumn && positionStartLine == lastCoup.endLine
                && positionStartColumn == lastCoup.endColumn && nbPions == lastCoup.nbPions) {
                console.log("TRUE")
            }
        }

    }
    ;
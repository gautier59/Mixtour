/**
 * Created by Maxime on 07/12/2015.
 */

var Pion = function(line, column, height, color){

    var _line;
    var _column;
    var _height;
    var _color;

    var init = function(line, column,height, color){
        _line = line;
        _column = column;
        _height = height;
        _color = color;
    };

    init()

    this.getLine = function() {
        return _line;
    }
};

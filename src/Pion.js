/**
 * Created by Maxime on 07/12/2015.
 */

var Pion = function(line, column, height, color){
    this.line = line;
    this.column = column;
    this.height = height;
    this.color = color;

    console.log("  --- Creation PION en L:"+line+" C:"+column+ " H:"+height+ " C:"+color);


    var init = function(line, column,height, color){
        this._line = line;
        this._column = column;
        this._height = height;
        this._color = color;

        console.log("INIT Instatiation d'un pion en    line:"+this._line+" Column:"+column+ " height:"+height+ " color:"+color);
    };
};

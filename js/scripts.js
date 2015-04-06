
var queenAttack = function(x1, y1, x2 ,y2) {
    if ((x1 === x2) || (y1 === y2) || (x2-x1) === (y2-y1)) {
        return true;
    } else {
        return false;
    }
};

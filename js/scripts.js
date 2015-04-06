
var queenAttack = function(x1, y1, x2 ,y2) {
    if ((x1 === x2) || (y1 === y2) || (x2-x1) === (y2-y1)) {
        return true;
    } else {
        return false;
    }
};

$(document).ready(function() {
    $("form#queen-attack").submit(function(event) {
        var x1 = ($("input#x1").val());
        var y1 = ($("input#y1").val());
        var x2 = ($("input#x2").val());
        var y2 = ($("input#y2").val());
        var result = queenAttack(x1, y1, x2, y2);

        $(".result").text("");
        if (result) {
            $(".result1").text("The queen can attack the selected position");
        } else {
            $(".result1").text("The queen cannot attack the selected position");
        }

        $("#result").show();
        event.preventDefault();

    });
});

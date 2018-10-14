
//Variable declaration
var bt1;
var img_index = 1;
var bt2;
var alti = 4;
var charPoint = 0;;
var defender;
var poweratt = 0;
var myChar;
var defenderPoints = 0;
var powerDef = 0;
var i = 1;
var a = 0;
var b = 0;
var c = 0;


// reading one click from the a tags in images
$(document).one('click', '.imge', function (e) {
    bt1 = $(this).attr("alt");
    $(".hello").remove();


    if (bt1 <= 4) {
        if (bt1 == 1) {
            charPoints = 120;
            diff = 120;
            poweratt = 8;
            myChar = 'Obi';
            removeimg(2, 3, 4);
        }

        else if (bt1 == 2) {
            charPoints = 100;
            diff = 100;
            poweratt = 5;
            myChar = 'Luke Skywalker';
            removeimg(1, 3, 4);
        }

        else if (bt1 == 3) {
            charPoints = 150;
            diff = 150;
            poweratt = 15;
            myChar = 'Darth Sidious';
            removeimg(1, 2, 4);
        }

        else if (bt1 == 4) {
            charPoints = 180;
            diff = 180;
            poweratt = 25;
            myChar = 'Darth Maul';
            removeimg(1, 2, 3);
        }

        createNewImg(bt1);



    }


});

//reading the click from the generated images
$(document).one('click', '.imges', function (e) {
    bt1 = $(this).attr("alt");


    bt2 = bt1 - 3;



    if (bt1 != bt2) {

        createDefImg(bt2);

    }

});


function removeimg(a, b, c) {

    var a = "#" + a;
    var b = "#" + b;
    var c = "#" + c;

    $(a).remove();
    $(b).remove();
    $(c).remove();

}



function createNewImg(bt1) {
    var container = 4;
    for (var i = 1; i <= 4; i++) {


        if (bt1 == i) {


            continue;

        }

        else {



            container++;
            var containers = '#' + container;


            ++alti;




            // creating the images based on the click
            var img = $('<img />').attr({
                'src': 'assets/image/myImage' + i + '.jpg',
                'alt': alti,
                'class': 'imges img-fluid img-thumbnail',
                'id': 'def'

            }).appendTo(containers);



        }

    }
}



function createDefImg(bt2) {



    console.log("bt2-->" + bt2);

    if (bt2 == 1) {
        defenderPoints = 120;
        powerDef = 8;
        defender = 'Obi';
        diff1 = 120;

    }

    else if (bt2 == 2) {
        defenderPoints = 100;
        powerDef = 5;
        defender = 'Luke Skywalker';
        diff1 = 100;
    }

    else if (bt2 == 3) {
        defenderPoints = 150;
        powerDef = 15;
        defender = 'Darth Sidious';
        diff1 = 150;
    }

    else if (bt2 == 4) {
        defenderPoints = 180;
        powerDef = 25;
        defender = 'Darth Maul';
        diff1 = 180;
    }



    var img = $('<img />').attr({
        'src': 'assets/image/myImage' + bt2 + '.jpg',
        'alt': 'Defender!',
        'class': 'imge img-fluid img-thumbnail'

    }).appendTo(".star");


}


$("#attack").click(function () {
    calc();


}
);
var diff = 0;
var diff1 = 0;

// funtion to calculate the points 
function calc() {
    var myPoints = charPoints;
    diff = diff - powerDef;




    var damages = poweratt * i;
    var totalPoints = defenderPoints;


    diff1 = diff1 - damages;






    i++;



    if (diff > 0 && diff1 > 0) {

        $("#result1").replaceWith("<h4 id='result1'>" + "You attacked " + defender + " for " + damages + " damage." + "</h4>");
        $("#result2").replaceWith("<h4 id='result2'>" + defender + " attacked you back for " + powerDef + " damage." + "</h4>");


        $("#def1").replaceWith("<h2 id='def1'>" + defender + " Points are " + diff1 + "</h2>");
        $("#player").replaceWith("<h2 id='player'>" + myChar + " Points are " + diff + "</h2>");
    }

    else if (diff <= 0) {

        $("#result3").replaceWith("<h3 class='header'>" + "You have been defeated!!" + "</h3>");
        $("#player").replaceWith("<h2 id='player'>" + myChar + " Points are " + diff + "</h2>");
    }
    else if (diff1 <= 0) {

        $("#result3").replaceWith("<h3 class='header'>" + "You won!" + "</h3>");
        $("#def1").replaceWith("<h2 id='def1'>" + defender + " Points are " + diff1 + "</h2>");
    }
}


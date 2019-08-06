var playing = false;
var score;
var trialsLeft;
var fruits = ['apple', 'banana', 'grapes', 'orange', 'pear', 'pineapple', 'watermelon']
var step;
var action; //setInterval

$(function () {
    //click on start-reset button
    $("#startreset").click(function () {

        //we are playing
        if (playing == true) {

            //reload page
            location.reload();
        } else {
            //hide game over box
            $("#gameover").hide();

            //we are not playing
            playing = true; //game initiated

            //set score to 0
            score = 0;
            $("#scorevalue").html(score);

            //show trails left
            $("#trialsLeft").show();
            trialsLeft = 3;
            addHearts();

            //change button text to "reset game"
            $("#startreset").html("Reset Game");

            //start sending fruits
            startAction();

        }
    });

    $("#fruit1").mouseover(function () {
        //when mouse over score + 1
        score++;
        //update score
        $("#scorevalue").html(score);

        //access audio
        //play sound
        $("#sliceSound")[0].play();

        //stop fruit 
        clearInterval(action);

        //startAction();

        //hide fruit (animation)
        $("#fruit1").hide("explode", 300); //slice fruit

        //send new fruit
        setTimeout(startAction, 500);

    });

    //slice a fruit
    //play sound
    //explode fruit

    //convert trialLeft into heart image
    function addHearts() {
        $("#trialsLeft").empty();
        for (i = 0; i < trialsLeft; i++) {
            $("#trialsLeft").append("<img src='images/heart.png' class='life'>");
        }
    }

    //start sending fruits
    function startAction() {
        //generate a fruit
        $("#fruit1").show();
        chooseFruit(); //choose/generate random fruit
        $("#fruit1").css({
            'left': Math.round(550 * Math.random()),
            'top': -50
        }); //random position

        //generate a random step
        step = 1 + Math.round(4 * Math.random()); // change step

        //move fruit down by one step every 10ms
        action = setInterval(function () {

            //move the fruit down by one step
            $("#fruit1").css('top', $("#fruit1").position().top + step);

            //check if the fruit is too low
            if ($("#fruit1").position().top > $("#fruitsContainer").height()) {

                //check if we have trials left
                if (trialsLeft > 1) {
                    $("#fruit1").show();
                    chooseFruit(); //choose/generate random fruit
                    $("#fruit1").css({
                        'left': Math.round(550 * Math.random()),
                        'top': -50
                    }); //random position

                    //generate a random step
                    step = 1 + Math.round(4 * Math.random()); // change step

                    //reduce trials by 1
                    trialsLeft--;
                    //populate trials left box
                    addHearts();
                } else {
                    //game over
                    playing = false; //we are not playing anymore
                    $("#startreset").html("Start Game"); //change button to start game
                    $("#gameover").show();
                    $("#gameover").html("<p>Game Over!</p><p>Your Score is " + score + "</p>");
                    $("#trialsLeft").hide();
                    stopAction();
                }
            }
        }, 10);
    }

    function chooseFruit() {
        $("#fruit1").attr('src', 'images/' + fruits[Math.round(6 * Math.random())] + '.jpg');
    }

    //stop dropping fruit
    function stopAction() {
        clearInterval(action);
        $("#fruit1").hide();
    }
});

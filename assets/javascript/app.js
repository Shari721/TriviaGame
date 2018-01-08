$(document).ready(function() {

function countdown() {
    var seconds = 30;
    function tick() {
        var counter = document.getElementById("time");
        seconds--;
        counter.innerHTML = "00:" + (seconds < 10 ? "0" : "") + String(seconds);
        if(seconds > 0 ) {
            setTimeout(tick, 1000);
        } 
    }
    tick();
}

countdown();         

var numCorrect = 0;
var numIncorrect = 0;

var myButton = document.getElementById("button");


    document.getElementById("button").addEventListener("click", function () {

        if(document.getElementById('button1').checked) {
            numIncorrect++;
        } else if (document.getElementById('button2').checked) {
            numCorrect++;
            } else if (document.getElementById('button3').checked) {
                numIncorrect++;
            }

        if(document.getElementById('button4').checked) {
            numIncorrect++;
        } else if (document.getElementById('button5').checked) {
            numIncorrect++;
            } else if (document.getElementById('button6').checked) {
                numCorrect++;
            }
        
        if(document.getElementById('button7').checked) {
            numCorrect++;
        } else if (document.getElementById('button8').checked) {
            numIncorrect++;
            } else if (document.getElementById('button9').checked) {
                numIncorrect++;
            }

    document.querySelector("#score").innerHTML = "You have " + numCorrect + " correct";
        
    });


// scoreDiv.innerHTML = numCorrect;

// function displayScore() {
//     var scores = prompt("you answered " + numCorrect " correct");
// }




// var header = " ";
// var choice = " ";


// for (i = 0; i < questions.length; i++) {
//     header += "<h2>" + questions[i] + "</h2>"
//     for (c = 0; c < choices.length; c++) {
//         choice += "<input type='radio'>" + choices + "</input>"
//     }
// }
  
//     $(".questions").append(header);
//     $(".theChoices").append(choice);



// if user choice is incorrect add 1 point to incorrect variable or 
//if user is correct add 1 point to the correct counter


//     $("#score").text("score: " + correct + incorrect);{

//     // }
});

      



            




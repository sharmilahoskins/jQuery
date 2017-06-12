// Controller
//
// Create a click listener that takes in the user's guess from the input tag and displays it in an alert.
// Reuse the code from your previous Hi/Lo Game challenge to to match the user's guess to the correct set number.
// Make the p tag red when there are only two guesses left. Use the jQuery .addClass(..) function.
// Make the p tag contain the results of all the user's guesses. Use the jQuery functions .append(..) or .prepend(..) and .text(..).
// Hide the button and input tags when the game is over, using the jQuery .show(..) and .hide(..) functions

$(document).ready(function(){

  var randomPick = numberPick();
  var attempt = 0;

  function numberPick(){
    randomPick = (Math.floor((Math.random() * 100) + 1));
  }

  numberPick();
  console.log("The randomPick is: " + randomPick);

  $("#submitButton").click(function(){

    if (attempt <7) {

      console.log("attempt is: " + attempt);

      if ($("#num").val() < randomPick){

        $("#result").text("Your number is too low");
      }
      else if ($("#num").val() > randomPick){
        $("#result").text("Your number is too high");
      }
      else{
        $("#result").text("You won!");
      }
      attempt++;
      // $("#yourGuesses").append($("#num").val() + ", ");

      $("ul").append('<li>' + $("#num").val() + '</li>')

  }//end if attempt < 7

    if (attempt >4){

      $("#result").addClass("redAlert");
    }

    if (attempt === 7){
      $("#num").hide();
      $("#submitButton").hide();
      $("#result").text("Game over.");
    }

  })


}) //end of jQuery function that starts with document ready





// var attempt = 1;
// var name ="";
//
// //Visibility did not work, didn't hidden
// function userName(){
//     name = (document.getElementById("namePrompt").value);
//     getElementById("nameBox").style.visibility='hidden';
//
//     return name;
// }
//
//User picks number and compares to computer number
// function userGuess(){
//   var guess = +(document.getElementById("num").value);
//   console.log("guess is: " + guess);
//   // alert("guess is now: " + guess);
//   // var attempt = 1;
//   console.log(equation);
//   if (attempt < 7) {
//     console.log("variable attempt is: " + attempt);
//     if (+guess > equation){
//       document.getElementById('result').innerHTML = "Guess Lower";
//       guess = document.getElementById('num').value;
//       document.getElementById('num') = "";
//     }
//     else if (+guess < equation){
//       document.getElementById('result').innerHTML = "Guess Higher";
//       guess = document.getElementById('num').value;
//       document.getElementById('num').value = "";
//     }
//     else if(+guess === equation){
//       document.getElementById('result').innerHTML = "You Win, " + name + "!";
//       document.getElementById('num').value = "";
//     }
//
//     //(else if(guess==NaN) did NOT work). This is saying if guess is not an integer do this
//     else if(!guess)
//       document.getElementById('result').innerHTML = "Your guess is not a number";
//       document.getElementById('num').value = "";
//     }
//   if (!guess){
//     console.log("do nothing here")
//   }else {
//   attempt++;
//   }
//   if (attempt == 8){
//       document.getElementById('result').innerHTML = "You Lose!";
//       document.getElementById('num').value = "";
//     }
// }

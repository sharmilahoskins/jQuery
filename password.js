// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"
// Password has to contain at least one digit
// Password has to contain a lower and an uppercase letter (hint: use toUpperCase or toLowerCase)

// Create a click listener that takes the user ID and password from the input tags and displays them in an alert.
// Reuse the code from your previous User ID and Password Validation challenge to compare the user's input to the criteria for a valid user id and password.
// Show an error message in the p tag if the credentials are not valid and why. Use the jQuery functions .append(..) or .text(..).
// Clear unacceptable values from the input fields after an attempted submission. Use the jQuery function .val(..).
// Disable the button after a certain number of log in attempts have been made. Use the jQuery function .off(..).



var failed = {reason1: "Username should not include #",
              reason2: "Username should not include !",
              reason3: "Username should not include $",
              reason4: "Username should contain atleast 6 characters"
              }
$(document).ready(function(){
  var attempt = 0;

  $("#submit").click(function(){
    var user = $("#user").val();
    var pass = $("#pass").val();

    console.log("username: " + user + " password: " + pass);

    if (attempt === 1){
      $(".attempt0").remove();

    }
    if (attempt === 2){
      $("li").remove();
    }

    if (attempt === 3){
      $("#submit").off().hide()
      $("li").remove();
      $("#finalWarning").text("Too many attempts! Wait 24 hours.")

    }
    if (user.length >= 6 && !user.includes("!") && !user.includes("#") && !user.includes("$")) {
        $("#feedback").append("<li class='attempt0'> Username works </li>")
      }
    if (user.includes("!")) {
      $("#feedback").append("<li class='attempt0'>" + failed.reason2 + "</li>")
      $("#user").val("")
    }
    if (user.includes("#")){
      $("#feedback").append("<li class='attempt0'>" + failed.reason1 + "</li>")
      $("#user").val("")
    }
    if (user.includes("$")){
      $("#feedback").append("<li class='attempt0'>" + failed.reason3 + "</li>")
      $("#user").val("")
    }
    if (user.length < 6){
      $("#feedback").append("<li class='attempt0'>" + failed.reason4 + "</li>")
      $("#user").val("")
    }
    if(pass.length >= 6 && ( pass.includes("!") || pass.includes("#") || pass.includes("$") ) ) {
      $("#feedback").append("<li class='attempt0'> Password works </li>")
    }
    if (pass.length < 6){
      $("#feedback").append("<li class='attempt0'> Password must be at least 6 characters </li>")
      $("#pass").val("")
    }
    if( !(pass.includes("!") || pass.includes("#") || pass.includes("$"))) {
      $("#feedback").append("<li class='attempt0'> Password must include ! or # or $ </li>")
      $("#pass").val("")
    }

    // $("#feedback").text("")
    attempt++
    console.log(attempt)
  })





})

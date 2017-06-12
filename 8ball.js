// Create a click listener for the button tag, which opens up an alert.
// Make the click listener show what is in the input field. Use the jQuery function .val().
// Make the click listener show what's in the input field in the paragraph section. Use the jQuery function .text().
// Clear the input field after the button is clicked.
// Reuse your code from the previous Magic 8 Ball challenge to give a random answer.


$(document).ready(function(){

  var ans = ["Yup!", "Fuhgeddaboudit", "Maybe",  "What would your mother do?", "What would an Australian do", "Nope", "I really don't care."]

  $("#submit").click(function(){

    //prints entered question in paragraph below
    $("#repeatQuest").text($("#question").val());

    //clears input box
    $("#question").val("");

    //Generate random answer and print it in paragraph
    $("#answer").text(ans[Math.floor((Math.random() * 7))])

  })

})

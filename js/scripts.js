// Business logic

function Idea(parameterNameInput, parameterIdeaDescription) {
  this.nameInput = parameterNameInput;
  this.ideaDesc = parameterIdeaDescription;
  this.comments = [];
  this.timeStamp = new Date();
  this.ideaId = 1;
}
var ideaDatabase = [];
// Idea.prototype.ideaBox = function() {
//   this.
// }

//Front-End Logic:

$(document).ready(function () {

  $("form#user-idea").submit(function(event) {
    event.preventDefault();
    if (document.getElementById("anonymous-check").checked) {
      var userName = "Anonymous";
    }
    else {
      var userName = $("input#enter-name").val();
    };

    var userIdea = $("textarea#idea-description").val();

    var newIdeaEntered = new Idea(userName, userIdea);


    ideaDatabase.push(newIdeaEntered);

    var uniqueId = ideaDatabase.length;
    newIdeaEntered.ideaId = uniqueId;




    $(".idea-section").prepend('<div class="idea-box">' +
                              '<p class="new-idea">' + newIdeaEntered.ideaDesc + '</p>' +
                              '<p class="creator-name"> via ' + newIdeaEntered.nameInput + '</p>' +
                              '<button id="'+ newIdeaEntered.ideaId + '" class="btn btn-secondary btn-sm discussion>More</button>' +
                              '</div>');
$(".discussion").first().click(function() {
  var thisButtonId = $(this).attr('id');

})


  });
});

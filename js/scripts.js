// Business logic

function Idea(parameterNameInput, parameterIdeaDescription) {
  this.nameInput = parameterNameInput;
  this.ideaDesc = parameterIdeaDescription;
  this.comments = ["comment 1", "comment2"];
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


    $(".idea-section").prepend('<div class="col-xs-12 col-sm-6 col-md-4 idea-box">' +
                              '<p class="new-idea">' + newIdeaEntered.ideaDesc + '</p>' +
                              '<p class="creator-name"> via ' + newIdeaEntered.nameInput + '</p>' +
                              '<button id="'+ newIdeaEntered.ideaId + '" class="btn btn-secondary btn-sm discussion" data-toggle="modal" data-target="#ideaModal">More</button>' +
                              '</div>');
$(".discussion").first().click(function() {
  var thisButtonId = $(this).attr('id');
  $("#ideaModal .modal-header").text(ideaDatabase[thisButtonId - 1].ideaDesc);
  ideaDatabase[thisButtonId - 1].comments.forEach(function(currentComment){
    $("#ideaModal .modal-body").prepend("<p class='visible-comment'>" + currentComment + "</p>");
  })

});

  $("input#enter-name").val("");
  $("textarea#idea-description").val("");

  });
});

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
  debugger;
  $("#CallToActionButtonId").click(function() {
    // page scrolls down to the second page
    });
  $("form#ForId").submit(function(event) {
    event.preventDefault();
    if (document.getElementById("anonymous").checked) {
      var userName = "Anonymous";
    }
    else {
      var userName = $("input#EnterYourNameId").val();
    };

    var userIdea = $("input#OpenSoursedCollaborationId").val();

    var newIdeaEntered = new Idea(userName, userIdea);


    ideaDatabase.push(newIdeaEntered);

    var uniqueId = ideaDatabase.length;
    newIdeaEntered.ideaId = uniqueId;




    $("#IdeaSection").prepend('<div class="newIdeaBox">' +
                              '<p class = "newIdea>' + newIdeaEntered.ideaDesc + '</p>' +
                              '<p class = "creatorName"> via' + newIdeaEntered.nameInput + '</p>' +
                              '<button id="'+ newIdeaEntered.ideaId + '" class="btn btn-secondary btn-sm discussion >More</button>' +
                              '</div>');
$(".discussion").first().click(function() {
  var thisButtonId = $(this).attr('id');

})


  });
});

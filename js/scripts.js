// Business logic

function Idea(name, ideaDesc, comments) {
  this.name = name;
  this.ideaDesc = ideaDesc;
  this.comments = comments;
}

// Idea.prototype.ideaBox = function() {
//   this.
// }

//Front-End Logis:

$(document).ready(function () {
  $("#CallToActionButtonId").click(function(event) {
    page scrolls down to the second page
    });
  event.preventDefault();
  $("form#ForId").submit(function(event) {
    if (document.getElementById("anonymous").checked) {
      var userName = "Anonymous"
    }
    else {
      var userName = $("input#EnterYourNameId").val();
    };

    var userIdea = $("input#OpenSoursedCollaborationId").val();

    var newIdeaEntered = new Idea (userName, userIdea);

    // User Interface Logic

  });
});

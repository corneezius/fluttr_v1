// Business logic

function Idea(name, idea) {
  this.nameInput = name;
  this.ideaDesc = idea;
  this.comments = [];
  this.timeStamp = new Date();
  this.ideaId = 1;
}
var ideaDatabase = [];

//Front-End Logic:

$(document).ready(function () {

  var currentID;


$("#anonymous-check").click(function() {
  if (document.getElementById("anonymous-check").checked) {
  $("#hideName").hide();
  } else {
  $("#hideName").show();
  }
});


  $("form#user-idea").submit(function(event) {
    event.preventDefault();
    if (document.getElementById("anonymous-check").checked) {
      var userName = "Anonymous";
    }
    else {
      var userName = $("input#enter-name").val();
    }

    var userIdea = $("textarea#idea-description").val();

    var newIdeaEntered = new Idea(userName, userIdea);

    ideaDatabase.push(newIdeaEntered);

    var uniqueId = ideaDatabase.length;
    newIdeaEntered.ideaId = uniqueId;

    if (userIdea === "") {
      alert("Please enter your idea in the field and try again!")
    }
    else {

      var bgColorArray = ['#FF6400', '#E138AA', '#00b398', '#B3001B', '#A54797'];
      selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

      $(".idea-section").prepend('<div style="background-color: ' + selectBG + ';" class="col-xs-12 col-sm-6 col-md-4 idea-box">' +
                                '<img class="idea-logo-white" src="img/logo-white.png" alt="fluttr logo">' +
                                '<p class="new-idea">' + newIdeaEntered.ideaDesc + '</p>' +
                                '<p class="creator-name"> via ' + newIdeaEntered.nameInput + '</p>' +
                                '<button id="'+ newIdeaEntered.ideaId + '" class="btn btn-secondary btn-sm discussion" data-toggle="modal" data-target="#idea-modal">More</button>' +
                                '</div>');

      $(".discussion").first().click(function() {
        $(".visible-comment").text("");
        var thisButtonId = $(this).attr('id');
        currentID = thisButtonId;
        $("#idea-modal .modal-header").text(ideaDatabase[thisButtonId - 1].ideaDesc);
        ideaDatabase[thisButtonId - 1].comments.forEach(function(currentComment) {
          $("#idea-modal .modal-body").prepend("<p class='visible-comment'>" + currentComment + "</p>");
        });
      });

      $(".submit-comment").first().click(function() {
        var newComment = $(".input-comment").val();
        $("#idea-modal .modal-body").prepend("<p class='visible-comment'>" + newComment + "</p>");
        ideaDatabase[currentID - 1].comments.push(newComment);
        $(".input-comment").val("");
      });

      $("input#enter-name").val("");
      $("textarea#idea-description").val("");
    }
  });

});

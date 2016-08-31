$(document).ready(function() {
  $("#call-to-action").click(function(event) {

    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".form-section").offset().top - 70
    }, 800);

  }); //end click
}); //end ready

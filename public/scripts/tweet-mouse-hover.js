$(document).ready(function() {

  //Mouse over/out
  $(".tweet").on('mouseenter', function() {
    $(this).addClass("mouse-enter");
    // $(this).children('.tweet-header').children('.username').addClass("mouse-enter-text");
    $('.username').addClass("mouse-enter-text");
    $('.tag').addClass("mouse-enter-text");
    $('.icons').addClass("mouse-enter-icons");
    $('.user-image').addClass("mouse-enter-user-image");
  });

  $(".tweet").on('mouseleave', function() {
    $(this).removeClass("mouse-enter");
    $('.username').removeClass("mouse-enter-text");
    $('.tag').removeClass("mouse-enter-text");
    $('.icons').removeClass("mouse-enter-icons");
    $('.user-image').removeClass("mouse-enter-user-image");

  });
});
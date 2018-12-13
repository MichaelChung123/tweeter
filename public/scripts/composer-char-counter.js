$(document).ready(function() {
  console.log("ready");
  let counter = 10;

  $(".new-tweet .textbox").on('input', function() {
    let inputLength = this.value.length;
    let counterAccess = $(this).parent().children('.counter');
    let counterNum = counter - inputLength;

    if(counterNum < 0) {
      counterAccess.addClass("negative-counter");
    } else {
      counterAccess.removeClass("negative-counter");
    }

    counterAccess.text(counterNum);
  });

});
$(document).ready(function () {
  var i = 0;
  setInterval(function () {
    i++;
    if (i > 2) {
      i = 0;
    }
    $(".img_wrap").animate({
      left: -1000 * i,
    });
  }, 1000);
  $(".right").click(function () {
    i++;
    if (i > 2) {
      i = 0;
    }
    $(".img_wrap").animate({
      left: -1000 * i,
    });
  });

  $(".left").click(function () {
    i--;
    if (i < 0) {
      i = 2;
    }
    $(".img_wrap").animate({
      left: -1000 * i,
    });
  });
});

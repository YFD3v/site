
$(document).ready(() => {
  $("#desktop a").click(function () {
    var href = $(this).attr("href");
    var offSetTop = $(href).offset().top;

    $("html,body").animate({ scrollTop: offSetTop }, 1000);

    return false;
  });

  $("#backToHome").click(function () {
    let elemento = document.getElementById("top");
    console.log("clicked");
    let divScroll = $(elemento).offset().top;
    $("html,body").animate({ scrollTop: divScroll }, 1000);
  });

  $("#mobile a").click(function () {
    var href = $(this).attr("href");
    var offSetTop = $(href).offset().top;

    $("html,body").animate({ scrollTop: offSetTop }, 1000);

    return false;
  });
});

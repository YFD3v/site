import $ from "jquery";

$(document).ready(() => {
  $("#mobile > h3").click(function () {
    var listaMenu = $("#mobile-list");
    if (listaMenu.is(":hidden") == true) {
      listaMenu.slideToggle();
    } else {
      listaMenu.slideToggle();
    }
  });
});

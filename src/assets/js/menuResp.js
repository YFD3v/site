jQuery(document).ready(() => {
  jQuery("#mobile > h3").click(function () {
    var listaMenu = jQuery("#mobile-list");
    if (listaMenu.is(":hidden") == true) {
      listaMenu.slideToggle();
    } else {
      listaMenu.slideToggle();
    }
  });
});

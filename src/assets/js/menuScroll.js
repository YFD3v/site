



jQuery(document).ready(() => {
  jQuery("#desktop a").click(function () {
    var href = jQuery(this).attr("href");
    var offSetTop = jQuery(href).offset().top;

    jQuery("html,body").animate({ scrollTop: offSetTop }, 1000);

    return false;
  });

  jQuery("#backToHome").click(function () {
    let elemento = document.getElementById("top");
    console.log("clicked");
    let divScroll = jQuery(elemento).offset().top;
    jQuery("html,body").animate({ scrollTop: divScroll }, 1000);
  });

  jQuery("#mobile a").click(function () {
    var href = jQuery(this).attr("href");
    var offSetTop = jQuery(href).offset().top;

    jQueryquery("html,body").animate({ scrollTop: offSetTop }, 1000);

    return false;
  });
});

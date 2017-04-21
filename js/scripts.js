$(function() {
  $(".panel").click(function() {
    $(this).find("img").toggle();
    $(this).find("p").toggle();
  });
});

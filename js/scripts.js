$(document).ready(function() {
  $("#first").click(function() {
    $("#first").removeClass("yellow, hidden");
    $("#javascript").addClass("yellow");
    $("#first img, #first .panel-footer").toggleClass("hidden");
    $("#javascript").toggle();
  });

  $("#second").click(function() {
    $("#second").removeClass("red, hidden");
    $("#operators").addClass("red");
    $("#second img, #second .panel-footer").toggleClass("hidden");
    $("#operators").toggle();
  });

  $("#third").click(function() {
    $("#third").removeClass("yellow, hidden");
    $("#variables").addClass("yellow");
    $("#third img, #third .panel-footer").toggleClass("hidden");
    $("#variables").toggle();
  });

  $("#forth").click(function() {
    $("#forth").removeClass("blue, hidden");
    $("#variable-naming").addClass("blue");
    $("#forth img, #forth .panel-footer").toggleClass("hidden");
    $("#variable-naming").toggle();
  });

  $("#fifth").click(function() {
    $("#fifth").removeClass("grey, hidden");
    $("#functions").addClass("grey");
    $("#fifth img, #fifth .panel-footer").toggleClass("hidden");
    $("#functions").toggle();
  });

  $("#sixth").click(function() {
    $("#sixth").removeClass("blue, hidden");
    $("#methods").addClass("blue");
    $("#sixth img, #sixth .panel-footer").toggleClass("hidden");
    $("#methods").toggle();
  });

  $("#seventh").click(function() {
    $("#seventh").removeClass("grey, hidden");
    $("#arguments").addClass("grey");
    $("#seventh img, #seventh .panel-footer").toggleClass("hidden");
    $("#arguments").toggle();
  });

  $("#eighth").click(function() {
    $("#eighth").removeClass("blue, hidden");
    $("#parameters").addClass("blue");
    $("#eighth img, #eighth .panel-footer").toggleClass("hidden");
    $("#parameters").toggle();
  });

  $("#ninth").click(function() {
    $("#ninth").removeClass("blue, hidden");
    $("#return-statement").addClass("blue");
    $("#ninth img, #ninth .panel-footer").toggleClass("hidden");
    $("#return-statement").toggle();
  });

  $("#tenth").click(function() {
    $("#tenth").removeClass("yellow, hidden");
    $("#strings").addClass("yellow");
    $("#tenth img, #tenth .panel-footer").toggleClass("hidden");
    $("#strings").toggle();
  });

  $("#eleventh").click(function() {
    $("#eleventh").removeClass("grey, hidden");
    $("#booleans").addClass("grey");
    $("#eleventh img, #eleventh .panel-footer").toggleClass("hidden");
    $("#booleans").toggle();
  });

  $("#twelfth").click(function() {
    $("#twelfth").removeClass("yellow, hidden");
    $("#undefined").addClass("yellow");
    $("#twelfth img, #twelfth .panel-footer").toggleClass("hidden");
    $("#undefined").toggle();
  });

  $("#thirteenth").click(function() {
    $("#thirteenth").removeClass("red, hidden");
    $("#not-a-number").addClass("red");
    $("#thirteenth img, #thirteenth .panel-footer").toggleClass("hidden");
    $("#not-a-number").toggle();
  });

  $("#fourteenth").click(function() {
    $("#fourteenth").removeClass("red, hidden");
    $("#escape").addClass("red");
    $("#fourteenth img, #fourteenth .panel-footer").toggleClass("hidden");
    $("#escape").toggle();
  });

  $("#fifteenth").click(function() {
    $("#fifteenth").removeClass("grey, hidden");
    $("#alerts").addClass("grey");
    $("#fifteenth img, #fifteenth .panel-footer").toggleClass("hidden");
    $("#alerts").toggle();
  });

  $("#sixteenth").click(function() {
    $("#sixteenth").removeClass("yellow, hidden");
    $("#comments").addClass("yellow");
    $("#sixteenth img, #sixteenth .panel-footer").toggleClass("hidden");
    $("#comments").toggle();
  });

  $("#seventeenth").click(function() {
    $("#seventeenth").removeClass("blue, hidden");
    $("#jQuery").addClass("blue");
    $("#seventeenth img, #seventeenth .panel-footer").toggleClass("hidden");
    $("#jQuery").toggle();
  });

  $("#eighteenth").click(function() {
    $("#eighteenth").removeClass("blue, hidden");
    $("#atributes").addClass("blue");
    $("#eighteenth img, #eighteenth .panel-footer").toggleClass("hidden");
    $("#atributes").toggle();
  });
});

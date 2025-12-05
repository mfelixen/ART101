$("#creature").click(function() {
  $("#status").text("You clicked me! 🐾");
  $("#creature").css("background", "lavender");
});
$("#creature").hover(
  function() { $("#status").text("You’re close... 👀"); },
  function() { $("#status").text("You left me :("); }
);
$("#creature").dblclick(function() {
  $("#status").text("You woke me up!! 😳");
  $("#creature").css("transform", "scale(1.2)");
});
$("#creature").dblclick(function() {
  $("#status").text("You woke me up!! 😳");
  $("#creature").css("transform", "scale(1.2)");
});
$(document).keydown(function(event) {
  $("#status").text("You pressed: " + event.key);
});
$(document).mousemove(function(event) {
  $("#creature").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
});
$("#creature2").focus(function() {
  $("#creature2-status").text("I’m focused! 🧠");
  $("#creature2").css("background", "skyblue");
});

$("#creature2").blur(function() {
  $("#creature2-status").text("You unfocused me… 😢");
  $("#creature2").css("background", "lightblue");
});
$("#color-picker").change(function() {
  let newColor = $(this).val();

  $("#creature2").css("background", newColor);
  $("#creature2-status").text("Changed to " + newColor + " 🧪");
});
// A previous-lab style variable (just for the assignment)
let themeMode = "pink";

function changeBackground(userColor) {
    const feedback = $("#feedback");

    // conditionals: check if the user typed something
    if (userColor.trim() === "") {
        feedback.text("Please type a color! 💗");
        return;
    }

    // Apply the new color
    $("body").css("background-color", userColor);

    // Update text & mood
    themeMode = userColor;

    feedback.text("The background is now: " + userColor + " 🌈");
}

// BUTTON EVENT
$("#applyBtn").on("click", function () {
    const colorTyped = $("#colorInput").val();

    // Call function WITH parameter
    changeBackground(colorTyped);
});

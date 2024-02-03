document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = 'hug.html'; // Redirect to the hug animation page
});


document.getElementById("lastChanceButton").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Think again? The 'Yes' button is getting bigger for you!";
    // Increase the size of the Yes button
    const yesButton = document.getElementById("yesButton");
    let currentFontSize = parseFloat(window.getComputedStyle(yesButton, null).getPropertyValue('font-size'));
    let currentPadding = parseFloat(window.getComputedStyle(yesButton, null).getPropertyValue('padding'));
    yesButton.style.fontSize = (currentFontSize + 2) + 'px'; // Increase font size
    yesButton.style.padding = (currentPadding + 5) + 'px 20px'; // Increase padding
});

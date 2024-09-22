let bgContainerEl = document.getElementById("bgContainer");
let themeUserInputEl = document.getElementById("themeUserInput");
let headingEl = document.getElementById("heading");

themeUserInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInputEl.value;

        if (themeUserInputVal === "Light") {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            headingEl.style.color = "#014d40";
        } else if (themeUserInputVal === "Dark") {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            headingEl.style.color = "#ffffff";
        } else {
            alert("Enter a valid theme");
        }
    }
})
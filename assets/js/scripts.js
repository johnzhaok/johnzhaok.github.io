/**
 *  Switch between English and Chinese name
 */
var switchNames = () => {
    var englishName = document.getElementById("nameSwapEnglish");
    var chineseName = document.getElementById("nameSwapChinese");

    englishName.classList.toggle("hidden");
    chineseName.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function(event) {
    var colorBlockButton = document.getElementById("colorBlockButton");

    if (colorBlockButton !== null) {
        colorBlockButton.addEventListener("click", switchNames);
    }

    console.log("Hello!");
});

$(document).ready(function() {
    console.log("success");
    changeColor();
})

function displayTitle(name) {
    let title = $('#title');
    title.append($(`<title>Fair Fashion</Title`));
} 

function changeColor() {
    let title = document.getElementById("myHeader");
    title.style.setProperty("color", "red");
    console.log("color changed to red");
    title.style.setProperty("color", "black");
    console.log("color changed back to black!");
}
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
    title.style.setProperty("color", "black");
    console.log("AHHHHHHHH");
}
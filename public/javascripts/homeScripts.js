$(document).ready(function() {
    console.log("success");
    changeColor();
    addEmail();
});

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

function addEmail() {
    var email = prompt("Please enter your email for 25% off your next purchase!");
    var emptyString = "";
    if (email != null) {
        console.log(email);
        alert("Thank you! Check your inbox for your discount code!");
    } else if(email === emptyString || email === null) {
        console.log("no email provided by user");
    }
}

$(document).ready(function() {
    console.log("success");
    newMember();
})

function verify(){
    
    if (window.confirm("Would you like to become a member of Fair Fashion?")){
        var name = prompt("Please enter your name", "John Doe");
        if (name == null || name == ""){
            alert("No name submitted.");
        }
        else {
            var birthday = prompt("Please enter your birthday", "MM/DD/YYYY");
            if (birthday == null || birthday == ""){
                alert("No birthday entered.");
                birthday;
            }
            else{
                var email = prompt("Please enter your email", "johndoe@gmail.com");
                if (email == null || email ==""){
                    alert("No email entered.");
                    email;
                }
                else{
                    var password = prompt("Please enter a password", "*********");
                    
                    if (password == null || password == ""){
                        alert("No password entered.");
                    }
                    else {
                        alert("Welcome to Fair Fashion "+ usersName +"!");
                        newMember(name, birthday, email, password);
                        $("button").css("color", "blue");
                        $("#memberButton").innerHTML("Welcome");
                    }
                    
                }
            }
        }
    }
    else {
        alert("You can sign up at any moment.");
    }
}
function newMember(name, birthday, email, password){
    var members = new Array();
    var newMember = {
        usersName: name,
        usersBirthday: birthday,
        usersEmail: email,
        usersPassword: password
    };
    members.push(newMember);
}
    


$(document).ready(function() {
    console.log("success");
    newMember();
})

function newMember(){
    var members = new Array();
    var txt;
    if (confirm("Would you like to become a member of Fair Fashion?")){
        var name = prompt("Please enter your name", "John Doe");
        if (name == null || name == ""){
            txt = "No name submitted.";
        }
        else {
            var birthday = prompt("Please enter your birthday", "MM/DD/YYYY");
            if (birthday == null || bday == ""){
                txt = "No birthday entered.";
            }
            else{
                var email = prompt("Please enter your email", "johndoe@gmail.com");
                if (email == null || email ==""){
                    txt = "No email entered.";
                }
                else{
                    var password = prompt("Please enter a password", "*********");
                    var confirm = prompt("Please confirm your password", "*******");
                    if (password == null || password == ""){
                        txt = "No password entered."
                    }
                    else if(confirm == null|| confirm == ""){
                        txt = "No confirmation entered.";
                    }
                    else if(password != confirm){
                        txt = "Passwords entered do not match.";
                    }
                    else if(password == confirm){
                        var newMember = {
                            usersName: name,
                            usersBirthday: birthday,
                            usersEmail: email,
                            usersPassword: password
                        };
                        members.push(newMember);
                        alert("Welcome to Fair Fashion "+ usersName +"!");
                    }
                }
            }
        }
    }
    else {
        txt = "You can sign up at any moment.";
    }
}


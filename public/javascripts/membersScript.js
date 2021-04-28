$(document).ready(function() {
    console.log("success");
    //doAjaxRequest();
})

function verify(name, birthday, email, password){
        
        if (name == null || name == ""){
            alert("No name submitted.");
        }
        
        if (birthday == null || birthday == ""){
            alert("No birthday entered.");
        }
        
        if (email == null || email ==""){
            alert("No email entered.");
        }
                    
        if (password == null || password == ""){
            alert("No password entered.");
        }
}

function newMember(){
    var name = $("input#name").val(); //adapted from https://stackoverflow.com/questions/27824908/how-to-get-form-input-using-jquery 
    var birthday = $("input#bday").val();
    var email = $("input#email").val();
    var password = $("input#password").val();   
    verify(name, birthday, email, password);
    var members = [];
    var newMember = {
        usersName: name,
        usersBirthday: birthday,
        usersEmail: email,
        usersPassword: password
    };
    members.push(newMember);
    alert("Welcome to Fair Fashion "+ usersName +"!");
    $("button").css("color", "blue");
    $("#memberButton").innerHTML("Welcome");
}

var settings = {
    "url": "https://api.eva.pingutil.com/email?email=faithbacci@aol.com",
    "method": "GET",
    "timeout": 0,
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
$(document).ready(function() {
    console.log("success");
    $(#)
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
    verifyEmail(email);
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

function verifyEmail(email){
    $.ajax({
        method: 'PUT',

    })
}

function viewMembership(){
    dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
          "View account": $.ajax({method: 'GET', app.get()}),
          Cancel: function() {
            dialog.dialog( "close" );
          }
        }
    }


/*$( function() {
    var dialog, form,
 
      // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
      email = $( "#email" ),
      password = $( "#password" ),
      allFields = $( [] ).add( email ).add( password ),
});

*/
function validation()
{
    var user = document.getElementById("username").value;
    var pass =document.getElementById("password").value;
    if(user == "Admin" && pass == "Admin"){
        alert("Login SeccessFully");
        return true;
    } 
    else{
        alert("InCorrect Login Details");
        return false;
    }
}

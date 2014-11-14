
function logincheck(){
    usn = document.getElementById("usn").value;
    psw = document.getElementById("psw").value;
    
    //console.log("loginDataAs: "usn+","+psw);
    
    if((usn=="IdeaLabUser") && (psw=="IdeaLabPsw")){
        
        console.log("Login Succesful, "+usn);
        document.getElementById("signin").innerHTML="\
        <p>Welcome User:</p>"+"<a href=\"https://www.facebook.com/groups/806895806041239/\">Dev Facebook Group</a>"
    
    }
}
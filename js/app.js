function loginFunction(){
    var userName=document.getElementById("userName").value;
    var userId=document.getElementById("userID").value;
    var password=document.getElementById("pwd").value;

    if(userName=="abcd" && userId=="U0001"  && password=="1234"){
        // alert("avda");
        window.location.assign("customer.html");
    }
    else{
        alert("Please Try Again");
    }
}
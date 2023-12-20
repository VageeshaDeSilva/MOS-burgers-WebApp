function loginFunction(event){
    event.preventDefault();

    const userName=document.getElementById("userName").value;
    const password=document.getElementById("pwd").value;

    if(userName==="cashier" && password==="1234"){
        window.location.href="./view/cashierCustomer.html";
    }
    else if(userName==="admin" && password==="1234"){
        window.location.href="./view/adminItems.html";
    }
    else{
        alert("Invalid UserName or Password");
    }
}
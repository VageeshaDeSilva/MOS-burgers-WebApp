const customerArr=[];

function addCustomer(){

    var customerName = document.getElementById("customerName").value;
    var customerPhoneNum = document.getElementById("customerPhoneNum").value;

    const customer={
        name:customerName,
        number:customerPhoneNum
    };

    const isExist = customerArr.some(customer => customer.name === customerName && customer.number === customerPhoneNum);


    if(isExist){
        alert("Custer is Already Exist");
        document.getElementById("customerName").disabled = true;
        document.getElementById("customerPhoneNum").disabled = true;
        document.getElementById("addCustomerBtn").style.display = 'none';
        document.getElementById("addNewCustomerBtn").style.display = 'block';
        document.getElementById("addNewCustomerBtn").style.marginTop='6em';
    }
    else if(!isExist && customerName!=='' && customerPhoneNum!==''){
        customerArr.push(customer);
        document.getElementById("customerName").disabled = true;
        document.getElementById("customerPhoneNum").disabled = true;
        document.getElementById("addCustomerBtn").style.display = 'none';
        document.getElementById("addNewCustomerBtn").style.display = 'block';
        document.getElementById("addNewCustomerBtn").style.marginTop='6em';
    }
    
    // console.log(customerArr);                     
            
}

function addNewCustomer(){
    customerName.value='';
    customerPhoneNum.value='';
    document.getElementById("addNewCustomerBtn").style.display = 'none';
    document.getElementById("addCustomerBtn").style.display = 'block';
    document.getElementById("customerName").disabled = false;
    document.getElementById("customerPhoneNum").disabled = false;
}

function isExist(customer){

}
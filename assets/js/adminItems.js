
// addItem Form Load and colse functions======================================================
document.querySelector("#addItemBtn").addEventListener("click",()=>{
    document.querySelector(".formAddItems").style.opacity="1";
});

document.querySelector(".formAddItems .close-btn").addEventListener("click",()=>{
    document.querySelector(".formAddItems").style.opacity="0";
});



// add item functions==========================================================================
const itemsArr=[];

function addItem(){

    var itemName=document.getElementById("itemNameField").value;
    // var description=document.getElementById("descriptionArea").value;
    var itemPrice=document.getElementById("priceField").value; 
    var itemDiscount=document.getElementById("discountField").value; 
    var itemCategory=document.getElementById("categoryDropdown").value;

    const item={
        // code : ;
        name : itemName,
        // descript:description,
        price:itemPrice,
        discount:itemDiscount,
        category:itemCategory
        // image: ;
        
    };

    const isExist = itemsArr.some(item => item.name === itemName);

    if(!isExist){
        itemsArr.push(item);
        itemNameField.value='';
        // descriptionArea.value='';
        priceField.value='';
        discountField.value='';
        categoryDropdown.value="Burgers";
    }
    else{
        alert("Item is Already exist !");
        itemNameField.value='';
    }

    console.log(itemsArr);
}

const testArr=[
    {
        name:"Classic Burger (Large)",
        price:"750.00",
        discount:"",
        category:"Burgers",
        image:"../assets/images/burger images/1.jpg"
    },
    {
        name:"Classic Burger (Regular)",
        price:"1500.00",
        discount:"15",
        category:"Burgers",
        image:"../assets/images/burger images/1.jpg"
    },
    {
        name:"Turkey Burger",
        price:"1600.00",
        discount:"",
        category:"Burgers",
        image:"../assets/images/burger images/1.jpg"
    },
    {
        name:" Crispy Chicken Submarine (Large) ",
        price:"2000.00",
        discount:"",
        category:"Submarines",
        image:"../assets/images/burger images/2.jpg"
    },
    {
        name:"Crispy Chicken Submarine (Regular) ",
        price:"1500.00 ",
        discount:"",
        category:"Submarines",
        image:"../assets/images/burger images/2.jpg"
    },
    {
        name:"Chicken Submarine (Large)",
        price:"1800.00",
        discount:"3",
        category:"Submarines",
        image:"../assets/images/burger images/2.jpg"
    },
    {
        name:"Steak Fries (Large)",
        price:"1200.00",
        discount:"",
        category:"Fries",
        image:"../assets/images/burger images/3.jpg"
    },
    {
        name:"Steak Fries (Medium)",
        price:"600.00",
        discount:"",
        category:"Fries",
        image:"../assets/images/burger images/3.jpg"
    },
    {
        name:"French Fries (Large)",
        price:"800.00",
        discount:"",
        category:"Fries",
        image:"../assets/images/burger images/3.jpg"
    },
    {
        name:"Chicken n Cheese Pasta",
        price:"1600.00",
        discount:"15",
        category:"Pasta",
        image:"../assets/images/burger images/4.jpg"
    },
    {
        name:"Chicken Penne Pasta",
        price:"1700.00",
        discount:"",
        category:"Pasta",
        image:"../assets/images/burger images/4.jpg"
    },
    {
        name:"Ground Turkey Pasta Bake",
        price:"2900.00 ",
        discount:"10",
        category:"Pasta",
        image:"../assets/images/burger images/4.jpg"
    },
    {
        name:"Fried Chicken (Small)",
        price:"1200.00",
        discount:"",
        category:"Chicken",
        image:"../assets/images/burger images/5.jpg"
    },
    {
        name:"Fried Chicken (Regular)",
        price:"2300.00",
        discount:"10",
        category:"Chicken",
        image:"../assets/images/burger images/5.jpg"
    },
    {
        name:"Fried Chicken (Large) ",
        price:"3100.00 ",
        discount:"5",
        category:"Chicken",
        image:"../assets/images/burger images/5.jpg"
    },
    {
        name:"Pepsi (330ml)",
        price:"990.00 ",
        discount:"5",
        category:"Beverages",
        image:"../assets/images/burger images/6.jpg"
    },
    {
        name:"Coca-Cola (330ml)",
        price:"1230.00 ",
        discount:"",
        category:"Beverages",
        image:"../assets/images/burger images/6.jpg"
    },
    {
        name:"Sprite (330ml)",
        price:"1500.00",
        discount:"3",
        category:"Beverages",
        image:"../assets/images/burger images/6.jpg"
    },

];


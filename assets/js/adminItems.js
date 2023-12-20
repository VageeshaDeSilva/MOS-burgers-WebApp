
// addItem Form open and colse function======================================================
document.querySelector("#addItemBtn").addEventListener("click",()=>{
    document.querySelector(".formAddItems").style.display="block";
});

document.querySelector(".formAddItems .close-btn").addEventListener("click",()=>{
    document.querySelector(".formAddItems").style.display="none";
});



// add item functions==========================================================================
let itemCode=1001;

const itemsArr=[];

function addItem(){

    var itemName=document.getElementById("itemNameField").value;
    var itemPrice=document.getElementById("priceField").value; 
    var itemDiscount=document.getElementById("discountField").value; 
    var itemCategory=document.getElementById("categoryDropdown").value;
    var itemImage=document.querySelector("#burgerImage");

    // itemImage.addEventListener("change",function(){
    //
    // })

    const item={
        code        :   itemCode,
        name        :   itemName,
        price       :   itemPrice,
        discount    :   itemDiscount,
        category    :   itemCategory,
        // image       :   itemImages   
    };

    const isExist = itemsArr.some(item => item.name === itemName);

    if(!isExist && itemNameField.value!=='' && priceField.value!==''){        
        itemsArr.push(item);
        itemCode++;
        itemNameField.value='';
        priceField.value='';
        discountField.value='';
        categoryDropdown.value="Burgers";
        displayMenuItems(itemsArr);
    }
    else{
        alert("Invalid Item !");
        itemNameField.value='';
    }
    // 
}


// test arr with adding items==========================================================
// let testArr=[
//     {
//         name:"Classic Burger (Large)",
//         price:"750.00",
//         discount:"0",
//         category:"Burgers",
//         image:"../assets/images/burgerImages/1.png"
//     },
//     {
//         name:"Classic Burger (Regular)",
//         price:"1500.00",
//         discount:"15",
//         category:"Burgers",
//         image:"../assets/images/burgerImages/2.png"
//     },
//     {
//         name:"Turkey Burger",
//         price:"1600.00",
//         discount:"0",
//         category:"Burgers",
//         image:"../assets/images/burgerImages/3.png"
//     },
//     {
//         name:" Crispy Chicken Submarine (Large) ",
//         price:"2000.00",
//         discount:"0",
//         category:"Submarines",
//         image:"../assets/images/burgerImages/4.png"
//     },
//     {
//         name:"Crispy Chicken Submarine (Regular) ",
//         price:"1500.00 ",
//         discount:"0",
//         category:"Submarines",
//         image:"../assets/images/burgerImages/5.png"
//     },
//     {
//         name:"Chicken Submarine (Large)",
//         price:"1800.00",
//         discount:"3",
//         category:"Submarines",
//         image:"../assets/images/burgerImages/6.png"
//     },
//     {
//         name:"Steak Fries (Large)",
//         price:"1200.00",
//         discount:"0",
//         category:"Fries",
//         image:"../assets/images/burgerImages/7.png"
//     },
//     {
//         name:"Steak Fries (Medium)",
//         price:"600.00",
//         discount:"0",
//         category:"Fries",
//         image:"../assets/images/burgerImages/8.png"
//     },
//     {
//         name:"French Fries (Large)",
//         price:"800.00",
//         discount:"0",
//         category:"Fries",
//         image:"../assets/images/burgerImages/9.png"
//     },
//     {
//         name:"Chicken n Cheese Pasta",
//         price:"1600.00",
//         discount:"15",
//         category:"Pasta",
//         image:"../assets/images/burgerImages/10.png"
//     },
//     {
//         name:"Chicken Penne Pasta",
//         price:"1700.00",
//         discount:"0",
//         category:"Pasta",
//         image:"../assets/images/burgerImages/11.png"
//     },
//     {
//         name:"Ground Turkey Pasta Bake",
//         price:"2900.00 ",
//         discount:"10",
//         category:"Pasta",
//         image:"../assets/images/burgerImages/12.png"
//     },
//     {
//         name:"Fried Chicken (Small)",
//         price:"1200.00",
//         discount:"0",
//         category:"Chicken",
//         image:"../assets/images/burgerImages/13.png"
//     },
//     {
//         name:"Fried Chicken (Regular)",
//         price:"2300.00",
//         discount:"10",
//         category:"Chicken",
//         image:"../assets/images/burgerImages/14.png"
//     },
//     {
//         name:"Fried Chicken (Large) ",
//         price:"3100.00 ",
//         discount:"5",
//         category:"Chicken",
//         image:"../assets/images/burgerImages/15.png"
//     },
//     {
//         name:"Pepsi (330ml)",
//         price:"990.00 ",
//         discount:"5",
//         category:"Beverages",
//         image:"../assets/images/burgerImages/16.png"
//     },
//     {
//         name:"Coca-Cola (330ml)",
//         price:"1230.00 ",
//         discount:"0",
//         category:"Beverages",
//         image:"../assets/images/burgerImages/17.png"
//     },
//     {
//         name:"Sprite (330ml)",
//         price:"1500.00",
//         discount:"3",
//         category:"Beverages",
//         image:"../assets/images/burgerImages/18.png"
//     },
// ];

const itemsSection=document.querySelector(".itemCards");
const filterBtns=document.querySelectorAll(".filterBtn");

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(itemsArr);
});


function displayMenuItems(itemsArrtemp){
    let displayItems=itemsArrtemp.map(function(item){
        // 
        return `<article class="card card-body w-25 m-3 position-relative flex-column">
                    <img src="../assets/images/MoS Logo.png" class="cardImages" alt=''> 
                    <div>
                        <h5 class="item-name">${item.name}</h5>
                        <h6>Rs.${item.price}</h6>
                        <h6>${item.discount}%</h6>
                        <button class="btn btn-danger" onclick="deleteItem(${item.code})">Delete</button>
                    </div>
                </article>`;
    });
    displayItems = displayItems.join("");
    itemsSection.innerHTML = displayItems;

    //
}


// item delete button function================================================
function deleteItem(itcode){
    const index = itemsArr.findIndex(item => item.code === itcode);
    itemsArr.splice(index,1);
    displayMenuItems(itemsArr);
}


// filter buttons function=====================================================
filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const catego= e.currentTarget.dataset.id;
        const menuCatego=itemsArr.filter(function(menuItem){
            if(menuItem.category===catego){
                return menuItem;
            }
            
        });
        //
        if(catego==="all"){
            displayMenuItems(itemsArr);
        }
        else{
            displayMenuItems(menuCatego);
        }
    });
})
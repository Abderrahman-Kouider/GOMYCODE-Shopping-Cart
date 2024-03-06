// Buttons to increase and decrease amount of products in cart

let input1 = parseInt(document.getElementById('item-1-input').value)
let input2 = parseInt(document.getElementById('item-2-input').value)
let input3 = parseInt(document.getElementById('item-3-input').value)

const buttonIncrease1 = document.getElementById('increase-item-1')
const buttonIncrease2 = document.getElementById('increase-item-2')
const buttonIncrease3 = document.getElementById('increase-item-3')

const buttondecrease1 = document.getElementById('decrease-item-1')
const buttondecrease2 = document.getElementById('decrease-item-2')
const buttondecrease3 = document.getElementById('decrease-item-3')

buttonIncrease1.addEventListener('click', increment1)
buttonIncrease2.addEventListener('click', increment2)
buttonIncrease3.addEventListener('click', increment3)

buttondecrease1.addEventListener('click', decrement1)
buttondecrease2.addEventListener('click', decrement2)
buttondecrease3.addEventListener('click', decrement3)

var price1 = parseInt(document.getElementById('price1').innerText)
var price2 = parseInt(document.getElementById('price2').innerText)
var price3 = parseInt(document.getElementById('price3').innerText)

const removeItem1 = document.getElementById('bin1')
const removeItem2 = document.getElementById('bin2')
const removeItem3 = document.getElementById('bin3')

removeItem1.addEventListener('click', deleteItem1)
removeItem2.addEventListener('click', deleteItem2)
removeItem3.addEventListener('click', deleteItem3)

function increment1(){
    input1++
    document.getElementById('item-1-input').value = input1;
    price1 += 250;  
    updateTotal();
}

function increment2(){
    input2++
    document.getElementById('item-2-input').value = input2;
    price2 += 200;
    updateTotal();
}

function increment3(){
    input3++
    document.getElementById('item-3-input').value = input3;
    price3 += 200;
    updateTotal();
}


function decrement1(){
    if (input1 > 1) {
    input1--;
    document.getElementById('item-1-input').value = input1;
    price1 -= 250;
    updateTotal();
    } else {
        alert("The quantity cannot be less than 1, use the bin icon to delete item.")
    }
}

function decrement2() {
    if (input2 > 1) {
        input2--;
        document.getElementById('item-2-input').value = input2;
        price2 -= 200;
        updateTotal(); 
    } else {
        alert("The quantity cannot be less than 1, use the bin icon to delete item.")
    }
}

function decrement3() {
    if (input3 > 1) {
        input3--;
        document.getElementById('item-3-input').value = input3;
        price3 -= 200;  
        updateTotal();
    } else {
        alert("The quantity cannot be less than 1, use the bin icon to delete item.")
    }
}


//Adding totals and updating display


var total = price1 + price2 + price3

var totalSpan = document.getElementById('totalprice')

totalSpan.innerText = total;


function updateTotal(){

let total = price1 + price2 + price3;

totalSpan.innerText = total;
}

//deleting items using the bin icon
function deleteItem1() {
    var item1 = document.getElementById('shopping-item1');
    let total = price1 + price2 + price3
    total -= price1;
    item1.remove();
    totalSpan.innerText = total;
}

function deleteItem2() {
    var item2 = document.getElementById('shopping-item2');
    let total = price1 + price2 + price3
    total -= price2;
    item2.remove();
    totalSpan.innerText = total;
}

function deleteItem3() {
    var item3 = document.getElementById('shopping-item3');
    let total = price1 + price2 + price3
    total -= price3;
    item3.remove();
    totalSpan.innerText = total;
}
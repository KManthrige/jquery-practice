$(document).ready(readyNow)

const budget = 25000;
let purchases =[];

function addPurchase(){
    let newPurchase = {
        name: $('#purchaseNameIn').val(),
        price: $('#purchasePriceIn').val()
    }
    purchases.push(newPurchase)
    //clear the input boxes
    $('#purchaseNameIn').val('')
    $('#purchasePriceIn').val('')
}

function readyNow(){
    let sb = $('#startingBudget')
    sb.append (budget)
    //display the const budget on the dom
    $('#addPurchaseButton').on('click', addPurchase)
} 


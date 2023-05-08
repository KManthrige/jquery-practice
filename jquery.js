$(document).ready(readyNow)

const budget = 25000;
let purchases = [];

function addPurchase() {
    let newPurchase = {
        name: $('#purchaseNameIn').val(),
        price: $('#purchasePriceIn').val()
    }
    purchases.push(newPurchase)
    //clear the input boxes
    $('#purchaseNameIn').val('')
    $('#purchasePriceIn').val('')
    displayPurchases()
    caluculateBalance()
}

function caluculateBalance() {
    let totalCost = 0
    let remainder = 0
    for (i = 0; i < purchases.length; i++){
        totalCost += Number(purchases[i].price)
        console.log('total cost', totalCost)
    }
    remainder = budget-totalCost
    console.log('balance', remainder)
    let el = $('#remainingBudget')
    el.empty()
    el.append(remainder)
}

function displayPurchases() {
    let pm = $('#purchasesMade')
    pm.empty()
    for (i = 0; i < purchases.length; i++) {
        pm.append(`<li>` + purchases[i].name + ': $' + purchases[i].price + `</li>`)
    }
}


function readyNow() {
    let sb = $('#startingBudget')
    sb.append(budget)
    //display the const budget on the dom
    $('#addPurchaseButton').on('click', addPurchase)

}


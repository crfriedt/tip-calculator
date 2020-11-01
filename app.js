let billInput = document.getElementById("billInput");
let tipInput = document.getElementById("tipInput");
let totalPeople = document.getElementById("peopleInput");
let tipPerPerson = document.getElementById("tipPerPerson");
let totalPerPerson = document.getElementById("totalPerPerson");
let calculateButton = document.getElementById("resultButton");

calculateButton.addEventListener("click", function(){
  var billAmount = Number(billInput.value);
  var tipPercentage = Number(tipInput.value);
  var peopleNumber = Number(totalPeople.value);
  var tipToDecimal = tipPercentage / 100;

  if(peopleNumber === 1){
    var tipAmount = billAmount * tipToDecimal;
    let total = billAmount + tipAmount;
    let tipString = "Tip Amount: $" + tipAmount.toFixed(2);
    let totalString = "Total: $" + total.toFixed(2);

    document.getElementById('tipPerPerson').innerHTML = tipString;
    document.getElementById('totalPerPerson').innerHTML = totalString;
  } else {
    var tipAmount = billAmount * tipToDecimal / peopleNumber;
    let total = billAmount + tipAmount;
    let result = total / peopleNumber;
    let tipString = "Tip Per Person: $" + tipAmount.toFixed(2);
    let totalString = "Total Per Person: $" + result.toFixed(2);

    document.getElementById('tipPerPerson').innerHTML = tipString;
    document.getElementById('totalPerPerson').innerHTML = totalString;
  }


});




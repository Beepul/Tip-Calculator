const billInputDiv = document.getElementById('input-bill');
const tipInputDiv = document.getElementById('input-tip');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const grandTotal = document.getElementById('grand-total')

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculator = () => {
    const bill = Number(billInputDiv.value);
    const tipPercentage = Number(tipInputDiv.value) / 100;
    const tipAmount = bill * tipPercentage;
    const totalAmount = bill + tipAmount;
    const dividedAmount = totalAmount / numberOfPeople;
    grandTotal.innerText = `$${dividedAmount.toLocaleString('en-US',{maximumFractionDigits:2})}`;
}

const increase = () => {
    numberOfPeople += 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculator();
}
const decrease = () => {
    if(numberOfPeople <= 1 ){
        return
    }
    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculator();
}

const clearAll = () => {
    billInputDiv.value = null;
    tipInputDiv.value = null;
    grandTotal.innerText = `$${'0.00'}`;
    numberOfPeople = 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
}
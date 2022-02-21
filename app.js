// Getting value from input field 
function getValue(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    if (isNaN(inputValue) || inputValue < 0) {
        document.getElementById(id + '-error').style.display = 'block';

    } else {
        document.getElementById(id + '-error').style.display = 'none';
        return inputValue;
    }

}
// Adding all Expenses
function getAllExpanse() {
    return (
        getValue('food-input') +
        getValue('rent-input') +
        getValue('clothes-input')
    );
}
// setting input field blank 
function doEmptyInput(id) {
    document.getElementById(id).value = '';
}

// calculate section 
document
    .getElementById('calculate-button')
    .addEventListener('click', function () {
        document.getElementById('income-error').style.display = 'none';
        const totalIncome = getValue('total-income');
        const totalExpanse = getAllExpanse();
// error handaling 
        if (isNaN(totalIncome) || totalIncome < totalExpanse) {
            document.getElementById('income-error').style.display = 'block';
        }
        else {
            document.getElementById('income-error').style.display = 'none';

            const balance = totalIncome - totalExpanse;

            document.getElementById('total-expence').innerText =
                totalExpanse;
            document.getElementById('balance').innerText = balance;

            doEmptyInput('food-input');
            doEmptyInput('rent-input');
            doEmptyInput('clothes-input');
        }
    });

// Seving section 
document.getElementById('saving-btn').addEventListener('click', function () {
    const totalIncome = getValue('total-income');
    const savingPercentage = getValue('saving-percentage');
    const savingAmount = (totalIncome / 100) * savingPercentage;
    const balance = parseFloat(document.getElementById('balance').innerText);
    const remainingBalance = balance - savingAmount;
    console.log(remainingBalance)



// error handaling
    if (isNaN(savingPercentage)) {
        document.getElementById('saving-percentage-error').style.display = 'block';
    }
    else if (savingAmount > balance) {
        document.getElementById('saving-error').style.display = 'block';
        document.getElementById(saving - percentage - error).style.display = 'none';
    }
    else {
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;


// setting blank
        doEmptyInput('saving-percentage');
        doEmptyInput('total-income');
    }
});
function getValue(id) {
    return parseFloat(document.getElementById(id).value);
}

function getAllExpanse() {
    return (
        getValue('food-input') +
        getValue('rent-input') +
        getValue('clothes-input')
    );
}

function doEmptyInput(id) {
    document.getElementById(id).innerText = '';
}

document
    .getElementById('calculate-button')
    .addEventListener('click', function () {
        const totalIncome = getValue('total-income');
        const totalExpanse = getAllExpanse();
        const balance = totalIncome - totalExpanse;
        document.getElementById('total-expence').innerText = totalExpanse;
        document.getElementById('balance').innerText = balance;
    });

document.getElementById('saving-btn').addEventListener('click', function () {
    const totalIncome = getValue('total-income');
    const savingPercentage = getValue('saving-percentage');
    const savingAmount = (totalIncome / 100) * savingPercentage;

    document.getElementById('saving-amount').innerText = savingAmount;

    const balance = parseFloat(document.getElementById('balance').innerText);

    document.getElementById('remaining-balance').innerText =
        balance - savingAmount;
});

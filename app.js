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
    document.getElementById(id).value = '';
}

document
    .getElementById('calculate-button')
    .addEventListener('click', function () {
        document.getElementById('calculate-error').style.display = 'none';
        const totalIncome = getValue('total-income');
        const totalExpanse = getAllExpanse();

        if (isNaN(totalIncome) || isNaN(totalExpanse)) {
            document.getElementById('calculate-error').style.display = 'block';
        } else {
            if (totalIncome < totalExpanse) {
                document.getElementById('income-error').style.display = 'block';
            } else {
                const balance = totalIncome - totalExpanse;

                document.getElementById('total-expence').innerText =
                    totalExpanse;
                document.getElementById('balance').innerText = balance;

                doEmptyInput('food-input');
                doEmptyInput('rent-input');
                doEmptyInput('clothes-input');

                document.getElementById('income-error').style.display = 'none';
            }
        }
    });

document.getElementById('saving-btn').addEventListener('click', function () {
    const totalIncome = getValue('total-income');
    const savingPercentage = getValue('saving-percentage');
    const savingAmount = (totalIncome / 100) * savingPercentage;

    document.getElementById('saving-amount').innerText = savingAmount;

    const balance = parseFloat(document.getElementById('balance').innerText);

    document.getElementById('remaining-balance').innerText =
        balance - savingAmount;

    doEmptyInput('saving-percentage');
    doEmptyInput('total-income');
});
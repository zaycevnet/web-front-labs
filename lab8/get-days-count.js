function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
    daysCount = Math.floor(daysCount);
    document.getElementById('output').textContent = 'Количество дней с даты рождения: ' + daysCount;
}

function clearFields() {
    document.querySelector('input[type=date]').value = '';
    document.getElementById('output').textContent = '';
}
function showDate(){
    let out = document.getElementById('current-date');
    let out2 = document.getElementById('current-date2')
    let out3 = document.getElementById('current-date3')
    let out4 = document.getElementById('current-date4')
    let out5 = document.getElementById('current-date5')
    let out6 = document.getElementById('current-date6')
    let today = new Date();
    out.innerHTML =  "Russia: "+today.toLocaleString("ru-RU");
    out2.innerHTML =  "FYRO Macedonian: "+today.toLocaleString("mk");
    out3.innerHTML =  "English: "+today.toLocaleString("en");
    out4.innerHTML =  "Hungarian: "+today.toLocaleString("hu");
    out5.innerHTML =  "French: "+today.toLocaleString("fr");
    out6.innerHTML =  "Croatian: "+today.toLocaleString("hr");

let year = document.getElementById('outputYear');
    let month = document.getElementById('outputMonth');
    let Day = document.getElementById('outputDay');
    let weak = document.getElementById('outputWeak');
    dt = new Date()
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const weakkk = ['Воскресенье', "Понедельник", "Вторник","Среда","Четверг","Пятница","Суббота"]
    year.innerHTML = "Текущий год: " + dt.getFullYear()
    month.innerHTML = "Текущий месяц: " + months[dt.getMonth()];
    Day.innerHTML = "Текущий день: " + dt.getDate();
    weak.innerHTML = "Текущий день недели: " + weakkk[dt.getDay()];
}

function showDayOfWeek() {
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    if (isValidDate(day, month, year)) {
        let date = new Date(year, month - 1, day);
        let dayOfWeek = date.toLocaleString('ru-RU', { weekday: 'long' });

        document.getElementById('day-of-week').innerHTML = `День недели: ${dayOfWeek}`;
    } else {
        document.getElementById('day-of-week').innerHTML = 'Пожалуйста, введите корректные данные.';
    }
}

function isValidDate(day, month, year) {
    // Проверка на целые числа
    if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
        return false;
    }

    // Проверка диапазонов
    if (year < 1 || year > 9999 || month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
    }

    // Проверка на корректность месяца и дня
    let date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

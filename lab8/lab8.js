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
}
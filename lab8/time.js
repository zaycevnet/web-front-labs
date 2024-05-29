function showTime() {
    let today = new Date();
    let hours = today.getHours().toString().padStart(2, '0');
    let minutes = today.getMinutes().toString().padStart(2, '0');
    let seconds = today.getSeconds().toString().padStart(2, '0');
    let currentTime = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(showTime, 1000);
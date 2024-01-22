var getDay = document.getElementById('days')
var display = document.getElementById('watch');
var alarmInput = document.getElementById('alarmTime');
var alarmButton = document.getElementById('setAlarmBtn');
var alarmTime;

setInterval(Watch, 1000);

function Watch() {
    var now = new Date();
    var day = now.getDate().toString()
    var hours = now.getHours().toString()
    var minutes = now.getMinutes().toString()
    var seconds = now.getSeconds().toString()
    var time = hours + ':' + minutes + ':' + seconds;
    getDay.textContent = day
    display.textContent = time;

    if (alarmTime) {
        var alarmHours = alarmInput.value.split(':')[0];
        var alarmMinutes = alarmInput.value.split(':')[1];
        if (hours === alarmHours && minutes === alarmMinutes) {
            alert('Tic Tac');
            alarmTime = null;
        }
    }
}

function Alarm() {
    alarmTime = alarmInput.value;
}
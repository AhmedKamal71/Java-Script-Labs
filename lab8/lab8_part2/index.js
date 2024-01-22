var getDay = document.getElementById('days')
var display = document.getElementById('watch');
var alarmInput = document.getElementById('alarmTime');
var alarmButton = document.getElementById('setAlarmBtn');
var alarmTime;

setInterval(Watch, 1000);

function Watch() {
    var obj = new Date();
    var day = obj.getDate().toString()
    var hours = obj.getHours().toString()
    var minutes = obj.getMinutes().toString()
    var seconds = obj.getSeconds().toString()
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
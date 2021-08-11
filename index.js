let date;
let a;
const options = {weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'};


setInterval(()=>{
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    let hours = a.getHours();
    let mins = a.getMinutes();
    let sec = a.getSeconds();
    let day_night = "AM";
    if (hours < 10){
        day_night = "PM";
        hours = "0" + hours;
    }
    if (mins < 10){
        mins = "0" + mins;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    time = hours + ":" + mins + ":" + sec + " " + day_night;

    document.getElementById('time').innerHTML = time + "<br> on " + date;
},1000);

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const WALLCOLORPICKER = document.querySelector("#colorpicker-wall");
const DIALCOLORPICKER = document.querySelector("#colorpicker-dial");
const CLOCKCOLORPICKER = document.querySelector("#colorpicker-clock");
const HANDSCOLORPICKER = document.querySelector("#colorpicker-hands");
const HOURMARKSCOLORPICKER = document.querySelector("#colorpicker-hourmarks");
const MIDCIRCLECOLORPICKER = document.querySelector("#colorpicker-midcircle");
const BODY = document.querySelector("body");
const DIAL = document.querySelector(".circle");
const CLOCK = document.querySelector("#clock");

const MINUTEARM = document.querySelector(".minute-arm");
const HOURARM = document.querySelector(".hour-arm");
const SECONDARM = document.querySelector(".second-arm");
const HOURMARKS = document.querySelector(".hour-marks");
const MIDCIRCLE = document.querySelector(".mid-circle");


function runTheClock() {
    var date = new Date();
    //console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    //console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition = sec * 360 / 60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
var interval = setInterval(runTheClock, 1000);

function changeWallColor(){
    BODY.style.backgroundColor = WALLCOLORPICKER.value;
}
function changeClockColor(){
    CLOCK.style.backgroundColor = CLOCKCOLORPICKER.value;
}
function changeHandsColor(){
    HOURARM.style.stroke = HANDSCOLORPICKER.value;
    MINUTEARM.style.stroke = HANDSCOLORPICKER.value;
    SECONDARM.style.stroke = HANDSCOLORPICKER.value;
}
function changeHourMarksColor(){
    HOURMARKS.style.stroke = HOURMARKSCOLORPICKER.value;
}
function changeMidCircleColor(){
    MIDCIRCLE.style.fill = MIDCIRCLECOLORPICKER.value;
}


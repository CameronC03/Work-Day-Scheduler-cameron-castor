var timeBlock = $(".container");
var timeFrame = moment().format(`MMMM Do YYYY`)
var timeSection = $("#currentDay")
timeSection.append(timeDisplay)
var saveBtn = document.querySelectorAll("button")

var timeList = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",

];
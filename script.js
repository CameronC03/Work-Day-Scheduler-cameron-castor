var timeBlock = $(".container");
var timeFrame = moment().format(`MMMM Do YYYY`)
var timeSection = $("#currentDay")
timeSection.append(timeDisplay)
var saveBtn = document.querySelectorAll("button")

var timesList = [
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

var times = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "15",
    "17",
];

for (var i = 0; i < timesList.length; i++) {
    var row1 = $("<div class=`row time-block`>").attr("id", times[i]);
    var div1 = $("<div class=`hour col-1'>")
    var div2 = $("<textarea class=`col-10>");
    var button1 = $("<button type=`button` class=saveBtn col-1 far fa-save`>");

    timeBlock.append(row1)
    div1.text(timesList[i]);
    row1.append(div1);
    div2.text();
    row1.append(div2)
    button1.text();
    row1.append(button1)

}

localStorageFunction();

function localStorageFunction() {
    
}


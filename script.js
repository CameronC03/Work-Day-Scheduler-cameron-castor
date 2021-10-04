var timeBlock = $(".container");
var timeFrame = moment().format(`MMMM Do YYYY`)
var timeSection = $("#currentDay")
timeSection.append(timeFrame)
var saveBtn = document.querySelectorAll("button")
/*/ list of times /*/
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
/*/ time block /*/
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
/*/ saves calendar info /*/
localStorageFunction();

function localStorageFunction() {
    $("textarea")[0].value = localStorage.getItem("textarea1")
    $("textarea")[1].value = localStorage.getItem("textarea2")
    $("textarea")[2].value = localStorage.getItem("textarea3")
    $("textarea")[3].value = localStorage.getItem("textarea4")
    $("textarea")[4].value = localStorage.getItem("textarea5")
    $("textarea")[5].value = localStorage.getItem("textarea6")
    $("textarea")[6].value = localStorage.getItem("textarea7")
    $("textarea")[7].value = localStorage.getItem("textarea8")
    $("textarea")[8].value = localStorage.getItem("textarea9")
}
/*/ boxes to put info in /*/
$("button1").on("click", function(event) {
    event.preventDefault();
    var text1 = $("textarea")[0].value;
    var text2 = $("textarea")[1].value;
    var text3 = $("textarea")[2].value;
    var text4 = $("textarea")[3].value;
    var text5 = $("textarea")[4].value;
    var text6 = $("textarea")[5].value;
    var text7 = $("textarea")[6].value;
    var text8 = $("textarea")[7].value;
    var text9 = $("textarea")[8].value;
    
    localStorage.setItem("text1", text1);
    localStorage.setItem("text2", text2);
    localStorage.setItem("text3", text3);
    localStorage.setItem("text4", text4);
    localStorage.setItem("text5", text5);
    localStorage.setItem("text6", text6);
    localStorage.setItem("text7", text7);
    localStorage.setItem("text8", text8);
    localStorage.setItem("text9", text9);
});
/*/ function to keep up with the curent time /*/
function hourUpdater() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);
        if (blockHour < hour) {
            $(this).addclass("past");
          } else if (blockHour === hour) {
              $(this).removeClass("past");
              $(this).addclass("present");
          } else {
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).addClass("future");
          }
        });
}

hourUpdater();

var seeTime = setInterval(hourUpdater, 15000);
    

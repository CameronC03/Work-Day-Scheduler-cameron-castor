var timeBlock = $(".container");
var timeFrame = moment().format('MMMM Do YYYY')
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
    var rowA = $("<div class='row time-block'>").attr("id", times[i]);
    var divA = $("<div class='hour col-1'>")
    var divB = $("<textarea class='col-10'>");
    var buttonA = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    timeBlock.append(rowA);
    
    divA.text(timesList[i]);
    rowA.append(divA);
   
    divB.text();
    rowA.append(divB);
    
    buttonA.text();
    rowA.append(buttonA);

}

/*/ saves calendar info /*/
localStorageFunction();

function localStorageFunction() {
    $("textarea")[0].value = localStorage.getItem("textarea1");
    $("textarea")[1].value = localStorage.getItem("textarea2");
    $("textarea")[2].value = localStorage.getItem("textarea3");
    $("textarea")[3].value = localStorage.getItem("textarea4");
    $("textarea")[4].value = localStorage.getItem("textarea5");
    $("textarea")[5].value = localStorage.getItem("textarea6");
    $("textarea")[6].value = localStorage.getItem("textarea7");
    $("textarea")[7].value = localStorage.getItem("textarea8");
    $("textarea")[8].value = localStorage.getItem("textarea9");
}
/*/ boxes to put info in /*/
$("button").on("click", function(event) {
    event.preventDefault();
    var textArea1 = $("textarea")[0].value;
    var textArea2 = $("textarea")[1].value;
    var textArea3 = $("textarea")[2].value;
    var textArea4 = $("textarea")[3].value;
    var textArea5 = $("textarea")[4].value;
    var textArea6 = $("textarea")[5].value;
    var textArea7 = $("textarea")[6].value;
    var textArea8 = $("textarea")[7].value;
    var textArea9 = $("textarea")[8].value;
    
    localStorage.setItem("textarea1", textArea1);
    localStorage.setItem("textarea2", textArea2);
    localStorage.setItem("textarea3", textArea3);
    localStorage.setItem("textarea4", textArea4);
    localStorage.setItem("textarea5", textArea5);
    localStorage.setItem("textarea6", textArea6);
    localStorage.setItem("textarea7", textArea7);
    localStorage.setItem("textarea8", textArea8);
    localStorage.setItem("textarea9", textArea9);
});
/*/ function to keep up with the curent time /*/
function hourUpdater() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);
        
        if (blockHour < hour) {
            $(this).addClass("past");
          } else if (blockHour === hour) {
              $(this).removeClass("past");
              $(this).addClass("present");
          } else {
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).addClass("future");
          }
        });
}

hourUpdater();

var seeTime = setInterval(hourUpdater, 15000);
    

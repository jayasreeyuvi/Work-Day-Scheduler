$(function () {

  var currentDay = $("#currentDay");
  function todisplayTime() {
    let currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
    currentDay.text(currentTime);
  }
    
  todisplayTime()
  setInterval(todisplayTime, 1000);

  var saveBtn = $(".saveBtn")

  saveBtn.on("click" , function() {
   
    let timeBlock = $(this).parent()
    let timekey = timeBlock.attr("id")
    let textArea = timeBlock.find("textarea")
    let textAreaValue = textArea.val()
    localStorage.setItem(timekey , textAreaValue)
    if ( textAreaValue === "" ) {
      localStorage.removeItem(timekey)
    }
  })
  
  var timeBlock = $(".time-block");

  timeBlock.each(function () {
    var timekey = $(this).attr("id");
    var textArea = $(this).find("textarea");
    var textAreaValue = localStorage.getItem(timekey);
    textArea.val(textAreaValue);
  });

  var currentHour = dayjs().hour();

  //time block for each section//
  

});
  
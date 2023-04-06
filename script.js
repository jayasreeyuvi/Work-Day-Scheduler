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
    let timeBlockId = timeBlock.attr("id")
    let textArea = timeBlock.find("textarea")
    let textAreaValue = textArea.val()
    localStorage.setItem(timeBlockId , textAreaValue)
    if ( textAreaValue === "" ) {
      localStorage.removeItem(timeBlockId)
    }
  })

    

});
  
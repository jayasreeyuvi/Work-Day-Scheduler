$(function () {

    var currentDay = $("#currentDay");
    function todisplayTime() {
      let currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
      currentDay.text(currentTime);
    }
    
    todisplayTime()
    setInterval(todisplayTime, 1000);

});
  
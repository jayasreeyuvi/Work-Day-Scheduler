
var textareaVal9 = localStorage.getItem("hr-9");
var textareaVal10 = localStorage.getItem("hr-10");
var textareaVal11 = localStorage.getItem("hr-11");
var textareaVal12 = localStorage.getItem("hr-12");
var textareaVal1 = localStorage.getItem("hr-1");
var textareaVal2 = localStorage.getItem("hr-2");
var textareaVal3 = localStorage.getItem("hr-3");
var textareaVal4 = localStorage.getItem("hr-4");
var textareaVal5 = localStorage.getItem("hr-5");


var textarea9 = $("#hr-9");
var textarea10 = $("#hr-10");
var textarea11 = $("#hr-11");
var textarea12 = $("#hr-12");
var textarea1 = $("#hr-1");
var textarea2 = $("#hr-2");
var textarea3 = $("#hr-3");
var textarea4 = $("#hr-4");
var textarea5 = $("#hr-5");

var date = moment().format("dddd, MMMM Do, YYYY");



$("#currentDay").text(date);


  function time () {
    var currentHour = moment().hours();

    $(".block").each(function () {
      var hour = parseInt($(this).attr("id"));

      if (hour < currentHour) {
      
         $(this).addClass("past");
      }

      else if (hour === currentHour) {
      
        $(this).removeClass("past");
      
         $(this).addClass("present");
    
      }

      else {
      
        $(this).removeClass("past");
      
        $(this).removeClass("present");
     
        $(this).addClass("future");
      }


    });
  
  };

time();

$(".saveButton").on("click", function(event) {

  event.preventDefault();

  var textarea = $(this).prev();

  var id = textarea.attr("id");

  var value = textarea.val();

  localStorage.setItem(id, value);

});





$(function () {

    var saveButton = $(".saveBtn");
    saveButton.on("click", function(){
   
    var textEvent = $(this).siblings(".description").val();
    var timeEvent = $(this).parent().attr("id")
    localStorage.setItem(timeEvent, textEvent);

});
 
  function timeBlock(){

      var hourNow = dayjs().format('HH');
    

    $(".time-block").each (function(){
        var hourSplit = parseInt($(this).attr("id").split("hour-")[1]);
       

        if(hourSplit < hourNow){
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
    }
    else if(hourSplit == hourNow){
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
    }
    else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
   }

})

};

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
  
  timeBlock();


  var dayWeek = "Today is " + dayjs().format('dddd, MMMM DD');
  
  $('#currentDay').text(dayWeek);


}); 



$(document).ready(function() {
    setTimeout(function() { // Make sure this function start to run after the DOM rendered
      // Create new Array of Dates in the week
      const newWeekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
      
      // Change the default Dates to new Dates
      $('.rdrWeekDay').each(function(index) {
        if (index < newWeekDays.length) {
          $(this).text(newWeekDays[index]);
        }
      });
      $('.rdrNextButton').find('i').addClass('fas fa-chevron-right')
      $('.rdrPprevButton').find('i').addClass('fas fa-chevron-left');
      $('rdrNextPrevButton').on('click', function(){})
      $('.rdrDay').on('click', function(){
        $('.rdrDayNumber').find('span').css({'color': 'black'}).promise().done(function(){
          $('.rdrInRange').closest('.rdrDay').find('.rdrDayNumber').find('span').css({'color': 'black'})
          $('.rdrStartEdge').closest('.rdrDay').find('.rdrDayNumber').find('span').css({'color': 'white'})
          $('.rdrEndEdge').closest('.rdrDay').find('.rdrDayNumber').find('span').css({'color': 'white'})
          $('.rdrDayPassive').find('.rdrDayNumber').find('span').css({'color': '#d5dce0'})
        })
      })
      
    }, 0);
});
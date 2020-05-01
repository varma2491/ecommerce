$(document).ready(function() {
    const minus = $('.quantity__minus');
    const plus = $('.quantity__plus');
    const input = $('.quantity__input');
    minus.click(function(e) {
      e.preventDefault();
      var value = input.val();
      if (value > 1) {
        value--;
      }
      input.val(value);
    });
    
    plus.click(function(e) {
      e.preventDefault();
      var value = input.val();
      value++;
      input.val(value);
    })
    $('.CartRemovalSec').click(function(){
      $(this).parentsUntil('.summaryContainer').parent().remove();
     });
  });
  $('.headerSearchIcon').click(function(){
    if($('.searchInputBlock:visible').is(':visible')){
        $('.searchInputBlock').animate({ width:'0' },600,function(){$('.searchInputBlock').hide(); });
    }
    else{
         $('.searchInputBlock').show();
         $('.searchInputBlock').animate({ width:'210px' },600);
    }
    setTimeout(function(){$(".header-search-input").focus();},300);
 });

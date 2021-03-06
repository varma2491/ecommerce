var cart = [];
function refreshCart(){
      var localCart = localStorage.getItem('cart');
      if(localCart) {
            cart = JSON.parse(localCart);
            if(cart){
                  $(".bagcount").text(cart.length);
            }
      }
}

$(document).ready(function() {
    $('.SortBlk li').on("click",function(){
      $('.SortBlk li a').removeClass('active');
        $(this).find('a').toggleClass('active');
    });

    var counts = cart.length;
    $(".cartBtn").click(function () {
      refreshCart();
      var found = false;
      var itemId = $(this).attr('data-id'); 
      $.each(cart, function(i, v){
            if(v.id ==  itemId) {
                  v.quantity++;
                  found = true;
            }
      });

      if(found == false){
            cart.push( { id: $(this).attr('data-id'), quantity: 1} );
            counts += +1;
      }
      localStorage.setItem('cart',  JSON.stringify(cart));
        
        $(".bagcount").animate({
        opacity: 1
                }, 300, function () {
        $(this).text(counts);
                });
            }); 
});
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 100,
      max: 1000,
      values: [ 100, 1000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "Rs" + ui.values[ 0 ] + " - Rs" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "Rs" + $( "#slider-range" ).slider( "values", 0 ) +
      " - Rs" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
  $( function() {
    $( "#slider-range2" ).slider({
      range: true,
      min: 100,
      max: 1000,
      values: [ 100, 1000 ],
      slide: function( event, ui ) {
        $( "#amount2" ).val( "Rs" + ui.values[ 0 ] + " - Rs" + ui.values[ 1 ] );
      }
    });
    $( "#amount2" ).val( "Rs" + $( "#slider-range2" ).slider( "values", 0 ) +
      " - Rs" + $( "#slider-range2" ).slider( "values", 1 ) );
  } );
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

 $('.sortBy__list .SortBlk li').on("click",function(){
  $(this).find('a').toggleClass('active');
});

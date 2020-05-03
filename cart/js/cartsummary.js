
  var cartItems = [];
  var TotalPriceDisplay = 0;
  var TotalPriceActual  = 0;
  var TotalDiscountPrice = 0;
  var localCart = localStorage.getItem('cart');
  if(localCart) {
    localCart = JSON.parse(localCart);
  }

  if(localCart) {
    $.each(localCart, function(i, v){
        $.each(items.items, function(key, value){
            if(v.id == value.id){
              value.quantity = v.quantity; 
              cartItems.push(value); 
            }
        });
    });    

  }
  else{
    console.log('cart empty');
}

  function renderItems(){

    $(".CartSummaryBlkSec__leftnav").html('');
    $.each(cartItems,function(index,value){
      
        $(".CartSummaryBlkSec__leftnav").append('<div class="summaryContainer clearfix" data-id='+value.id+'><div class="prodInfo col-lg-12"><div class="prodImg prodc col-lg-3"><img alt="" src="'+value.image+'" title="" class=""></div><div class="ProductDestailsSec prodc col-lg-3"><div class="productLeftBlk clearfix"><div class=""><h5 class="font-15 cartProdDesc">'+value.name+'</h5></div><div class="productPriceBlk"><span class="sellingPrice"><i class="tr tr-inr"></i>'+value.price.actual+'</span><span class="actualPrice">'+value.price.display+'</span><span class="discountLabel font-bold red-color"> '+value.discount+'%</span></div></div></div><div class="SizeQty-Sec prodc col-lg-3"><div class="Quantitycontainer"><div class="quantity"><a href="#" class="quantity__minus" data-id='+value.id+'><span>-</span></a><input name="quantity" type="text" class="quantity__input" data-id='+value.id+' value="'+value.quantity+'"><a href="#" class="quantity__plus" data-id='+value.id+'><span>+</span></a></div></div></div><div class="prodRemove prodc col-lg-3"><div class="productRightBlk clearfix"><a href="javascript:vid(0);" class="CartRemovalSec" data-id='+value.id+'><span>Remove</span></a></div></div><div class="cartorderDetails col-8"><div class="summaryInfoBlk"><h5 class="font-15 cartProdDesc">'+value.name+'</h5><div class="productPriceBlk"><span class="sellingPrice"><i class="tr tr-inr"></i>'+value.price.actual+' </span><span class="actualPrice">'+value.price.display+'</span><span class="discountLabel font-bold red-color"> '+value.discount+'%</span></div><div class="summarySizeQty-Sec"><div class="Quantitycontainer"><div class="quantity"><a href="#" class="quantity__minus" data-id='+value.id+'><span>-</span></a><input name="quantity" type="text" class="quantity__input" value="1" data-id='+value.id+'><a href="#" class="quantity__plus" data-id='+value.id+'><span>+</span></a></div></div></div><p><a href="javascript:vid(0);" class="CartRemovalSec" data-id='+value.id+'><span>Remove</span></a></p></div></div></div></div>');
        
    });
  }

  renderItems();
  
  function refreshPrice(){
    var localCart = localStorage.getItem('cart');
    if(localCart) {
      localCart = JSON.parse(localCart);
      cartItems = [];
      
  var TotalPriceDisplay = 0;
  var TotalPriceActual  = 0;
  var TotalDiscountPrice = 0;
      $.each(localCart, function(i, v){
        $.each(items.items, function(key, value){
            if(v.id == value.id){
              value.quantity = v.quantity; 
              cartItems.push(value); 
            }
        });
      });  
    
      $.each(cartItems,function(index,value){
        TotalPriceDisplay = TotalPriceDisplay + (value.price.display * value.quantity);
        TotalPriceActual = TotalPriceActual + (value.price.actual * value.quantity);
        TotalDiscountPrice = TotalDiscountPrice + (value.price.display * value.discount / 100);
      });
      $(".CartSummaryBlkSec__rightnav").html('');
      $(".CartSummaryBlkSec__rightnav").append('<div class="CartSummaryBlkSec__rightnav--orderSummary"><div class="summaryDetails clearfix"><h3>PRICE DETAILS</h3><div class="detailedBlk clearfix"><p><span class="leftDetail">Price ( '+(cartItems.length)+' item ) : </span><span class="rightDetail"><i class="tr tr-inr"></i>'+TotalPriceDisplay+'</span></p><p><span class="leftDetail">Discount : </span><span class="rightDetail"><i class="tr tr-inr"></i>'+TotalDiscountPrice+'</span></p></div><div class="totalSummary clearfix"><p><span class="leftDetail">Total Payable</span><span class="rightDetail"><i class="tr tr-inr"></i>'+TotalPriceActual+'</span></p></div></div></div>');

    }
  }



$(document).ready(function() {

  refreshPrice();

 
    const minus = $('.quantity__minus');
    const plus = $('.quantity__plus');
    const input = $('.quantity__input');
    const cartremove = $('.CartRemovalSec');
    
    minus.click(function(e) {
      e.preventDefault();
     
      var item_id = $(this).attr('data-id');
      

      var localCart = localStorage.getItem('cart');
      if(localCart) {
        localCart = JSON.parse(localCart);
     
        $.each(localCart, function(i, v){          
            if(v.id == item_id){
              if( v.quantity == 1){
                localCart.splice(i, 1);
                $('.summaryContainer[data-id='+v.id+']').remove();
              }
              else if( v.quantity > 1){
               v.quantity = v.quantity - 1;
                $('.quantity__input[data-id='+v.id+']').val(v.quantity  );
              }
            }           
        });

        localStorage.setItem('cart',  JSON.stringify(localCart));
        refreshPrice();

      }


    });
    
    plus.click(function(e) {
      e.preventDefault();
      var item_id = $(this).attr('data-id');
      var localCart = localStorage.getItem('cart');
      if(localCart) {
        localCart = JSON.parse(localCart);
     
        $.each(localCart, function(i, v){   
                 
            if(v.id == item_id){
              v.quantity = v.quantity + 1; 
              $('.quantity__input[data-id='+v.id+']').val(v.quantity  );
              
            }           
        });
      }
      localStorage.setItem('cart',  JSON.stringify(localCart));
      refreshPrice(); 

    });

    cartremove.click(function(e) {
      e.preventDefault();
     
      var item_id = $(this).attr('data-id');
      
  
      var localCart = localStorage.getItem('cart');
      if(localCart) {
        localCart = JSON.parse(localCart);
        $.each(localCart, function(i, v){          
            if(v.id == item_id){
              if( v.quantity == 1){
                localCart.splice(i, 1);
                $('.summaryContainer[data-id='+v.id+']').parent().remove();
              }
              else if( v.quantity > 1){
               v.quantity = v.quantity - 1;
                $('.quantity__input[data-id='+v.id+']').val(v.quantity  );
              }
            }           
        });
  
        localStorage.setItem('cart',  JSON.stringify(localCart));
        refreshPrice();
  
      }
  
  
    });

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

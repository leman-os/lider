$(function() {
        $( "#slider-range-max" ).slider({
            range: "max",
            min: 6,
            max: 30,
            value: 6,
            slide: function( event, ui ) {
                $( "#amount" ).val( ui.value );
                calc();
            }
        });
        $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
    });
      
    function calc(par){
    amount = document.cl_form.amount.value;
  
    //var summ;
    summ = Number(amount)
    document.cl_form.summ.value=summ;
    document.getElementById("amounttd").innerHTML=amount;
    document.getElementById("summ").innerHTML=summ;
    return false; 
    };
$(document).ready(function(){
  $('.single-item').slick();

  $('[data-fancybox]').fancybox();

  $('.centersl').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
  $('.owl-carousel').owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='img/mdes/left.png'>", "<img src='img/mdes/right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });
});


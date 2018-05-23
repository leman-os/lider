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
      
    
$(document).ready(function(){
  $('.single-item').slick({
    autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst: true
  });

  $('[data-fancybox]').fancybox();

  $('[data-fancybox="images"]').fancybox({
  loop: true,
  animationEffect: "zoom",
  animationDuration: 366,
  transitionEffect: "fade",
  buttons : [
    'thumbs',
    'close'
  ]
});

  $('.centersl').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
  $('.owl-carousel').owlCarousel({
  	loop:true,
    autoplay: true,
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

/*calc start*/
jQuery(function() {
  var type = 400,
    result_outptut = jQuery("#revenue span"),
    square = 24
    
  function recount() {
    revenue = square * type;
    result_outptut.html(revenue + ' рублей');
    $("#amount").val($("#slider-range-min").slider("value")+ ' кв.м.');
  };
  
  jQuery('#type').change(function() {
    type = jQuery('#type option:selected').val();
    recount();
  });
  
  $(document).on("change keyup", "#amount", function() {
    square = +$(this).val();
    $("#slider-range-min").slider("value", square);
    recount();
  });
  
  
});
$(function() {
  $("#slider-range-min").slider({
    range: "min",
    value: 24,
    min: 1,
    max: 150,
    slide: function(event, ui) {
      $('#amount').val(ui.value).trigger("change");
    }
  });
  $("#amount").val($("#slider-range-min").slider("value")+ ' кв.м.');
});
/*calc end*/

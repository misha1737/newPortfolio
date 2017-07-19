$(document).ready(function() {

var arrSite = $(".siteIcon");

var sliderWidth =$("#slider").width();



var sliderElemens= Math.round((sliderWidth-300)/200);
console.log(sliderElemens);
for(var i=0; i<sliderElemens;i++){   
$("#slider .siteIcon:eq("+i+")").css({

'display':'block',
'left':(i*200+100)+'px'
});

 }

$(".nextSlide").css('float', 'right' );

//построения слайдов

//for(var i==0;i<mas.length;i++)
//$(".siteIcon");

 $("#portfolio").click(function()
        {
           console.log(sliderWidth);
    }); 










    });	
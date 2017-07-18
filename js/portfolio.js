$(document).ready(function() {

var mas = $(".siteIcon");
console.log(mas.length);



var sliderIcon = $("#slider .siteIcon");

console.log(sliderIcon[0]);

$("#slider .siteIcon:eq("+2+")").css('left', '300px')

//построения слайдов
var displayWidth =$("#slider").width();
console.log(displayWidth);
//for(var i==0;i<mas.length;i++)
//$(".siteIcon");

 $("#portfolio").click(function()
        {
           console.log(displayWidth);
    }); 










    });	
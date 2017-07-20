var blockrender=function(offset){
 

var arrSite = $(".siteIcon");
var sliderWidth =$("#slider").width();


for(var i=0; i<arrSite.length;i++){   
$("#slider .siteIcon:eq("+i+")").css({'left':(i*180 -(offset*180))+'px'});

} 
}

$(document).ready(function() {

var offset=0;
blockrender(offset);

 


 // $("#portfolio").click(function()
 //        {
 //           console.log(sliderWidth);
 //    }); 

 $("#nextSlide").click(function()
        {
            offset++;
            blockrender(offset);
           console.log('ok');

    }); 
 $("#prevSlide").click(function()
        {
            offset--;
            blockrender(offset);
           console.log('ok');

    }); 







    });	
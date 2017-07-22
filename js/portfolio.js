var blockrender=function(){
 


var arrSite = $(".siteIcon");
var sliderWidth =$("#slider").width();


console.log(arrSite);
//elem =arrSite.shift();
var offset=function(number){
    // if (position<0){
    //     number=arrSite.length+position;
    //     position=0;
    //     console.log(position);
    // }
  return (number*180-180);

}


for(var i=0; i<arrSite.length;i++){   
$("#slider .siteIcon:eq("+i+")").css({'left':offset(i)+'px'});

} 
}

$(document).ready(function() {
var elem;
blockrender();

 


 // $("#portfolio").click(function()
 //        {
 //           console.log(sliderWidth);
 //    }); 

 $("#nextSlide").click(function()
        {
            //position++;
            elem=$('#slider > :first').detach(); 
            elem.appendTo('#slider');
            blockrender();
            

    }); 
 $("#prevSlide").click(function()
        {
            elem=$('#slider > :last').detach(); 
            elem.prependTo('#slider');
            blockrender();
            //$('.siteIcon > :first').detach(); 
            // elem.appendTo('.siteIcon');
    }); 







    });	
var blockrender=function(){


    var arrSite = $(".siteIcon");
    var sliderWidth =$("#slider").width();

    var offset=function(number){

      return (number*180-180);

    }


    for(var i=0; i<arrSite.length;i++){   
        if (i==0 || i==arrSite.length-1 ){
            $("#slider .siteIcon:eq("+i+")").css({'opacity':'0.0'});
        }
        else{
            $("#slider .siteIcon:eq("+i+")").css({'opacity':'1'});
        }

    $("#slider .siteIcon:eq("+i+")").css({'left':offset(i)+'px'});

    } 
}

$(document).ready(function() {
var elem;
blockrender();



 $("#nextSlide").click(function()
        {
            elem=$('#slider > :first').detach(); 
            elem.appendTo('#slider');
            blockrender();
    }); 
 $("#prevSlide").click(function()
        {
            elem=$('#slider > :last').detach(); 
            elem.prependTo('#slider');
            blockrender();
    }); 

$(".siteIcon").click(function()
        {
            var siteBox= $(this).attr('id');
            var siteNumber=($(this).attr('id')).substring(4);
// Виділення іконок сайтів          
            $('.siteIcon img').css ({
                 'box-shadow':'none'
            });
            $("#"+siteBox +" img").css ({
                'box-shadow':'0px 0px 40px #474d5d inset'
            });
//---------------------------

//очистка інформації про сайт
            
            for(var i=0;i<$(".siteIcon").length+1;i++){
                $(".siteText"+i).css({
                    'display':'none'
                }); 
            }
           
//---------------------------

//добавлення інформації про сайт
            $(".siteText"+siteNumber).css({
                    'display':'block'
                 }); 
             console.log( (".site"+4));
//---------------------------
    }); 

    });	
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

 var setActiveBlock=function(obj){
   
   var siteBox= $(obj).attr('id');
            var siteNumber=($(obj).attr('id')).substring(4);
            console.log(siteNumber);
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
             
//---------------------------
return siteNumber;
 }


$(document).ready(function() {
var elem;
var activeBlock=1;
blockrender();
activeBlock=setActiveBlock('#slider > :eq( 1 )');


 $("#nextSlide").click(function()
        {
            elem=$('#slider > :first').detach(); 
            elem.appendTo('#slider');
            blockrender();

            if (activeBlock== $(".siteIcon").length-1)
            {activeBlock=0}
            else{activeBlock++;}

            activeBlock=setActiveBlock("#site"+ activeBlock); 
             console.log(activeBlock);
    }); 
 $("#prevSlide").click(function()
        {

            elem=$('#slider > :last').detach(); 
            elem.prependTo('#slider');
            blockrender();
             if (activeBlock== 0)
            {activeBlock=$(".siteIcon").length-1}
            else{activeBlock--;}
            activeBlock=setActiveBlock("#site"+ activeBlock); 
            console.log(activeBlock);

    }); 

$(".siteIcon").click(function()
        {
         console.log(activeBlock=setActiveBlock(this));
    }); 

    });	
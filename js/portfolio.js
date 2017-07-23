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
// добавлення зображень на телефон і на дісплей на сайті 

switch(siteNumber) {
    case '1': {
            $("#siteOnDisplay").css({
                'background-image': 'url(img/d1.jpg)',
                'background-size': 'cover'
            });
            $("#siteOnSmartphone").css({
                'display':'inline-block',
                'background-image': 'url(img/s1.jpg)',
                'background-size': 'cover'
            });
            $("#smartphone").css({
                'opacity':'1'
            });
            break;}
    case '2': {
            $("#siteOnDisplay").css({
                'background-image': 'url(img/d2.jpg)',
                'background-size': 'cover'
            });
            $("#siteOnSmartphone").css({
                'display':'inline-block',
                'background-image': 'url(img/s2.jpg)',
                'background-size': 'cover'
            });
             $("#smartphone").css({
                'opacity':'1'
            });
            break;}
    case '3':  {
            $("#siteOnDisplay").css({
                'background-image': 'url(img/d3.jpg)',
                'background-size': 'cover'
            });
            $("#siteOnSmartphone").css({
                'display':'inline-block',
                'background-image': 'url(img/s3.jpg)',
                'background-size': 'cover'
            });
             $("#smartphone").css({
                'opacity':'1'
            });
            break;}
    case '4':  {
            $("#siteOnDisplay").css({
                'background-image': 'url(img/d4.jpg)',
                'background-size': 'cover'
            });
            $("#siteOnSmartphone").css({
                'display':'inline-block',
                'background-image': 'url(img/s4.jpg)',
                'background-size': 'cover'
            });
             $("#smartphone").css({
                'opacity':'1'
            });
            break;}
    case '5':  {
            $("#siteOnDisplay").css({
                'background-image': 'url(img/d5.jpg)',
                'background-size': 'cover'
            });
            $("#siteOnSmartphone").css({
                'display':'none'
            });
             $("#smartphone").css({
                'opacity':'0'
            });
            break;}
    case '6':  {
            $("#siteOnDisplay").css({
                'background-image': 'url(img/d2.jpg)',
                'background-size': 'cover'   
            });
            $("#siteOnSmartphone").css({
                'display':'none'
            });
             $("#smartphone").css({
                'opacity':'0'
            });
            break;}
    case '0':  {
            $("#siteOnDisplay").css({
                'background-image': 'url(img/d6.jpg)',
                'background-size': 'cover'
            });
            $("#siteOnSmartphone").css({
                'display':'none'
            });
             $("#smartphone").css({
                'opacity':'0'
            });
            break;}
  default:
    console.log('siteNumber fatal error');
}





//---------------------------      

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
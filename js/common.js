$(document).ready(function() {

//закриття меню при нажиманні
	var navMain = $(".navbar-collapse");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
//-------------------------------------

//головне меню - переключення сторінок
    $("#main").click(function()
        {
        	 $("section").css({'display':'none'});
            $(".main").css({'display':'block'});

    });	
    $("#portfolio").click(function()
        {
        	 $("section").css({'display':'none'});
            $(".portfolio").css({'display':'block'});
    });	
    $("#skills").click(function()
        {
        	 $("section").css({'display':'none'});
            $(".skills").css({'display':'block'});
    });	
    $("#contacts").click(function()
        {
        	 $("section").css({'display':'none'});
            $(".contacts").css({'display':'block'});
    });	
//--------------------------------------



});
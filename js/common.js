$(document).ready(function() {
// var flag=true;

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
});
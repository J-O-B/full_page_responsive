//Page Load Popup - (www.jqueryscript.net/lightbox/Simple-jQuery-Plugin-For-Opening-A-Popup-Window-On-Page-load.html)
$(document).ready(function() {
    //initial visibility of differnet sections & buttons
    $(".content").hide(); 
    $(".credits").hide();
    $('.contact').hide();
    $('.social').hide();
    $('.settings').hide();
    $('#game-over').hide();
    $("#start-game").hide();
    $('#mute').hide();
    $('.instructions').hide();
    $('#sound').show();
    
    var id ='#dialog';
    
    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    
    //Set heigth and width to mask to fill up the whole screen
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    
    //transition effect
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow",0.9); 
    
    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();          
    
    //Set the popup window to center
    $(id).css('top',  winH/2-$(id).height()/1.5);
    $(id).css('left', winW/2-$(id).width()/2);
    
    //transition effect
    $(id).fadeIn(2000);  
    
    //if close button is clicked
    $('.window .popup-button').click(function (e) {
    $('#introVid').each(function(){
        this.pause(); 
    }); 
    $('#background').each(function(){
            this.play(); 
        });
    
    //Closing the pop-up window
    //Cancel the link behavior
    e.preventDefault();
    $('#mask').hide();
    $('.window').hide();
    });
    //if mask is clicked
    $('#mask').click(function () {
    $('#introVid').each(function(){
        this.pause(); // Stop playing
    });
    $('#background').each(function(){
            this.play(); 
        });
  
    $(this).hide();
    $('.window').hide();
    });
});
//End Of Popup Window;
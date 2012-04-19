/* 
    Document   : tiSlider.js
    Created on : 30 mars 2012, 10:23:20
    Author     : Morgan Juillard Mancino
    Description:
        Javascript of tiSlider, a jquery plugin create by Tillid
        Fell free to customize the design!
*/
(function($) {
     $.fn.sliderBox = function(settings) {
        if (!settings["width"])
             settings["width"] = 910;
        alert(settings["width"])
        var elems = $(this).children('ul').children('li');
        var next = $(this).children("ul").children(":eq(0)");
        var images = $(this).children(".slider_image");
        var tmpVal = 0;
        $(this).children('ul').attr("alt", "unfree");
        $(this).children('ul').attr("id", "timer");
        
        /*
         * configuration of the width and height of the slider and images
         */
        tmpVal = parseInt($(images).width()) +  parseInt($(images).css("borderLeftWidth").replace("px", "")) +  parseInt($(images).css("borderRightWidth").replace("px", ""));
        tmpVal += parseInt($(this).children('ul').width()) + parseInt($(this).children('ul').css("borderLeftWidth").replace("px", "")) + parseInt($(this).children('ul').css("borderRightWidth").replace("px", ""))
        $(images).width(settings["width"] - tmpVal);
        $(this).width(settings["width"]);
        $(this).height($(this).children("ul").height());
        $(this).children(".slider_image").height($(this).children("ul").height() -  parseInt($(images).css("borderBottomWidth").replace("px", "")) -  parseInt($(images).css("borderTopWidth").replace("px", "")));
        /*
         *  Configuration of the images margins.
         */
        $(images).children("img").each(function(){
            $(this).load(function() {
                $(this).css("marginLeft", ($(this).parent().width() - $(this).width()) / 2 + "px");
                $(this).css("marginTop", ($(this).parent().height() - $(this).height()) / 2 + "px");
            });
        });
        
        /*
         * Add the div necessary for the menu
         */
        
        $(elems).each(function(){
            $(this).html('<div class="slider_menu">' + $(this).html() + '</div><div class="slider_arrow"></div>');
        });
        
        /*
         * Configuration of the arrow margin.
         */
        
        tmpVal = $(elems).width() - 49;
        $(elems).children(".slider_arrow").css("marginLeft", tmpVal);
        
        /*
         * initialization of the first arrow
         */
        $(next).attr("alt", "curent");
        $(next).children('.slider_menu').children().animate({
            paddingLeft: '+=20'
            }, 75, function() {
            });
        $(next).children('.slider_arrow').animate({
            marginLeft: '+=25'
            }, 100, function() {
                $(this).parent().parent().attr('alt', 'free');
            });
            
        /*
        * initialization of the first image
        */
        $(images).children().hide();
        $(images).children('img:eq(0)').fadeIn(100, function() {
            });
            
            
        /*
         * Function call by the timer to change the arrow and the images.
         */
        window.setInterval(function(){
            var list = $('.slider').children('ul');
            if ($(list).attr('id') == 'timer')
            {
                $(list).children('li').each(function(){
                    if ($(this).parent().attr('alt') != 'free')
                         return;
                    var tmpVal = parseInt($(list).children("li").width()) - 49;

                    /*
                     * Test if the li is the "current tab" (display with the arrow).
                     * hide the arrow, show the arrow on the next li and change the image
                     */
                    if ($(this).attr('alt') == "curent")
                        {
                            var images = $(this).parent("ul").parent("div").children(".slider_image");
                            var next = $(this).next();
                            if ($(this).nextAll().length == 0)
                                next = $(this).parent().children("li:eq(0)");
                            $(this).parent().attr('alt', "unfree");
                            $(this).attr('alt', "");
                            /*
                             * Animation oh the arraows
                             */
                            $(this).children(".slider_menu").children().animate({
                                paddingLeft: '-=20'
                                }, 50, function() {
                                // Animation complete.
                                });
                            $(this).children('.slider_arrow').animate({
                                marginLeft: tmpVal
                                }, 50, function() {
                                });
                            $(next).attr("alt", "curent");
                            $(next).children('.slider_menu').children().animate({
                                paddingLeft: '+=20'
                                }, 75, function() {
                                });
                            $(next).children('.slider_arrow').animate({
                                marginLeft: tmpVal + 25
                                }, 100, function() {
                                    $(this).parent().parent().attr('alt', 'free');
                                });
                            /*
                             * Animation of the images
                             */
                            $(images).children().fadeOut(100, function() {
                                });
                            $(images).children(":eq(" + $(next).prevAll().length + ")").fadeIn(100, function() {
                                });
                        }
                    });
                }
                }, 3000);
                
         /*
          * Function call to show an arraow and change the image.
          * block the 
          * hide the previous curent tab and show the new.
          */
         over = function() {
            var tmpVal = parseInt($(this).width()) - 49;
            if ($(this).parent().attr('alt') == 'free')
            {
                $(this).parent().attr('id', "notimer");
                var list = $(this).parent("ul").children();
                var images = $(this).parent("ul").parent("div").children(".slider_image");
                if ($(this).attr('alt') != "curent")
                    {
                        $(this).parent().attr('alt', "unfree");
                        /*
                         * hide all the arrows
                         */
                        $(list).each(function(){
                            if ($(this).attr('alt') == "curent")
                                {
                                    $(this).attr('alt', "");
                                    $(this).children(".slider_menu").children().animate({
                                        paddingLeft: '-=20'
                                        }, 50, function() {
                                        // Animation complete.
                                        });
                                    $(this).children('.slider_arrow').animate({
                                        marginLeft: tmpVal
                                        }, 50, function() {
                                        });
                                    $(this).attr('alt', "");
                                }
                            });
                        /*
                         * Show the curent arrow
                         */
                        $(this).attr('alt', "curent");
                        $(this).children('.slider_menu  ').children().animate({
                            paddingLeft: '+=20'
                            }, 75, function() {
                            });
                        $(this).children('.slider_arrow').animate({
                            marginLeft: tmpVal + 25
                            }, 100, function() {
                                $(this).parent().parent().attr('alt', 'free');
                        });
                        /*
                         * Animation of the images
                         */
                        $(images).children().fadeOut(100, function() {
                            });
                        $(images).children(":eq(" + $(this).prevAll().length + ")").fadeIn(100, function() {
                            });
                    }
            }
            return false;
        }
			
         /*
          * Function call for return to the automatic animation;
          */
        out = function() {
            $(this).parent().attr('id', "timer");
                      return false;
            }
        $(elems).hover(over, out);      
     }
})(jQuery);
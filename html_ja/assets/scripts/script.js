$("document").ready(function ($) {

    /*----------  scroll to position
    ------------------------------------------------------------------------------*/
    $(document).on("scroll", onScroll);

    $("ul.nav-script>li>a, div.button-wrapper>a").on("click", function() {

        var scrollAnchor = $(this).attr("data-scroll"),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 88;
        console.log(scrollPoint);

        $("body,html").animate({
            scrollTop: scrollPoint
        }, 1000);

        return false;
    })
    /*----------  end of scrol to position  ----------*/

    /*----------  contact form validator
    ------------------------------------------------------------------------------*/
    $(function() {
        $('#contact').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"process.php",
                    success: function() {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        $('#contact').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });
    });
    /*----------  end of contact form validator  ----------*/

    /*----------  slider text animations
    ------------------------------------------------------------------------------*/
    $(".anim-slider").animateSlider( {
        autoplay	            : false,
        interval	            : 7000,
        animations 	            : 
        {
            0	                : 	//Slide No1
            {
                "#fadeIn": 
                {
                    show   	    : "flipInX",
                    hide 	    : "flipOutX",
                    delayShow   : "delay1s"
                },
                "#fadeIn1" 	    :
                {
                    show   	    : "flipInX",
                    hide 	    : "flipOutX",
                    delayShow 	: "delay1-5s"
                },
                li	            : 
                {
                    show   	    : "fadeInRight",
                    hide 	    : "fadeOutDown",
                    delayShow   : "delay0.5s"
                }	
            },
            1	: //Slide No2
            {	
                "#fadeIn2"         :
                {
                    show   	    : "fadeInRight",
                    hide 	    : "fadeInLeft",
                    delayShow   : "delay1s"
                },
                "#fadeIn3" 	    :
                {
                    show 	 	: "fadeInRight",
                    hide 	 	: "fadeInLeft",
                    delayShow 	: "delay1-5s"
                },
                li	            : 
                {
                    show   	    : "fadeInRight",
                    hide 	    : "fadeOutDown",
                    delayShow   : "delay0.5s"
                }
            },
            2	                : //Slide No3
            {
                "#fadeIn4": 
                {
                    show   	    : "fadeInLeft",
                    hide 	    : "fadeInRight",
                    delayShow   : "delay1s"
                },
                "#fadeIn5" 	    :
                {
                    show 	 	: "fadeInLeft",
                    hide 	 	: "fadeInRight",
                    delayShow 	: "delay1-5s"
                },
                li	            : 
                {
                    show   	    : "fadeInRight",
                    hide 	    : "fadeOutDown",
                    delayShow   : "delay0.5s"
                }
            }
        }
    });
    /*----------  end of slider animation  ----------*/

    /*----------  stats counter waypoint
    ------------------------------------------------------------------------------*/
    var waypoint = new Waypoint({
        element: document.getElementById("waypoint-counter"),
        handler: function() {
            $(".timer").countTo({
                speed: 4000
            });
        },
        offset: "-5%"
    })
    var waypoint = new Waypoint({
        element: document.getElementById("waypoint-counter"),
        handler: function() {
            $(".timer").countTo({
                speed: 4000
            });
        },
        offset: "97%"
    })
    /*----------  end of stat counter waypoint  ----------*/

    /*----------  Back to top
    ------------------------------------------------------------------------------*/
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 500,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 1000,
        //grab the "back to top" link
        $back_to_top = $(".tp-container");

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > offset) {
            $back_to_top.addClass("tp-show");
        } else {
            $back_to_top.removeClass("tp-show");
        }
    });

    //smooth scroll to top
    $back_to_top.on("click", function(event){
        event.preventDefault();
        $("body,html").animate({
            scrollTop: 0,
        }, scroll_top_duration
                              );
    });
    /*----------  end of back to top  ----------*/

    /*----------  animate content in viewport
    ------------------------------------------------------------------------------*/
    var $animation_elements = $(".animation-element, .timer");
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass("in-view");
            } else {
                $element.removeClass("in-view");
            }
        });
    }

    $window.on("scroll resize", check_if_in_view);
    $window.trigger("scroll");
    /*----------  end of animate content in viewport  ----------*/

    /*----------  moving hover
    ------------------------------------------------------------------------------*/
    $(" #da-thumbs > li ").each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); } );

    $(" #grid > li ").each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); } );
    /*----------  end of call to hoverdir  ----------*/

    /*----------  Mix it up
    ------------------------------------------------------------------------------*/
    $('#grid').mixItUp({
        animation: {
            duration: 1000
        }
    });
    /*----------  end of mix it up  ----------*/

    /*----------  fixed nav
    ------------------------------------------------------------------------------*/
    var nav = $(".main-nav");
    var navM = $(".mobile-wrap");
    var pos = nav.offset().top;
    $(window).scroll(function () {
        var fix = ($(this).scrollTop() > pos) ? true : false;
        nav.toggleClass("fix-nav", fix);
        navM.toggleClass("fix-nav", fix);
    });
    /*----------  end of fixed nav  ----------*/

    /*----------  mobile nav
    ------------------------------------------------------------------------------*/
    $(".nav-btn").click(function () {
        if ($(".mobile-nav").hasClass("none")) {
            $(".mobile-nav").height($(".mobile-nav").find(".header .mobile-nav").height());
            $(".mobile-nav").removeClass("none");
        } else {
            $(".mobile-nav").height('');
            $(".mobile-nav").addClass("none");
        }
    });
    /*----------  end of mobile nav  ----------*/

    /*----------  filter selection add border and font color
    ------------------------------------------------------------------------------*/
    $("li.filter > a").click(function () {
        if ($("li.filter > a").hasClass("active")) {
            $("li.filter > a").addClass("active");
        } else {
            $("li.filter > a").removeClass("active");
        }
    });
    /*----------  end of filter  ----------*/

    /*----------  reload page
    ------------------------------------------------------------------------------*/
    $("#reload").click(function() {
        location.reload();
    });

}); /************* end of ready *************/

$(window).load(function () {
    /*----------  website preloader
    ------------------------------------------------------------------------------*/
    setTimeout(function() {
        $('#preloader').fadeOut("slow",function(){$(this).remove();});
    }, 1500);
}); /************* end of load *************/

$(window).resize(function () {



}); /************* end of resize *************/

/*----------  add class to menu bar links on scroll
------------------------------------------------------------------------------*/
function onScroll(event){
    var scrollPos = $(document).scrollTop() + 90;
    $("ul.nav-script>li a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos  && refElement.position().top + refElement.height() > scrollPos) {
            $("ul.nav-script>li").removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
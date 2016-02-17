/*----------  equal col
------------------------------------------------------------------------------*/
equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height("auto")
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function () {

    /*----------  equal height call
    ------------------------------------------------------------------------------*/
    equalheight(".footer-mid li");

});

$(window).resize(function () {

    /*----------  equal height call
    ------------------------------------------------------------------------------*/
    equalheight(".footer-mid li");

});

$("document").ready(function ($) {

    /*----------  slider text animations
    ------------------------------------------------------------------------------*/
    $(".anim-slider").animateSlider( {
        autoplay	            : true,
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
                "#fadeIn2" 	    :
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
                "#fadeIn"         :
                {
                    show   	    : "fadeInRight",
                    hide 	    : "fadeInLeft",
                    delayShow   : "delay1s"
                },
                "#fadeIn2" 	    :
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
                "#fadeIn": 
                {
                    show   	    : "fadeInLeft",
                    hide 	    : "fadeInRight",
                    delayShow   : "delay1s"
                },
                "#fadeIn2" 	    :
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

    /*----------  website preloader
    ------------------------------------------------------------------------------*/
    $(window).load(function() {
        setTimeout(function() {
            $('#preloader').fadeOut("slow",function(){$(this).remove();});
        }, 1500);
    });

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

    /*----------  loader waypoint
    ------------------------------------------------------------------------------*/
    var waypoint = new Waypoint({
        element: document.getElementById("waypoint-loader"),
        handler: function() {
            $(".bar-percentage[data-percentage]").each(function () {
                var progress = $(this);
                var percentage = Math.ceil($(this).attr("data-percentage"));
                $({countNum: 0}).animate({countNum: percentage}, {
                    duration: 3500,
                    easing:"linear",
                    step: function() {
                        // What todo on every count
                        var pct = '';
                        if(percentage == 0){
                            pct = Math.floor(this.countNum) + "%";
                        }else{
                            pct = Math.floor(this.countNum+1) + "%";
                        }
                        progress.text(pct) && progress.siblings().children().css("width",pct);
                    }
                }); 
            });
        },
        offset: "-20%"
    })
    var waypoint = new Waypoint({
        element: document.getElementById("waypoint-loader"),
        handler: function() {
            $(".bar-percentage[data-percentage]").each(function () {
                var progress = $(this);
                var percentage = Math.ceil($(this).attr("data-percentage"));
                $({countNum: 0}).animate({countNum: percentage}, {
                    duration: 3500,
                    easing:"linear",
                    step: function() {
                        // What todo on every count
                        var pct = '';
                        if(percentage == 0){
                            pct = Math.floor(this.countNum) + "%";
                        }else{
                            pct = Math.floor(this.countNum+1) + "%";
                        }
                        progress.text(pct) && progress.siblings().children().css("width",pct);
                    }
                }); 
            });
        },
        offset: "96%"
    })

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

    /*----------  moving hover
    ------------------------------------------------------------------------------*/
    $(" #da-thumbs > li ").each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); } );

    $(" #grid > li ").each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); } );

    /*----------  Mix it up
    ------------------------------------------------------------------------------*/
    $('#grid').mixItUp({
        animation: {
            duration: 1000
        }
    });

    /*----------  Scroll to location
    ------------------------------------------------------------------------------*/
    $(document).on("scroll", onScroll);

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

    /*----------  filter selection add border and font color
    ------------------------------------------------------------------------------*/
    $("li.filter > a").click(function () {
        if ($("li.filter > a").hasClass("active")) {
            $("li.filter > a").addClass("active");
        } else {
            $("li.filter > a").removeClass("active");
        }
    });

});

/*----------  add class to menu bar links
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

/*----------  scroll to position
------------------------------------------------------------------------------*/
$("ul.nav-script>li>a").on("click", function() {

    var scrollAnchor = $(this).attr("data-scroll"),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 88;

    $("body,html").animate({
        scrollTop: scrollPoint
    }, 1000);

    return false;
})

$("#reload").click(function() {
    location.reload();
});

/*----------  add google maps to page
------------------------------------------------------------------------------*/
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var novi_sad = {
        lat: 45.259006,
        lng: 19.814523
    };
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 8,
        scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: novi_sad, // Novi Sad

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById("map");

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: novi_sad,
        map: map,
        title: "Novi Sad"
    });
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Novi Sad</h3>' +
        '<div id="bodyContent">' +
        '<p>Dr Svetislava Kasapinovica 21 ' +
        '</p>'

        '</div>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener("click", function () {
        infowindow.open(map, marker);
        map.setZoom(13);
        map.setCenter(marker.getPosition());
    });
}
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

    //equalheight('.col-three > h3');

    /*----------  flex slider call
    ------------------------------------------------------------------------------*/
    $(".flexslider").flexslider({
        animation: "slide",
        slideshow: false
    });
    
});

$(window).resize(function () {

    /*----------  equal height call
    ------------------------------------------------------------------------------*/
    equalheight(".footer-mid li");

    //equalheight('.main-grid > h2');
});

$("document").ready(function ($) {

    /*----------  Loading
    ------------------------------------------------------------------------------*/
    $(".bar-percentage[data-percentage]").each(function () {
        var progress = $(this);
        var percentage = Math.ceil($(this).attr("data-percentage"));
        $({countNum: 0}).animate({countNum: percentage}, {
            duration: 2000,
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
    
    /*----------  Scroll to location
    ------------------------------------------------------------------------------*/
    $(document).on("scroll", onScroll);

    //smoothscroll
    $("li>a[href^='#']").on("click", function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $("a").each(function () {
            $(this).removeClass("active");
        })
        $(this).addClass("active");

        var target = this.hash,
            menu = target;
        $target = $(target);
        $("html, body").stop().animate({
            'scrollTop': $target.offset().top+2 - 90 + "px"
        }, 500, "swing", function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    
    
    
    
    
    //    $triggered_times = 0;
    //
    //    $(window).on('scroll', function() {
    //        var y_scroll_pos = window.pageYOffset;
    //        var scroll_pos_test = 150;   // set to whatever you want it to be
    //
    //        if(y_scroll_pos > scroll_pos_test && $triggered_times == 0 ) {
    //            //do your stuff over here
    //            $('.bar-percentage[data-percentage]').each(function () {
    //                var progress = $(this);
    //                var percentage = Math.ceil($(this).attr('data-percentage'));
    //                $({countNum: 0}).animate({countNum: percentage}, {
    //                    duration: 2000,
    //                    easing:'linear',
    //                    step: function() {
    //                        // What todo on every count
    //                        var pct = '';
    //                        if(percentage == 0){
    //                            pct = Math.floor(this.countNum) + '%';
    //                        }else{
    //                            pct = Math.floor(this.countNum+1) + '%';
    //                        }
    //                        progress.text(pct) && progress.siblings().children().css('width',pct);
    //                    }
    //                });
    //            });
    //            
    //            $triggered_times = 1;   // to make sure the above action triggers only once
    //        }
    //    });


    /*----------  smooth scroll
    ------------------------------------------------------------------------------*/
    //    jQuery.scrollSpeed(150, 900);

    /*----------  fixed nav
    ------------------------------------------------------------------------------*/
    var nav = $(".main-nav");
    var navM = $(".mobile-wrap");
    var pos = nav.offset().top;
    $(window).scroll(function () {
        var fix = ($(this).scrollTop() > pos) ? true : false;
        nav.toggleClass("fix-nav", fix);
        navM.toggleClass("fix-nav", fix);
        //        $('body').toggleClass('fix-body', fix);
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

});

/*----------  stats numbers
------------------------------------------------------------------------------*/
$(function () {
    var fx = function fx() {
        $(".stat-number").each(function (i, el) {
            var data = parseInt(this.dataset.n, 10);
            var props = {
                "from": { 
                    "count": 0
                },
                "to": {
                    "count": data
                }
            };
            $(props.from).animate(props.to, {
                duration: 3000 * 2,
                step: function (now, fx) {
                    $(el).text(Math.ceil(now));
                },
                complete: function () {
                    if (el.dataset.sym !== undefined) {
                        el.textContent = el.textContent.concat(el.dataset.sym)
                    }
                }
            });
        });
    };

    var reset = function reset() {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 2200) {
            $(this).off("scroll");
            fx()
        }
    };

    $(window).on("scroll", reset);
});

/*----------  link to tags
------------------------------------------------------------------------------*/
//$("ul>li>a").click(function (event) {
//    event.preventDefault();
//    //calculate destination place
//    var dest = 0;
//    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
//        dest = $(document).height() - $(window).height();
//    } else {
//        dest = $(this.hash).offset().top - 120 + "px";
//    }
//    //go to destination
//    $('html,body').animate({
//        scrollTop: dest
//    }, 1000, 'swing');
//});

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
//$("ul.nav-script>li").click(function (event) {
//    event.preventDefault();
//
//    if ($(this).hasClass("active")) {
//        $(this).removeClass("active");
//    } else {
//        $(this).addClass("active");
//        $(this).siblings().removeClass("active");
//    }
//});

/*----------  moving hover
------------------------------------------------------------------------------*/
$(function() {
    $(" #da-thumbs > li ").each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); } );
    
    $(" .ff-items > li ").each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); } );
    
});

/*----------  load font awesome
------------------------------------------------------------------------------*/
(function() {
    var css = document.createElement('link');
    css.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
    css.rel = 'stylesheet';
    css.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(css);
})();

$('#reload').click(function() {
    location.reload();
});

//// This example displays a marker at the center of Australia.
//// When the user clicks the marker, an info window opens.
//function initMap() {
//    var novi_sad = {
//        lat: 45.27143,
//        lng: 19.7794013
//    };
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 6,
//        scrollwheel: false,
//        center: novi_sad
//    });
//    var contentString = '<div id="content">' +
//        '<div id="siteNotice">' +
//        '</div>' +
//        '<h1 id="firstHeading" class="firstHeading">Novi Sad</h1>' +
//        '<div id="bodyContent">' +
//        '<p>Dr Svetislava Kasapinovica 21 ' +
//        '</p>'
//
//    '</div>' +
//        '</div>';
//    var infowindow = new google.maps.InfoWindow({
//        content: contentString
//    });
//    var marker = new google.maps.Marker({
//        position: novi_sad,
//        map: map,
//        title: 'Novi Sad'
//    });
//    marker.addListener('click', function () {
//        infowindow.open(map, marker);
//        map.setZoom(14);
//        map.setCenter(marker.getPosition());
//    });
//}
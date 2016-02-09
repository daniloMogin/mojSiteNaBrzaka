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

});

$("document").ready(function ($) {

    /*----------  stats numbers
    ------------------------------------------------------------------------------*/
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
        if ($(this).scrollTop() > 1600) {
            $(this).off("scroll");
            fx()
        }
    };

    $(window).on("scroll", reset);

    /*----------  load font awesome
    ------------------------------------------------------------------------------*/
    var css = document.createElement('link');
    css.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
    css.rel = 'stylesheet';
    css.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(css);


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
    
    /*----------  filter selection active class
    ------------------------------------------------------------------------------*/
    $("li.filter > a").click(function () {
        if ($("li.filter > a").hasClass("active")) {
            $("li.filter > a").addClass("active");
        } else {
            $("li.filter > a").removeClass("active");
        }
    });
    
    /*----------  contact form active class
    ------------------------------------------------------------------------------*/
    $("input, textarea").click(function () {
        if ($("input, textarea").hasClass("active")) {
            $("input, textarea").addClass("active");
        } else {
            $("input, textarea").removeClass("active");
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

$('ul.nav-script>li>a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 88;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;
})

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
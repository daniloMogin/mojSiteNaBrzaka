/*----------  equal col
------------------------------------------------------------------------------*/
equalheight = function(container){

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
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
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function() {

/*----------  equal height call
------------------------------------------------------------------------------*/
    equalheight('.footer-mid li');

/*----------  flex slider call
------------------------------------------------------------------------------*/
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false
    });
});

$(window).resize(function() {

/*----------  equal height call
------------------------------------------------------------------------------*/
    equalheight('.footer-mid .footer-col');
});

$('document').ready(function($) {
/*----------  fixed nav
------------------------------------------------------------------------------*/
    var nav = $('.main-nav');
    var navM = $('.mobile-wrap');
    var pos = nav.offset().top;
    $(window).scroll(function () {
        var fix = ($(this).scrollTop() > pos) ? true : false;
        nav.toggleClass('fix-nav', fix);
        navM.toggleClass('fix-nav', fix);
        $('body').toggleClass('fix-body', fix);
    });

/*----------  smooth scroll
------------------------------------------------------------------------------*/
    //    jQuery.scrollSpeed(150, 900);

/*----------  mobile nav
------------------------------------------------------------------------------*/
    $('.nav-btn').click(function(){
        if ($('.mobile-nav').hasClass('none')) {
            $('.mobile-nav').height($('.mobile-nav').find('.header .mobile-nav').height());
            $('.mobile-nav').removeClass('none');
        } else {
            $('.mobile-nav').height(''); 
            $('.mobile-nav').addClass('none');
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
                complete:function() {
                    if (el.dataset.sym !== undefined) {
                        el.textContent = el.textContent.concat(el.dataset.sym)
                    }
                }
            });
        });
    };

    var reset = function reset() {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 120) {
            $(this).off("scroll");
            fx()
        }
    };

    $(window).on("scroll", reset);
});

/*----------  link to tags
------------------------------------------------------------------------------*/
$("ul>li>a").click(function(event){
    event.preventDefault();
    //calculate destination place
    var dest=0;
    if($(this.hash).offset().top > $(document).height()-$(window).height()){
        dest=$(document).height()-$(window).height();
    }else{
        dest=$(this.hash).offset().top - 120 + "px";
    }
    //go to destination
    $('html,body').animate({scrollTop:dest}, 1000,'swing');
});

/*----------  add class to menu bar links
------------------------------------------------------------------------------*/
$("ul>li").click(function(event){
    event.preventDefault();

    if ($(this).hasClass("is-selected")) {
        $(this).removeClass("is-selected");
    }else{
        $(this).addClass("is-selected");
        $(this).siblings().removeClass('is-selected');
    }
});







    // This example displays a marker at the center of Australia.
    // When the user clicks the marker, an info window opens.
    function initMap() {
    var novi_sad = {lat: 45.27143, lng: 19.7794013};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        scrollwheel: false,
        center: novi_sad
    });
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Novi Sad</h1>'+
        '<div id="bodyContent">'+
        '<p>Dr Svetislava Kasapinovica 21 ' +
        '</p>'

    '</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: novi_sad,
        map: map,
        title: 'Novi Sad'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
        map.setZoom(14);
        map.setCenter(marker.getPosition());
    });
}

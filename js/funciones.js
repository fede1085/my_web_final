$(document).ready(function() {
    animatedAnchor('.btn_anchor');
    showOverlay('#btn_contact', '.overlay_contact');
    showBtnFilter('#filter_works');
    fixedFilter();

    wow = new WOW(
      {
        animateClass: 'animated',
        offset: 240,
        callback: function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

    $(function() {  
        jQuery.scrollSpeed(100, 1000);
    });

});


function animatedAnchor(btnSlide) {
    $(btnSlide).each(function(){
        $(this).on('click', function() {
            var elementID = $(this).data('target');  
            var scrollLength = $('#' + elementID).offset().top;
            $('html, body').animate({
                scrollTop : scrollLength
            }, 1300, 'easeOutQuart');

            return false;
        });
    });
}

function showBtnFilter(conBtnFilter) {
    $(window).scroll(function() {
        var positionWindow = $(window).scrollTop();
        var showBtnfilter = $('#header').outerHeight();
        var sizeHideElement = $(conBtnFilter).outerHeight();
        $(conBtnFilter).css('bottom', -sizeHideElement);
        if (positionWindow > showBtnfilter) {
            $(conBtnFilter).css('bottom', '0');
        } else {
            $(conBtnFilter).css('bottom', -sizeHideElement);
        } 
        hideBtnWorks(positionWindow, showBtnfilter);
    });
 }

function hideBtnWorks(positionWindow, hideBtnWorks) {   
    var sizeHideElement = $('.header_top').outerHeight();
    if(positionWindow > hideBtnWorks) {
        $('#btn_works').css({
            'position': 'relative',
            'top': -sizeHideElement
        });
    } else {
        $('#btn_works').css({
            'position': 'static',
            'top': '0'
        });
    }
}

function fixedFilter() {
    var windowWidth = $(window).width();
    var tabletViewport = 1024;
    $(window).scroll(function() {
        var showBtnfilter = $('#header').outerHeight();
        var positionWindow = $(window).scrollTop();
        if (windowWidth < tabletViewport && positionWindow > showBtnfilter) { 
            $('#filter_works').children('div').addClass('fixedFilter');
        } else {
            $('#filter_works').children('div').removeClass('fixedFilter');
        }
    });    
}

function showOverlay(btnShow, overlay) {
    var getOverlayWidth = $(overlay).width();
    var tabletViewport = 1024;
    var windowWidth = $(window).width();
    
    $(btnShow).on('click', function() {
        var newOverlayWidth = $('#main_menu').outerWidth();
        $(overlay).width(newOverlayWidth);
        $(overlay).css('left', '0');
        hideOverlayResize(overlay, newOverlayWidth);
        return false;
    });
    $('#btn-close').on('click', function() {
        var newOverlayWidth = $('#main_menu').outerWidth();
        $(this).parent(overlay).css('left', -newOverlayWidth);
        return false;
    });
}

function hideOverlayResize(overlay, newOverlayWidth) {
    $(window).resize(function() {
        $(overlay).css('left', -newOverlayWidth * 2);
    });    
}
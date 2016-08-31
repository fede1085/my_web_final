$(document).ready(function() {
    
    animatedAnchor('.btn_anchor');
    showOverlay('#btn_contact', '.overlay_contact');
    showBtnFilter('#filter_works');
    fixedFilter();
    // toggleMenu('#btn_toggleMenu', '#main_menu');

    //inicializa reveal animation
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
});



function animatedAnchor(btnSlide) {
    $(btnSlide).each(function(){
        $(this).on('click', function() {
            event.preventDefault()
            var elementID = $(this).attr('href');
            var scrollLength = $(elementID).offset().top;
            
            $('html, body').animate({
                scrollTop : scrollLength
            }, 1300, 'easeOutQuart');
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
    var tabletViwport = 1024;
    
    $(window).scroll(function() {
        var showBtnfilter = $('#header').outerHeight();
        var positionWindow = $(window).scrollTop();

        if (windowWidth < tabletViwport && positionWindow > showBtnfilter) { 
            $('#filter_works').children('div').addClass('fixedFilter');
            
        } else {
            $('#filter_works').children('div').removeClass('fixedFilter');
        }
    });

    adjustHeaderRsp(tabletViwport, windowWidth);    
}


function adjustHeaderRsp(tabletViwport, windowWidth) {
    console.log(tabletViwport);
    
    var btnHeight = $('.btn-down').outerHeight();
    var headerHeight = $('#main_menu').outerHeight();

    if (windowWidth < tabletViwport) {
        $('#main_menu').css('height', (headerHeight - btnHeight)); 
    }

} 


function showOverlay(btnShow, overlay) {
    var newOverlayWidth = $('#main_menu').outerWidth();
    var setOverlayWidth = $(overlay).width(newOverlayWidth);
    var getOverlayWidth = $(overlay).width();

    $(overlay).css('left', -getOverlayWidth);
    
    $(btnShow).on('click', function() {
        event.preventDefault();
        $(overlay).css('left', '0');
    });

    $('#btn-close').on('click', function() {
        event.preventDefault();
        $(this).parent(overlay).css('left', -getOverlayWidth);
    });
}



// function toggleMenu(btnToggleMenu, mainMenu) {

//     var widthMenu = $(mainMenu).outerWidth();

//     $(btnToggleMenu).on('click', function() {

//         $(mainMenu).css({
//             'left': -widthMenu,
//             'width': '0'
//         });
        
//         $('#section_content').css({
//             'width': '100%',
//             'left': '0'
//         });
//     });

// }



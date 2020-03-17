'use strict';
$(window).load(function () {
    // PORTFOLIO FILTER 
    if ($('.isotope_items').length) {
        // PORTFOLIO ISOTOPE
        var $container = $('.isotope_items');
        var portfilter = $('.portfolio_filter ul li');
        $container.isotope();
        portfilter.on("click", function () {
            portfilter.removeClass("select-cat");
            $(this).addClass("select-cat");
            var selector = $(this).attr('data-filter');
            $(".isotope_items").isotope({
                filter: selector
                , animationOptions: {
                    duration: 750
                    , easing: 'linear'
                    , queue: false
                    ,
                }
            });
            return false;
        });
    }
    var wind = $(window)

    //PRELOADER
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.
     // OWL CAROUSEL GENERAL JS
           var owlcar = $('.owl-carousel');
           if (owlcar.length) {
               owlcar.each(function () {
                   var $owl = $(this);
                   var itemsData = $owl.data('items');
                   var autoPlayData = $owl.data('autoplay');
                   var paginationData = $owl.data('pagination');
                   var navigationData = $owl.data('navigation');
                   var stopOnHoverData = $owl.data('stop-on-hover');
                   var itemsDesktopData = $owl.data('items-desktop');
                   var itemsDesktopSmallData = $owl.data('items-desktop-small');
                   var itemsTabletData = $owl.data('items-tablet');
                   var itemsTabletSmallData = $owl.data('items-tablet-small');
                   $owl.owlCarousel({
                       items: itemsData
                       , pagination: paginationData
                       , navigation: navigationData
                       , autoPlay: autoPlayData
                       , stopOnHover: stopOnHoverData
                       , navigationText: ["<", ">"]
                       , itemsCustom: [
                           [0, 1]
                           , [500, itemsTabletSmallData]
                           , [710, itemsTabletData]
                           , [992, itemsDesktopSmallData]
                           , [1199, itemsDesktopData]
                       ]
                   , });
               });
           }
           
           // BOOTSTRAP TOOLTIP
           $(function () {
               $('[data-toggle="tooltip"]').tooltip()
           })
}); // ready end


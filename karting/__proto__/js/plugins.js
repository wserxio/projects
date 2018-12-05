// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$(function () {
    $("a[href^='#']").click(function (e) {
        e.preventDefault();
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top - 84 + "px"
        }, 1000);
        return false;
    });
});

// owl-carousel
$('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  nav: false,
  navText: '',
  dots: false
})
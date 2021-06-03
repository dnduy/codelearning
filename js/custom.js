function sticky_menu(menu, sticky) {
    if (typeof sticky === 'undefined' || !jQuery.isNumeric(sticky)) sticky = 0;
    if ($(window).scrollTop() >= sticky) {
        if ($('#just-for-height').length === 0) {
            menu.after('<div id="just-for-height" style="height:' + menu.height() + 'px"></div>')
        }
        menu.addClass("sticky");
    } else {
        menu.removeClass("sticky");
        $('#just-for-height').remove();
    }
}

$(document).ready(function () {
    var menu = $("#menu-demo");
    if (menu.length) {
        var sticky = menu.offset().top + 1;
        if ($(window).width() > 767) {
            sticky_menu(menu, sticky);
            $(window).on('scroll', function () {
                sticky_menu(menu, sticky);
            });
        }
    }
});
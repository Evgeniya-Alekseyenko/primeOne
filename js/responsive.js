//Adaptive functions
$(window).resize(function(event) {
    adaptive_function();
});
function adaptive_header(w,h) {
        let headerMenu=$('.header-menu');
        let headerLang=$('.header-top-lang');
    if(w < 767){
        if(!headerLang.hasClass('done')){
            headerLang.addClass('done').appendTo(headerMenu);
        }else{
            if(headerLang.hasClass('done')){
            headerLang.removeClass('done').prependTo($('.header-top'));
        }
    }

    if(w < 767){
        if(!$('.header-bottom-menu').hasClass('done')){
            $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
        }else{
            if($('.header-bottom-menu').hasClass('done')){
            $('.header-bottom-menu').removeClass('done').prependTo($('.header-top'));
        }
    }
}

}
}
function adaptive_function() {
    let w=$(window).outerWidth();
    let h=$(window).outerHeight();
    adaptive_header(w,h);
}
adaptive_function()

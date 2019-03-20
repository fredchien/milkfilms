function windowResize() {
    screW = window.innerWidth;
    screH = window.innerHeight;
    screHH = (screH / 2);
    screHW = (screW / 2);
}
$(document).ready(function() {
    // pega o tamanho da janela ao carregar o documento
    windowResize();
    $(window).resize(function() {
        // pega tamanhos sempre que a tela for redimensionada
        windowResize();
    });



    // menu toggle

    $("#menu-toggle").click(function(e){
        e.preventDefault();
        $("#header").toggleClass('open');
    });

    
    // ajusta imagens as figures
    $("figure.fit").each(function(){
        var $img = $(this).children("img");
        if ($img) {
            $(this).css('background-image', 'url(\'' + $img.attr('src') + '\')');
            $img.hide();
        }
    });

     jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 50) {
            jQuery("header").addClass('top-fixed');
        } else {
         jQuery("header").removeClass('top-fixed');
     }

    });

      // carrossel banner home
    $("#home-banner-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        navText: ['‹','›'],

        responsive: {
            0: { items: 1, },
            450: { items: 1, },
            768: { items: 1, },
            992: { items: 1, },
        },
    });
    $('.jarallax').jarallax({
        speed: 0.2
    });

    // Youtube videos
    function makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < length; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    $(".video-container .video-iframe").each(function(){
        var newId = 'video-' + makeid(5);

        while ($('#' + newId).length != 0)
            var newId = 'video-' + makeId(5);

        $(this).attr("id", newId);

        $(this).YTplayer({
            onStateChange: function(event){
                var $vo = $(this).parent().children('.video-overlay');

                if (event.data == 1 || event.data == -1 || event.data == 3) {
                    $vo.addClass("playing");
                    $(this).addClass("playing");
                }
                else {
                    $vo.removeClass("playing");
                    $(this).removeClass("playing");
                }
            }
        })

    });

    $(".video-container .video-overlay .play-icon").click(function(e){
        e.preventDefault();
        $(this).parent().parent().children(".video-iframe").ytplay();
    });

    $(".video-container .video-overlay").click(function(e){
        e.preventDefault();
        $(this).parent().children(".video-iframe").ytplay();
    });
    
});
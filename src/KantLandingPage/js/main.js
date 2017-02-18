/**
 * Created by MaximeMaillet on 16/02/2017.
 */

$(window).on("load", function() {

    $('.block').css('height', $(window).height());
    $('#loader').css('display', 'none');
    var page_total = $("body").children("section.block").length;
    var page_active = 0;

    var hasScroll = 1;
    var scroll_time = 0;
    $(document).bind('DOMMouseScroll', function(e){

        if(e.originalEvent.detail > 0) {
            if(hasScroll == 1) {
                hasScroll = 0;
                scrollDown();
            }

        }
        else {
            if(hasScroll == 1) {
                hasScroll = 0;
                scrollUp();
            }
        }

        return false;
    });

    $(document).bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta < 0) {
            if(hasScroll == 1) {
                hasScroll = 0;
                scrollDown();
            }

        }
        else {
            if(hasScroll == 1) {
                hasScroll = 0;
                scrollUp();
            }
        }

        return false;
    });

    function scrollUp() {
        page_active--;
        if(page_active < 0)
            page_active = 0;

        scrollToAnchor();
        return false;
    }

    function scrollDown() {
        page_active++;
        if(page_active >= page_total)
            page_active = page_total-1;

        scrollToAnchor();
        return false;
    }

    function scrollToAnchor() {
        $('html,body').animate({
            scrollTop: $('section[data-k-position="'+page_active.toString()+'"]').offset().top
        }, 350, function() {

            setTimeout(function() {
                hasScroll = 1;
            }, 600);

        });
    }

    $('nav.Knav').find('a').each(function() {
        $(this).on('click', function (event) {
            event.preventDefault();
            console.log($(this).data('k-anchor'));
            var section = $('section[id="'+$(this).data('k-anchor')+'"]');

            hasScroll = 0;
            $('html,body').animate({
                scrollTop: section.offset().top
            }, 350, function() {

                setTimeout(function() {
                    hasScroll = 1;
                }, 600);

            });

            return false;
        });
    });
});
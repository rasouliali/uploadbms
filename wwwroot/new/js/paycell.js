$(function () {

    var owl = $('.owl-1');
    owl.owlCarousel({
        loop: false,
        margin: 20,
        center: true,
        nav: true,
        dots: false,
        items: 1,
        stagePadding: 40,
        smartSpeed: 300,
        touchDrag: true,
        autoplay: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

        afterAction: function (el) {

        }


    });

    $('.owl-1').trigger("to.owl.carousel", [2, 500]);

    $('.internet').on('touchend', function (e) { $('.owl-1').trigger("to.owl.carousel", [0, 200]); });
    $('.travel').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [0, 200]); });
    $('.insu').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [1, 200]); });
    $('.charge').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [4, 200]); });
    $('.ghabz').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [3, 200]); });
    $('.bank').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [4, 200]); });
    $('.cars').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [5, 200]); });
    $('.funn').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [8, 200]); });


    var carousel_nav_a = $('.carousel-nav section');

    carousel_nav_a.each(function (slide_index) {
        var $this = $(this);
        $this.attr('data-num', slide_index);
        $this.click(function (e) {
            owl.trigger('to.owl.carousel', [slide_index, 300]);
        })



    })

    owl.on('changed.owl.carousel', function (event) {
        carousel_nav_a.removeClass('xshow');
        window.setTimeout(function () {
            $(".carousel-nav section[data-num=" + event.item.index + "]").addClass('xshow');
        }, 200);

    })


})


$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});

if (false) {
    setTimeout(() => {
        debugger
        if (!GetNullEmpetyUndefined(document.getElementById('cccc'))) {
            const box = document.getElementById('cccc');
            !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : '';
        }

    }, 1000);


    setTimeout(() => {
        if (!GetNullEmpetyUndefined(document.getElementsByClassName('lo1'))) {
            const box = document.getElementsByClassName('lo1');
            !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : '';
        }

    }, 100);
    setTimeout(() => { const box = document.getElementsByClassName('lo2'); !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : ''; }, 300);
    setTimeout(() => { const box = document.getElementsByClassName('lo3'); !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : ''; }, 500);
    setTimeout(() => { const box = document.getElementsByClassName('lo4'); !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : ''; }, 700);
    setTimeout(() => { const box = document.getElementsByClassName('lo5'); !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : ''; }, 900);
    setTimeout(() => { const box = document.getElementsByClassName('lo6'); !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : ''; }, 1100);
    setTimeout(() => { const box = document.getElementsByClassName('lo7'); !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : ''; }, 1300);
    setTimeout(() => { const box = document.getElementsByClassName('lo8'); !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : ''; }, 1500);
    setTimeout(() => { const box = document.getElementsByClassName('lo9'); !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : ''; }, 1700);
    setTimeout(() => { const box = document.getElementsByClassName('lo10'); !GetNullEmpetyUndefined(box) ? box.style.visibility = 'visible' : ''; }, 1900);
}
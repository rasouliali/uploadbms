$(document).ready(function () {
    hide();

    $(window).on('load', function () {
        if ($('.container').find('img').length > 0) {
            $('.container').find('img').each(function (index, elem) {
                var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
                $(this).addClass(imgClass);
            });
        }
    });

    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 0,
        focusOnSelect: false,
        customPaging: function (slider, i) {
            return '<a><svg width="100%" height="100%" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"></circle><ellipse cx="8" cy="8" rx="8" ry="4"></ellipse> </svg></a>';
        }
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.item').removeClass('from-right from-left ready');
        c = currentSlide < nextSlide ? 'from-right' : 'from-left';
        $('.item').eq(nextSlide).addClass(c);
    }).on('afterChange', function (event, slick, currentSlide) {
        $('.item').eq(currentSlide).addClass('ready');
    });
    var timer = setInterval(function () {
        if ($($('.onboard li')[0]).attr('class') == "slick-active")
            $($('.onboard li')[1]).trigger('click');
        else if ($($('.onboard li')[1]).attr('class') == "slick-active")
            $($('.onboard li')[2]).trigger('click');
        else if ($($('.onboard li')[2]).attr('class') == "slick-active") {
            $($('.ready')[0]).trigger('click');
            clearInterval(timer);
        }
    }, 4000);
    $('.ready').on('click', function () { $('.onboard').hide(); $('.login').show(); })

    $('.company-box').on('click', function () {
        var id = $(this).data('id');
        $.post('/Info/CompanyDetails', { id: id }, function (data, status) {
            $('#CompanyModalShower').trigger('click');
            $('#CompanyModalShowerLabel').html('اطلاعات شرکت ' + data.name);
            var dataDesc = data.desc;
            dataDesc += data.aparatLink;
            $('#CompanyDesc').html(dataDesc);
        });
    });
    $('#Generation').on('click', function () { window.location.href = "/Info/IncomeGeneration"; });
    $('#BI').on('click', function () { window.location.href = "/Info/BIReport"; });
    $('#Survey').on('click', function () { window.location.href = "/Surveys/Index"; });
    $('#Adv').on('click', function () { window.location.href = "/Info/Advertising"; });
    $('#News').on('click', function () { window.location.href = "/Info/News"; });
    $('#Academy').on('click', function () { window.location.href = "/Info/Academy"; });
});
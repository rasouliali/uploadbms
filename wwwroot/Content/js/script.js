var _typeOfCustomDialoug = "";
var CanAffiliateTextSendBySMS = false;
$(document).ready(function () {
    if (location.pathname !== "/Account/OTP_Confirm") {
        if (document.getElementById('SendSMSBtn')) {
            document.getElementById('SendSMSBtn').addEventListener('click', function (event) {

                $('#lblWaiting').show();
                $('#SendSMSBtn').hide();
                var location = window.location.href;
                if ($('#MobileNumber').val()) {
                    $('#loading').show();
                    $.post('/Info/sendAffiliateLinkSMS', { mobile: $('#MobileNumber').val() }, function (data, status) {
                        if (data.res > 0) {
                            alart('پیامک با موفقیت ارسال شد', "s", 6000);
                        } else {
                            alart('مشکلی وجود دارد و پیامک ارسال نشد', "e", 6000);
                        }
                        $('#myModal').modal('toggle');
                        $('#loading').hide();
                    });
                } else {
                    alert('شماره موبایل اجباری است');
                }
            });
        }
    }
    window.onload = function (event) {
        $('#loading').hide();
    };
    window.onbeforeunload = function (event) {
        $('#loading').show();
        var newLocation = document.activeElement.href;
        if (newLocation == this.undefined) {
            setTimeout(function () { $('#loading').hide(); }, 3000);
        }
        else {
            newLocation = newLocation.toString().toLowerCase();
            if (newLocation.endsWith(".jpg") || newLocation.endsWith(".png")
                || newLocation.endsWith(".jpeg")
                || newLocation.endsWith(".pdf")
                || newLocation.endsWith(".gif")
                || newLocation.endsWith(".doc")
                || newLocation.endsWith(".docx")
                || newLocation.endsWith(".txt")
                || newLocation.endsWith(".csv")
                || newLocation.endsWith(".xls")
                || newLocation.endsWith(".xlsx")
                || newLocation.endsWith(".ppt")
                || newLocation.endsWith(".pptx")
            ) {
                setTimeout(function () { $('#loading').hide(); }, 3000);
            }
        }

        //alert('qwewqewqe');
        //event = event || window.event;
        //if (event) {
        //    // This is for IE
        //    event.returnValue = s;
        //}

        //// This is for all other browsers
        //return s;
    }
    window.unload = function (event) {
        $('#loading').hide();
    }

    window.onerror = function (message, source, lineno, colno, error) { $('#loading').hide(); };

    $('#reloadData').on('click', function () {
        window.location.href = window.location.href;
    });

    var owl = $('.owl-1');
    if (owl.length > 0) {
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
        $('.internet').on('touchend', function (e) {

            $('.owl-1').trigger("to.owl.carousel", [0, 200]);
            setTimeout(function () {
                $('#phoneToChargeNet').focus();
            }, 1000);

        });
        $('.travel').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [0, 200]); });
        $('.insu').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [1, 200]); });
        $('.charge').on('touchend', function () {
            $('.owl-1').trigger("to.owl.carousel", [4, 200]);

            setTimeout(function () {
                $('#phoneToCharge2').focus();
            }, 1000);


        });
        $('.ghabz').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [3, 200]); });
        $('.bank').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [4, 200]); });
        $('.cars').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [5, 200]); });
        $('.funn').on('touchend', function () { $('.owl-1').trigger("to.owl.carousel", [8, 200]); });
    }

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

    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    if (false) {
        setTimeout(() => {
            const box = document.getElementById('cccc');
            box.style.visibility = 'visible';
        }, 1000);


        setTimeout(() => { const box = document.getElementsByClassName('lo1'); box.style.visibility = 'visible'; }, 100);
        setTimeout(() => { const box = document.getElementsByClassName('lo2'); box.style.visibility = 'visible'; }, 300);
        setTimeout(() => { const box = document.getElementsByClassName('lo3'); box.style.visibility = 'visible'; }, 500);
        setTimeout(() => { const box = document.getElementsByClassName('lo4'); box.style.visibility = 'visible'; }, 700);
        setTimeout(() => { const box = document.getElementsByClassName('lo5'); box.style.visibility = 'visible'; }, 900);
        setTimeout(() => { const box = document.getElementsByClassName('lo6'); box.style.visibility = 'visible'; }, 1100);
        setTimeout(() => { const box = document.getElementsByClassName('lo7'); box.style.visibility = 'visible'; }, 1300);
        setTimeout(() => { const box = document.getElementsByClassName('lo8'); box.style.visibility = 'visible'; }, 1500);
        setTimeout(() => { const box = document.getElementsByClassName('lo9'); box.style.visibility = 'visible'; }, 1700);
        setTimeout(() => { const box = document.getElementsByClassName('lo10'); box.style.visibility = 'visible'; }, 1900);
    }

});
function customeSetter(typeOfCustomDialoug) {
    _typeOfCustomDialoug = typeOfCustomDialoug;
    if (typeOfCustomDialoug == "exit") {
        $("#CustomModalLbl").html("خروج");
        $("#CustomModalBtn").html("بله");
        $("#CustomModalSpan").html("از حساب کاربری خود خارج می‌شوید؟");

    }
}
$('#CustomModalBtn').on('click', function () {
    if (_typeOfCustomDialoug == "exit") {
        localStorage.removeItem("CurrentUrlPhone");
        $('#logoutForm').submit();

    }

});
var text = '@ViewBag.Link';

$('#intro-code').html(text.split('=')[1]);
/*var AffiliateLink = '@string.Join(string.Join(Html.Raw(ViewBag.AffiliateLink).Split("\r"),"").Split("\n"),"\n")';*/
var AffiliateLink = '@Html.Raw(ViewBag.AffiliateLink)';
var AffiliateLinkSms = '@Html.Raw(ViewBag.AffiliateLinkSms)';

//document.getElementById('whatsapp-btn-Affiliate').addEventListener('click', function (event) {
//    window.location.href = "https://api.whatsapp.com/send?text=" + encodeURI(AffiliateLink);
//});
//document.getElementById('telegram-btn-Affiliate').addEventListener('click', function (event) {
//    window.location.href = "tg://msg?text=" + encodeURI(AffiliateLink);
//});
var smsBtn = document.getElementById('SMS-btn-Affiliate');
if (smsBtn) {
    smsBtn.addEventListener('click', function (event) {
        $('#modalShower').trigger('click');
        $('#lblWaiting').hide();
    });
}



try {
    document.getElementById('copy-btn-Affiliate').addEventListener('click', function (event) {
        copy(AffiliateLink);
    });
} catch (e) {

}

function copy(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);

    /* Select the text field */
    input.select();
    input.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand('copy');
    document.body.removeChild(input);
};
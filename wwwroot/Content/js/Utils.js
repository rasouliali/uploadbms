var text;
var fNamad = false;
var fSendSMS = false;
var _typeOfCustomDialoug = "";
var versinApp;
var AffiliateLink;
var AffiliateLinkSms;
var _timeout;

$(document).ready(function () {
    $('.navbar-toggle').on('click', function () {
        //$("#drawer").fadeToggle("slow");
        //$(".anim").fadeToggle("slow");
        $("#demo").trigger("click");
    });
    if (fSendSMS === true) {
        document.getElementById('SendSMSBtn').addEventListener('click', function (event) {
            $('#lblWaiting').show();
            $('#SendSMSBtn').hide();
            var location = window.location.href;
            if ($('#MobileNumber').val()) {
                $('#loading').show();
                $.post('/Info/sendAffiliateLinkSMS', { mobile: $('#MobileNumber').val() }, function (data, status) {
                    if (data.res > 0) {
                        alert('پیامک با موفقیت ارسال شد');
                    } else {
                        alert('مشکلی وجود دارد و پیامک ارسال نشد');
                    }
                    $('#myModal').modal('toggle');
                    $('#loading').hide();
                });
            } else {
                alert('شماره موبایل اجباری است');
            }
        });
    }

    $.post('/Info/GetCurrentCreditValue', function (data, status) {
        if (data.credit) {
            if (data.credit != undefined) {
                $('#creditA').html(arabicNum(data.credit.toLocaleString()) + "ريال");
                $('#wallet-ballance').html(arabicNum(data.credit.toLocaleString()) + "ريال");
            }
        } else {
            try {

                if (data.credit == 0) {

                    $('#creditA').html(arabicNum(data.credit.toLocaleString()) + " ريال");
                    $('#wallet-ballance').html(arabicNum(data.credit.toLocaleString()) + " ريال");
                }
            } catch (e) {

            }
        }
    });

    $('#CustomModalBtn').on('click', function () {
        if (_typeOfCustomDialoug == "exit") {
            // $('#logoutForm').submit();
            Alert("mdsv")
        }


    });


    $('#intro-code').html(text.split('=')[1]);




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
    } catch (e) { }


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

    };


    window.onerror = function (message, source, lineno, colno, error) { $('#loading').hide(); };

    $('#reloadData').on('click', function () {
        window.location.href = window.location.href;
    });
    if (fNamad === true) {
        setInterval(function () {
            $("[name=enamadtagimage]").attr("src", "https://Trustseal.eNamad.ir/logo.aspx?id=317429&amp;Code=ExSc0OEBIhprduezHVv5");
        }, 3000);
    }



});

function arabicNum(num) {
    return num.split('0').join('۰').split('1').join('۱').split('2').join('۲').split('3').join('۳').split('4').join('۴').split('5').join('۵')
        .split('6').join('۶').split('7').join('۷').split('8').join('۸').split('9').join('۹');
};

GetNullEmpetyUndefined = function (e) {
    var result = false;
    if (e === undefined || e === null || e === "")
        result = true;
  
    return result;
};

function customeSetter(typeOfCustomDialoug) {
    _typeOfCustomDialoug = typeOfCustomDialoug;
    if (typeOfCustomDialoug == "exit") {
        $("#CustomModalLbl").html("خروج");
        $("#CustomModalBtn").html("بله");
        $("#CustomModalSpan").html("از حساب کاربری خود خارج می‌شوید؟");
    }
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
}

function deb() {
    try {
        debugger;
    } catch (e) {

    }
};

keyMaker = function () {
    return ((new Date()).getTimezoneOffset() / 60) +
        window.screen.width +
        navigator.product +
        window.screen.height +
        navigator.language +
        window.screen.colorDepth +
        navigator.platform +
        window.screen.pixelDepth +
        navigator.userAgent;
};

setlstor = function (k, v) {
    var key = encrypt(k.toString(), keyMaker());
    var val = encrypt(v.toString(), keyMaker());
    localStorage.setItem(key, val);
};

getlstor = function (k) {

    var t = encrypt(k.toString(), keyMaker());
    var dd = localStorage.getItem(t);
    var tt = decrypt(dd, keyMaker());

    return tt;
};

dellstor = function (k) {
    var t = encrypt(k.toString(), keyMaker());

    localStorage.removeItem(t);
};

encrypt = function (text, key, revert = false) {

    if (GetNullEmpetyUndefined(text))
        return '';
    var newText = '';
    for (var i = 0; i < text.length; i++)
        newText += String.fromCharCode(text.charCodeAt(i) + (revert ? key.charCodeAt(Math.abs(key.length - i) % key.length) : key.charCodeAt(i % key.length)));

    return newText;
};

decrypt = function (text, key, revert = false) {

    if (GetNullEmpetyUndefined(text))
        return '';
    var newText = '';
    for (var i = 0; i < text.length; i++)
        newText += String.fromCharCode(text.charCodeAt(i) - (revert ? key.charCodeAt(Math.abs(key.length - i) % key.length) : key.charCodeAt(i % key.length)));

    return newText;
};

setSelect = function (e, v, t) {
    $(e).append('<option value="' + v + '">' + t + '</option>');
};

formatMoney = function (number) {
    try {
        var p = parseFloat(number, number.toString().length).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString().split('.')[0];
        return !GetNullEmpetyUndefined(p) ? p : "0";
    } catch (e) {
        return "0";
    }
};

alart = function (m = "Hello", t = "s", times = 5000) {
    //alertify.set('notifier', 'position', 'top-left');
    //alertify.success('Current position : ' + alertify.get('notifier', 'position'));
    //alertify.reset();

    switch (t) {
        case "s":
            {
                alertify
                    .delay(times)
                    .success(m);
                break;
            }
        case "w":
            {
                alertify
                    .delay(times)
                    .log(m);
                break;
            }
        case "e":
            {
                alertify
                    .delay(times)
                    .error(m);
                break;
            }
        default: {
            alertify
                .delay(times)
                .success(m);
            break;
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

show = function () {
    $("#preloader").removeAttr("style");
};

hide = function () {

    $("#divProcessing").hide();
};

delCookie = function (name) {
    document.cookie = name + "=''; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

autoversion = function ($url, IsJS, strName = null) {

    var str = '';
    if (GetNullEmpetyUndefined(versinApp)) {
        versinApp = Math.floor(Math.random() * 100424);
    }
    if (IsJS === 1) {
        for (var i = 0; i < $url.split(',').length; i++)
            str += '<script type="text/javascript"   src="' + $url.split(',')[i] + '?v=' + versinApp + '"></script>';

        $(".Link-script").html(str);
    }

    else if (IsJS === 2) {
        if (false) {
            Header();
        }

        $("#root-master").load($url + "?v=" + versinApp + " ");
        if (false) {
            Footer();
        }

    }
    else if (IsJS === 3) {

        Header();

        $("#root-master").html($url);

        Footer();


    }
    else {

        for (i = 0; i < $url.split(',').length; i++)
            str += '<link rel="stylesheet" type="text/css" href="' + $url.split(',')[i] + '?v=' + versinApp + '"/>';

        $(".Link-Css").html(str);
    }
    str = '';
    return;
};

handlerPage = function (e, f = false) {

    var re = window.event;
    $('#Icon-Menu-Mobile').hide();
    if (!GetNullEmpetyUndefined(re)) {
        re.preventDefault();
    }
    if (location.pathname.length > 1) {
        setlstor("CurrentUrlOld", location.pathname.substring(1));
    } else {
        setlstor("CurrentUrlOld", location.pathname);
    }

    show();
    var asd;
    var html;
    try {
        html = e.data("html");
    } catch (e) { }

    if (!GetNullEmpetyUndefined(html)) {
        asd = html;
    } else {


        if (e === "" && f === false) {
            asd = getlstor("CurrentUrl");
            setHistoryPushState("/");
        } else asd = e;
    }

    setlstor("CurrentUrl", asd);

    switch (asd.toLowerCase()) {
        case "OTP".toLowerCase():
            {
                autoversion('/Content/App/OTP/OTP.html', 2);

                setTitel("صفحه رمز پویا");
                setHistoryPushState("/Info/Index");
                dellstor("CurrentUrl");
                break;
            }

        case "OTP-confirm".toLowerCase():
            {

                autoversion('/Content/App/OTP-confirm/OTP-confirm.html', 2);

                setTitel("صفحه تایید رمز پویا");
                setHistoryPushState("/Info/Index");
                dellstor("CurrentUrl");
                break;
            }
        case "User-Info".toLowerCase():
            {

                autoversion('/Content/App/User-Info/User-Info.html', 2);

                setTitel("صفحه اطلاعات تکمیلی");
                setHistoryPushState("/Info/Index");
                //setHistoryPushState("/Home/User-Info?id=" + Math.random());
                //dellstor("CurrentUrl");
                break;
            }
        case "Home".toLowerCase():
            {

                autoversion('/Content/App/Home/Home.html', 2);

                setTitel("صفحه اصلی");
                setHistoryPushState("/Info/Index");
                //dellstor("CurrentUrl");
                break;
            }
        case "Home/Index".toLowerCase():
            {


                $('#Icon-Menu-Mobile').hide();
                Home('/Content/Html/Shoping/Home.html');
                setTitel("صفحه اصلی");
                setHistoryPushState("/Info/Index");
                $('#headerArea').show();
                $('#_footer').show();


                break;
            }


        case "Account/Logoff".toLowerCase():
            {
                $("#sidenavWrapper").removeClass("nav-active");
                $(".sidenav-black-overlay").removeClass("active");
                hideLoader();
                Swal.fire({
                    title: 'پیام تایید',
                    text: "آیا مطمئن به خروج هستید؟",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'خیر',
                    confirmButtonText: 'بله!',
                    showCloseButton: true
                }).then((result) => {
                    if (result.value) {
                        $('#headerArea').show();
                        $('#_footer').show();
                        delCookie("IsRezev");
                        logOff(asd);
                    }
                });
                break;
            }
        case "Home/Error".toLowerCase():
            {
                Home('/Content/Html/Error.html');
                setTitel("صفحه خطا  ");
                setHistoryPushState("/Error?id=" + Math.random());
                dellstor("CurrentUrl");
                $('#headerArea').hide();
                $('#_footer').hide();
                break;

            }
        case "Home/systemRules".toLowerCase():
            {
                Home('/Content/DrZahiroddin/Html/systemRules.html');
                setTitel("مقررات سامانه  ");
                setHistoryPushState("/systemRules?id=" + Math.random());
                dellstor("CurrentUrl");
                $('#headerArea').show();
                $('#_footer').show();
                break;

            }
        case "Home/ShowDay".toLowerCase():
            {

                Home('/Content/DrZahiroddin/Html/SkowDay.html');
                setTitel("روزهای رزرو");
                setHistoryPushState("/ShowDay?id=" + Math.random());
                dellstor("CurrentUrl");
                $('#headerArea').show();
                $('#_footer').show();
                break;

            }
        case "Home/selectDay".toLowerCase():
            {

                Home('/Content/DrZahiroddin/Html/selectDay.html');
                setTitel("انتخاب ساعت رزرو");
                setHistoryPushState("/selectDay?id=" + Math.random());
                dellstor("CurrentUrl");
                $('#headerArea').show();
                $('#_footer').show();
                break;

            }
        case "Home/About".toLowerCase():
            {
                Home('/Content/DrZahiroddin/Html/About.html');
                setTitel("درباره دکتر ظهیرالدین");
                setHistoryPushState("/About?id=" + Math.random());
                dellstor("CurrentUrl");
                $('#headerArea').show();
                $('#_footer').show();
                break;

            }
        case "Home/Contactus".toLowerCase():
            {
                Home('/Content/DrZahiroddin/Html/Contactus.html');
                setTitel("تماس با دکتر ظهیرالدین");
                setHistoryPushState("/About?id=" + Math.random());
                dellstor("CurrentUrl");
                $('#headerArea').show();
                $('#_footer').show();
                break;

            }
        case "Hime/Regester".toLowerCase():
            {
                Home('/Content/DrZahiroddin/Html/Regester.html');
                setTitel("کاربر گرامی لطفا به دقت ثبت نام کنید");
                setHistoryPushState("/Regester?id=" + Math.random());
                dellstor("CurrentUrl");
                $('#headerArea').show();
                $('#_footer').show();
                break;

            }
        default: {
            setlstor("hhfdttttextttOr", "صفحه پیدا نشد");
            Home('/Content/Html/Error.html');
            setTitel("صفحه خطا  ");
            setHistoryPushState("/Error?id=" + Math.random());
            dellstor("CurrentUrl");
            $('#headerArea').hide();
            $('#_footer').hide();
            break;
        }

    }




    if (!GetNullEmpetyUndefined(re)) {
        re.stopPropagation();
    }

};

setTitel = function (e) {
    document.title = e;
};

AjaxCall = function (url, data, type, prosess = true, admin = false, isLogin = false) {

    var result = $.ajax({
        url: url,
        type: type ? type : 'GET',
        data: data,
        async: true,
        /*  contentType: 'application/json',*/
        beforeSend: function () {
            show();
            if (isLogin) {
                $('.DFDF').hide();
                $('.top').hide();
                $('.bbar').hide();
            }
        },
        complete: function () {
            hide();
            if (isLogin) {
                $('.DFDF').hide();
                $('.top').hide();
                $('.bbar').hide();
            }
        }
    });




    return result;
};

setHistoryPushState = function (url) {
    history.pushState(null, null, url);
};

ReloadLogin = function (isLogin = false) {

    try {
        $('#lodingUserLogin').show();

        AjaxCall('/Account/LogoutOK', {
            "FCMToken": localStorage.getItem("CurrentUrlPhone")// getlstor("CurrentUrlPhone")
        }, 'POST', false, false, true
        ).done(function (response) {

            if (response.resultCode === 200) {
                window.location.href = '/Info';

            } else {
                deb();
                if (isLogin) {

                    setTimeout(function () {
                        $('.DFDF').show();
                        $('.top').show();
                        $('.bbar').show();
                        $('#lodingUserLogin').hide();
                    }, 1500);

                } else {
                    window.location.href = '/Account/Login';
                }

            }

        }).fail(function (error) {
            $('#moarefDiv').hide();
        });
    } catch (e) {
        window.location.href = '/Account/Login';
    }


    // alert(getlstor("CurrentUrlPhone"))
}
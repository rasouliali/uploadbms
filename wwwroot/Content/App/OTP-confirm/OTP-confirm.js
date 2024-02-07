
var timerOn2 = true;

$(document).ready(function () {
    ind = 0;

    _timeout = setTimeout(function () {
        $('#otp1').focus();
        clearTimeout(_timeout);
    }, 200);

    $('#phone').html(getlstor("phone"));

    $('#resendOTPMaster').hide();

    $('#TimerOTPMaster').show();

    timer(120);

    $('#suhaNavbarToggler').html('');

    //$('#UserLinkOperation').html('<a class="ttjam-href" data-ng-href="Home/OTP" href="#"><i class="lni lni-users"></i></a>');

    $('#btnConferm').on('click', function (e) {
        e.preventDefault();
        ok();
        e.stopPropagation();
    });

    $("#resendOTP").click(function (e) {
        e.preventDefault();
      
        var flag = true;

        var phone = getlstor("phone");

        if (phone.length === 0) {
            $('#errorOTP').show();
            $('#errorOTP').html('شماره موبایل را  وارد کنید');
            flag = false;
        }

        if (!validatePhone(phone)) {
            $('#errorOTP').show();
            $('#errorOTP').html('شماره موبایل را  صحیح وارد کنید');
            flag = false;
        }
        if (flag) {
            AjaxCall('/Info/HadlerService'
                ,
                {
                    "model": JSON.stringify({
                        fun: "LoginMethod",
                        phone: phone
                    })
                }, 'POST'
            ).done(function (response) {
                if (response.resultCode === 200) {
                    dellstor("CurrentUrl");
                    setCookie("phone", phone, 360);
                    handlerPage(response.data);
               
                }

                else {
                    alart(!GetNullEmpetyUndefined(response.message) ? response.message + " !" : "!خطای غیر منتظره", 'e', 60000);
                             
                }
            }).fail(function (error) {
             
            });
        }

        e.stopPropagation();


    });

    $('#otp1').on('keyup', function (e) {

        e.preventDefault();
        $('#otp2').focus();
        e.stopPropagation();
    });

    $('#otp2').on('keyup', function (e) {

        e.preventDefault();
        $('#otp3').focus();
        e.stopPropagation();
    });

    $('#otp3').on('keyup', function (e) {

        e.preventDefault();

        $('#otp4').focus();
        e.stopPropagation();
    });

    $('#otp4').on('keyup', function (e) {


        e.preventDefault();
        ok();
        e.stopPropagation();
    });

    hide();
});

ok = function () {

    if (!GetNullEmpetyUndefined($('#otp1').val()) &&
        !GetNullEmpetyUndefined($('#otp2').val()) &&
        !GetNullEmpetyUndefined($('#otp3').val()) &&
        !GetNullEmpetyUndefined($('#otp4').val())) {

        AjaxCall('/Info/HadlerService',
            {
                "model": JSON.stringify({
                    fun: "ConfirmOTPMethod",
                    Id: ($('#otp1').val() + $('#otp2').val() + $('#otp3').val() + $('#otp4').val()),
                    phone: getlstor("phone")
                })
            }, 'POST'
        ).done(function (response) {

            if (response.resultCode == 200) {
                if (response.data.flag == true) {
                    //setHistoryPushState("/");
                    //location.reload();
                    window.location.href = '/Info';
                } else {
                    //setlstor("name", response.data.name);
                    //setlstor("lastName", response.data.lastName);
                    //handlerPage('User-Info');
                    window.location.href = '/Info';
                }

            }
            else {
                alart(!GetNullEmpetyUndefined(response.message) ? response.message + " !" : "!خطای غیر منتظره", 'e', 6000);
                _timeout = setTimeout(function () {
                    $('#otp1').val('');
                    $('#otp2').val('');
                    $('#otp3').val('');
                    $('#otp4').val('');
                    $('#otp1').focus();
                    clearTimeout(_timeout);
                }, 300);

            }
        }).fail(function (error) {
            alart("!خطای غیر منتظره", 'e', 6000);
        });
    }
    else {
        alart("فیلد مورد نظر را وارد کنید", 'e', 6000);
        _timeout = setTimeout(function () {
            $('#otp1').val('');
            $('#otp2').val('');
            $('#otp3').val('');
            $('#otp4').val('');
            $('#otp1').focus();
            clearTimeout(_timeout);
        }, 300);

    }
};

function timer(remaining) {

    try {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;

        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        document.getElementById('TimerOTP').innerHTML = m + ':' + s;
        remaining -= 1;

        if (remaining >= 0 && timerOn2) {
            setTimeout(function () {
                $('#resendOTPMaster').hide();
                timer(remaining);
            }, 1000);
            return;
        }

        if (!timerOn2) {

            return;
        }


        $('#TimerOTPMaster').hide();
        $('#resendOTPMaster').show();
    } catch (e) {
        $('#TimerOTPMaster').hide();
        $('#resendOTPMaster').show();
    }
}


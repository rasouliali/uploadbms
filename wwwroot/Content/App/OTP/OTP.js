$(document).ready(function () {
   
    ind = 0;
    $('.top-c').hide();
    $('.footer').hide();
    //$('.wallet-btn').hide();
    //$('#moarefDiv').hide();
    _timeout = setTimeout(function () {
        $('#phone_number').focus();
        $("#Introducer").prop("disabled", true);
        $('.mmenu').hide();
        clearTimeout(_timeout);
    }, 100);
    setTimeout(function () {  }, 2000);
    if (false) {
        AjaxCall('/Info/HadlerService'
            ,
            {
                "model": JSON.stringify({
                    fun: "BeforLoginMethod"

                })
            }, 'POST'
        ).done(function (response) {
            deb();
            if (response.resultCode === 200) {
                $('#moarefDiv').show();
                $('#moaref').val(response.data);

            } else {
                $('#moarefDiv').hide();
            }

        }).fail(function (error) {
            $('#moarefDiv').hide();
        });
    }

    $("#btnSubmitOTP").click(function (e) {
        e.preventDefault();
        var flag = true;
        show();


        var phone = $("#phone_number").val();

        if (phone.length === 0) {
            $('#errorOTP').show();
            $('#errorOTP').html('شماره موبایل را  وارد کنید');
            flag = false;
            alart('شماره موبایل را  وارد کنید', 'e', 6000);
        }

        if (!validatePhone(phone, '#errorOTP', '#btnSubmitOTP')) {

            alart('شماره موبایل صحیح نیست', 'e', 6000);

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
                    setlstor("phone", phone.toString());
                   // handlerPage(response.data);
                    window.location.href = '/Account/OTP_Confirm';

                }
                else if (response.resultCode === 401) {
                    alart(!GetNullEmpetyUndefined(response.message) ? response.message + " !" : "!خطای غیر منتظره", 'e', 60000);
                    dellstor("CurrentUrl");
                    handlerPage(response.data);

                }
                else {
                    alart(!GetNullEmpetyUndefined(response.message) ? response.message + " !" : "!خطای غیر منتظره", 'e', 6000);

                }
            }).fail(function (error) {

            });
        }


        e.stopPropagation();


    });

    $("#phone_number").keyup(function (e) {
        e.preventDefault();
        //
        validatePhone(e.target.value, '#errorOTP', '#btnSubmitOTP')
        e.stopPropagation();
    });

    $("#phone_number").keydown(function (e) {

        if (e.which === 13) {
            $("#btnSubmitOTP").click();
        }

    });
    hide();
    ReloadLogin(true);
});

validatePhone = function (num, idError, idbtn) {
    try {
        const re = '^(\\+98|0)?9\\d{9}$';
        var regex = new RegExp(re);
        var result = regex.test(num);

        if (num.length < 11) {
            $(idError).show();
            $(idError).html('شماره موبایل را صحیح وارد کنید');
            $(idbtn).prop("disabled", true);
            return false;
        }

        else if (result) {
            $(idError).hide();
            $(idbtn).prop("disabled", false);
            return true;
        }
        else {
            $(idError).show();
            $(idError).html('. شماره موبایل را صحیح وارد کنید');
            $(idbtn).prop("disabled", true);
            return false;
        }
    } catch (e) {

    }
}


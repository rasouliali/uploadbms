$(document).ready(function () {

    _timeout = setTimeout(function () {
        $('#Name').focus();

        $('#Name').val(getlstor("name"));
        $('#LastName').val(getlstor("lastName"));
        dellstor("name");
        dellstor("lastName")
        $('#IntroducerD').hide();

        clearTimeout(_timeout);
    }, 100);
    $('#conferm').on('click', function (e) {
        e.preventDefault();
        var flag = true;
        deb();
        var isflag = false;
        for (var i = 0; i < $("input[name*='optradio']").length; i++) {
            if ($("input[name*='optradio']")[i].checked) {
                isflag = $("input[name*='optradio']")[i].checked;
                break;
            }
        }
        if (GetNullEmpetyUndefined($('#Name').val())) {

            alart('لطفا نام خود را وارد کنید', 'e', 6000);
            $('#Name').focus();
            flag = false;
        }
        else if (GetNullEmpetyUndefined($('#LastName').val())) {

            alart('لطفا نام خانوادگی خود را وارد کنید', 'e', 6000);
            $('#LastName').focus();
            flag = false;
        }
        else if (GetNullEmpetyUndefined($('#NationalCode').val())) {

            alart('لطفا کد ملی خود را وارد کنید', 'e', 6000);
            $('#NationalCode').focus();
            flag = false;
        } else if (!isflag) {
            alart('لطفا جنسیت را انتخاب کنید', 'e', 6000);
            $('#IsWoman').focus();
            flag = false;
        } else if (!$("#rule").is(':checked')) {

            alart('لطفا قوانین ازمن 24 را تایید کنید', 'e', 6000);
            $('#rule').focus();
            flag = false;
        }

        var IsMan = false;
        if ($("#isMan").is(":checked")) {
            IsMan = true;
        }
        if (flag) {
            AjaxCall('/Info/HadlerService',
                {
                    "model": JSON.stringify({
                        fun: "AddUserInfoMethod",
                        Name: $('#Name').val(),
                        LastName: $('#LastName').val(),
                        NationalCode: $('#NationalCode').val(),
                        Introducer: $('#Introducer').val(),
                        IsMan: IsMan,
                        phone: getlstor("phone")
                    })
                }, 'POST'
            ).done(function (response) {

                if (response.resultCode == 200) {
                    setHistoryPushState("/");
                    location.reload();
                }
                else {
                    alart(!GetNullEmpetyUndefined(response.message) ? response.message + " !" : "!خطای غیر منتظره", 'e', 6000);

                }
            }).fail(function (error) {
                alart("!خطای غیر منتظره", 'e', 6000);
            });
        }

        e.stopPropagation();
    });
    $('#confermCancel').on('click', function (e) {
        e.preventDefault();
        setHistoryPushState("/");
        location.reload();
        e.stopPropagation();
    });

    $("#NationalCode").keyup(function (e) {
        e.preventDefault();

        if (!($.isNumeric($('#NationalCode').val()))) {

            $('#NationalCodeErr').html('شماره ملی عدد می باشد');
            _timeout = setTimeout(function () {
                $('#NationalCode').val('');
                clearTimeout(_timeout);
            }, 300);

        } else if ($('#NationalCode').val().length < 10) {
            $('#NationalCodeErr').html('شماره ملی صحیح نمی باشد');
        } else {
            $('#NationalCodeErr').html('');
        }
        e.stopPropagation();
    });
    hide();
});
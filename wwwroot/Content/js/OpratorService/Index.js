var netListJson = [];
var ChangeChargeType_value = 'normal';
var ChangeSimType_value = "-1";
let typeCompanyOP = "dorsa";

$(document).ready(function () {

  // setTimeout(function () { $('#myModal').modal('typeSim2'); },1000);
    $('form').on('submit', function (event) {

        event.preventDefault();

        var flag = true;
        var formData = new FormData();
        if (ChangePage_value === "package") {
            if ($('#packages').val() === "-1") {
                flag = false;

                flag = false;
                $('#packages').focus();
                alart("فیلد بسته را لطفا انتخاب کنید", "e", 6000);
            }
            if (GetNullEmpetyUndefined($('#phoneToCharge').val())) {

                flag = false;
                $('#packages').focus();
                alart("فیلد شماره تلفن را لطفا وارد کنید", "e", 6000);
            }
            formData.append("mobile", $('#phoneToCharge').val());
            formData.append("Amount", $('input[name=Amount]').val());
            formData.append("Operator", opratorCompany);
            formData.append("packageId", $('#packages').val());

            formData.append("TransactionProductStatusId", 1);
            formData.append("TransactionTypeId", getTransactionTypeId());
            formData.append("TransactionProductTypeId", getTransactionProductTypeId());

        }
        else {

            if (typeCompanyOP === "dorsa" && ChangePage_value == 'charge' && opratorCompany === "mtn") {
                if ($("#selectCharge").val() === "-1" && $('#txtAmount').val() !== "" && parseInt($('#txtAmount').val()) <= 10000) {

                    formData.append("Amount", $('#txtAmount').val());

                } if ($("#selectCharge").val() !== "-1") {
                    formData.append("Amount", $("#selectCharge").val());
                }
                if ($('#typeCharge').val() !== "-1") {
                    formData.append("ChargeType", $('#typeCharge').val());
                }
                else {
                    if ($('#typeCharge').val() === "-1") {
                        flag = false;
                        $('#typeCharge').focus();
                        alart("نوع شارژ را انتخاب کنید", "e", 6000);
                    }
                    else if ($("#selectCharge").val() === "-1" && $('#txtAmount').val() === "") {
                        flag = false;
                        $('#txtAmount').focus();
                        alart("مبلغ شارژ را وارد کنید", "e", 6000);

                    }
                }
            }
            else if (typeCompanyOP === "dorsa" && ChangePage_value == 'charge' && opratorCompany === "tal") {
                if ($("#selectCharge").val() === "-1") {
                    flag = false;
                    alart("مبلغ شارژ را انتخاب کنید", "e", 6000);
                }

                formData.append("Amount", $("#selectCharge").val());
                formData.append("ChargeType", $('#typeCharge').val());

            }
            //else if (typeCompanyOP === "dorsa" && ChangePage_value == 'charge' && opratorCompany === "mci") {
            //    if (parseInt($('#phoneToAmount').val()) < 10000) {
            //        flag = false;
            //        $('#phoneToAmount').focus();
            //        alart("مبلغ شارژ نباید کمتر از 10000 ریال باشد", "e", 6000);
            //    }
            //    formData.append("Amount", $('#phoneToAmount').val());
            //    formData.append("ChargeType", $('input[name=ChargeType]').val());

            //}
            //else {
            //    formData.append("Amount", $('#Amount').find(":selected").val());

            //}
            formData.append("mobile", $('#phoneToAmount').val());
            formData.append("Operator", opratorCompany);
            formData.append("TransactionProductStatusId", 1);
            formData.append("TransactionTypeId", getTransactionTypeId());
            formData.append("TransactionProductTypeId", getTransactionProductTypeId());
            if ($('#phoneToAmount').val().length !== 11 || !$.isNumeric($("#phoneToAmount").val())) {
                flag = false;
                alart("شماره موبایل صحیح نمی باشد", "e", 6000);
            }
        }

        if (flag) {
            $.ajax({
                type: 'POST',
                url: '/Info/ShoppingData',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                traditional: true,
                beforeSend: function () {
                    $("#divProcessing").show();
                },
                complete: function () {
                    $("#divProcessing").hide();
                },
                success: function (response) {

                    if (response.resultCode == 200) {
                        window.location.href = response.data;// "/Info/PrepareForBank?Amount=" + $('#Amount').find(":selected").val() + "&WorkFlowRunLogId=" + 31252;
                    }
                    else {
                        alart("عملیات با موفقیت انجام نشد", "e", 6000);
                    }
                },
                error: function (response) {
                    alart("خطای غیر منتظره دوباره سعی کنید", "e", 6000);
                }
            })
        }

        event.stopPropagation();
    });

    $("#phoneToAmount").on("keyup", function (e) {
        if (event.target.value.length > 3 && event.target.value.length <= 11) {


            if (mtns.filter(function (value) {
                return value === event.target.value.substring(0, 4);
            }).length > 0) {
                $('#imgChargeIcon2').attr('src', '/new/img/nicon/irancell.png');
                opratorCompany = "mtn";
                fillData();
                $('#typeChargel3').show();
            }
            else if (tals.filter(function (value) {
                return value === event.target.value.substring(0, 4);
            }).length > 0) {
                $('#imgChargeIcon2').attr('src', '/new/img/nicon/talia.png');
                opratorCompany = "tal";
                fillData();
                $('#typeChargel3').show();
            }
            else {
                $('#imgChargeIcon2').attr('src', '/new/img/nicon/sim.png');
                $('#typeChargel3').hide();
            }
        }
        else if (event.target.value.length > 11) {
            event.target.value = event.target.value.substring(0, 11);
        }
        else if (event.target.value.length === 11) {
            setCookie("mobile", event.target.value, 10);
        }
       
        else {
            $('#imgChargeIcon2').attr('src', '/new/img/nicon/sim.png');
            $('#typeChargel3').hide();
        }
    });

    $('form').submit(function (e) {
        $('input[name=Method]').val(getMethodId());
        $('input[name=TransactionProductTypeId]').val(getTransactionProductTypeId());
    });

    $("#typeCharge").on("change", function (e) {

        if (e.target.value === "-1") {
            $("#submitD").hide();
            $("#_selectCharge").hide();
            $("#txtAmount").hide();

        } else {
            $("#txtAmount").val('');
            var strAmount = "<option value='-1'>لطفا انتخاب کنید</option>" +
                "<option value='10000'>شارژ 1،000 ت</option>" +
                "<option value='20000'>شارژ 2،000 ت</option>" +
                "<option value='50000'>شارژ 5،000 ت</option>" +
                "<option value='100000'>شارژ 10،000 ت</option>" +
                "<option value='200000'>شارژ 20،000 ت</option>" +
                "<option value='500000'>شارژ 50،000 ت</option>";
            $("#selectCharge").html(strAmount);
            $("#_selectCharge").show();
            $("#selectCharge").show();
            $("#submitD").show();
            $("#selectCharge").focus();
        }

    });

    $("#selectCharge").on("change", function (e) {

        if (e.target.value === "-1") {
            $("#selectCharge").focus();
        } else {
            $("#submit").focus();

        }

    });

    $("#txtAmount").on("keyup", function (e) {
        if ($("#selectCharge").val() !== "-1" && e.target.value.length > 0) { $("#selectCharge").val("-1"); }
    });

    $("#owner").on("change", function () {

        if ($(this).prop("checked")) {

            switch (opratorCompany) {
                case "mtn":
                    if (mtns.filter(function (value) {
                        return value === "0" + mobile.substring(0, 4);
                    }).length === 0) {
                        alart("شماره موبایل شما ایرانسل نیست", "e", 6000);
                        setTimeout(function () { $('#phoneToCharge').val(''); $('#phoneToCharge').focus(); }, 100);
                        $(this).prop('checked', false);
                    }
                    break;
                case "mci":

                    if (mcis.filter(function (value) {
                        return value === "0" + mobile.substring(0, 4);
                    }).length === 0) {
                        alart("شماره موبایل شما همراه اول نیست", "e", 6000);
                        setTimeout(function () { $('#phoneToCharge').val(''); $('#phoneToCharge').focus(); }, 100);
                        $(this).prop('checked', false);
                    }
                    break;
                case "tal":

                    if (tals.filter(function (value) {
                        return value === "0" + mobile.substring(0, 4);
                    }).length === 0) {
                        alart("شماره موبایل شما تالیا نیست", "e", 6000);
                        setTimeout(function () { $('#phoneToCharge').val(''); $('#phoneToCharge').focus(); }, 100);
                        $(this).prop('checked', false);
                    }
                    break;
                default:
                    $("#phoneToCharge").val("0" + mobile);
                    $("#phoneToCharge").attr("readonly", "");
                    break;
            }

        } else {
            $("#phoneToCharge").val("");
            $("#phoneToCharge").removeAttr("readonly");
        }
    });

    $('#SimType').on('change', function () {


        ChangeSimType_value = $(this).val();
        if (ChangeSimType_value === "-1") {
            fillPackages();
        } else {
            var duration = $('#Duration').val();

            $('#packages').html('');

            setSelect('#packages', -1, 'لطفا انتخاب نمایید');

            if (duration === "-1") {
                for (var i = 0; i < netListJson.length; i++) {
                    if (netListJson[i].SimType == parseInt(ChangeSimType_value))
                        fillPackagesSelect(netListJson[i]);
                }
            } else {
                for (var i = 0; i < netListJson.length; i++) {

                    if (netListJson[i].SimType == parseInt(ChangeSimType_value) && (parseInt(duration) == netListJson[i].Period))
                        fillPackagesSelect(netListJson[i]);
                }
            }


        }
    });

    $("input[name='TypeOfCharge']").on('change', function () {
        ChangeChargeType_value = $("input[name='TypeOfCharge']:checked").val();
        $('#Method').val(getMethodId());
    });

    $('#Duration').on('change', function () {
        if ($(this).val() === "-1") {
            fillPackages();
        } else {
            var duration = $(this).val();

            $('#packages').html('');

            setSelect('#packages', -1, 'لطفا انتخاب نمایید');

            if (ChangeSimType_value === "-1") {
                for (var i = 0; i < netListJson.length; i++) {
                    if (parseInt(duration) == netListJson[i].Period)
                        fillPackagesSelect(netListJson[i]);
                }
            } else {
                for (var i = 0; i < netListJson.length; i++) {
                    if (netListJson[i].SimType == parseInt(ChangeSimType_value) && (parseInt(duration) == netListJson[i].Period))
                        fillPackagesSelect(netListJson[i]);
                }
            }


        }

    });

    $('#packages').on('change', function () {
        $('input[name=Method]').val(getMethodId());
        $('input[name=Amount]').val(getAmountValue());
        $('input[name=SimTypeId]').val(getSimType());
        ChangeSimType_value = findSimType();
    });

    setTimeout(function () {
        if (opratorCompany === "mtn") {
            $('#typeCharge').focus();
        }


        $('#phoneToAmount').val(getCookie("mobile"));

    }, 100);

    fillData();
});

fillData = function () {
    
    ChangePage_value = ChangePage_value == "net" ? "package" : ChangePage_value;
    if (!ChangePage_value)
        ChangePage_value = 'charge';

    if (!opratorCompany)
        opratorCompany = 'mci';


    if (typeCompanyOP === "dorsa" && ChangePage_value == 'charge' && opratorCompany === "mtn") {
        $('#imgChargeIcon2').attr('src', '/new/img/nicon/irancell.png');
        var strAmount = "<option value='-1'>لطفا انتخاب کنید</option>" +
            "<option value='20'> مستقیم</option>" +
            "<option value='19'> فوق العاده</option>";
        //"<option value='0'>دلخواه خط دائمی</option>";
        $('#typeCharge').html(strAmount);
        $('#typeChargel').html('نوع شارژ ایرانسل');
        $("#submitD").hide();
        $("#selectCharge").hide();
    }
    else if (typeCompanyOP === "dorsa" && ChangePage_value == 'charge' && opratorCompany === "tal") {
        $('#imgChargeIcon2').attr('src', '/new/img/nicon/talia.png');
        var strAmount = "<option value='-1'>لطفا انتخاب کنید</option>" +
            "<option value='0'> مستقیم</option>";


        $('#typeCharge').html(strAmount);
        $("#submitD").hide();
        $("#selectCharge").hide();
        $('#typeChargel').html('نوع شارژ تالیا');
    }


    if (typeCompanyOP === "dorsa" && ChangePage_value !== 'charge' && !GetNullEmpetyUndefined(strDuration)) {
        netListJson = JSON.parse(strDuration);
        fillPackages();
    }
    if (false) {
        if (ChangePage_value == 'charge' && opratorCompany == "mci") {
            $("#Amount").html(fillCharge(typeCompanyOP));
        }
        else if (ChangePage_value == 'charge' && opratorCompany == "mtn") {
            $("#Amount").html(fillCharge(typeCompanyOP));
        }
        else if (ChangePage_value == 'charge' && opratorCompany == "rtl") {
            $("#Amount").html(fillCharge(typeCompanyOP));
        }
        else if (ChangePage_value == 'charge' && opratorCompany == "tal") {
            $("#Amount").html(fillCharge(typeCompanyOP));
        }
        else if (ChangePage_value == 'charge' && opratorCompany == "sht") {
            $("#Amount").html(fillCharge(typeCompanyOP));
        }

        if (opratorCompany == "mci") {
            //$($("input[name='TypeOfCharge']")[1]).hide();
            //$($("input[name='TypeOfCharge']")[0]).trigger('click');
            //$("#lbl_wow").hide();
            $('#lbl_normal').html('مستقیم');
            $('#lbl_wow').html('فوق العاده');
        }
        else if (opratorCompany == "mtn") {
            $($("input[name='TypeOfCharge']")[0]).hide();
            $($("input[name='TypeOfCharge']")[1]).trigger('click');
            $("#lbl_normal").hide();
            $('#lbl_normal').html('عادی');
            $('#lbl_wow').html('شگفت انگیز');

        } else if (opratorCompany == "rtl") {
            $($("input[name='TypeOfCharge']")[0]).hide();
            $($("input[name='TypeOfCharge']")[1]).trigger('click');
            $("#lbl_normal").hide();
            $('#lbl_normal').html('عادی');
            $('#lbl_wow').html('شور انگیز');
            var strAmount = "<option value=''>لطفا انتخاب کنید</option>" +
                "<option value='20000'>شارژ 2،000 ت</option>" +
                "<option value='50000'>شارژ 5،000 ت</option>" +
                "<option value='100000'>شارژ 10،000 ت</option>" +
                "<option value='200000'>شارژ 20،000 ت</option>" +
                "<option value='500000'>شارژ 50،000 ت</option>";
            $("#Amount").html(strAmount);
        }
        // $("input[name=WorkFlowId]").val(getWorkFlowId());
        $('h1').html($('h1').html() + ' ' + (opratorCompany == 'mci' ? 'همراه اول' : opratorCompany == 'mtn' ? 'ایرانسل' : opratorCompany == 'rtl' ? 'رایتل' : opratorCompany == 'sht' ? 'شاتل' : opratorCompany == 'tal' ? 'تالیا' : ''))
        //$("input[name=OpratorId]").val(getOpratorId());
        //$('input[name=TransactionProductTypeId]').val(getTransactionProductTypeId());
        //$('input[name=TransactionTypeId]').val(getTransactionTypeId());


        if (false&&ChangePage_value != 'charge' && !GetNullEmpetyUndefined(strDuration)) {
            netListJson = JSON.parse(strDuration);
            fillPackages();
        } 
      
        
        if (typeCompanyOP === "dorsa" && ChangePage_value == 'charge' && opratorCompany === "mtn") {

            var str = '';
            str += '<div style="text-align: center;">';
            str += '    <button type="button" class="btn btn-success btn-circle btn-xl" onclick="setChargeType(20);"> دلخواه خط اعتباری</button>';
            str += '    <button type="button" class="btn btn-danger btn-circle btn-xl" onclick="setChargeType(19);">دلخواه خط اعتباری شگفت انگیز</button>';
            //str += '    <button type="button" class="btn btn-warning btn-circle btn-xl" onclick="setChargeType(0);">دلخواه خط دائمی</button>';
            str += '</div>';
            $('#typeCharge').html(str);


        }
        else if (typeCompanyOP === "dorsa" && ChangePage_value == 'charge' && opratorCompany === "mci") {
            //$('#buttom-close').html('<span class="backb"><a href="javascript:history.back()" style="margin-left: 10px;color: red !important;"> </a></span>');
            //var str = '';
            //str += '<div style="text-align: center;">';
            //str += '  <button type="button" class="btn btn-success btn-circle btn-xl" onclick="setChargeType(1001);">شارژ مستقیم</button>';
            //str += '  <button type="button" class="btn btn-secondary btn-circle btn-xl" onclick="setChargeType(1002);">شارژ دلخواه</button>';
            //str += '  <button type="button" class="btn btn-primary btn-circle btn-xl" onclick="setChargeType(1003);">شارژ فوق العاده</button>';
            //str += '  <button type="button" class="btn btn-danger btn-circle btn-xl" onclick="setChargeType(1004);">شارژ جوانان</button>';
            //str += '  <button type="button" class="btn btn-warning btn-circle btn-xl" onclick="setChargeType(1005);">شارژ بانوان</button>';
            //str += '</div>';
            //$('#bodyModal').html(str);
            //$('#footer-modal').hide();
            //$('#modal-dynamic').click();
        }
        else if (typeCompanyOP === "dorsa" && ChangePage_value == 'charge' && opratorCompany === "tal") {
            //$('#phoneToAmount').show();
            //$('input[name=ChargeType]').val(0);
            //$('#Amount').val(10000);
            //$('#Amount').hide();
            //setTimeout(function () { $('#phoneToCharge').focus(); }, 1000);
        }
    }

};

setChargeType = function (e) {

    switch (e) {

        case 0:

            $('#exampleModalLongTitle').html('نوع شارژ ایرانسل');
            $('#Amount').hide();
            $('#phoneToAmount').show();
            $('input[name=ChargeType]').val(e);
            $('#Amount').val(10000);
            $('#infoOT').html('شارژ دلخواه خط دائمی');
            $('#infoOT').show();
            $('#exampleModalCenter').modal('toggle');
            setTimeout(function () { $('#phoneToCharge').focus(); }, 1000);
            break;
        case 19:
            $('#Amount').hide();
            $('#exampleModalLongTitle').html('نوع شارژ ایرانسل');
            $('#phoneToAmount').show();
            $('input[name=ChargeType]').val(e);
            $('#Amount').val(10000);
            $('#infoOT').html('شارژ دلخواه خط اعتباری شگفت انگیز');
            $('#infoOT').show();
            $('#exampleModalCenter').modal('toggle');
            setTimeout(function () { $('#phoneToCharge').focus(); }, 1000);
            break;
        case 20:
            $('#Amount').hide();
            $('#exampleModalLongTitle').html('نوع شارژ ایرانسل');
            $('#phoneToAmount').show();
            $('input[name=ChargeType]').val(e);
            $('#Amount').val(10000);
            $('#infoOT').html(' شارژ دلخواه خط اعتباری');
            $('#infoOT').show();
            $('#exampleModalCenter').modal('toggle');
            setTimeout(function () { $('#phoneToCharge').focus(); }, 1000);
            break;
        case 1001:
            $('#Amount').hide();
            $('#exampleModalLongTitle').html('نوع شارژ همراه اول');
            $('#phoneToAmount').show();
            $('input[name=ChargeType]').val(e);
            $('#Amount').val(10000);
            $('#infoOT').html(' شارژ مستقیم');
            $('#infoOT').show();
            $('#exampleModalCenter').modal('toggle');
            setTimeout(function () { $('#phoneToCharge').focus(); }, 1000);
            break;
        case 1002:
            $('#Amount').hide();
            $('#exampleModalLongTitle').html('نوع شارژ همراه اول');
            $('#phoneToAmount').show();
            $('input[name=ChargeType]').val(e);
            $('#Amount').val(10000);
            $('#infoOT').html(' شارژ دلخواه');
            $('#infoOT').show();
            $('#exampleModalCenter').modal('toggle');
            setTimeout(function () { $('#phoneToCharge').focus(); }, 1000);
            break;
        case 1003:
            $('#Amount').hide();
            $('#exampleModalLongTitle').html('نوع شارژ همراه اول');
            $('#phoneToAmount').show();
            $('input[name=ChargeType]').val(e);
            $('#Amount').val(10000);
            $('#infoOT').html(' شارژ فوق العاده');
            $('#infoOT').show();
            $('#exampleModalCenter').modal('toggle');
            setTimeout(function () { $('#phoneToCharge').focus(); }, 1000);
            break;
        case 1004:
            $('#Amount').hide();
            $('#exampleModalLongTitle').html('نوع شارژ همراه اول');
            $('#phoneToAmount').show();
            $('input[name=ChargeType]').val(e);
            $('#Amount').val(10000);
            $('#infoOT').html(' شارژ جوانان');
            $('#infoOT').show();
            $('#exampleModalCenter').modal('toggle');
            setTimeout(function () { $('#phoneToCharge').focus(); }, 1000);
            break;
        case 1005:
            $('#Amount').hide();
            $('#exampleModalLongTitle').html('نوع شارژ همراه اول');
            $('#phoneToAmount').show();
            $('input[name=ChargeType]').val(e);
            $('#Amount').val(10000);
            $('#infoOT').html(' شارژ بانوان');
            $('#infoOT').show();
            $('#exampleModalCenter').modal('toggle');
            setTimeout(function () { $('#phoneToCharge').focus(); }, 1000);
            break;
        default:
    }
}

fillCharge = function (e) {
    var str = '';
    if (e === "dorsa") {
        str = "<option value=''>لطفا انتخاب کنید</option>" +
            "<option value='10000'>شارژ 1،000 ت</option>" +
            "<option value='20000'>شارژ 2،000 ت</option>" +
            "<option value='50000'>شارژ 5،000 ت</option>" +
            "<option value='100000'>شارژ 10،000 ت</option>" +
            "<option value='200000'>شارژ 20،000 ت</option>" +
            "<option value='500000'>شارژ 50،000 ت</option>";
    }
    return str;
}

fillPackages = function () {
    $('#packages').html('');


    var duration = $('#Duration').val();

    setSelect('#packages', -1, 'لطفا انتخاب نمایید');

    if (ChangeSimType_value !== "-1") {
        for (var i = 0; i < netListJson.length; i++) {
            if (netListJson[i].SimType == parseInt(ChangeSimType_value))
                fillPackagesSelect(netListJson[i]);
        }
    }
    else if (duration !== "-1") {
        for (var i = 0; i < netListJson.length; i++) {
            if ((parseInt(duration) == netListJson[i].Period))
                fillPackagesSelect(netListJson[i]);
        }
    }
    else if (duration === "-1") {
        for (var i = 0; i < netListJson.length; i++) {
            fillPackagesSelect(netListJson[i]);
        }
    } else if (ChangeSimType_value === "-1") {
        for (var i = 0; i < netListJson.length; i++) {
            fillPackagesSelect(netListJson[i]);
        }
    }

};
//+ "_" + (netListJson.SimType === 0 ? " اعتباری " : " دائمی "
fillPackagesSelect = function (netListJson) {
    setSelect('#packages', netListJson.packageId, netListJson.name + " " + formatMoney(netListJson.unitPrice) + "_" + " ریال با احتساب مالیات " );
}

getWorkFlowId = function () {
    if (ChangePage_value == 'charge') {
        if (opratorCompany == 'mci') {
            return 1025;
        }
        if (opratorCompany == 'mtn') {
            return 1026;
        }
        if (opratorCompany == 'rtl') {
            return 1026;
        }
        //ChangeChargeType_value=normal,wow
    }
    if (ChangePage_value == 'package') {
        //ChangeSimType_value=postpaid,prepaid

        if (opratorCompany == 'mci') {
            return 1025;
        }
        if (opratorCompany == 'mtn') {
            return 1026;
        }
        if (opratorCompany == 'rtl') {
            return 1026;
        }
    }
};

getAmountValue = function () {
    if (ChangePage_value == 'charge') {
        if (opratorCompany == 'mci') {
            return amount_value;
        }
        if (opratorCompany == 'mtn') {
            return amount_value * 1.09;
        }
        if (opratorCompany == 'rtl') {
            return amount_value;
        }
        //ChangeChargeType_value=normal,wow
    }
    if (ChangePage_value == 'package') {
        return findPackageCost($('#packages').val());
    }
};

findPackageCost = function (packageId) { // Find array element which has a key value of val
    for (var i = 0; i < netListJson.length; i++) {
        if (netListJson[i].PackageId == parseInt(packageId))
            return netListJson[i].PackageCostWithVat;
    }
    return null;
};

findSimType = function (packageId) { // Find array element which has a key value of val
    if (ChangePage_value == 'package') {
        for (var i = 0; i < netListJson.length; i++) {
            if (netListJson[i].PackageId == parseInt(packageId))
                return netListJson[i].SimType;
        }
        return null;
    } return 1;
};

getTransactionTypeId = function () {
    if (ChangePage_value == 'charge')
        return 2;
    if (ChangePage_value == 'package')
        return 3;
};

getTransactionProductTypeId = function () {
    if (ChangePage_value == 'charge') {
        if (opratorCompany == 'mci') {
            /*  return 24;*/
            return 1023;
            if (ChangeChargeType_value == "normal")
                return 1;
            if (ChangeChargeType_value == "wow")
                return 2;
        }
        if (opratorCompany == 'mtn') {
            if (typeCompanyOP === "dorsa") {
                return 3027;
            }
            else {

                if (ChangeChargeType_value == "normal")
                    return 3;
                if (ChangeChargeType_value == "wow")
                    return 4;

                return 1022;
            }

        }
        if (opratorCompany == 'rtl') {
            return 1024;
            if (ChangeChargeType_value == "normal")
                return 5;
            if (ChangeChargeType_value == "wow")
                return 6;
        }
        if (opratorCompany == 'tal') {
            if (typeCompanyOP === "dorsa") {
                return 3028;
            }
        }
        //ChangeChargeType_value=normal,wow
    }
    if (ChangePage_value == 'package') {
        if (opratorCompany == 'mci') {
            return 7;
        }
        if (opratorCompany == 'mtn') {
            return 8;
        }
        if (opratorCompany == 'rtl') {
            return 9;
        }
    }
};

getMethodId = function () {
    if (ChangePage_value == 'charge') {
        if (opratorCompany == 'mci') {
            if (ChangeChargeType_value == "normal")
                return 3;
            if (ChangeChargeType_value == "wow")
                return 5;
        }
        if (opratorCompany == 'mtn') {
            if (ChangeChargeType_value == "normal")
                return 21;
            if (ChangeChargeType_value == "wow")
                return 22;
        }
        if (opratorCompany == 'rtl') {
            if (ChangeChargeType_value == "normal")
                return 41;
            if (ChangeChargeType_value == "wow")
                return 42;
        }
        //ChangeChargeType_value=normal,wow
    }
    if (ChangePage_value == 'package') {
        return $('#packages').val();//netListJson[$('#packages option:selected').index()-1].PackageId;
        //ChangeSimType_value=postpaid,prepaid
    }
};

getSimType = function () {
    if (ChangePage_value == 'charge')
        return 1;
    if (ChangePage_value == 'package') {
        if (ChangeSimType_value == "1")
            return 1;
        else if (ChangeSimType_value == "2")
            return 2;

        //ChangeSimType_value=postpaid,prepaid
    }
    //charge,package,report
};

getOpratorId = function () {
    if (opratorCompany == 'mci')
        return 1;
    if (opratorCompany == 'mtn')
        return 2;
    if (opratorCompany == 'rtl')
        return 3;
    if (opratorCompany == 'tal')
        return 4;
    if (opratorCompany == 'sht')
        return 5;
    if (opratorCompany == 'other')
        return 0;
};

CheckValidity = function (elem) {
    elem.setCustomValidity('');
    if (elem.validity.valueMissing) {
        elem.setCustomValidity('این فیلد اجباری است');
        return true;
    }
    //if ($(elem).attr('id') == "phoneToCharge") {
    //    if (elem.validity.rangeOverflow || elem.validity.rangeUnderflow)
    //        elem.setCustomValidity('لطفا شماره همراه صحیح وارد نمایید');
    //}
    //return true;
};

myPay = function () {

    alert("kjfhfd");
    var formData = new FormData();
    formData.append("Amount", 15000);

    formData.append("WorkFlowRunLogId", 2);
    formData.append("submit", "Saman");
    formData.append("workFlowId", 32);
    formData.append("WorkFlowDetailsId", 7);
    $.ajax({
        type: 'POST',
        url: '/Info/Pay',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        traditional: true,
        beforeSend: function () {

        },
        complete: function () {

        },
        success: function (response) {

            if (response.resultCode == 200) {

            }
            else {

            }
        },
        error: function (response) {


        }
    })
};
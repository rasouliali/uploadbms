const mtns = ["0930", "0933", "0935", "0936", "0937", "0938", "0939", "0901", "0902", "0903", "0904", "0905", "0941"];
const mcis = ["0910", "0911", "0913", "0914", "0915", "0916", "0917", "0918", "0919", "0990", "0991", "0992", "0993"];
const tals = ["0932"];
var herfs = '';
$(document).ready(function () {
    $('#imgChargeIcon').hide();
    
    $("#phoneToCharge2").prop('disabled', false);
    $('#phoneToCharge2').on('keyup', function (event) {
        event.preventDefault();

        if (event.target.value.length > 4 && event.target.value.length < 11) {


            if (mtns.filter(function (value) {
                return value === event.target.value.substring(0, 4);
            }).length > 0) {
                $('#imgChargeIcon2').attr('src', '/new/img/nicon/irancell.png');
                $('#imgChargeIcon').show();
                herfs = "/OpratorService/Index?serviceType=charge&Op=mtn";
                
            }



            else if (mcis.filter(function (value) {
                return value === event.target.value.substring(0, 4);
            }).length > 0) {
                $('#imgChargeIcon2').attr('src', '/new/img/nicon/mci.png');
                $('#imgChargeIcon').show();
               // herfs = "/OpratorService/Index?serviceType=charge&Op=mci";
                alart("درحال راندازی لطفا شکیبا باشید", "e", 6000);
            }


            else if (tals.filter(function (value) {
                return value === event.target.value.substring(0, 4);
            }).length > 0) {
                $('#imgChargeIcon2').attr('src', '/new/img/nicon/talia.png');
                $('#imgChargeIcon').show();
                setCookie("mobile", $('#phoneToCharge2').val(), 10);
                herfs = "/OpratorService/Index?serviceType=charge&Op=tal";
               // alart("درحال راندازی لطفا شکیبا باشید", "e", 6000);
            }
            else {
                alart("شماره موبایل وارد شده صحیح نیست", "e", 6000);
                setTimeout(function () { $('#phoneToCharge2').val(''); $('#phoneToCharge2').focus(); }, 100);
            }

        }
        else if (event.target.value.length === 11) {
            $("#phoneToCharge2").prop('disabled', true);
            $("#divProcessing").show();
            setCookie("mobile", $('#phoneToCharge2').val(), 10);
            window.location.href = herfs;
        }
        else if (event.target.value.length <= 4) {
            $('#imgChargeIcon2').attr('src', '');
            $('#imgChargeIcon').hide();
        }
        else if (event.target.value.length > 11) {
            alart("شماره وارد شده اشتباه است", "e", 6000);
            setTimeout(function () { $('#phoneToCharge2').val(''); $('#phoneToCharge2').focus(); }, 100);
        }

        event.stopPropagation();
    });
    $('#phoneToChargeNet').on('keyup', function (event) {
        event.preventDefault();

        if (event.target.value.length > 4 && event.target.value.length < 11) {


            if (mtns.filter(function (value) {
                return value === event.target.value.substring(0, 4);
            }).length > 0) {
                $('#imgChargeIconNet').attr('src', '/new/img/nicon/irancell.png');
                $('#imgChargeIcon2Net').show();
                herfs = "/OpratorService/Index?serviceType=net&Op=mtn";
            }

            else if (mcis.filter(function (value) {
                return value === event.target.value.substring(0, 4);
            }).length > 0) {
                $('#imgChargeIconNet').attr('src', '/new/img/nicon/mci.png');
                $('#imgChargeIcon2Net').show();
                // herfs = "/OpratorService/Index?serviceType=charge&Op=mci";
                alart("درحال راندازی لطفا شکیبا باشید", "e", 6000);
            }

            else if (tals.filter(function (value) {
                return value === event.target.value.substring(0, 4);
            }).length > 0) {
                $('#imgChargeIconNet').attr('src', '/new/img/nicon/talia.png');
                $('#imgChargeIcon2Net').show();
                setCookie("mobile", $('#phoneToChargeNet').val(), 10);
                herfs = "/OpratorService/Index?serviceType=net&Op=tal";
                         }
            else {
                alart("شماره موبایل وارد شده صحیح نیست", "e", 6000);
                setTimeout(function () { $('#phoneToChargeNet').val(''); $('#phoneToChargeNet').focus(); }, 100);
            }

        }
        else if (event.target.value.length === 11) {
            $("#phoneToChargeNet").prop('disabled', true);
            $("#divProcessing").show();
            setCookie("mobile", $('#phoneToChargeNet').val(), 10);
            window.location.href = herfs;
        }
        else if (event.target.value.length <= 4) {
            $('#imgChargeIconNet').attr('src', '');
            $('#imgChargeIcon2Net').hide();
        }
        else if (event.target.value.length > 11) {
            alart("شماره وارد شده اشتباه است", "e", 6000);
            setTimeout(function () { $('#phoneToChargeNet').val(''); $('#phoneToChargeNet').focus(); }, 100);
        }

        event.stopPropagation();
    });
    
});
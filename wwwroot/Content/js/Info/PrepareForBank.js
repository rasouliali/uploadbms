
$(document).ready(function () {

  
    $('#SendPaymentSMSBtn').on('click', function (event) {
        event.preventDefault();


        if ($('#MobileNumber').val()) {

            var formData = new FormData();
            formData.append("location", window.location.pathname + window.location.search);
            formData.append("mobile", $('#MobileNumber').val());

            $.ajax({
                type: 'POST',
                url: '/Info/sendPaymentPageBySMS',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                traditional: true,
                beforeSend: function () {
                    $("#divProcessing").show();
                    $('#lblWaiting').show();
                    $('#SendPaymentSMSBtn').hide();
                },
                complete: function () {
                    $("#divProcessing").hide();
                    $('#lblWaiting').hide();
                },
                success: function (response) {

                    if (response.resultCode == 200) {
                       
                        alart(!GetNullEmpetyUndefined(response.message) ? response.message : "عملیات با موفقیت انجام شد", "s", 6000);
                        $('#SendPaymentSMSBtn').show();
                        $('#myModal').modal('toggle');
                    }
                    else {
                        alart(!GetNullEmpetyUndefined(response.message) ? response.message : "عملیات با موفقیت انجام نشد", "e", 6000);
                        
                    }
                },
                error: function (response) {
                    alart('خطای غیر منتظره دوباره سعی کنید', "e", 6000);
                }
            })
        } else {
            alart('شماره موبایل اجباری است', "e", 6000);
            setTimeout(function () { $('#MobileNumber').focus(); }, 1000);
        }
        event.stopPropagation();
    });
    $('#sendSMSPaymentPage').on('click', function () {
        $('#PaymentModalShower').trigger('click');
        $('#lblWaiting').hide();
        $('#SendPaymentSMSBtn').show();
        setTimeout(function () { $('#MobileNumber').focus(); },1000);
    });
    $('#btn-discount').on('click', function () {
        //$('#DisCode').on('change', function () {
        var data = $('#DisCode').val();
        if (data.length > 3) {
            $.post('/Info/DiscountData', { code: data, WorkFlowRunLogId: $('[name=WorkFlowRunLogId]').val() }, function (dataRes, status) {
                if (dataRes.ok) {
                    $('#discountAmountDiv').attr("style", "display: block !important;");
                    $('#discountAmountDiv').removeClass("hidden");
                    $('#paidAmount').html(dataRes.data);
                    $('#DiscountCode').val(data);
                    $('#discountAmountVal').html((parseInt(_Amount) - dataRes.value).toLocaleString());
                } else {
                    $('#discountAmountDiv').hide();
                    alert(dataRes.data)
                }
            });
        } else {

        }
    });
});

onProcess = function () {
    $("#divProcessing").show();
}
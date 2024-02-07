
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
                        Swal.fire({
                            title: "موفقیت!",
                            text: !GetNullEmpetyUndefined(response.message) ? response.message : "عملیات با موفقیت انجام شد",
                            type: "success",
                            confirmButtonClass: 'btn btn-success',
                            html: null,
                            confirmButtonText: 'بستن',
                            buttonsStyling: true,
                            showConfirmButton: true,
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            footer: '<b style="font-weight: 500;color: #a5dc86;">سیم کارتتو راحت شارژ کن!</b>'
                        }).then(function () {

                            $('#SendPaymentSMSBtn').show();
                            $('#myModal').modal('toggle');
                        });

                    }
                    else {
                        Swal.fire({
                            title: "خطا!",
                            text: !GetNullEmpetyUndefined(response.message) ? response.message : "عملیات با موفقیت انجام نشد",
                            type: "error",
                            confirmButtonClass: 'btn btn-error',
                            html: null,
                            confirmButtonText: 'بستن',
                            buttonsStyling: true,
                            showConfirmButton: true,
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            footer: '<b style="font-weight: 500;color: #a5dc86;">سیم کارتتو راحت شارژ کن!</b>'
                        }).then(function () {

                        });
                    }
                },
                error: function (response) {
                    Swal.fire({
                        title: "خطا!",
                        text: "خطای غیر منتظره دوباره سعی کنید",
                        type: "warning",
                        confirmButtonClass: 'btn btn-warning',
                        buttonsStyling: false,
                    }).then(function () {

                    });
                }
            })
        } else {
            alert('شماره موبایل اجباری است');
        }
        event.stopPropagation();
    });
    $('#sendSMSPaymentPage').on('click', function () {
        $('#PaymentModalShower').trigger('click');
        $('#lblWaiting').hide();
        $('#SendPaymentSMSBtn').show();
    });
    $('#btn-discount').on('click', function () {
        //$('#DisCode').on('change', function () {
        var data = $('#DisCode').val();
        if (data.length > 3) {
            $.post('/Bill/DiscountData', { code: data, WorkFlowRunLogId: $('[name=WorkFlowRunLogId]').val() }, function (dataRes, status) {
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

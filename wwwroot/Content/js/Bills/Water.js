
$(document).ready(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();
        var flag = true;
        var formData = new FormData();
        if (GetNullEmpetyUndefined($('#bill_id').val())) {
            flag = false;
            Swal.fire({
                title: "خطا!",
                text: "فیلد شناسه قبض را لطفا وارد کنید",
                type: "error",
                icon: "",
                confirmButtonClass: 'btn btn-error',
                icon: 'error',
                confirmButtonText: 'بستن',
                buttonsStyling: true,
                showConfirmButton: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                footer: '<b style="font-weight: 500;color: #a5dc86;">سیم کارتتو راحت شارژ کن!</b>'
            }).then(function () {
                flag = false;
                $('#bill_id').focus();
            });
        }
        if ($('#bill_id').val().length < 6 && $('#bill_id').val().length > 13) {
            Swal.fire({
                title: "خطا!",
                text: "فیلد شناسه قبض را صحیح وارد کنید",
                type: "error",
                icon: "",
                confirmButtonClass: 'btn btn-error',
                icon: 'error',
                confirmButtonText: 'بستن',
                buttonsStyling: true,
                showConfirmButton: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                footer: '<b style="font-weight: 500;color: #a5dc86;">سیم کارتتو راحت شارژ کن!</b>'
            }).then(function () {
                flag = false;
                $('#bill_id').val('');
                $('#bill_id').focus();
            });
        }
        formData.append("bill_id", $('#bill_id').val());

        if (flag) {
            $.ajax({
                type: 'POST',
                url: '/Bills/WaterBill',
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
                        window.location.href = response.data;
                    }
                    else {
                        Swal.fire({
                            title: "خطا!",
                            text: "عملیات با موفقیت انجام نشد",
                            type: "error",
                            confirmButtonClass: 'btn btn-error',
                            icon: 'error',
                            confirmButtonText: 'بستن',
                            buttonsStyling: true,
                            showConfirmButton: true,
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            footer: '<b style="font-weight: 500;color: #a5dc86;">سیم کارتتو راحت شارژ کن!</b>'
                        }).then(function () {
                            window.location.href = response.data;
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
        }



        event.stopPropagation();
    });
});
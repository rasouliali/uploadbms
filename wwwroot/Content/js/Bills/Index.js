
$(document).ready(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();

        var id = window.location.search.split('=')[1];
        var result = "";

        switch (id) {
            case "2023":
                result = "قبض آب";
                waterBill();
                break;
            case "3024":
                powerBill();
                result = "قبض برق";
                break;
            case "3023":
                gasBill();
                result = "قبض گاز";
                break;
            case "3025":
                phoneBill();
                result = "قبض تلفن";
                break;
            case "3026":
                mobileBill();
                result = "قبض موبایل";
                break;
            default:
        }

        event.stopPropagation();
    });
});

waterBill = function () {
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
        Inquiry(formData);
    }
};

Inquiry = function (formData) {

    $.ajax({
        type: 'POST',
        url: '/Bills/InquiryBill',
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
                    window.location.href = response.message;
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

};

powerBill = function () {
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
        Inquiry(formData);
    }
};

gasBill = function () {
    var flag = true;
    var formData = new FormData();
    if (GetNullEmpetyUndefined($('#customer_id').val())) {
        flag = false;
        Swal.fire({
            title: "خطا!",
            text: "فیلد شناسه اشتراک را لطفا وارد کنید",
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
    if ($('#customer_id').val().length < 6 && $('#customer_id').val().length > 13) {
        Swal.fire({
            title: "خطا!",
            text: "فیلد شناسه اشتراک را صحیح وارد کنید",
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
            $('#customer_id').val('');
            $('#customer_id').focus();
        });
    }
    formData.append("bill_id", $('#customer_id').val());

    if (flag) {
        Inquiry(formData);
    }
};

phoneBill = function () {
    var flag = true;
    var formData = new FormData();
    if (GetNullEmpetyUndefined($('#bill_id').val())) {
        flag = false;
        Swal.fire({
            title: "خطا!",
            text: "فیلد شماره تلفن را لطفا وارد کنید",
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
    if ($('#bill_id').val().length !== 11) {
        Swal.fire({
            title: "خطا!",
            text: "فیلد شماره تلفن را صحیح وارد کنید",
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
    formData.append("midterm", $('#midterm')[0].checked);

    if (flag) {
        Inquiry(formData);
    }
};

mobileBill = function () {
    var flag = true;
    var formData = new FormData();
    if (GetNullEmpetyUndefined($('#bill_id').val())) {
        flag = false;
        Swal.fire({
            title: "خطا!",
            text: "فیلد شماره موبایل را لطفا وارد کنید",
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
    if ($('#bill_id').val().length !== 11) {
        Swal.fire({
            title: "خطا!",
            text: "فیلد شماره موبایل را صحیح وارد کنید",
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
    formData.append("midterm", $('#midterm')[0].checked);
    if (flag) {
        Inquiry(formData);
    }
};


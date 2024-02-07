
$(document).ready(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();
     
        var formData = new FormData();

        var left = $('#left').val();
        var right = $('#right').val();
        var mid = $('#mid').val();
        var letterT = $("#letter option:selected").text();
        var letterV = $("#letter option:selected").val();
        formData.append("left", left);
        formData.append("right", right);
        formData.append("mid", mid);
        formData.append("letterT", letterT);
        formData.append("letterV", letterV);
       
        $.ajax({
            type: 'POST',
            url: '/FreewayTolls/Index',
            data:
                formData,
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
                        //window.location.href = response.message;
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

        event.stopPropagation();
    });
});
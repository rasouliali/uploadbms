var isMan;
var isWoman;
$(document).ready(function () {
    try {
        isMan = '@Model.IsMan' == 'true';
        if (isMan)
            $('#isMan').attr('checked', 'checked');
    } catch (e) {

    }
    try {
        isWoman = '@Model.IsMan' == 'false';
        if (isWoman)
            $('#isWoman').attr('checked', 'checked');
    } catch (e) {

    }

    window.pd = $('.persian-date').each(function (index, elem) {
        $(this).persianDatepicker({
            //altField: "#alt" + (index + 1).toString(),
            altFormat: 'LLLL',
            initialValue: false,
            observer: true,
            format: 'YYYY/MM/DD',
            //timePicker: {
            //    enabled: true
            //}
        });
    });

    $('#SearchPerson').on('click', function () {
        var NationalCode_new = $('#NationalCode').val();
        var birthdate_new = $('#BirthDate').val();
        $.post('/Sale/GetCivilRegistryOfficeDataAndSave', { nc: NationalCode_new, bt: birthdate_new }, function (data) {
            $('#Name').val(data.first_name);
            $('#LastName').val(data.last_name);
        });
    });
    $("#IBAN").on('keyup', function (e) {
        e.preventDefault();
        //e.target.value
        //e.originalEvent.key
        //IR69 0190 0000 0032 3159 9780 01
        var result = e.target.value.replace("IR", "");

        $("#IBAN").val("IR" + result);

        e.stopPropagation();
    });
});
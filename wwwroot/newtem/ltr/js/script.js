$(document).ready(function() {

    /** TABS SCROLL */
    $.fn.tabbing = function (options) {
        var opts = {delayTime : 300};
        options = options || {};
        opts = $.extend(opts,options);    
        return this.each(function () {
            $(this).on('click', function (event) {
                event.preventDefault();
                var sum = 0;
                $(this).prevAll().each(function(){  sum += $(this).width();});
            var get = document.getElementById('tabs').scrollWidth
                var dist = sum - ( $(this).parent().width() - $(this).width()) / 2;
            if(dist < 0){
                dist = 0;
            }
                $(this).parent().animate({
                    scrollLeft: dist
                },opts['delayTime']);
            });
        });
    };
    $('#tabs li').tabbing();

    $('#tabs li').click(function(){
        if ($(window).width() < 768) {
            var  hashit = $(this).find('a').attr('data-bs-target')
            var autoHeight = $(hashit).height();
            $('.tab-content').animate({height: autoHeight}, 100);
        }
    });


    /* Auto focus search input after open Modal */
    $('.modal').on('shown.bs.modal', function () {
        $('.modal-input').focus();
    });


    /* Live search json file */
    let data = [];
    $.getJSON('js/hotel.json', function(json) {
        data = json;
    });
    $('#search_hotel').on('input', function() {
        const query = $(this).val().toLowerCase();
        $('#results1').empty();

        if (query) {
            const filteredData = data.filter(item => item.city.toLowerCase().includes(query));
            filteredData.forEach(item => {
                $('#results1').append(`<div class="search-item" data-id="${item.id}" data-city="${item.city}" data-hotel="${item.hotel}"><div><i class="bi bi-building"></i>${item.city} ${item.country}</div><span>${item.hotel}</span></div>`);
            });
        }
    });
    $('#search_hotel').on('focus', function() {
        if ($(this).val() === '') {
            $('#results1').empty();
        }
    });


    /* Show data-id And ... after click on city name */
    $(document).on ("click", ".search-item", function () {
        var dataId = $(this).data('id');
        var dataCity = $(this).data('city');
        var dataHotel = $(this).data('hotel');
        $('#search-id').val(dataId);
        $('#city-name').text(dataCity);
        $('#hotel-name').text(dataHotel);
        $('.modal').modal('hide');
    });


    /* Set img to background */
    $('.set-bg').each(function() {
        var bg = $(this).data('bg');
        $(this).css('background-image', 'url(' + bg + ')');
    });



    /* Person counter */
    let count = 0;
    $('#plus').click(function() {
        count++;
        $('#number').text(count);
    });
    $('#minus').click(function() {
        if (count > 0) {
            count--;
            $('#number').text(count);
        }
    });

    /**************** */

    let count2 = 0;
    $('#plus2').click(function() {
        count2++;
        $('#number2').text(count2);
        $('#options').append('<div class="row"><div class="col-6">select ' + count2 + '</div><div class="col-6"><select class="select-option"></select></div><div class="col-12"><hr /></div></div>');
        for (let i = 1; i <= 17; i++) {
            $('.select-option').append('<option value="'+ i + '">' + i +'</option>');
        }
    });
    $('#minus2').click(function() {
        if (count2 > 0) {
            count2--;
            $('#number2').text(count2);
            $('#options .row').last().remove();
        }
    });



    /************* Date Picker **********/
    var picker = new Lightpick({
        field: document.getElementById('datepicker'),
        singleDate: false,
        numberOfMonths: 1,
        inline: true,
        onSelect: function(start, end){
            var str = '';
            str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            str += end ? end.format('Do MMMM YYYY') : '...';
            document.getElementById('date_result').innerHTML = str;

            var startd = start ? start.format('Do MMMM YYYY') : '';
            var parts = startd.split(' ');
            $('#syear').text(parts[2]);
            $('#smonth').text(parts[1]);
            $('#sday').text(parts[0]);
            $('#syear, #smonth, #sday').show();


            var endd = end ? end.format('Do MMMM YYYY') : '';
            var partse = endd.split(' ');
            $('#eyear').text(partse[2]);
            $('#emonth').text(partse[1]);
            $('#eday').text(partse[0]);
            $('#eyear, #emonth, #eday').show();

        }
    });

});


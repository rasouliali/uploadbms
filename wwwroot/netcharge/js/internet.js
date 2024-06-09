function check_phone(number) {
    var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    var result = regex.test(number);
    return result;
}

//function autoSelectOperatorType(number) {
//    for (let i = 0; i < listMobileNumber.length; i++) {
//        let index = listMobileNumber[i].indexOf(number);
//        if (index > -1) {
//            $(".operator-type").each((i, el) => {
//                $(el).prop("src", $(el).data("src1"));
//            });
//            let el = $('.operator-list-item .operator-type[data-value="' + i + '"]')
//            el.prop('src', el.data('src2'))
//            $('#operator').val(i)
//        }
//    }
//}


// -------------
$(".clear__input").click((e) => {
    try {
        $('#operator').val('')
        $(".swiper-img").each((i, el) => {
            $(el).prop("src", $(el).data("src1"));
        });
    } catch (err) {

    }

    let parent = $(e.currentTarget).parent('div');
    parent.find('input[type]').val('')
    $(e.currentTarget).removeClass("d-block");
});


// script show page search users
$(".user_search_btn").click(async (e) => {

    var canCreateContactList = await getContacts();
    if (canCreateContactList) {
        $('.loading').addClass('d-block')
        $(".buy-credit-section").removeClass("d-flex");
        $('.loading').removeClass('d-block')

        $(".buy-credit-step-2").addClass("d-flex")

        $(".buy-credit-section").css('opacity', ".3")
        $(".buy-credit-step-2").animate({ opacity: 1 }, 500);
    }
    //$('.loading').addClass('d-block')
    //setTimeout(() => {

    //    $(".buy-credit-section").removeClass("d-flex");
    //    $('.loading').removeClass('d-block')

    //    $(".buy-credit-step-2").addClass("d-flex")

    //    $(".buy-credit-section").css('opacity', ".3")
    //    $(".buy-credit-step-2").animate({ opacity: 1 }, 500);

    //}, 1000);
});


// --------------
$(".search_user_li").click((e) => {
    $(".user_search_list_ok span").text($(e.currentTarget).data("number"));
    let number = $(e.currentTarget).data("number");
    number = number.substring(0, 4);
    autoSelectOperatorType(number)
    $(".user_search_list_ok").addClass("d-block");
});


//--------
$(".form__input__mobile").keyup(function (e) {
    let parent = $(e.currentTarget).parent('div')
    if ($(this).val().trim().length >= 1) {
        parent.find(".clear__input").addClass("d-block");
    } else {
        parent.find(".clear__input").removeClass("d-block");
    }

    if (e.currentTarget.value.length < 4) {
        $('#operator').val('')
        $(".swiper-img").each((i, el) => {
            $(el).prop("src", $(el).data("src1"));
        });
    }
    autoSelectOperatorType(e.currentTarget.value)
});


// -----
$(document).ready(function () {
    new Swiper(".swiper", {
        loop: false,
        slidesPerView: 6,
        spaceBetween: 5,
        paginationClickable: true,
        breakpoints: {
            600: { slidesPerView: 6, spaceBetween: 10 },
            500: { slidesPerView: 5, spaceBetween: 10 },
            480: { slidesPerView: 4, spaceBetween: 10 },
            0: { slidesPerView: 4, spaceBetween: 10 },
        },
    });
});


// select operator
$(".operator-type").click((e) => {
    if (!$('.form__input__mobile ').val().trim()) {
        $('#operator').val($(e.target).data("value"))
        $(".operator-type").each((i, el) => {
            $(el).prop("src", $(el).data("src1"));
        });
        $(e.target).prop("src", $(e.target).data("src2"));
        $("#operator").val($(e.target).data("value"));
    }
});


// read fast my mobile number
$(".get_my_mobile_number_btn").click((e) => {
    let parent = $(e.currentTarget).parent('div');

    //var mypnumber= "0"+localStorage.getItem("my_mobile_number");
    $(".form__input__mobile").val("0" + mypnumber);
    let number = $(".form__input__mobile").val()
    number = number.substring(0, 4);
    autoSelectOperatorType(number)
    parent.find(".clear__input").addClass("d-block");
    $(".form__input__mobile").trigger("keyup");

});




// cancel search users
$('.buy-credit-section .btn__cancel__user_search').click(() => {
    $(".buy-credit-section").removeClass("d-flex");
    $(".buy-credit-step-1").addClass("d-flex")
    $(".buy-credit-section").css('opacity', ".3")
    $(".buy-credit-step-1").animate({ opacity: 1 }, 500);
})


// click ok btn search users
$(".buy-credit-section .user_search_list_ok").on("click", (e) => {
    //$(".form__input__mobile").val($(e.currentTarget).find("span").text());
    //$(e.currentTarget).find("span").text("");
    //$(e.currentTarget).removeClass("d-block");
    //$('.buy-credit-section .clear__input').addClass('d-block')
    //$(".buy-credit-section").removeClass("d-flex");
    //$(".buy-credit-step-1").addClass("d-flex");
    //$(".buy-credit-section").css('opacity', ".3")
    //$(".buy-credit-step-1").animate({ opacity: 1 }, 500);
    //$(".form__input__mobile").keyup()

    setTimeout(function () {
        $(".buy-credit-section .form__input__mobile").trigger("keyup")
    }, 1000)
});


// script back page 
$(".buy-credit-section .btn_back").click((e) => {
    let parent = $(e.currentTarget).parents('.buy-credit-section');
    $(parent).removeClass('d-flex');
    let prevEl = $(parent).prev()
    if (prevEl.data('role') == 'search') {
        prevEl = prevEl.prev();
    }
    if (prevEl) {
        prevEl.addClass('d-flex')
        $(".buy-credit-section").css('opacity', ".3")
        prevEl.animate({ opacity: 1 }, 500);
    }
});


$("#operator").val("");
$(".form__input__mobile").val("");

$(".buy-credit-section .form__input__mobile").on("keyup", (e) => {
    let mobileNumber = $(".form__input__mobile").val().trim();

    if (mobileNumber.length == 11) {
        if (!check_phone(mobileNumber)) {
            toastr["error"]("شماره موبایل معتبر نیست", "خطا")
            return false;
        }

        let operator = $("#operator").val().trim();
        if (!operator) {
            toastr["error"]("نوع اپراتور را انتخاب نماببد", "خطا");
            return false;
        }

        $('.loading').addClass('d-block')

        setTimeout(() => {
            $('.loading').removeClass('d-block')
            $(".buy-credit-section").removeClass('d-flex')
            $(".buy-credit-section").css('opacity', ".3")
            $(".buy-credit-step-3").addClass("d-flex");
            $(".buy-credit-step-3").animate({ opacity: 1 }, 500);
            $('a.header__btn__move_page.btn__move_page.btn_back').eq(0).attr('href', window.location.href);

        }, 500);
        packageFiltering('');
    }
});
function packageFiltering(query) {

    var opt = $('#operator').val();//0:mci 1:mtn 2:taliya 3:rtl 4:shattle
    if (opt == 3)
        opt = 3;
    else if (opt == 1)
        opt = 2;
    else if (opt == 0)
        opt = 1;
    $('.info-internet-package-link').removeClass('d-block');
    $('.info-internet-package-link').addClass('d-none');
    $('.info-internet-package-link').parent().addClass('d-none');
    var qs = '.info-internet-package-link[data-opt="' + opt + '  "]' + query;
    $(qs).parent().removeClass('d-none');
    $(qs).removeClass('d-none');
    $(qs).addClass('d-block');
}

// select payment method
// $('.box_icon_payment').click(e => {
//     let _this = $(e.currentTarget);
//     $('.payment_type').val(_this.data('value'))
//     $('.box_icon_payment').removeClass('box_icon_is_active')
//     _this.toggleClass('box_icon_is_active')

//     $('.payment_tab').addClass('d-none')
//     $('.' + _this.data('tab')).removeClass('d-none')

//     document.querySelector('.btn_payment').innerHTML = _this.data('title')
// })



// $('.card_number_input').val('')
// $('.card_bank_password').val('')
// $('.card_bank_cvv2').val('')
// $('.year').val('')
// $('.month').val('')


// submit form form buy credit mobile
// $(".buy-credit-form").validate({
//     rules: {
//         card_number_input: {
//             required: true,
//             number: true,
//         },
//         card_bank_password: {
//             required: true,
//             number: true,
//         },
//         card_bank_cvv2: {
//             required: true,
//             number: true,
//         },
//         year: {
//             required: true,
//             number: true,
//         },
//         month: {
//             required: true,
//             number: true,
//         }
//     },
//     messages: {
//         card_number_input: {
//             required: "وارد کردن شماه کارت الزامی می باشد",
//             number: "فقط عدد وارد نمایید",
//         },
//         card_bank_password: {
//             required: "وارد کردن رمز پویا الزامیست",
//             number: "فقط عدد وارد نمایید",
//         },
//         card_bank_cvv2: {
//             required: "وارد کردن cvv2 الزامی است",
//             number: "فقط عدد وارد نمایید",
//         },
//         year: {
//             required: "وارد کردن سال الزامی است",
//             number: "فقط عدد وارد نمایید",
//         },
//         month: {
//             required: "وارد کردن ماه الزامی است",
//             number: "فقط عدد وارد نمایید",
//         }
//     },
//     submitHandler: function(form) {
//         let payment_type = $('.payment-section .payment_type').val().trim()
//         if (!payment_type) {
//             toastr["error"]('روش پرداخت خود را انتخاب نمایید', "خطا")
//             return false
//         }
//         console.log($('.card_number_input').val())
//         console.log($('.card_bank_password').val())
//         console.log($('.card_bank_cvv2').val())
//         console.log($('.year').val())
//         console.log($('.month').val())
//         console.log(payment_type)
//         $('.buy-credit-section').removeClass('d-flex')
//         $('.buy-credit-section').animate({ opacity: 0.3 })
//             // form.submit();
//         $('.successful-transaction-page').addClass('d-flex')
//         $('.successful-transaction-page').animate({ opacity: 1 }, 500)
//     }
// });


//  validate for only enter number input
$('.only_number').keypress(event => {
    if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
        event.preventDefault();
    }
})


// --------------
$('.btn_remove_text_input').click(e => {
    let parent = $(e.currentTarget).parent('div')
    let input = parent.find('input[type]');
    $(input).val('')
    parent.find('.btn_remove_text_input').removeClass('d-block');

    if (!$(input).hasClass('card_number_input')) {
        $(input).prop('type', 'password')
        parent.find('.btn_shwo_hide_password').removeClass('d-block btn_shwo_hide_password_dash');
    }
})


// -------------
// $('.btn_shwo_hide_password').click(e => {
//     let parent = $(e.currentTarget).parent('div')
//     let input = parent.find('input[type]')
//     if ($(input).prop('type') == 'password') {
//         $(input).prop('type', 'text');
//         $(e.currentTarget).addClass('btn_shwo_hide_password_dash');
//     } else {
//         $(e.currentTarget).removeClass('btn_shwo_hide_password_dash');
//         $(input).prop('type', 'password');
//     }
// })


//---------------- show hide btn remove text input and password
// $('.info_payment_bank input').keyup(e => {
//     let parent = $(e.currentTarget).parent('div')
//     if ($(e.currentTarget).val().trim().length > 0) {
//         if ($(e.currentTarget).prop('type') == 'password') {
//             parent.find('.btn_shwo_hide_password').addClass('d-block');
//         }
//         parent.find('.btn_remove_text_input').addClass('d-block');
//     }
// })


//  timer bank code
// $('.btn_bank_card_code').click(e => {
//     $('.btn_bank_card_code').addClass('d-none')
//     $('.bank_code_timer').addClass('d-block')
//     let d = 1;
//     let s = 59;
//     $('.bank_code_timer').text(s + ' : ' + d)
//     let set = setInterval(() => {
//         if (s > 0) {
//             s -= 1;
//         } else if (s == 0) {
//             if (d > 0) {
//                 d -= 1;
//                 s = 5;
//             } else {
//                 clearInterval(set)
//                 $('.btn_bank_card_code').removeClass('d-none')
//                 $('.bank_code_timer').removeClass('d-block')
//             }
//         }
//         $('.bank_code_timer').text(s + ' : ' + d)
//     }, 1000);
// })

//  list js for search in list users
//var options = {
//    valueNames: ['search_user_name']
//};
//var userList = new List('users', options);


// تبدیل عدد به حروف فارسی
$('.form_desired_amount_input').keyup((e) => {
    $('.amount_alpha_number').text(wordifyRialsInTomans(e.currentTarget.value))
})

// فیلتر بسته های اینترنتی بر اساس زمان
$('#internet-package-filter-text').click(e => {
    e.stopPropagation()
    $('.filter-list-ul-type').slideUp('fast')
    $('.filter-list-ul').slideDown('fast');
})
var QuerySearchDayLength = '';
$('.internet-package-filter-ul-li').on('click', e => {
    $('.filter-list-ul').slideUp('fast');
    let value = $(e.currentTarget).data('value')
    let text = $(e.currentTarget).text()
    $('.internet-package-filter-text').text(text);
    QuerySearchDayLength = "";
    if (value!="-1")
        QuerySearchDayLength = `[data-day="` + value + `"]`;
    packageFiltering(QuerySearchDayLength + QuerySearchSimType);
});
var QuerySearchSimType = '';

// فیلتر بسته های اینترنتی بر اساس نوع
$('#internet-package-filter-type').click(e => {
    e.stopPropagation()
    $('.filter-list-ul').slideUp('fast');
    $('.filter-list-ul-type').slideDown('fast')
})
$('.internet-package-filter-ul-li-type').click(e => {
    $('.filter-list-ul-type').slideUp('fast');

    let value = $(e.currentTarget).data('value')
    if (value != "0")
        QuerySearchSimType = '[data-sim="' + value +'"]'
    let text = $(e.currentTarget).text()
    $('.internet-package-filter-type').text(text)
    packageFiltering(QuerySearchDayLength + QuerySearchSimType);
})

// 
$('.internet-package-slide-collapse').click(e => {
    $('.internet-package-slide-collapse').removeClass('internet-package-slide-collapse-active')
    $(e.currentTarget).addClass('internet-package-slide-collapse-active')
    $('.internet-page-slide').removeClass('d-block');
    $('#internet_type').val($(e.currentTarget).data('type'))
    $('.internet-page-slide[data-type="' + $(e.currentTarget).data('type') + '"]').addClass('d-block');
})
function packOnClick() {
    $('.info-internet-package-link:not(.proc)').on('click', e => {
        let internetPackage = $(e.currentTarget).attr('data-PackageId');
        let mobileNumber = $(".form__input__mobile").val().trim();
        let operator = $("#operator").val().trim();
        let internet_type = $('#internet_type').val()
        var opt = 'mci';
        if (operator == "0")
            opt = 'mci';
        else if (operator == "1")
            opt = 'mtn';
        else if (operator == "3")
            opt = 'rtl';
        else
            opt = 'mci';
        $("#submitform #price").val("")
        $("#submitform #mobile").val(mobileNumber)
        $("#submitform #operator").val(opt)
        $("#submitform #PackageId").val(internetPackage)
        $("#submitform").submit();
        //$("#isAmazingCharge").val("")
        //TODO SENT REQUEST TO SERVER
        //$(".buy-credit-section").removeClass('d-flex')
        //$(".buy-credit-section").css('opacity', ".3")
        //$('.buy-credit-step-result-payment-success').addClass('d-flex')
        //$(".buy-credit-step-result-payment-success").animate({ opacity: 1 }, 500);
    });
    $('.info-internet-package-link').addClass('proc');
}

$(document).scroll(function (e) {
    if ($(document).scrollTop() > 20) {
        console.log('yes')
        $('.select-internet-package-slide-header').addClass('fixed')
    } else {
        $('.select-internet-package-slide-header').removeClass('fixed')
    }
});
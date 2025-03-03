toastr.options = {
  "closeButton": false,
  "debug": true,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-left",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


// Hide sidebar menu
$(".overlay").click(function () {
  $(".sidebar-menu").removeClass("sidebar-menu-show");
  $(this).removeClass("d-block");
});

// Show sidebar menu
$(".header-brand").click(function () {
  $(".overlay").addClass("d-block");
  $(".sidebar-menu").addClass("sidebar-menu-show");
});


var theme;
try {
    theme = localStorage.getItem("themeAsan");
    console.log(theme);

} catch (e) {

}

if (theme) {
  if (theme === "moon") {
    $("#code-theme").prop("href", "/netcharge/css/light.css");
    $('#dark-mode').attr('checked', true)
  }
  else {
    $("#code-theme").prop("href", "/netcharge/css/dark.css");
    $('#dark-mode').attr('checked', false)
  }
}
else {
  $("#code-theme").prop("href", "/netcharge/css/light.css");
  $('#dark-mode').attr('checked', true)
}

function darkMode(bool) {
  if (bool) {
      $("#code-theme").prop("href", "/netcharge/css/light.css");
      try {
          localStorage.setItem("themeAsan", "moon");

      } catch (e) {

      }
  }
  else {
      $("#code-theme").prop("href", "/netcharge/css/dark.css");
      try {
          localStorage.setItem("themeAsan", "sun");
      } catch (e) {

      }
  }
}

//main page footer script
$(".footer-top-link").click(function (e) {
  if ($(e.currentTarget).data('item')) {
    $(".footer").addClass("slide-up-footer");
    $(".footer-top-text").addClass("d-none");
    setTimeout(() => {
      $(".footer-overlay").addClass("d-block");
      $(".footer-top-icon").addClass("d-none");
    }, 800);
  }
});

// main page down footer
$(".footer-overlay").click(function () {
  $(".footer").removeClass("slide-up-footer");
  $(".footer-overlay").removeClass("d-block");
  $(".footer-top-text").addClass("d-none");
  setTimeout(() => {
    $(".footer-top-text").removeClass("d-none");
  }, 1200);
  setTimeout(() => {
    $(".footer-top-icon").removeClass("d-none");
  }, 900);
});

// show help
$('.header__help__icon').click(() => {
  $('.modal_mobile_overlay').addClass('d-flex')
  $('.modal_mobile_overlay').animate({ opacity: 1 }, 500);
})
// hide help
$('.close_modal').click(() => {
  $('.modal_mobile_overlay').animate({ opacity: 0 }, 500);
  setTimeout(() => {
    $('.modal_mobile_overlay').removeClass('d-flex')
  }, 550);
})

window.addEventListener('DOMContentLoaded', (event) => {
  $(".loader").delay(500).fadeOut("slow");
  $("#overlayer").delay(500).fadeOut("slow");
});


function check_phone(number) {
  var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  var result = regex.test(number);
  return result;
}

function autoSelectOperatorType(number) {
    if (number.length > 4)
        number = number.substring(0, 4);
  for (let i = 0; i < listMobileNumber.length; i++) {
    let index = listMobileNumber[i].indexOf(number);
    if (index > -1) {
      $(".operator-type").each((i, el) => {
        $(el).prop("src", $(el).data("src1"));
      });
      let el = $('.operator-list-item .operator-type[data-value="' + i + '"]')
      el.prop('src', el.data('src2'))
      $('#operator').val(i)
    }
    }
    if ($('#operator').val() != '' && $('#deka').length > 0) {
        if ($('#operator').val() == '3')
            $('#deka').show();
        else
            $('#deka').hide();
    }
        
}


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
$(".user_search_btn").click((e) => {
  //$('.loading').addClass('d-block')

  //setTimeout(() => {
  //  $('.user_search_list_ok').attr('data-target', $(e.currentTarget).data('target'))
  //  $('.btn__cancel__user_search').attr('data-target', $(e.currentTarget).data('target'))
  //  $('.user_search_list_ok').attr('data-input', $(e.currentTarget).data('input'))

  //  $(".buy-credit-section").removeClass("d-flex");
  //  $('.loading').removeClass('d-block')

  //  $(".buy-credit-section").css('opacity', ".3")

  //  $(".buy-credit-step-2 .btn_back").attr("data-target", $(e.currentTarget).data('target'))

  //  $(".buy-credit-step-2").addClass("d-flex")
  //  $(".buy-credit-step-2").animate({ opacity: 1 }, 500);

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


// read fast my mobile number
//$(".get_my_mobile_number_btn").click((e) => {
//  let parent = $(e.currentTarget).parent('div')
//  $(".form__input__mobile").val(localStorage.getItem("my_mobile_number"));
//  let number = $(".form__input__mobile").val()
//  number = number.substring(0, 4);
//  autoSelectOperatorType(number)
//  parent.find(".clear__input").addClass("d-block");
//});




// cancel search users
$('.btn__cancel__user_search').click((e) => {
  let target = $(e.currentTarget).data('target');
  $(".buy-credit-section").removeClass("d-flex");
  $(".buy-credit-section").css('opacity', ".3")
  $(target).addClass("d-flex")
  $(target).animate({ opacity: 1 }, 500);
})


// click ok btn search users
$(".user_search_list_ok").on("click", (e) => {
  let target = $(e.currentTarget).data('target');
  let input = $(e.currentTarget).data('input');
  $(input).val($(e.currentTarget).find("span").text());
  $(e.currentTarget).find("span").text("");
  $(e.currentTarget).removeClass("d-block");
  $('.clear__input').addClass('d-block')
  $(".buy-credit-section").removeClass("d-flex");
  $(".buy-credit-section").css('opacity', ".3")
  $(target).addClass("d-flex");
  $(target).animate({ opacity: 1 }, 500);
  $(input).keyup()
});


// script back page 
$(".btn_back").click((e) => {
  $(".buy-credit-section").css('opacity', ".3")
  $(".buy-credit-section").removeClass("d-flex");
  let target = $(e.currentTarget).data('target');
  $(target).addClass('d-flex')
  $(target).animate({ opacity: 1 }, 500);
});


$("#operator").val("");
$(".form__input__mobile").val("");
$('.form_desired_amount_input').val("")


$(".sharge.form__input__mobile").on("keyup", (e) => {
  let mobileNumber = $(".form__input__mobile").val().trim();

  let parent = $(e.currentTarget).parent('div')
  if (mobileNumber.length >= 1) {
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

      //هر وقت به مرحله انتخاب قبمت رفت اینپوت مبلغ دلخواه رو خالی کن
      $('.form_desired_amount_input').val('')
      $('#type_charge').val(1); // همین طور نوع شارژ را بر روی شارژ مستقیم قرار بده

      $(".buy-credit-section").removeClass('d-flex')
      $(".buy-credit-section").css('opacity', ".3")
      $(".buy-credit-step-3").addClass("d-flex");

      $(".buy-credit-step-3").animate({ opacity: 1 }, 500);

      $(".buy-credit-step-3").find('.type_operator_parent').removeClass('d-block')
      $(".buy-credit-step-3").find('.type_operator_parent').find('.credit-type-box-right').css("borderColor", "white");
      $(".buy-credit-step-3").find('.type_operator_parent').find('.credit-type-box-left').css("borderColor", "white");

      $(".buy-credit-step-3").find('.type_operator_parent[type_operator=' + operator + ']').addClass('d-block')
      $(".buy-credit-step-3").find('.type_operator_parent[type_operator=' + operator + ']').find('.credit-type-box-right').css("borderColor", "red");


      console.log("mobileNumber = " + mobileNumber, "operator = " + operator);


    }, 500);
  }
});


$(".credit-type-box-right-icon").click((e) => {
  let parent = $(e.currentTarget).parents('.credit-type-box');
  parent.find('.credit-type-box-right').css("borderColor", "red");
  parent.find('.credit-type-box-left').css("borderColor", "white");
  parent2 = parent.parent('.type_operator_parent');
  parent2.find('.direct_charge').removeClass('d-none')
  parent2.find('.password_charge').removeClass('d-block')

  $('#type_charge').val(1) // شارژ مستقیم
});


$(".credit-type-box-left-icon").click((e) => {
  let parent = $(e.currentTarget).parents('.credit-type-box');
  parent.find('.credit-type-box-right').css("borderColor", "white");
  parent.find('.credit-type-box-left').css("borderColor", "red");
  parent2 = parent.parent('.type_operator_parent');
  parent2.find('.direct_charge').addClass('d-none')
  parent2.find('.password_charge').addClass('d-block')

  $('#type_charge').val(2) // خرید رمز شارژ
});


// 
$('.credit_card_amount_drop_down').change(e => {
  let input = $(e.currentTarget).parent('.container').find('.form_desired_amount_input')
  if ($(e.currentTarget).val() == -1) {
    input.show();
    input.next().show();
  } else {
    input.hide();
    input.next().hide();
  }
})


$('.btn-move-payment-page').click(e => {
  //let mobileNumber = $(".form__input__mobile").val().trim();
  //let operator = $("#operator").val().trim();

  //let charge_type = $('#type_charge').val().trim();

  //if (!charge_type) {
  //  toastr["error"]('نوع شارژ را انتخاب نمایید', "خطا")
  //  return false;
  //}

  //let type_operator_parent = $('.type_operator_parent[type_operator=' + operator + ']');

  ////  شارژ مستقیم انتخاب شده است
  //if (charge_type == 1) {
  //  let charge_price_input = type_operator_parent.find('.charge_price_input[charge_type=' + charge_type + ']').val().trim();
  //  if (!charge_price_input) {
  //    toastr["error"]('وارد کردن مبلغ شارژ الزامیست', "خطا")
  //    return false;
  //  }


  //  if (charge_price_input == -1) {
  //    charge_price_input = type_operator_parent.find('.form_desired_amount_input[type]').val().trim();

  //    if (!charge_price_input) {
  //      toastr["error"]('وارد کردن مبلغ شارژ الزامیست', "خطا")

  //      return false;
  //    }
  //  }

  //  toastr["success"]('نوع شارژ و مبلغ شارژ به درستی وارد شده است')
  //  //TODO SENT REQUEST TO SERVER
  //  $(".buy-credit-section").removeClass('d-flex')
  //  $(".buy-credit-section").css('opacity', ".3")
  //  $('.buy-credit-step-result-payment-success').addClass('d-flex')
  //  $(".buy-credit-step-result-payment-success").animate({ opacity: 1 }, 500);
  //  // $('.buy-credit-step-result-payment-error').addClass('d-flex')
  //  // $(".buy-credit-step-result-payment-error").animate({ opacity: 1 }, 500);
  //} else { // شارژ پلاس انتخاب شده است
  //  let service = type_operator_parent.find('.form_credit_card_drop_down_service[charge_type="' + charge_type + '"]');
  //  let service_value = service.val().trim();
  //  if (!service_value) {
  //    toastr["error"]('انتخاب سرویس مورد نظر الزامیست', "خطا")
  //  }
  //  let service_item = service.parent().find('select.form_credit_card_service_type[service_number="' + service_value + '"]')
  //  let service_item_value = service_item.val().trim();
  //  if (!service_item_value) {
  //    toastr["error"]('انتخاب نوع سرویس الزامیست', "خطا")
  //    return false;
  //  }
  //  toastr["success"]('نوع خدمات و سرویس به درستی وارد شده است')
  //  //TODO SENT REQUEST TO SERVER
  //  // $(".buy-credit-section").removeClass('d-flex')
  //  // $(".buy-credit-section").css('opacity', ".3")
  //  // $('.buy-credit-step-result-payment-success').addClass('d-flex')
  //  // $(".buy-credit-step-result-payment-success").animate({ opacity: 1 }, 500);
  //}
})

$('.form_credit_card_drop_down_service').change(e => {
  let _this = $(e.currentTarget);

  let service_value = _this.val().trim()
  if (service_value) {
    let parent = _this.parent('.container');
    parent.find('.nice-select.wide.form_credit_card_service_type').removeClass('d-block')
    parent.find('.nice-select.wide.form_credit_card_service_type[service_number="' + service_value + '"]').addClass('d-block')
  }
})

$(document).ready(() => {
  let s = $('select.wide.form_credit_card_service_type');
  for (const el of s) {
    let next = $(el).next()
    $(next).attr('service_number', $(el).attr('service_number'))
  }
})


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
// $('.btn_remove_text_input').click(e => {
//     let parent = $(e.currentTarget).parent('div')
//     let input = parent.find('input[type]');
//     $(input).val('')
//     parent.find('.btn_remove_text_input').removeClass('d-block');

//     if (!$(input).hasClass('card_number_input')) {
//         $(input).prop('type', 'password')
//         parent.find('.btn_shwo_hide_password').removeClass('d-block btn_shwo_hide_password_dash');
//     }
// })


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
var options = {
  valueNames: ['search_user_name']
};
//var userList = new List('users', options);


// تبدیل عدد به حروف فارسی
$('.form_desired_amount_input').keyup((e) => {
  $('.amount_alpha_number').text(wordifyRialsInTomans(e.currentTarget.value))
})

// ------------------------------------------ Internet page script -----------------------------------------------//
let isFilter = false;
// فیلتر بسته های اینترنتی بر اساس زمان
$('#internet-package-filter-text').click(e => {
  isFilter = true;
  e.stopPropagation()
  $('.filter-list-ul-type').fadeOut()
  $('.filter-list-ul').fadeIn('fast');
})
$('.internet-package-filter-ul-li').click(e => {
  isFilter = false;
  $('.filter-list-ul').fadeOut('fast');
  let value = $(e.currentTarget).data('value')
  let text = $(e.currentTarget).text()
  $('.internet-package-filter-text').text(text)
})

// فیلتر بسته های اینترنتی بر اساس نوع
// $('#internet-package-filter-type').click(e => {
//     isFilter = true;
//     e.stopPropagation()
//     $('.filter-list-ul').fadeOut('fast');
//     $('.filter-list-ul-type').fadeIn('fast')
// })

// $('.internet-package-filter-ul-li-type').click(e => {
//     isFilter = false;
//     $('.filter-list-ul-type').fadeOut('fast');

//     let value = $(e.currentTarget).data('value')
//     let text = $(e.currentTarget).text()
//     $('.internet-package-filter-type').text(text)
// })


$('.info-internet-package-link').click(e => {
  if (isFilter) {
    isFilter = false;
    return;
  }
  if (!isFilter) {
    let internetPackage = $(e.currentTarget).data('value')
    let mobileNumber = $(".form__input__mobile").val().trim();
    let operator = $("#operator").val().trim();
    let internet_type = $('#internet_type').val()


    //TODO SENT REQUEST TO SERVER
    $(".buy-credit-section").removeClass('d-flex')
    $(".buy-credit-section").css('opacity', ".3")
    $('.buy-credit-step-result-payment-success').addClass('d-flex')
    $(".buy-credit-step-result-payment-success").animate({ opacity: 1 }, 500);
  }
})

$(document).scroll(function (e) {
  if ($(document).scrollTop() > 20) {
    console.log('yes')
    $('.select-internet-package-slide-header').addClass('fixed')
  } else {
    $('.select-internet-package-slide-header').removeClass('fixed')
  }
});

$(".internet.form__input__mobile").on("keyup", (e) => {
  let mobileNumber = $(".internet.form__input__mobile").val().trim();

  let parent = $(e.currentTarget).parent('div')
  if (mobileNumber.length >= 1) {
    parent.find(".clear__input").addClass("d-block");
  } else {
    parent.find(".clear__input").removeClass("d-block");
  }

  if (mobileNumber.length < 4) {
    $('#operator').val('')
    $(".swiper-img").each((i, el) => {
      $(el).prop("src", $(el).data("src1"));
    });
  }
  autoSelectOperatorType(mobileNumber)

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
    }, 500);
  }
});

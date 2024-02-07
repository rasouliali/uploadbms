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

let theme;
theme = localStorage.getItem("theme");
//console.log(theme);
if (theme) {
    if (theme === "moon") {
        $("#code-theme").prop("href", "./css/light.css");
        $('#dark-mode').attr('checked', true)
    }
    else {
        $("#code-theme").prop("href", "./css/dark.css");
        $('#dark-mode').attr('checked', false)
    }
}
else {
    $("#code-theme").prop("href", "./css/dark.css");
    $('#dark-mode').attr('checked', false)
}

function darkMode(bool) {
    if (bool) {
        $("#code-theme").prop("href", "./css/light.css");
        localStorage.setItem("theme", "moon");
    }
    else {
        $("#code-theme").prop("href", "./css/dark.css");
        localStorage.setItem("theme", "sun");
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

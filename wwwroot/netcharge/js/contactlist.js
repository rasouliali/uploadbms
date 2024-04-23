
const props = ['name', 'tel'];
const opts = { multiple: false };
async function getContacts() {
	try {
		JSBridge.LoadContact();
		console.log("getContacts", "after JSBridge.LoadContact")

	} catch (ex) {
		return false;
	}
	try {
		console.log("getContacts", "First")

		if (navigator.contacts) {
			console.log("getContacts", "in navigator.contacts if")

			const contacts = await navigator.contacts.select(props, opts);
			console.log("getContacts", "contacts:" + JSON.stringify(contacts));

			LoadContactSecondStep(contacts);
			//}, 1000);
			return false;
			/*
			
			*/
		}
		else {
		}

	} catch (ex) {
		// Handle any errors here.
		//alert(ex);
		//alert("لیست مخاطبین در این مرورگر یا در این سیستم عامل فعال نیست!");
		return false;
	}
}
function LoadContactSecondStep(contacts) {
	var strcontact = "";
	for (var i = 0; i < contacts.length; i++) {

		strcontact += `<li class="search_user_li" data-name="` + contacts[i].name + `" data-number="` + getNormalPhone(contacts[i].tel) + `">
								<span class="search_user_name">`+ contacts[i].name + `</span>
								<span class="search_user_icon"></span>
							</li>`;
	}
	$('.search_user_list_ul').html(strcontact);
	console.log('LoadContactSecondStep', contacts);
	$(".search_user_li").click((e) => {
		let number = $(e.currentTarget).data("number");
		number = number.split(';')[0];
		$(".user_search_list_ok span").text(number);
		$('.form__input__mobile').val(number);
		number = number.substring(0, 4);
		autoSelectOperatorType(number)
		$(".user_search_list_ok").addClass("d-block");

		setTimeout(function () {
			$(".buy-credit-section .form__input__mobile").trigger("keyup")
		}, 1000);
	});

	//setTimeout(function () {
	//var normalTel = getNormalPhone(contacts[0].tel[0]);
	//$(".form__input__mobile").val(normalTel);
	////$(e.currentTarget).find("span").text("");
	////$(e.currentTarget).removeClass("d-block");
	//$('.buy-credit-section .clear__input').addClass('d-block')
	//$(".buy-credit-section").removeClass("d-flex");
	//$(".buy-credit-step-1").addClass("d-flex");
	//$(".buy-credit-section").css('opacity', ".3")
	//$(".buy-credit-step-1").animate({ opacity: 1 }, 500);
	//$(".form__input__mobile").keyup();

	setTimeout(() => {

		$(".buy-credit-section").removeClass("d-flex");
		$('.loading').removeClass('d-block')

		$(".buy-credit-step-2").addClass("d-flex")

		$(".buy-credit-section").css('opacity', ".3")
		$(".buy-credit-step-2").animate({ opacity: 1 }, 500);

	}, 1000);



}
function getNormalPhone(tel) {
    try {
		tel = tel.toString();
		tel = tel.split(' ').join('');
		if (tel.startsWith("+"))
			return "0" + tel.toString().substr(3);
		else if (tel.startsWith("00"))
			return "0" + tel.toString().substr(4);
		else if(tel[0] != "0")
		return "0" + tel.toString();
		return tel;
    } catch (e) {

    }
}


$('.search_user_input').on('keyup', function () {
	var search = $(this).val();
	console.log('search_user_input', search);
	if (search.length > 2) {
		JSBridge.SearchContact(search);
	}
})
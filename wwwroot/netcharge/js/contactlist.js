
const props = ['name', 'tel'];
const opts = { multiple: false };
async function getContacts() {
	try {
		const contacts = await navigator.contacts.select(props, opts);
		var strcontact = "";
		for (var i = 0; i < contacts.length; i++) {

			strcontact += `<li class="search_user_li" data-name="` + contacts[i].name +`" data-number="` + getNormalPhone(contacts[i].tel) +`">
								<span class="search_user_name">`+ contacts[i].name +`</span>
								<span class="search_user_icon"></span>
							</li>`;
		}
		setTimeout(function () {
			$(".form__input__mobile").val(getNormalPhone(contacts[i].tel));
			$(e.currentTarget).find("span").text("");
			$(e.currentTarget).removeClass("d-block");
			$('.buy-credit-section .clear__input').addClass('d-block')
			$(".buy-credit-section").removeClass("d-flex");
			$(".buy-credit-step-1").addClass("d-flex");
			$(".buy-credit-section").css('opacity', ".3")
			$(".buy-credit-step-1").animate({ opacity: 1 }, 500);
			$(".form__input__mobile").keyup()
		}, 1000);
		//$('.search_user_list_ul').html(strcontact);
		//console.log('contacts:', contacts);
		//$(".search_user_li").click((e) => {
		//	$(".user_search_list_ok span").text($(e.currentTarget).data("number"));
		//	let number = $(e.currentTarget).data("number");
		//	number = number.substring(0, 4);
		//	autoSelectOperatorType(number)
		//	$(".user_search_list_ok").addClass("d-block");
		//});

		//// click ok btn search users
		//$(".buy-credit-section .user_search_list_ok").on("click", (e) => {
		//	$(".form__input__mobile").val($(e.currentTarget).find("span").text());
		//	$(e.currentTarget).find("span").text("");
		//	$(e.currentTarget).removeClass("d-block");
		//	$('.buy-credit-section .clear__input').addClass('d-block')
		//	$(".buy-credit-section").removeClass("d-flex");
		//	$(".buy-credit-step-1").addClass("d-flex");
		//	$(".buy-credit-section").css('opacity', ".3")
		//	$(".buy-credit-step-1").animate({ opacity: 1 }, 500);
		//	$(".form__input__mobile").keyup()
		//});
		return true;
		/*
		
		*/
	} catch (ex) {
		// Handle any errors here.
		alert("لیست مخاطبین در این مرورگر یا در این سیستم عامل فعال نیست!");
		return false;
	}
}
function getNormalPhone(tel) {
	if (tel.toString().startsWith("+"))
		return "0" + tel.toString().substr(3);
	else if (tel.toString().startsWith("00"))
		return "0" + tel.toString().substr(4);
	else (tel.toString()[0]!="0")
		return "0" + tel.toString();
	return tel.toString();
}
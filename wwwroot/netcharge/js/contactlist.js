
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
		$('.search_user_list_ul').html(strcontact);
		//console.log('contacts:', contacts);
		//$(".search_user_li").click((e) => {
		//	$(".user_search_list_ok span").text($(e.currentTarget).data("number"));
		//	let number = $(e.currentTarget).data("number");
		//	number = number.substring(0, 4);
		//	autoSelectOperatorType(number)
		//	$(".user_search_list_ok").addClass("d-block");
		//});

		//setTimeout(function () {
			var normalTel = getNormalPhone(contacts[0].tel[0]);
			$(".form__input__mobile").val(normalTel);
			$(e.currentTarget).find("span").text("");
			$(e.currentTarget).removeClass("d-block");
			$('.buy-credit-section .clear__input').addClass('d-block')
			$(".buy-credit-section").removeClass("d-flex");
			$(".buy-credit-step-1").addClass("d-flex");
			$(".buy-credit-section").css('opacity', ".3")
			$(".buy-credit-step-1").animate({ opacity: 1 }, 500);
			$(".form__input__mobile").keyup()
		//}, 1000);
		return false;
		/*
		
		*/
	} catch (ex) {
		// Handle any errors here.
		alert(ex);
		alert("لیست مخاطبین در این مرورگر یا در این سیستم عامل فعال نیست!");
		return false;
	}
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
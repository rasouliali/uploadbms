
const props = ['name', 'tel'];
const opts = { multiple: false };
async function getContacts() {
	try {
		const contacts = await navigator.contacts.select(props, opts);
		var strcontact = "";
		for (var i = 0; i < contacts.length; i++) {

			strcontact += `<li class="search_user_li" data-name="` + contacts[i].name +`" data-number="` + contacts[i].tel +`">
								<span class="search_user_name">`+ contacts[i].name +`</span>
								<span class="search_user_icon"></span>
							</li>`;
        }
		$('.search_user_list_ul').html(strcontact);
		console.log('contacts:', contacts);
		return true;
		/*
		
		*/
	} catch (ex) {
		// Handle any errors here.
		alert("لیست مخاطبین در این مرورگر یا در این سیستم عامل فعال نیست!");
		return false;
	}
}
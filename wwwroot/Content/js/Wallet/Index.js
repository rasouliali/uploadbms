var amount_value = 0;

$(document).ready(function () {
 
    $("#step3Link").show();
    $('#PayBtn').on('click', function (event) {
        event.preventDefault();
      
          
        AjaxCall('/Info/HadlerService',
            {
                "model": JSON.stringify({
                    fun: "AddWalletMethod",
                    Amount: $('#Amount').val().replace(",", "").replace(",", "").replace(",", "").replace(",", "").replace(",", ""),
                    TransactionProductStatusId: "1",
                    TransactionTypeId: "6",
                    TransactionProductTypeId: "11"
                   
                })
            }, 'POST'
        ).done(function (response) {

            if (response.resultCode == 200) {
                        window.location.href = response.data;
            }
            else {
                alart(!GetNullEmpetyUndefined(response.message) ? response.message + " !" : "عملیات با موفقیت انجام نشد", 'e', 6000);

            }
        }).fail(function (error) {
            alart("!خطای غیر منتظره", 'e', 6000);
        });
        
        event.stopPropagation();
    });
    $('#Amount').on('keyup', function () {
       
        if ($('#Amount').val().length > 3) {
            _timeout = setTimeout(function () {
                ChangeAmount(null, $('#Amount').val().replace(",", "").replace(",", "").replace(",", "").replace(",", "").replace(",", ""));
                clearTimeout(_timeout);
            },10);
         
        }
        //
    });
});

function ChangeAmount(evt, amount) {
    
   
        amount_value = amount;
       
        //var dd = parseFloat(amount).toLocaleString(window.document.documentElement.lang);
        $('#Amount').val(formatMoney(amount));
     
};

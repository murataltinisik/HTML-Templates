$(document).ready(function(){
            
    ////// --- CONFIRM EMAIL -> FORGOT PASSOWRD --- \\\\\\

    // VARIABLE
    var isClicked = true;

    // GET CODE
    var getCode = $('#getCode').hide();
    var alertI = $('.alert').hide();

    // CONFIRM EMAIL
    $("#ConfirmEmail").click(function(){
        if($('#EmailControl input').val().length > 8){
            if(isClicked == true){
                isClicked = false;
            }else{
                $('form').removeAttr('onsubmit');
            }
            getCode.slideDown();
            alertI.hide();
        }else{
            alertI.fadeIn('fast').text("Lütfen E-Posta Adresinizi Giriniz..");
        }
    });

    ////// ### CONFIRM EMAIL -> FORGOT PASSOWRD ### \\\\\\

});
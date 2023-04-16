$(document).ready(function(){

    ////// --- SEARCH INPUT --- \\\\\\

    // RESPONSE
    $('.search #response').hide();

    // INPUT : FOCUS
    $('#SiteSearchINPUT').keyup(function(){
        SiteSearch($(this).val());

        if($(this).val().length > 0){
            $('.search #response').show();
        }else{
            $('.search #response').hide();
        }
    });

    // SITE SEARCH -> VALUE
    function SiteSearch(value){
        $('.search #response .body ul li').each(function(){
            var exists_key = false;

            // Exists Value? 
            $(this).each(function(){
                if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >=0 ){
                    exists_key = true;
                }
            });

            // Exists Value Control?
            if(exists_key == true){
                $(this).slideDown('fast');
            }else if(exists_key == false){
                $(this).slideUp('fast');
            }
        });
    }

});

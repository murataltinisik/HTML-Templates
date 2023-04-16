$(document).ready(function(){

    ////// ----- INPUT CREDIT CARD MASK ----- \\\\\\

    $('#CardNumber').mask('0000 0000 0000 0000');

    ////// ##### INPUT CREDIT CARD MASK#####----- \\\\\\

    ////// ----- ADDRESS ----- \\\\\\
    // VARIABLE
    var Address_ID;

    // CONTENT HIDE
    $('.address .content').hide();
    $('.address .address-title i.activeAddress').hide();
    $('.address.active .address-title i.activeAddress').show();

    // ADDRESS DETAII SHOW
    $('.addressDetailShow').click(function(){

        Address_ID = $(this).parent().index();
        
        $('.address .content').slideUp('fast');
        $('.address:eq('+Address_ID+') .content').slideDown();

    });

    $('.SelectedAddress').click(function(){
        Address_ID = $(this).parent().parent().index();

        $('.address').removeClass("active");
        $('.address:eq('+Address_ID+')').addClass('active');

        $('.address .address-title i').hide();
        $('.address:eq('+Address_ID+') .address-title i.activeAddress').show();
    });
    ////// ##### ADDRESS ##### \\\\\\

});
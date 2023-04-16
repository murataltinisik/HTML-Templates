$(document).ready(function(){

    ////// --- GENDER --- \\\\\\

    // VARIABLE
    var Gender_ID;
    var GenderInput;

    // GENDER INPUT VALUE
    function GenderInputValue($val){
        $('#GenderInputValue').val($val);
    }

    $('#Gender div').click(function(){

        // GENDER ID
        Gender_ID = $(this).index();

        // GENDER CLASS -> ACTIVE
        $('#Gender div').removeClass('active');
        $('#Gender div').eq(Gender_ID).addClass('active');

        // GENDER INPUT
        GenderInput = $('#Gender div').eq(Gender_ID).text();

        // GENDER INPUT VALUE
        GenderInputValue(GenderInput);
        
    });

    ////// ### GENDER ### \\\\\\

});
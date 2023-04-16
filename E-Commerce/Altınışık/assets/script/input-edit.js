$(document).ready(function(){

    ////// --- INPUT EDIT --- \\\\\\
    $('i.user-info-edit').click(function(){

        var value = $(this).parent().parent().index();

        $('.InputGroup:eq('+value+') input').removeAttr('disabled').css({
            backgroundColor : "#fff",
            boxShadow : "0 0 6px #eee"
        });

    });
    ////// ### INPUT EDIT ### \\\\\\

});
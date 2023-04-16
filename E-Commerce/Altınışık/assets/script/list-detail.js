$(document).ready(function(){

    ////// --- LIST DETAIL --- \\\\\\

    // START
    $('.lists .list .added').hide();

    // VARIABLE
    var ID;

    // LIST MENU SHOW & HIDE
    $('.lists .list i.fa-bars').click(function(){

        // ID
        ID = $(this).parent().parent().index();

        // LIST -> HIDE & SHOW
        $('.lists .list .added').slideUp('fast');
        $('.lists .list .added').eq(ID).slideDown('fast');

    });

    ////// ### LIST DETAIL ### \\\\\\

});


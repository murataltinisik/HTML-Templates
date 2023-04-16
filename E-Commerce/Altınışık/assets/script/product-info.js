$(document).ready(function(){

    // VARIABLE
    var ID = 0;

    ////// --- COMMENT SETTING MENU --- \\\\\\
    // SETTING MENU -> HIDE
    $('.setting-menu').hide();

    // USER CONTENT SETTING -> CLICK
    $('.user-content-container .user-content-settings').click(function(){

        // ID
        ID = $(this).parent().parent().parent().index();

        // USER CONTENT
        $('.user-content-container .user-content').eq(ID).find('.setting-menu').fadeToggle("fast");

    });

    // USER CONTENT
    $('.user-content-container .user-content').mouseleave(function(){
        $('.user-content-container .user-content .setting-menu').fadeOut('fast');
    });
    ////// ### COMMENT SETTING MENU ### \\\\\\

    
    ////// --- TAB MENU --- \\\\\\

    // TAB MENU ALL -> HIDE
    $('.content-container .content').hide();

    // TAB MENU FIRST -> SHOW
    $('.content-container .content').first().show();
    
    // MENU UL LI -> CLICK
    $('.explanation > .menu ul li').click(function(){
        
        // ID
        ID = $(this).index();

        // TAB MENU SHOW & HIDE
        $('.content-container .content').hide().stop();
        $('.content-container .content').eq(ID).fadeIn('fast');

        // ACTIVE CLASS REMOVE & ADD
        $('.explanation > .menu ul li').removeClass('active');
        $('.explanation > .menu ul li').eq(ID).addClass('active');

    });
    ////// ### TAB MENU ### \\\\\\




    ////// --- PRODUCT INFO IMAGE SLIDE --- \\\\\\
    // PRODUCT IMAGE -> HIDE
    $('.product-images .image').hide();

    // PRODUCT IMAGE FIRST -> SHOW
    $('.product-images .image').first().show();

    // ITEM LENGTH
    var Image_Item = $('.product-images .image');
    var Product_Image_LENGTH = $('.product-images .image').length - 1;

    // READY FUNCTION
    function ChangeImageAndStyle($Statu, $ID = null){

        if($Statu == 'NEXT'){
            if(ID < Product_Image_LENGTH){
                ID++;
            }else{
                ID = 0;
            }
        }else if($Statu == 'PREV'){
            if(ID == 0){
                ID = Product_Image_LENGTH;
            }else{
                ID--;
            }
        }else{
            // CODE
        }

        Image_Item.hide();
        Image_Item.eq(ID).fadeIn("fast");

    }

    // UL lI
    $('.navigate ul li').click(function(){
        // ID
        ID = $(this).index();
        ChangeImageAndStyle();
    });

    // NEXT BTN
    $('.buttons #Next').click(function(){
        ChangeImageAndStyle('NEXT');
    });

    // PREV BTN
    $('.buttons #Prev').click(function(){
        ChangeImageAndStyle('PREV');
    });

    ////// ### PRODUCT INFO IMAGE SLIDE ### \\\\\\



    ////// --- RESPONSIVE DESING ON --- \\\\\\
    // RESPONSIVE DESING ON -> CLICK
    $('#ResponsiveDesingOn').click(function(){
        // RESPONSIVE PRODUCT CONTAINER -> TOGGLE
        $('#Responsive-Product-Container').slideToggle('fast');
    });
    ////// ### RESPONSIVE DESING ON ### \\\\\\



    ////// --- MY LIST ADD -> LIST --- \\\\\\
    $('#MyListAdd').click(function(){
        $('.add-list .lists').fadeToggle('fast');
    });
    ////// ### MY LIST ADD -> LIST ### \\\\\\


});

$(document).ready(function(){

    ////// --- REPONSIVE PRODUCT ITEM -> BASKET --- \\\\\\

    // VARIABLES
    var Responsive_Desing_ID;

    // RESPONSIVE METHODS
    function ResponsiveItemDetails($ID, R_Animate){
        if(R_Animate == true){
            $('#Basket-Container .item:eq('+$ID+') #Responsive-Item-Details.ResponsiveItemDetails').slideDown();
        }else{
            $('#Basket-Container .item:eq('+$ID+') #Responsive-Item-Details.ResponsiveItemDetails').slideUp();
        }
    }

    $('#Open-Responsive-Menu.openBTN').on('click', function(){
        // ITEM -> INDEX
        Responsive_Desing_ID = $(this).parent().parent().index();

        // RESPONSIVE METHODS
        ResponsiveItemDetails(Responsive_Desing_ID, true);
    });

    $('#Reponsive-Head.ResponsiveHead').on('click', function(){
        // ITEM -> INDEX
        Responsive_Desing_ID = $(this).parent().parent().parent().index();

        // RESPONSIVE METHODS
        ResponsiveItemDetails(Responsive_Desing_ID, false);
    });

    ////// ### REPONSIVE PRODUCT ITEM -> BASKET ### \\\\\\
});
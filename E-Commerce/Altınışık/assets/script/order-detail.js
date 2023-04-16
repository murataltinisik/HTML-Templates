$(document).ready(function(){

    // VARIABLE
    var OrderIndex;

    // ORDER FUNCTION
    function OrderDetail($isParent, $ID){
        if($isParent){
            // ORDER DETAIL SHOW
            $('.order .order-detail').eq($ID).fadeToggle("slow");
        }else{
            // ORDER DETAIL SHOW
            $('.order .order-detail').eq($ID).fadeOut("fast");
        }
    }

    // ORDER DETAIL -> SHOW
    $(".order .OrderDetailShow").click(function(){
        // ORDER INDEX
        OrderIndex = $(this).parent().parent().index();
        
        // ORDER DETAIL FUNCTION
        OrderDetail(true, OrderIndex);
    });

    // ORDER DETAIL -> HIDE
    $('.order').mouseleave(function(){
        // ORDER INDEX
        OrderIndex = $(this).index();
        
        // ORDER DETAIL FUNCTION
        OrderDetail(false, OrderIndex);
    });

});
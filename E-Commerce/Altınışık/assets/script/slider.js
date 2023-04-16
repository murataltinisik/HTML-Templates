$(document).ready(function(){

    // SLIDER HIDE : FIRST SHOW
    $('#Slider-Container .slider').hide();
    $('#Slider-Container .slider').first().show();

    // SLIDER PROPERTY
    var timer;
    var slide_index = 0;
    var slide_lenght = $('#Slider-Container .slider').length - 1;

    var SliderSettings = {
        duration : 4500
    };

    // SLIDER MOTION -> NAVIGATE (CLASS) - SLIDER (CHANGE)
    function SliderMotion($slideIndex){
        // SLIDER HIDE : slide_index SHOW
        $('#Slider-Container .slider').hide();
        $('#Slider-Container .slider').eq($slideIndex).fadeIn('slow');

        // SLIDER NAVIGATE : UL LI slide_index ACTIVE
        $('#Slider-Container .navigate ul li').removeClass('active');
        $('#Slider-Container .navigate ul li').eq($slideIndex).addClass('active');
    }

    // SLIDER NEXT & TIMER FUNCTION
    function NextAndAutoload(){
        if(slide_index >= slide_lenght){
            slide_index = 0;
        }else{
            slide_index++;
        }
        // SLIDER MOTION
        SliderMotion(slide_index);
    }

    // SLIDER AUTOLOAD 
    function SliderAutoload(){
        timer = setInterval(function(){
            NextAndAutoload();
        },SliderSettings.duration);
    }

    // SLIDER NAVIGATE : UL LI -> ONCLICK
    $('#Slider-Container .navigate ul li').on('click', function(){
        slide_index = $(this).index();
        // SLIDER MOTION
        SliderMotion(slide_index);
    });

    // SLIDER NAVIGATE : NEXT -> ONCLICK
    $('#Slider-Container .slider-btn button#next').on('click', function(){
        NextAndAutoload();
    });

    // SLIDER NAVIGATE : PREVIEW -> ONCLICK
    $('#Slider-Container .slider-btn button#preview').on('click', function(){
        if(slide_index == 0){
            slide_index = slide_lenght;
        }else{
            slide_index--;
        }
        // SLIDER MOTION
        SliderMotion(slide_index);
    });

    // SLIDER NAVIGATE : AUTOLOAD -> TIMER
    SliderAutoload();

    // SLIDER CONTAINER : HOVER -> AUTOLOAD STOP
    $('#Slider-Container').hover(function(){
        clearInterval(timer);
    }, function(){
        SliderAutoload();
    });

});
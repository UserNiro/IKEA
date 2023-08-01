/* <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> */
$(document).ready(function(){

    // mobile AOS삭제
   
        AOS.init({
            disable:'mobile'
        });


    const ww = $(window).width();
    
    // bedroom 객체 이동
    if(ww >= 1101){
        
    }else{
        $(".bedroom .text-box").appendTo(".bedroom")
    }
    
    if (ww > 375){

    }else{
        $(".bedroom > h1").prependTo(".bedroom")
    }
    // mobile 토글메뉴 등장 이벤트
    $(".ham-btn").click(function(){
        $(".m-toggle-menu").addClass("active")
    })

    $(".X-btn").click(function(){
        $(".m-toggle-menu").removeClass("active")
    })
    
    
    if(ww > 375){
    }else{
        $(".new").css({
            opacity:1
        })
        $(".promotion").css({
            opacity:1
        })
        $(".service").css({
            opacity:1
        })
    }


    
    if(ww > 375){
    var swiper = new Swiper(".mySwiper1", {
        // initialSlide:"0",
        // slidesPerView:"4",
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            1100:{
                slidesPerView:"4",
            },
            960:{
                slidesPerView:"2",
            },
            760:{
                slidesPerView:"1",
            }
        }
    });

    var swiper = new Swiper(".mySwiper2", {
        initialSlide:"0",
        slidesPerView:"auto",
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            1100:{
                slidesPerView:"3",
            },
            960:{
                slidesPerView:"2",
            },
            760:{
                slidesPerView:"1",
            }
        }
    });
    }else{
        var swiper = new Swiper(".mySwiper1", {
            initialSlide:"0",
            slidesPerView:"auto",
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });
    
        var swiper = new Swiper(".mySwiper2", {
            initialSlide:"0",
            slidesPerView:"auto",
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            }
        });
    }

    
    // setTimeout(()=>{
    //     $('.header').addClass('active');
    // }, 500);

    // header scroll
    $(window).on("wheel", (e) => {
        // console.log(e.originalEvent.deltaY);
        // e.originalEvent → JavaScript 의 wheelEvent 객체라고 생각하시면 됩니다
        if (e.originalEvent.deltaY < 0) {
            // 휠 올라갈때
            $('.header').removeClass('active');
        }
        else {
            // 휠 내려갈때
            $('.header').addClass('active');
        }
    });
    
    // section scroll
    $(window).scroll(function(){

        const sct = $(window).scrollTop();
        console.log(sct);
        // const sec1 = $('.sec-1').offset().top;
        // if(sct >= sec1){
        //     $('.header').addClass('active');
        // }else{
        //     $('.header').removeClass('active');
        // }

            if(sct >= 4623){
                $(".new").addClass('active');
            }else{
                $(".new").removeClass('active')
            }
            
        const newTop = $('.sec-2').offset().top;
            if(sct >= newTop){
                $(".promotion").addClass('active');
            }else{
                $(".promotion").removeClass('active')
            }
        const promoTop = $(".sec-3").offset().top;
            if(sct >= promoTop){
                $(".service").addClass('active');
            }else{
                $(".service").removeClass('active')
            }

        
    })

    

        
    // 서비스 탭메뉴
    const tabBtn = $(".hoverbox");
    if(ww <= 1100){

    }else{
        tabBtn.mouseenter(function(){
            const index = $(this).index();  
            $(this).addClass("active").siblings().removeClass("active");

            $(`#tab${index+1}`).addClass("active").siblings().removeClass("active");
        });

        tabBtn.mouseleave(function(){
            $('.content').removeClass("active");
        })
    }




    // $('.hoverbox').mouseenter(function(){
    //     const result = $(this).attr('data-alt');
    //     $('.content').removeClass("active");
    //     $(`#${result}`).addClass("active");

    // });
    // $('.hoverbox').mouseleave(function(){
    //     $('.content').removeClass("active");

    // });


})




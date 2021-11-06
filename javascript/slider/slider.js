//products section
$(".products .flexBox").slick({
    arrows:false,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        }
        ,
        {
            breakpoint : 576,
            settings : {
                slidesToShow:1,
                slidesToScroll:1,
                infinite:true
            }
        }
    ]
})


//review section
$(".review .slider").slick({
    arrows:false,
    dots:true,
    autoplay:true,
    speed:1500
})

//doctors section
$(".doctor .slider").slick({
    slidesToScroll:1,
    slidesToShow:4,
    infinite:false,
    prevArrow:`<i class="fas fa-chevron-left"></i>`,
    nextArrow:`<i class="fas fa-chevron-right"></i>`,
    centerPadding:"50px",
    responsive : [
        {
            breakpoint : 1200,
            settings: {
                slidesToShow:3
            }
        }
        ,
        {
            breakpoint : 993,
            settings: {
                slidesToShow:2,
                arrows:false
            }
        }
        , {
            breakpoint:769,
            settings : {
                slidesToShow:1,
                arrows:false
            }
        }
    ]
})

//partners section
$(".partners .flexImgs").slick({
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick",
        }   
        ,
        {
            breakpoint : 576,
            settings : {
                arrows:false,
                slidesToShow:1,
                slidesToScroll:1,
                infinite:true
            }
        }
    ]
})
//products section
if (window.innerWidth <= 576) {
    $(".products .flexBox").slick({
        arrows:false,
        responsive: [
            {
                breakpoint : 1920,
                settings : "unslick"
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
}

//review section
$(".review .slider").slick({
    arrows:false,
    dots:true,
    autoplay:true,
    speed:1500
})
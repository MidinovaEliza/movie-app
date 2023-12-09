$('.slider').slick({
    slidesToShow: 1,
    dots:true,
    autoplay:true,
    responsive:[
        {
            breakpoint:340,
            settings:{
                arrows: false,
                centerPadding: "40px",
                slidesToShow:1
            }
        }
    ]
})
$('.hero2').slick({
    slidesToShow: 4,
    autoplay: true,
    responsive:[
        {
            breakpoint:340,
            settings:{
                arrows: false,
                centerPadding: "20px",
                slidesToShow:1
            }
        }
    ]
})
$('.hero3').slick({
    slidesToShow: 3,
    autoplay: true,
    responsive:[
        {
            breakpoint:340,
            settings:{
                arrows: false,
                centerPadding: "20px",
                slidesToShow:1
            }
        }
    ]
})


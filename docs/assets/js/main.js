$(document).ready(function(){$(".slider-author").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".slider-quote",dots:!1,focusOnSelect:!0,centerMode:!0,arrows:!1,variableWidth:!0,infinite:!0,swipeToSlide:!0}),$(".slider-quote").slick({dots:!1,infinite:!0,speed:600,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3,fade:!0,arrows:!1,asNavFor:".slider-author",adaptiveHeight:!0})});
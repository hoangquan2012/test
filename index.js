$(document).ready(function () {
  const swiper = new Swiper("#swiper1", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });

  var swiperCard = new Swiper("#swiper2", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  $(window)
    .off("scroll")
    .on("scroll", function () {
      console.log($(window).scrollTop());
      if ($(window).scrollTop() > 640) {
        $("#header").addClass("page-header-light");
        $(".logo").attr("src", "logo-web-color.svg");
      } else {
        $("#header").removeClass("page-header-light");
        $(".logo").attr("src", "logo-web.svg");
      }
    });
});

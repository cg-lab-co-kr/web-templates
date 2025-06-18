$(function () {
  const $window = $(window);
  const $header = $("header");
  const $visual = $(".visual , .main-visual-item");
  const $topBtn = $(".top-btn");

  // 헤더, 탑버튼이 비주얼을 벗어 나갈때------------------------------------------------------------
  $window.on("scroll", function () {
    const visualBottom = $visual.offset().top + $visual.outerHeight() - 500;
    const scrollTop = $window.scrollTop();

    if (scrollTop > visualBottom) {
      $header.addClass("scrolled");
    } else {
      $header.removeClass("scrolled");
    }
  });

  // 탑 버튼 클릭 이벤트
  $topBtn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 100, function () {
      $header.removeClass("hide"); //탑버튼 누를시 헤더가 나옴
    });
  });

  // 키보드에 홈 버튼을 눌렀을때도 헤더가 내려옴
  $(document).on("keydown", function (e) {
    if (e.key === "Home") {
      // Home 키가 눌렸을 때
      $("html, body").animate({ scrollTop: 0 }, 100, function () {
        $header.removeClass("hide"); // 헤더를 보이게 함
      });
    }
  });
  // 헤더, 탑버튼이 비주얼을 벗어 나갈때------------------------------------------------------------

  // 모바일 더보기
  const $btnmenu = $(".mobile-more-btn");
  const $mobilemenu = $(".mobile-menu");
  const $btnClose = $(".mobile-btn-close");

  $btnmenu.on("click", () => {
    $mobilemenu.addClass("active");
  });

  $btnClose.on("click", () => {
    $mobilemenu.removeClass("active");
  });
  // 모바일 더보기 end

  //메인 배너 스와이퍼
  const swiper = new Swiper(".main-visual-swiper", {
    loop: true,
    effect: "fade",

    fadeEffect: {
      crossFade: true,
    },

    speed: 1000,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //메인 배너 스와이퍼
  const SwiperProduct = new Swiper(".product-all", {
    loop: true,
    // effect: "fade",

    // fadeEffect: {
    //   crossFade: true,
    // },

    speed: 1000,

    slidesPerView: 3,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(function () {
  // safety-guide------------------------------------------------------------
  const SafetyGuide = new Swiper(".safety", {
    speed: 500,
    loop: true,
    slidesPerGroup: 1,

    breakpoints: {
      320: {
        // 최소 모바일 크기부터 시작
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1488: {
        slidesPerView: 3,
        spaceBetween: 76,
      },
    },

    pagination: {
      el: ".safety-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".safety-guide .button-next",
      prevEl: ".safety-guide .button-prev",
    },
  });

  // 모바일 더보기
  const btnmenu = document.querySelector(".mobile-btn"); // 클래스명 수정
  const mobilemenu = document.querySelector(".mobile-menu");
  const btnClose = document.querySelector(".mobile-btn-close");

  btnmenu.addEventListener("click", () => {
    mobilemenu.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    mobilemenu.classList.remove("active");
  });

  const $window = $(window);
  const $header = $("header");
  const $menu = $(".language");
  const $submenu = $(".language-list");
  const duration = 300;

  // 헤더에 마우스 오버시 언어 메뉴 표시------------------------------------------------------------
  $menu.on("mouseenter", function () {
    $(this).addClass("on");
    $header.addClass("active");
    $submenu.stop().slideDown(duration);
  });

  $menu.on("mouseleave", function () {
    $(this).removeClass("on");
    $header.removeClass("active");
    $submenu.stop().slideUp(duration);
  });

  $window.on("wheel", function (e) {
    e.originalEvent.wheelDelta > 0
      ? $header.removeClass("hide")
      : $header.addClass("hide");
  });
  // 헤더에 마우스 오버시 언어 메뉴 표시----------------------------------------------------------------
});

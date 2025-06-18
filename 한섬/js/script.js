$(function () {
  const $window = $(window);
  const $header = $("header");
  const $visual = $(".visual, .main-visual");
  const $topBtn = $(".top-btn");
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

  // 헤더, 탑버튼이 비주얼을 벗어 나갈때----------------------------------------------------------
  $window.on("scroll", function () {
    const visualBottom = $visual.offset().top + $visual.outerHeight() - 200;
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
  const btnmenu = document.querySelector(".more-btn");
  const mobilemenu = document.querySelector(".mobile-menu");
  const btnClose = document.querySelector(".mobile-btn-close");

  btnmenu.addEventListener("click", () => {
    mobilemenu.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    mobilemenu.classList.remove("active");
  });
  // 모바일 더보기 end
});

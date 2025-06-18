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

  // safety-guide------------------------------------------------------------
  const safetyContainer = document.querySelector(".safety");

  if (safetyContainer) {
    // safety 클래스를 가진 요소가 존재하는지 확인
    const SafetyGuide = new Swiper(".safety", {
      speed: 500,
      loop: true,
      slidesPerGroup: 1,
      slidesPerView: 1,

      navigation: {
        nextEl: ".safety-guide .button-next",
        prevEl: ".safety-guide .button-prev",
      },
    });
  }

  // question------------------------------------------------------------
  const $question = $(".question-list > li");
  const $answer = $(".answer-wrap");
  const $questionList = $(".question-list");

  // 초기 상태 설정
  $answer.hide();

  // 질문을 클릭했을 때
  $question.on("click", function (e) {
    e.stopPropagation(); // 이벤트 버블링 방지
    // 선택한 항목을 제외한 다른 항목들의 on 클래스 제거 및 답변 숨기기
    $(this).siblings().removeClass("on").find($answer).stop().slideUp(duration);

    // 선택한 항목의 on 클래스 토글 및 답변 토글
    $(this).toggleClass("on");
    $(this).find($answer).stop().slideToggle(duration);
  });

  // 문서 전체에 클릭 이벤트 추가
  $(document).on("click", function (e) {
    // 클릭된 요소가 질문 리스트 내부가 아닐 경우
    if (!$(e.target).closest($questionList).length) {
      $question.removeClass("on");
      $answer.stop().slideUp(duration);
    }
  });
  // question end------------------------------------------------------------

  // 고정 스크롤
  gsap.registerPlugin(ScrollTrigger);

  const accidentItems = gsap.utils.toArray(".accident-list  li");

  accidentItems.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        // markers: true,
        start: "top 50%",
        end: "top 50%",

        toggleActions: "play none reverse none",
      },

      y: 100,
      autoAlpha: 0.5,
      filter: "grayscale(1)",
      duration: 1,
      ease: "power4.out",
    });
  });
});

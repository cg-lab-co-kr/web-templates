/* 공통!!!---------------------------------------------- */

// GNB
const $header = $("header");
const $menu = $(".gnb > li");
const $submenu = $(".submenu");
const duration = 300;

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

//모바일 버전의 GNB!!
// 모바일 메뉴 기능
const $btnMenu = $(".btn-menu");
const $btnClose = $(".btn-close");
const $mobileMenu = $(".mobile-menu");
const $mobileGnb = $(".mobile-gnb > li > a");

$btnMenu.on("click", function () {
  $mobileMenu.addClass("on");
  $("body").css("overflow", "hidden"); // 스크롤 방지
});

$btnClose.on("click", function () {
  $mobileMenu.removeClass("on");
  $("body").css("overflow", "auto"); // 스크롤 복구
});

// 모바일 서브메뉴 토글
$mobileGnb.on("click", function (e) {
  e.preventDefault();
  $(this).next(".mobile-submenu").slideToggle(300);
  $(this).parent().siblings().find(".mobile-submenu").slideUp(300);
});

// 모바일 메뉴 외부 영역 클릭시 닫기
$(document).on("click", function (e) {
  if (!$(e.target).closest(".mobile-menu, .btn-menu").length) {
    $mobileMenu.removeClass("on");
    $("body").css("overflow", "auto");
  }
});

// foot family 기능
if ($(".btn-family").length && $(".family-list").length) {
  const family = $(".btn-family");
  const familyList = $(".family-list");
  const duration = 300;

  family.on("click", function () {
    familyList.toggleClass("on");
    familyList.slideToggle(duration);
  });
}

// 비주얼 이미지 나타나기~
gsap.registerPlugin(ScrollTrigger);

const mainPic = $(".main-pic");
const mainTitle = $(".main-title");
const mainTl = gsap.timeline({
  defaults: { duration: 1, ease: "power4.inOut" },
});

mainTl.from(mainPic, { scale: 0.3 });
mainTl.from(mainTitle, { y: 200, autoAlpha: 0 }, "-=0.3");

// 1. visual 영역 애니메이션
const visualPic = $(".visual-pic").get(0);

const visualTl = gsap.timeline({
  defaults: { duration: 1, ease: "power4.inOut" },
});
visualTl.from(visualPic, { scale: 3, filter: "blur(30px)", duration: 2 });

visualTl.from(".bread", { y: 50, autoAlpha: 0 }, "-=0.9");
visualTl.from(".visual-title h2", { y: 100, autoAlpha: 0 }, "-=0.6");
visualTl.from(".visual-title p", { y: 100, autoAlpha: 0 }, "-=0.6");

/* MAIN!!!---------------------------------------------- */

// cursor 기능(MAIN)
function handleMouseMove(e) {
  const cursor = document.querySelector(".cursor");
  const menuConSliderWrap = document.querySelector(".menu-con-slider-wrap");

  if (cursor && menuConSliderWrap) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    const menuRect = menuConSliderWrap.getBoundingClientRect();

    // menu-con-slider-wrap 또는 allergie-slider-wrap 영역에 마우스가 있는지 확인
    if (
      mouseX >= menuRect.left &&
      mouseX <= menuRect.right &&
      mouseY >= menuRect.top &&
      mouseY <= menuRect.bottom
    ) {
      cursor.style.opacity = "1";
    } else {
      cursor.style.opacity = "0";
    }
  }
}

window.addEventListener("mousemove", handleMouseMove);

// menu swiper(MAIN)
if ($(".menu-con-slider").length) {
  const $menuConSlider = new Swiper(".menu-con-slider", {
    loop: true,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000,
    },
  });

  const $menuTxtSlider = new Swiper(".menu-txt-slider", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
    thumbs: {
      swiper: $menuConSlider,
    },
  });
}

/* MENU!!!---------------------------------------------- */

// menu-tab(MENU)
const $menuTabMenu = $(".menu-tab > li");
const $menuTabCon = $(".menu-con");

menuTabAction(0);

$menuTabMenu.on("click", function (e) {
  e.preventDefault();

  const menuTabIdx = $(this).index();
  console.log(menuTabIdx);

  menuTabAction(menuTabIdx);
});

// 공통의 동작을 함수로 정의
function menuTabAction(index) {
  // 탭메뉴 활성화
  $menuTabMenu.removeClass("on");
  $menuTabMenu.eq(index).addClass("on");

  // 인덱스에 해당하는 $tabCon 보이기
  $menuTabCon.hide();
  $menuTabCon.eq(index).show();
}

// allergie swiper(MENU)
if ($(".allergie-slider").length) {
  const allergieSwiper = new Swiper(".allergie-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".allergie-slider-wrap .swiper-pagination",
      type: "fraction",
    },

    breakpoints: {
      1300: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
      830: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}

if ($(".menu-list li")) {
  const $menuList = $(".menu-list");
  $menuList.on("click", function () {
    $(this).toggleClass("on", 400);
  });
}

const $menuItem = $(".menu-list li");
const $menuList = $(".menu-list");

$menuItem.on("click", function () {
  $(menuList).toggleClass("on");

  $(menuList).siblings().find($menuItem).stop().slideUp(duration);

  // $(this).find($answer).slideDown(duration);
  // 선택한 놈의 자손중 답변을 찾아서 슬라이드 토글
  $(menuList).find($menuItem).stop().slideToggle(duration);
});

/* BRAND!!!---------------------------------------------- */

// online swiper(MENU)
function initOnlineSlider() {
  if ($(".online-slider").length && typeof Swiper !== "undefined") {
    const onlineSlider = new Swiper(".online-slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".online-slider-wrap .swiper-pagination",
        type: "fraction",
      },
      breakpoints: {
        1440: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }
}

// DOM이 준비되면 실행
$(document).ready(function () {
  // Swiper가 로드되었는지 확인
  if (typeof Swiper !== "undefined") {
    initOnlineSlider();
  } else {
    console.warn(
      "Swiper is not loaded. Online slider will not be initialized."
    );
  }

  // app-con 관련 스타일 초기화
  $(".app-con").css("display", "flex");
});

/* REWARDS!!!---------------------------------------------- */

const $snsTabMenu = $(".sns-tab > li");
const $snsTabCon = $(".sns .sns-list");

snsTabAction(0);

$snsTabMenu.on("click", function (e) {
  e.preventDefault();

  const snsTabIdx = $(this).index();
  console.log(snsTabIdx);

  snsTabAction(snsTabIdx);
});

// 공통의 동작을 함수로 정의
function snsTabAction(index) {
  // 탭메뉴 활성화
  $snsTabMenu.removeClass("on");
  $snsTabMenu.eq(index).addClass("on");

  // 인덱스에 해당하는 $tabCon 보이기
  $snsTabCon.hide();
  $snsTabCon.eq(index).show();
}

const $appTabMenu = $(".app-tab > li");
const $appTabCon = $(".app-con");

let currentAppIndex = 1; // 현재 인덱스를 추적하는 변수
appTabAction(currentAppIndex);

$appTabMenu.on("click", function (e) {
  e.preventDefault();

  const appTabIdx = $(this).index();
  console.log(appTabIdx);

  appTabAction(appTabIdx);
});

// btn-next 클릭 시 인덱스 증가 및 appTabAction 호출
$(".btn-next").on("click", function () {
  currentAppIndex = (currentAppIndex + 1) % $appTabMenu.length; // 인덱스를 증가시키고, 마지막 인덱스에서 다시 0으로 돌아감
  appTabAction(currentAppIndex);
});

function appTabAction(index) {
  $appTabMenu.removeClass("on");
  $appTabMenu.eq(index).addClass("on");

  $appTabCon.hide();
  $appTabCon.eq(index).show();
}

const $rewardTabMenu = $(".reward-tab > li");
const $rewardTabCon = $(".reward-list");

rewardTabAction(0);

$rewardTabMenu.on("click", function (e) {
  e.preventDefault();

  const rewardTabIdx = $(this).index();
  console.log(rewardTabIdx);

  rewardTabAction(rewardTabIdx);
});

function rewardTabAction(index) {
  $rewardTabMenu.find("a").removeClass("on");
  $rewardTabMenu.eq(index).find("a").addClass("on");

  $rewardTabCon.hide();
  $rewardTabCon.eq(index).show();
}

// GIFT CARD 유의사항 안내(토글)

const $question = $(".info-wrap > ul > li");
const $answer = $(".answer-wrap");

$question.on("click", function () {
  // 🚩 $(this)로 구별, siblings()

  // 선택한 놈을 기준으로, 다른 놈들은 on클래스 삭제
  $(this).siblings().removeClass("on");

  // $(this).addClass("on");
  // 선택한 놈을 기준으로 on클래스를 토글
  $(this).toggleClass("on");

  // 선택한 놈의 형제, 하위에 있는 답변은 올리고
  // stop()  <-- 여러개 예약되어 있어도 한 번만 작동
  $(this).siblings().find($answer).stop().slideUp(duration);

  // $(this).find($answer).slideDown(duration);
  // 선택한 놈의 자손중 답변을 찾아서 슬라이드 토글
  $(this).find($answer).stop().slideToggle(duration);
});

/* MAP!!!---------------------------------------------- */

const $mapSearch = $(".map-search");
const $btnFold = $(".btn-fold");

// 페이지 로드 시 초기 상태 설정
$(document).ready(function () {
  if (window.innerWidth <= 1024) {
    $mapSearch.addClass("on");
  }
});

// 리사이즈 이벤트 처리
$(window).on("resize", function () {
  if (window.innerWidth <= 1024) {
    $mapSearch.addClass("on");
  } else {
    $mapSearch.removeClass("on");
  }
});

$btnFold.on("click", function () {
  $mapSearch.toggleClass("on");
});

// TOP 버튼
AOS.init();

const btnTop = document.querySelector(".btn-top");
const html = document.documentElement;
const htmlPos = html.scrollHeight / 2;

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop >= htmlPos) {
    btnTop.classList.add("active");
  } else {
    btnTop.classList.remove("active");
  }
});

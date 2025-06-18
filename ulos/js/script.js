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
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
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

if ($(".news-swiper").length) {
  const $eventSwiper = new Swiper(".news-swiper", {
    loop: true,
    slidesPerView: "1.1",
    spaceBetween: 20,
    autoplay: {
      delay: 1000,
    },

    breakpoints: {
      1300: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
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

/* BRAND!!!---------------------------------------------- */
if ($(".allergie-slider").length) {
  const allergieSwiper = new Swiper(".allergie-slider", {
    slidesPerView: 1,
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
      1550: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      425: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
}

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

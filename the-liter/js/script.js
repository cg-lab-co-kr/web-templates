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
  $("body").css("overflow", "hidden");
});

$btnClose.on("click", function () {
  $mobileMenu.removeClass("on");
  $("body").css("overflow", "auto");
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

// 비주얼 이미지 나타나기
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
const btnTalk = document.querySelector(".btn-talk");
const html = document.documentElement;
const htmlPos = html.scrollHeight / 2;

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop >= htmlPos) {
    btnTop.classList.add("active");
    btnTalk.classList.add("active");
  } else {
    btnTop.classList.remove("active");
    btnTalk.classList.remove("active");
  }
});

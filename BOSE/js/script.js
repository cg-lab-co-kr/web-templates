$(function () {
  const duration = 300;

  // 모바일 더보기
  const btnmenu = document.querySelector(".mobile-btn");
  const mobilemenu = document.querySelector(".mobile-menu");
  const btnClose = document.querySelector(".mobile-btn-close");

  btnmenu.addEventListener("click", () => {
    mobilemenu.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    mobilemenu.classList.remove("active");
  });
  // 모바일 더보기 end

  // 탭 메뉴
  const $tabmenu = $(".lend-tabmenu > button");
  const $tabCon = $(".lend-tabcon-item");

  tabAction(0);

  // 탭메뉴를 클릭 했을때
  $tabmenu.on("click", function (e) {
    // a의 기본 동작막기
    e.preventDefault();

    // 선택한 탭메뉴의 인덱스 구하기
    const tabIdx = $(this).index();
    console.log(tabIdx);

    tabAction(tabIdx);
  });

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    // 탭메뉴 활성화
    $tabmenu.removeClass("on");
    $tabmenu.eq(index).addClass("on");

    // 인덱스에 해당하는 $tabCon 보이기
    $tabCon.hide();
    $tabCon.eq(index).show();
  }
  // 탭 메뉴 끝

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

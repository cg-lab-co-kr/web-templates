$(function () {
  const duration = 300;

  // 모바일 더보기
  const btnmenu = document.querySelector(".mobile-more-btn");
  const mobilemenu = document.querySelector(".mobile-menu");
  const btnClose = document.querySelector(".mobile-btn-close");

  btnmenu.addEventListener("click", () => {
    mobilemenu.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    mobilemenu.classList.remove("active");
  });
  // 모바일 더보기 end

  // 서브탭
  const $tabmenu2 = $(".all-menu-btn > li");
  const $tabCon2 = $(".all-tab-item");

  tab2Action(0);

  // 탭메뉴를 클릭 했을때
  $tabmenu2.on("click", function (e) {
    // a의 기본 동작막기
    e.preventDefault();

    // 선택한 탭메뉴의 인덱스 구하기
    const tabIdx = $(this).index();
    console.log(tabIdx);

    tab2Action(tabIdx);
  });

  // 공통의 동작을 함수로 정의
  function tab2Action(index) {
    // 탭메뉴 활성화
    $tabmenu2.removeClass("on");
    $tabmenu2.eq(index).addClass("on");

    // 인덱스에 해당하는 $tabCon 보이기
    $tabCon2.hide();
    $tabCon2.eq(index).show();
  }

  // 메뉴 리스트 버튼
  const $btn = $(".menu-btn > li > button");
  const $btn2 = $(".all-menu-btn > li > button");

  btnAction(0);
  btn2Action(0);

  $btn.on("click", function () {
    $(this).toggleClass("on");
    $(this).closest("li").siblings().find("button").removeClass("on");
  });

  function btnAction(index) {
    $btn.removeClass("on");
    $btn.eq(index).addClass("on");
  }

  // 서브
  $btn2.on("click", function () {
    $(this).toggleClass("on");
    $(this).closest("li").siblings().find("button").removeClass("on");
  });

  function btn2Action(index) {
    $btn2.removeClass("on");
    $btn2.eq(index).addClass("on");
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
});

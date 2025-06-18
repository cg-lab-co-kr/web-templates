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

  // 맵
  const $mapBtn = $(".map-btn > a");
  const $mapCon = $(".map-con");
  const $mapIframe = $(".map-iframe"); // 모든 map-iframe 요소 선택

  // map 버튼 클릭 시 동작
  $mapBtn.on("click", function (e) {
    // 기본 동작 막기
    e.preventDefault();

    // 선택한 버튼의 인덱스 구하기
    const tabIdx = $(this).index();

    // 모든 map-con 숨기기
    $mapCon.removeClass("active").hide();
    $mapIframe.hide(); // 모든 map-iframe 요소 숨기기

    // 모든 mapBtn에서 .on 클래스 제거
    $mapBtn.removeClass("on");

    // 클릭한 mapBtn에 .on 클래스 추가
    $(this).addClass("on");

    // 인덱스에 해당하는 map-con 보이기
    $mapCon.eq(tabIdx).addClass("active").show();
    $mapIframe.eq(tabIdx).show(); // 해당하는 map-iframe 보이기
  });

  // 기본적으로 첫 번째 map-con 보이기
  $mapCon.hide(); // 모든 map-con 숨김
  $mapCon.eq(0).addClass("active").show(); // 첫 번째 map-con 보이기
  $mapIframe.hide(); // 모든 map-iframe 요소 숨김
  $mapIframe.eq(0).show(); // 첫 번째 map-iframe 보이기
  $mapBtn.eq(0).addClass("on"); // 첫 번째 버튼에 .on 클래스 추가

  // 팝업 메세지
  const submitButton = document.getElementById("submitButton");
  const searchInput = document.getElementById("searchInput");

  if (submitButton && searchInput) {
    submitButton.addEventListener("click", function () {
      var inputValue = searchInput.value;
      if (inputValue) {
        alert("여기가 어딘데요..? "); // 팝업 메시지 표시
      } else {
        alert("내용을 입력하세요."); // 내용이 없을 경우 메시지
      }
    });

    // Enter 키를 눌렀을 때도 실행
    document.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        submitButton.click(); // 버튼 클릭 이벤트 호출
      }
    });
  }
  // 맵 end
});

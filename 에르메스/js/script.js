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

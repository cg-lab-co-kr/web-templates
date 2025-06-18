/* INQUIRY!!!---------------------------------------------- */
const $question = $(".info-wrap > ul > li");
const $answer = $(".answer-wrap");
const inquiryDuration = 300; // duration 변수명을 변경

$question.on("click", function () {
  $(this).siblings().removeClass("on");
  $(this).toggleClass("on");

  $(this).siblings().find($answer).stop().slideUp(inquiryDuration);
  $(this).find($answer).stop().slideToggle(inquiryDuration);
});

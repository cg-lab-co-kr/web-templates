/* BRAND!!!---------------------------------------------- */

// 브랜드 스토리!!!---

const storyTl = gsap.timeline({
  defaults: { autoAlpha: 0, duration: 3, ease: "none" },

  scrollTrigger: {
    trigger: ".story",
    // markers: true,
    start: "54% 60%",
    end: "bottom+=1000 0%" /* 바닥에서 1000px 이동한 지점이 끝나는 지점 */,
    scrub: 1, // 스크롤바를 따라잡는데 걸리는 시간 1초

    pin: true, // 트리거(영역)를 고정, 애니메이션 끝날 때까지 뷰포트 고정시키는 그거!!!!!
  },
});

storyTl.from(".story .sec-title", { x: 200 });
storyTl.from(".p1", { x: 200 });
storyTl.from(".p2", { x: 200 });
storyTl.from(".p3", { x: 200 });
storyTl.from(".p4", { x: 200 });
storyTl.from(".p5", { x: 200 });
storyTl.from(".p6", { x: 200 });

storyTl.to(".fake", { x: 1, duration: 10 });

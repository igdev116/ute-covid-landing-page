$(document).ready(function () {
  bannerAnimate();
  aboutAnimate();
  caseAnimate();
  symptomAnimate();
  cardsAnimate();
  doctorsAnimate();
  firstThingAnimate();
  secondThingAnimate();
  newsAnimate();
  endingAnimate();
  handleScrollTo();
  handleStickyHeader();
});

const bannerAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "top center",
    },
  });

  tl.from(".banner__title", { x: -80, opacity: 0, duration: 1.1 })
    .from(".banner__desc", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
    .from(".banner__btns", { y: 20, opacity: 0, duration: 1 }, "-=0.4")
    .from(".banner__right", { x: 80, opacity: 0, duration: 1.4 }, "-=1.5")
    .from(
      ".banner__virus-wrapper",
      { y: 80, opacity: 0, duration: 1.2 },
      "-=0.5"
    );
};

const aboutAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "-20% center",
    },
  });

  tl.from(".about__left", {
    x: -80,
    opacity: 0,
    duration: 1.1,
  })
    .from(
      ".about__right .block__caption",
      {
        x: -40,
        opacity: 0,
        duration: 1,
      },
      "-=0.5"
    )
    .from(
      ".about__right .block__heading",
      {
        x: 50,
        opacity: 0,
        duration: 1.3,
      },
      "-=0.3"
    )
    .from(
      ".about__right .block__desc",
      {
        y: 30,
        opacity: 0,
        duration: 1,
      },
      "-=0.5"
    )
    .from(
      ".about__btn",
      {
        x: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.2"
    );
};

const caseAnimate = () => {
  gsap.registerEffect({
    name: "counter",
    extendTimeline: true,
    defaults: {
      duration: 2.5,
      ease: "power1",
      increment: 1,
    },
    effect: (targets, config) => {
      let tl = gsap.timeline();
      let num = targets[0].innerText.replace(/\,/g, "");
      targets[0].innerText = num;

      tl.to(
        targets,
        {
          duration: config.duration,
          innerText: config.end,
          modifiers: {
            innerText: function (innerText) {
              return gsap.utils
                .snap(config.increment, innerText)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
          },
          ease: config.ease,
        },
        0
      );

      return tl;
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".case",
      start: "top bottom",
    },
  });

  tl.from(".case .block__caption", { x: -10, opacity: 0, duration: 1 })
    .from(".case .block__heading", { x: 10, opacity: 0, duration: 1 }, "-=0.5")
    .from(".case__qnt", { opacity: 0 }, "-=2")
    .counter(".case__item:nth-child(1) .case__qnt", { end: 1001255 }, "-=2.5")
    .counter(".case__item:nth-child(2) .case__qnt", { end: 15759429 }, "-=2.5")
    .counter(".case__item:nth-child(3) .case__qnt", { end: 4273880 }, "-=2.5")
    .counter(
      ".case__item:nth-child(4) .case__qnt",
      { end: 181142436 },
      "-=2.5"
    );
};

const symptomAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".symptom",
      start: "-20% center",
    },
  });

  tl.from(".symptom .block__caption", { x: -20, opacity: 0, duration: 1 })
    .from(
      ".symptom .block__heading",
      { x: 20, opacity: 0, duration: 1 },
      "-=0.5"
    )
    .from(
      ".symptom .block__desc",
      { y: 30, opacity: 0, duration: 0.8 },
      "-=0.3"
    )
    .from(
      ".symptom__item:nth-child(1)",
      {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3",
      },
      "-=0.4"
    )
    .from(
      ".symptom__item:nth-child(2)",
      {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3",
      },
      "-=0.4"
    )
    .from(
      ".symptom__item:nth-child(3)",
      {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3",
      },
      "-=0.4"
    )
    .from(
      ".symptom__item:nth-child(4)",
      {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3",
      },
      "-=0.4"
    )
    .from(".symptom__thumb", { x: 50, opacity: 0, duration: 1 }, "-=2.5")
    .from(
      ".symptom__virus-wrapper",
      {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3",
      },
      "-=1.5"
    );
};

const cardsAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards",
      start: "-20% center",
    },
  });

  tl.from(".cards .block__caption", { x: -20, opacity: 0, duration: 1 })
    .from(
      ".cards .block__heading",
      { x: 20, opacity: 0, duration: 0.8 },
      "-=0.2"
    )
    .from(".cards .col-12", { y: 20, opacity: 0, duration: 0.8 }, "-=1.2");
};

const doctorsAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".doctors",
      start: "-20% center",
    },
  });

  tl.from(".doctors .block__caption", { x: -20, opacity: 0, duration: 1 })
    .from(
      ".doctors .block__heading",
      { x: 20, opacity: 0, duration: 0.8 },
      "-=0.2"
    )
    .from(".doctor", { y: 20, opacity: 0, duration: 0.8 }, "-=1.2");
};

const firstThingAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".things",
      start: "-20% center",
    },
  });

  tl.from(".things > .block > .block__caption", {
    x: 20,
    opacity: 0,
    duration: 1,
  })
    .from(
      ".things > .block > .block__heading",
      { x: -20, opacity: 0, duration: 0.7 },
      "-=0.2"
    )
    .from(
      ".thing--first .thing__left .badge",
      { x: -20, opacity: 0, duration: 0.6 },
      "-=0.4"
    )
    .from(
      ".thing--first .thing__left .block__heading",
      { y: -10, opacity: 0, duration: 0.7 },
      "-=0.3"
    )
    .from(
      ".thing--first .thing__left .block__desc",
      { x: 20, opacity: 0, duration: 0.7 },
      "-=0.2"
    )
    .from(
      ".thing--first .thing__left .thing__btn",
      { y: -10, opacity: 0, duration: 0.7 },
      "-=0.2"
    )
    .from(
      ".thing--first .thing__right > img",
      { x: 100, opacity: 0, duration: 1 },
      "-=1.2"
    );
};

const secondThingAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".thing--second",
      start: "-10% center",
    },
  });

  tl.from(".thing--second .thing__right .badge", {
    x: 20,
    opacity: 0,
    duration: 0.6,
  })
    .from(
      ".thing--second .thing__right .block__heading",
      { y: 10, opacity: 0, duration: 0.7 },
      "-=0.3"
    )
    .from(
      ".thing--second .thing__right .block__desc",
      { x: -20, opacity: 0, duration: 0.7 },
      "-=0.2"
    )
    .from(
      ".thing--second .thing__right .thing__btn",
      { y: 10, opacity: 0, duration: 0.7 },
      "-=0.2"
    )
    .from(
      ".thing--second .thing__left > img",
      { x: -100, opacity: 0, duration: 1 },
      "-=1.2"
    );
};

const newsAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".news",
      start: "-20% center",
    },
  });

  tl.from(".news .block__caption", {
    x: 20,
    opacity: 0,
    duration: 0.6,
  })
    .from(".news .block__heading", {
      x: -20,
      opacity: 0,
      duration: 0.6,
    })
    .from(".news .col-12", {
      y: 20,
      opacity: 0,
      duration: 0.8,
    });
};

const endingAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ending",
      start: "-20% center",
    },
  });

  tl.from(".ending .block__caption", {
    x: 20,
    opacity: 0,
    duration: 0.8,
  })
    .from(".ending .block__heading", {
      x: -20,
      opacity: 0,
      duration: 0.8,
    })
    .from(".ending .block__desc", {
      y: 20,
      opacity: 0,
      duration: 0.5,
    })
    .from(".ending__img", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    });
};

const handleScrollTo = () => {
  $(".header__nav-home").click(() => {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  $(".header__nav-about").click(() => {
    $("html, body").animate(
      { scrollTop: $(".about").offset().top - 150 },
      1000
    );
  });
  $(".header__nav-prevent").click(() => {
    $("html, body").animate(
      { scrollTop: $(".things").offset().top - 150 },
      1000
    );
  });
  $(".header__nav-contact").click(() => {
    $("html, body").animate(
      { scrollTop: $(".doctors").offset().top - 150 },
      1000
    );
  });
};

const handleStickyHeader = () => {
  const header = $(".header");
  let isHide = true;

  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    if (scrollTop === 0) isHide = true;

    if (scrollTop > 400) {
      header.removeClass("hide");
      header.addClass("show");
    } else if (scrollTop > header.innerHeight() && isHide) {
      header.removeClass("show");
      header.addClass("hide");
      isHide = false;
    }
  });
};

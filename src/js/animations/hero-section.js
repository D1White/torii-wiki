import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero section animation

const heroSection = document.querySelector("#hero-animation");
const heroTitle = document.querySelector("#hero-title");
const heroFrontLayer = document.querySelector("#hero-front-layer");
const heroBgLayer = document.querySelector("#hero-bg-layer");
const heroVectorLayer = document.querySelector("#hero-vector-layer");
const heroText = document.querySelector("#hero-text");

// Title text animation
if (heroSection && heroTitle) {
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "top top",
      end: "40% 40%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    },
  });

  heroTl
    .fromTo(
      heroTitle,
      { top: "15%" },
      { top: "60%", duration: 1, ease: Power1.easeInOut }
    )
    .to(heroTitle, { opacity: 0, duration: 0.1 });
}

// Grayscale animation
if (heroSection && heroFrontLayer) {
  const grayscaleTl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "top top",
      end: "40% 40%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    },
  });

  grayscaleTl.to(heroFrontLayer, {
    filter: "grayscale(1)",
    duration: 1,
    ease: Power1.easeInOut,
  });
}

// Vector layer animation
if (heroSection && heroFrontLayer && heroBgLayer && heroVectorLayer) {
  const blurTl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "40% 40%",
      end: "60% 60%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    },
  });

  blurTl
    .to([heroFrontLayer, heroBgLayer], {
      opacity: 0,
      duration: 1,
    })
    .to(
      heroVectorLayer,
      {
        opacity: 1,
        duration: 1,
        ease: Power1.easeInOut,
      },
      "-=1"
    );
  // blurTl
  //   .to(heroBgLayer, {
  //     filter: "grayscale(1)",
  //     duration: 0.1,
  //   })
  //   .to(heroFrontLayer, {
  //     opacity: 0,
  //     duration: 1,
  //   })
  //   .to(heroBgLayer, {
  //     filter: "grayscale(1) blur(10px)",
  //     duration: 1,
  //     ease: Power1.easeInOut,
  //   });
}

// Text animation
if (heroSection && heroText) {
  const textTl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "60% 60%",
      end: "85% 85%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    },
  });

  textTl.to(heroText, {
    top: "50%",
    transform: "translate(-50%, -50%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
}

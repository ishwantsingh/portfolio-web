import { TimelineMax, Power1 } from "gsap";

export const AboutTimeline = () => {
  const Timeline1 = new TimelineMax();
  Timeline1.from("#content-1", 1, {
    autoAlpha: 0,
    delay: 0,
    ease: Power1.easeIn,
  })
    .staggerFrom(
      "#texts",
      0.475,
      { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 0.5 },
      0.155
    )
    .reverse();
};
export const ProjectsTimeline = () => {
  const Timeline2 = new TimelineMax();
  Timeline2.from("#content-2", 1.5, {
    autoAlpha: 0,
    delay: 0,
    ease: Power1.easeIn,
  }).reverse();
};
export const SkillsTimeline = () => {
  const Timeline3 = new TimelineMax();
  Timeline3.from("#content-3", 1.5, {
    autoAlpha: 0,
    delay: 0,
    ease: Power1.easeIn,
  }).reverse();
};
export const HobbiesTimeline = () => {
  const Timeline4 = new TimelineMax();
  Timeline4.from("#content-4", 1.5, {
    autoAlpha: 0,
    delay: 0,
    ease: Power1.easeIn,
  }).reverse();
};

// export const ChangePage = (e, destination) => {
//   e.preventDefault();
//   Timeline.reverse();
//   const timelineDuration = Timeline.duration() * 1000;
//   setTimeout(() => {
//     history.push(destination);
//   }, timelineDuration);
// };

// const getDefaultTimeline = (node, delay) => {
//   const timeline = new Timeline({ paused: true });
//   const content = node.querySelector(".content");
//   // const contentInner = node.querySelector('.content--inner');

//   timeline
//     .from(node, 0.3, {
//       display: "none",
//       autoAlpha: 0,
//       delay,
//       ease: Power1.easeIn
//     })
//     .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut });
//   // .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

//   return timeline;
// };

// export const play = (node, appears) => {
//   const delay = appears ? 0 : 0.5;
//   let timeline;

//   timeline = getDefaultTimeline(node, delay);

//   window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
// };

// export const exit = node => {
//   const timeline = new Timeline({ paused: true });

//   timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
//   timeline.play();
// };

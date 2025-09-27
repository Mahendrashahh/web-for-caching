// ================== PAGE 1 ANIMATION ==================
var clutter = "";
document.querySelector(".page1>.about-para").textContent.split("").forEach((dets) => {
  clutter += `<span>${dets}</span>`;
});
document.querySelector(".page1>.about-para").innerHTML = clutter;

gsap.to(".page1>.about-para>span", {
  scrollTrigger: {
    trigger: `.page1>.about-para>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `body`,//aise hi daala hai loco motive kai sath use hoga //
    scrub: 0.001,
  },
  stagger: 0.001,
  color: `black`,
})
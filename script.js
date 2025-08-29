function navAnimation() {
  let nav = document.querySelector("nav");
  let navPart2 = document.querySelector(".nav-part2");
  navPart2.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "23vh",
    });
    tl.to("nav .nav-part2 h5", {
      display: "block",
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.7,
      },
    });
  });

  navPart2.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: "0vh",
      // duration: 0.2,
    });
  });
}

navAnimation();

function page2Animation() {
  let rightElems = document.querySelectorAll(".right-elem");
  rightElems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      gsap.to(e.childNodes[3], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      });
    });

    e.addEventListener("mouseleave", () => {
      gsap.to(e.childNodes[3], {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });
    });
    e.addEventListener("mousemove", (dets) => {
      gsap.to(e.childNodes[3], {
        x: dets.x - e.getBoundingClientRect().x - 40,
        y: dets.y - e.getBoundingClientRect().y - 150,
      });
    });
  });
}
page2Animation();

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

function page3Animation(){
  let page3Center = document.querySelector(".page3-center");
let page3Video = document.querySelector(".page-3 video");
let page3 = document.querySelector(".page-3");

page3Center.addEventListener("click", () => {
  page3Video.play();
  gsap.to(page3Video, {
    transform: "scaleX(1) scaleY(1)",
    display: "block",
    borderRadius: 0,
    duration: 2.5,
    ease: "power4.out",
    opacity: 1,
  });
});

page3Video.addEventListener("click", ()=>{
  page3Video.pause();
  gsap.to(page3Video, {
    transform: "scaleX(0.7) scaleY(0.2)",
    display: "none",
    borderRadius: 30,
    duration: 1,
    ease: "power4.out",
    opacity: 0,
  });
})
}


// navAnimation();
// page2Animation();
// page3Animation();





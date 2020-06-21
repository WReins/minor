gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollToPlugin);

var openModalButtons = document.querySelectorAll('[data-modal-target]');
var closeModalButtons = document.querySelectorAll('[data-close-button]');
var overlay = document.getElementById('overlay');

gsap.utils.toArray("nav a").forEach(function(a) {
  a.addEventListener("click", function(e) {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: e.target.getAttribute("href")});
  });
});


/*========================================
FIRST PANEL - EARTH
========================================*/

gsap.to(".firstheader", {
  scrollTrigger: {
    trigger: ".first",
    start: "bottom bottom",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

gsap.to(".firstinfo", {
  scrollTrigger: {
    trigger: ".first",
    start: "bottom bottom",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".first",
    toggleActions: "play restart restart restart",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  }
});

tl1.to("#earth", {y: 700, scale: 3.2, duration: 2})
.to("#earth", {opacity: 0})
.to(".ring1", {fill: "#1C1C33", duration: 2})
.to(".ring1line", {stroke: "#1C1C33", duration: 2});

gsap.to("#scrollindicator", {
  scrollTrigger: {
    trigger: "#scrollindicator",
    start: "top 60%",
  },
  duration: 1,
  opacity: 0,
});

gsap.to(".wheel", {
  duration: 1,
  drawSVG: 0,
  repeat: -1,
});

gsap.to(".cloud1", {
  duration: 14,
  scale: 0.8,
  repeat: -1,
  rotation: 10,
  y: -10,
  x: 20,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud2", {
  duration: 10,
  morphSVG:".cloudnew2",
  repeat: -1,
  rotation: -20,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud3", {
  transformOrigin: "50% 50%",
  duration: 12,
  morphSVG:".cloudnew3",
  repeat: -1,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud4", {
  transformOrigin: "50% 50%",
  duration: 10,
  rotation: 360,
  repeat: -1,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud5", {
  transformOrigin: "50% 50%",
  duration: 10,
  rotation: 300,
  x: -10,
  y: -10,
  scale: 2,
  repeat: -1,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud6", {
  transformOrigin: "50% 50%",
  duration: 16,
  y: 10,
  x: -10,
  rotation: 180,
  scale: 2,
  repeat: -1,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud7", {
  transformOrigin: "50% 50%",
  duration: 12,
  y: 10,
  rotation: 200,
  x: -5,
  scale: 2.2,
  repeat: -1,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud8", {
  transformOrigin: "50% 50%",
  duration: 16,
  x: 20,
  rotation: 40,
  morphSVG:".cloudnew8",
  repeat: -1,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud9", {
  transformOrigin: "50% 50%",
  duration: 12,
  morphSVG:".cloudnew9",
  rotation: 20,
  y: -15,
  x: -5,
  repeat: -1,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud10", {
  transformOrigin: "50% 50%",
  duration: 10,
  morphSVG:".cloudnew10",
  x: -10,
  y: -5,
  rotation: 10,
  repeat: -1,
  yoyo: true,
  ease: "none",
});

gsap.to(".cloud11", {
  transformOrigin: "50% 50%",
  duration: 12,
  rotation: 360,
  x: -10,
  y: -30,
  repeat: -1,
  yoyo: true,
  ease: "none",
});


/*========================================
SECOND PANEL - MOON
========================================*/

gsap.to(".secondheader", {
  scrollTrigger: {
    trigger: ".second",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

gsap.to(".secondinfo", {
  scrollTrigger: {
    trigger: ".second",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second",
    toggleActions: "play restart restart restart",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  }
});

tl2.from("#moon", {y: -400, scale: 0,})
.to("#moon", {y: 700, scale: 3.2, duration: 2})
.to("#moon", {opacity: 0})
.to(".ring1", {fill: "#0C345B", duration: 2})
.to(".ring1line", {stroke: "#0C345B", duration: 2})
.to(".ring2line", {stroke: "#1C1C33", duration: 2})
.to(".ring3line", {stroke: "#1C1C33", duration: 2});


/*========================================
THIRD PANEL - MARS
========================================*/

gsap.to(".thirdheader", {
  scrollTrigger: {
    trigger: ".third",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

gsap.to(".thirdinfo", {
  scrollTrigger: {
    trigger: ".third",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third",
    toggleActions: "play restart restart restart",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  }
});

tl3.from("#mars", {y: -400, scale: 0,})
.to("#mars", {y: 700, scale: 3.2, duration: 2})
.to("#mars", {opacity: 0})
.to(".ring1", {fill: "#C11477", duration: 2})
.to(".ring1line", {stroke: "#C11477", duration: 2})
.to(".ring2", {fill: "#1C1C33", duration: 2})
.to(".ring2line", {stroke: "#C11477", duration: 2})
.to(".ring3line", {stroke: "#C11477", duration: 2})
.to(".ring4line", {stroke: "#0C345B", duration: 2})
.to(".ring5line", {stroke: "#0C345B", duration: 2})
.to(".ring6line", {stroke: "#1C1C33", duration: 2});


/*========================================
FOURTH PANEL - JUPITER
========================================*/

gsap.to(".fourthheader", {
  scrollTrigger: {
    trigger: ".fourth",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

gsap.to(".fourthinfo", {
  scrollTrigger: {
    trigger: ".fourth",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth",
    toggleActions: "play restart restart restart",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  }
});

tl4.from("#jupiter", {y: -400, scale: 0,})
.to("#jupiter", {y: 700, scale: 3.2, duration: 2})
.to("#jupiter", {opacity: 0})
.from("#neptune", {y: -400, scale: 0,}, "-=1")
.to("#neptune", {x: -400, y: 700, scale: 3, duration: 3,}, "-=1")
.to("#neptune", {opacity: 0}, "-=1")
.from("#saturn", {y: -400, scale: 0,}, "-=1")
.to("#saturn", {x: 400, y: 700, scale: 3, duration: 3,}, "-=1")
.to("#saturn", {opacity: 0}, "-=1")
.to(".ring1line", {stroke: "#C48300", duration: 2})
.to(".ring2", {fill: "#1C1C33", duration: 2})
.to(".ring2line", {stroke: "#C48300", duration: 2})
.to(".ring3line", {stroke: "#C11477", duration: 2})
.to(".ring4line", {stroke: "#C11477", duration: 2})
.to(".ring5line", {stroke: "#C11477", duration: 2})
.to(".ring6line", {stroke: "#0C345B", duration: 2})
.to(".ring7line", {stroke: "#1C1C33", duration: 2})
.to(".ring8line", {stroke: "#1C1C33", duration: 2});


/*========================================
FIFTH PANEL - UNKNOWN
========================================*/

gsap.to(".fifthheader", {
  scrollTrigger: {
    trigger: ".fifth",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

gsap.to(".fifthinfo", {
  scrollTrigger: {
    trigger: ".fifth",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth",
    toggleActions: "play restart restart restart",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  }
});

tl5.from("#galaxy", {y: -400, scale: 0,})
.to("#galaxy", {y: 700, scale: 3.2, duration: 2})
.to("#galaxy", {opacity: 0})
.to(".ring1", {fill: "#C48300", duration: 2})
.to(".ring1line", {stroke: "#C48300", duration: 2})
.to(".ring2", {fill: "#1C1C33", duration: 2})
.to(".ring2line", {stroke: "#C48300", duration: 2})
.to(".ring3line", {stroke: "#C48300", duration: 2})
.to(".ring4line", {stroke: "#C11477", duration: 2})
.to(".ring5line", {stroke: "#C11477", duration: 2})
.to(".ring6line", {stroke: "#0C345B", duration: 2})
.to(".ring7line", {stroke: "#0C345B", duration: 2})
.to(".ring8line", {stroke: "#1C1C33", duration: 2});


/*========================================
SIXTH PANEL - UNKNOWN
========================================*/

gsap.to(".sixthheader", {
  scrollTrigger: {
    trigger: ".sixth",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

gsap.to(".sixthinfo", {
  scrollTrigger: {
    trigger: ".sixth",
    start: "bottom center",
    scrub: true,
  },
  duration: 1,
  opacity: 0,
});

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth",
    toggleActions: "play restart restart restart",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  }
});
tl6.to(".ring1", {fill: "#E0B500", duration: 2})
.to(".ring1line", {stroke: "#C48300", duration: 2})
.to(".ring2", {fill: "#0C345B", duration: 2})
.to(".ring2line", {stroke: "#E0B500", duration: 2})
.to(".ring3line", {stroke: "#C48300", duration: 2})
.to(".ring4line", {stroke: "#C11477", duration: 2})
.to(".ring5line", {stroke: "#C48300", duration: 2})
.to(".ring6line", {stroke: "#C11477", duration: 2})
.to(".ring7line", {stroke: "#0C345B", duration: 2})
.to(".ring8line", {stroke: "#1C1C33", duration: 2});




/*========================================
GENERAL
========================================*/

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    var modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    var modal = button.closest('#modal');
    closeModal(modal);
  })
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

function closeModal(modal) {
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

overlay.addEventListener('click', () => {
  var modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

var nebula = gsap.timeline({
  duration: 4,
});

// nebula.from(".explosion", {opacity: 0, duration: 2,})
// nebula.to(".explosion", {opacity: 0,duration: 2,});
// nebula.from(".pink", {opacity: 0, duration: 2,})
// nebula.to(".pink", {opacity: 0,duration: 2,});
// nebula.from(".nebula .yellowline", {opacity: 0,duration: 2,}, "-=4");
// nebula.to(".nebula .yellowline", {opacity: 0,duration: 2,}, "-=4");
// nebula.from(".nebula .orangeline", {opacity: 0,duration: 2,}, "-=3.8");
// nebula.to(".nebula .orangeline", {opacity: 0,duration: 2,}, "-=1.8");
// nebula.from(".nebula .pinkline", {opacity: 0,duration: 2,}, "-=3.6");
// nebula.to(".nebula .pinkline", {opacity: 0,duration: 2,}, "-=1.6");
// nebula.from(".nebula .cloudblue", {opacity: 0,duration: 2,}, "-=3.4");
// nebula.to(".nebula .cloudblue", {opacity: 0,duration: 2,}, "-=1.4");
// nebula.from(".nebula .cloudblack", {opacity: 0,duration: 2,}, "-=3.2");
// nebula.to(".nebula .cloudblack", {opacity: 0,duration: 2,}, "-=1.2");

tl4.from("#jupiter", {y: -400, scale: 0,})
.to("#jupiter", {y: 700, scale: 3.2, duration: 2})


gsap.to(".nebula",{
  scrollTrigger: {
    trigger: "body",
    toggleActions: "play restart restart restart",
    start: "top top",
    end: "+=1000%",
    scrub: true,
  },
  scale: 1.1,
  ease: "none",
});

gsap.to("#crewdragon",{
  duration: 8,
  motionPath: "#motion",
  repeat: -1,
  ease: "none",
});

gsap.to("#barrel",{
  duration: 10,
  motionPath: "#motion",
  repeat: -1,
  ease: "none",
});

gsap.to(".light", {
  transformOrigin: "50% 50%",
  duration: 0.2,
  scale: 0.2,
  scale: 1.4,
  stagger: 0.25,
  repeat: -1,
  yoyo: true});

gsap.from(".fire", {
  duration: 0.1,
  drawSVG: "30%",
  yoyo: true,
  scale: 1.3,
  ease: Power3.easeOut,
  repeat: -1,
});

gsap.from(".fire2", {
  duration: 0.3,
  drawSVG: "50%",
  yoyo: true,
  ease: Power3.easeOut,
  repeat: -1,
});

gsap.from(".fire3", {
  duration: 0.5,
  drawSVG: "10%",
  yoyo: true,
  ease: Power3.easeOut,
  repeat: -1,
});

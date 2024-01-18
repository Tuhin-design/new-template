function smoothScroll() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
smoothScroll()

function firstPageAnim() {
    const tl = gsap.timeline();
  
    tl.from(".nav-bar", {
        y: -100,
        opacity: 0,
        delay: 0.5,
        duration: .5,
        stagger: 0.3,
      });

      tl.to(".anime", {
        y: -0,
        opacity: 1,
        delay: -0.5,
        duration: .5,
        stagger: 0.3,
      });
      
      tl.from(".banner-bottom a", {
        opacity: 0,
        delay: -1,
        duration: .5,
        stagger: 0.3,
      });
}
firstPageAnim()

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
  
  }
  cursorAnimation();



function moveImg() {
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
}
moveImg();

// function loadAni(){
//     gsap.to('.elem',{
//         y:100,
//         scrollTrigger: {
//             trigger:"#main",
//             y:0,
//             scrub: true, // important!
//           }

//     });
// }
// loadAni();


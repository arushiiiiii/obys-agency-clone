function loadingAnimation() {
    var tl = gsap.timeline();
tl.from(".line h1", {
    y:100,
    stagger:0.17,
    duration:0.5,
    delay:0.1,
})
tl.from("#line1-part1, #bottom-line", {
    opacity:0,
    onStart: function() {
        var h5timer = document.querySelector("#line1-part1 h5");
var grow = 0;
var counter = setInterval(function(){
    // if(h5timer.textContent == "99") {
    //     clearInterval(counter);
    // }
    // h5timer.textContent = grow++;
    if (grow < 100) {
        h5timer.innerHTML = grow++;
    } else {
        h5timer.innerHTML = grow;
    }
},20);

    }
})
tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
})
tl.to("#loader", {
    opacity:0,
    delay: 2,
    duration:0.8,
})
tl.from("#page1", {
    y:1200,
    opacity:1,
    delay:0.2,
    ease:"power4.out",
    duration: 0.8
})
tl.to("#loader", {
    display:"none",
}, "<")
tl.from("#center1 h1, #center2 h1, #center3 h2, #center4 h1", {
    y: 100,
    stagger: 0.17,
    duration: 0.6,
}, "<0.2")
tl.from("#nav", {
    opacity: 0,
}, "<0.4")
}

function cursorAnimation(){
    Shery.makeMagnet("#nav-part2 h4");
    document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        left:dets.x,
        top:dets.y,
    });
});
}

loadingAnimation();
cursorAnimation();


//텍스트
var p = document.querySelectorAll('p');

//비디오
var vidAll = document.querySelectorAll('.thumbnail-content');

var vid1 = document.querySelector('#vid1');
var vid2 = document.querySelector('#vid2');
var vid3 = document.querySelector('#vid3');


function Play(v) {
    v.play();
}
function Pause(v) {
    v.pause();
}


//전체 p 기본 set
for (var i = 0; i < p.length; i++) {
    TweenMax.set(p[i], { autoAlpha: 0, y: 10 }); 
}
for (var i = 0; i < vidAll.length; i++) {
    TweenMax.set(vidAll[i], { autoAlpha: 1}); 
}
TweenMax.set('#vid1, #vid2, #vid3', { autoAlpha: 1}); 

TweenMax.set('#thumbnail1, #thumbnail2, #thumbnail3', { width: "100%"}); 


//타임라인
var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();



var duraReveal = 0.6;
var duraHide = 0.2;

var revealTiming_Short = "+=0.6";
var revealTiming = "+=0.6";
var revealTiming_Long = "+=1";


vid1.addEventListener("mouseover", function () {
    vid1.play();
    tl1.clear();
    //tl1.restart();
    tl1.to("#vid2, #vid3", duraHide, { autoAlpha: 0, ease: Power2.easeOut }, 0)
        .to("#thumbnail1", 0.6, { width: "130%", ease: Power2.easeOut },0)
        .to("#그1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 0.7)
        .to("#그2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming_Long)
        .to("#그3", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming_Long);
})

vid1.addEventListener("mouseleave", function () {
    vid1.load();


    tl1.clear();
    //tl.restart();
    tl1.to("#vid2, #vid3", duraHide, { autoAlpha: 1,ease: Power2.easeOut }, 0)
        .to("#thumbnail1", 0.6, { width: "100%",ease: Power2.easeOut },0)
        .to("#그1, #그2, #그3", duraHide, { autoAlpha: 0, ease: "quad" }, 0);
})
vid2.addEventListener("mouseover", function () {
    vid2.play();

    tl2.clear();
    //tl2.restart();
    tl2.to("#vid1, #vid3", duraHide, { autoAlpha: 0, ease: Power2.easeOut }, 0)
        .to("#thumbnail2", 0.6, { width: "130%", ease: Power2.easeOut },0)
        
        .to("#드1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 0.7)
        .to("#드2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming);
})

vid2.addEventListener("mouseleave", function () {
    vid2.load();

    
    tl2.clear();
    tl2.to("#vid1, #vid3", duraHide, { autoAlpha: 1, ease: Power2.easeOut }, 0)
        .to("#thumbnail2", 0.6, { width: "100%", ease: Power2.easeOut },0)
        
        .to("#드1, #드2", duraHide, { autoAlpha: 0, ease: "quad" }, 0);
})

vid3.addEventListener("mouseover", function () {
    vid3.play();

    tl3.clear();
    //tl3.restart();
    tl3.to("#vid1, #vid2", duraHide, { autoAlpha: 0, ease: Power2.easeOut })
        .to("#thumbnail3", 0.6, { width: "130%", ease: Power2.easeOut },0)
        
        .to("#차1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 0.7)
        .to("#차2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming_Long);
})

vid3.addEventListener("mouseleave", function () {
    //vid3.pause();
    //vid3.currentTime = "0"
    vid3.load();

    tl3.clear();
    tl3.to("#vid1, #vid2", duraHide, { autoAlpha: 1,ease: Power2.easeOut }, 0)
        .to("#thumbnail3", 0.6, { width: "100%",ease: Power2.easeOut },0)
        
        .to("#차1, #차2", duraHide, { autoAlpha: 0, ease: "quad" }, 0);
})

let pageContainer = document.querySelector(".page-container");
let contentsAll = document.querySelector(".main-container")
let thumbnailsAll = document.querySelector(".thumbnails-container");
var tlTr= new TimelineMax();

TweenMax.set(contentsAll, { autoAlpha: 1}); 

vidAll.forEach(vid =>
    vid.addEventListener("click", function () {
        tlTr.call(transition, [], 0)
            .call(stopTl, [],0)
            .to(contentsAll, 0.5, { autoAlpha: 0, ease: "quad" }, 0)
            .call(pageHref,[vid], 1.2);
        
    })
)


function transition() {
    pageContainer.classList.add("page-transition")
}
function pageHref(v) {
    if (v == vid1) {
        location.href = 'https://mulbul2.cafe24.com/Multiverse/pages/grimja.html';
    } else if (v == vid2) {
        location.href = 'https://mulbul2.cafe24.com/Multiverse/pages/drive.html';
    } else if (v == vid3) {
        location.href = 'https://mulbul2.cafe24.com/Multiverse/pages/chakatapa.html';
    }
}
function stopTl() {
    tl1.clear();
    tl2.clear();
    tl3.clear();
}
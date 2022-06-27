
//텍스트
var p = document.querySelectorAll('p');
//트리거
var trigger = document.querySelectorAll('.trigger');
//비디오
var vid = document.getElementById("vid");

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

//타임라인
var tl = new TimelineMax();
var ani = new TimelineMax();


function triggerActivate(tr) {
    tr.addEventListener("click", function addA() {
        a++;
        // vidcontrol(a);
        revealHide(a);
        this.removeEventListener("click", addA);
    });
}
//본격 비디오 타임라인!
function revealHide(j) {
    var duraReveal = 0.6;
    var duraHide = 0.6;
    var delayReveal = 1;
    var delayHide = 2;
    if (j == 0) {
        tl.to("#본문1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
            .call(triggerActivate, [trigger[0]], 2);
        console.log(0);
    } else if (j == 1) {
        tl.clear();
        tl.restart();
        tl.to("#본문1", duraHide, { autoAlpha: 0, ease: "quad" }) 
            .to("#본문2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
            .call(triggerActivate, [trigger[1]], 2);
        ani.call(Play, [vid], 0)
            .call(Pause, [vid], 1.5);
        console.log(1);
    } else if (j == 2) {
        tl.clear();
        tl.restart();
        tl.to("#본문2", duraHide, { autoAlpha: 0, ease: "quad" }) 
            .to("#본문3-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
            .call(triggerActivate, [trigger[2]], 2);
        ani.call(Play, [vid], 2.5)
            .call(Pause, [vid], 4);
        console.log(2);
        
    } else if (j == 3) {
        tl.clear();
        tl.restart();
        tl.to("#본문3-2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .to("#본문3-1",  duraHide, { autoAlpha: 0 }, 2)
            .to("#본문3-2", duraHide, { autoAlpha: 0 }, 2)
            .to("#본문4-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .call(triggerActivate, [trigger[3]]);
        ani.call(Play, [vid])
            .call(Pause, [vid], 5.3);
        console.log(3);
        
    } else if (j == 4) {
        tl.clear();
        tl.restart();
        tl.to("#본문4-2",  duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .to("#본문4-1", duraHide, { autoAlpha: 0, ease: "quad" }, 2)
            .to("#본문4-2", duraHide, { autoAlpha: 0, ease: "quad" },2)
            .to("#본문5", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .call(triggerActivate, [trigger[4]]);
        ani.call(Play, [vid])
            .call(Pause, [vid], 10.8);
        console.log(4);
        
    } else if (j == 5) {
        tl.clear();
        tl.restart();
        tl.to("#본문5", duraHide, { autoAlpha: 0, ease: "quad" })
            .to("#본문4-2", duraHide, { autoAlpha: 0, ease: "quad" })
            .to("#본문6-1",  duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .to("#본문6-2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .call(triggerActivate, [trigger[5]]);
        console.log(5);
        
    } else if (j == 6) {
        tl.clear();
        tl.restart();
        tl.to("#본문6-1", duraHide, { autoAlpha: 0, ease: "quad" },0)
            .to("#본문6-2", duraHide, { autoAlpha: 0, ease: "quad" },0)
            .to("#본문7", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .call(triggerActivate, [trigger[6]]);
        console.log(6);
        
    } else if (j == 7) {
        tl.clear();
        tl.restart();
        tl.to("#본문7", duraHide, { autoAlpha: 0, ease: "quad" })
            .to("#대사1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .call(triggerActivate, [trigger[7]]);
        console.log(7);
        
    } else if (j == 8) {
        tl.clear();
        tl.restart();
        tl.to("#대사1", duraHide, { autoAlpha: 0, ease: "quad" })
            .to("#본문8", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .call(triggerActivate, [trigger[8]]);
        console.log(8);
        
    } else if (j == 9) {
        tl.clear();
        tl.restart();
        tl.to("#본문8", duraHide, { autoAlpha: 0, ease: "quad" })
            .to("#본문9", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .call(triggerActivate, [trigger[9]]);
        ani.call(Play, [vid])
            .call(Pause, [vid], 15.98);
        console.log(9);
        
    } else if (j == 10) {
        tl.clear();
        tl.restart();
        tl.to("#본문9", duraHide, { autoAlpha: 0, ease: "quad" })
            .to("#본문10", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
            .to("#본문10", duraHide, { autoAlpha: 0, ease: "quad" },2)
            .call(ChakatapaInfoCursor, [], 5);
        ani.call(Play, [vid])
        ani.call(Pause, [vid],30);

        console.log(10);
        
    } 
}


console.log(trigger);
console.log(a);

var a = 0;



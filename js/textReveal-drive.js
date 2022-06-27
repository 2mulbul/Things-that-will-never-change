
//비디오
var vid = document.getElementById("vid");
//텍스트
var p = document.querySelectorAll('p');
//트리거
var etcTriggers = document.querySelectorAll('.etcTrigger');
var trWindow = document.querySelector('#trWindow');
var trBurst = document.querySelector('#trBurst');
var trMouse = document.querySelector('#trMouse');


//타임라인
var tl = new TimelineMax();
var ani = new TimelineMax();


//trigger 클릭이벤트 활성화 함수
function triggerActivate(tr) {
    // hint(tr);
    tr.addEventListener("click", function addA() {
        a++;
        revealHide(a);
        this.removeEventListener("click", addA);
    });
}
function etcTActivate(tr) {
    reveal(tr);
    // hint(tr);
    tr.addEventListener("click", function addA() {
        a++;
        revealHide(a);
        this.removeEventListener("click", addA);
        hide(tr);
        console.log("clicked");
    });
}

//비디오 재생, 일시정지, 요소 숨기기, 나타내기
function Play(v) {
    v.play();
}
function Pause(v) {
    v.pause();
}
function hide(v) {
    v.classList.add("hidden");
}
function reveal(v) {
    v.classList.remove("hidden");
}
//for (var i = 1; i < vidAll.length; i++) {
//    hide(vidAll[i]);
//}
//for (var i = 0; i < vidAll.length; i++) {
//    Pause(vidAll[i]);
//}

//전체 트리거 기본 set
for (var i = 0; i < etcTriggers.length; i++) {
    hide(etcTriggers[i]);
}

//전체 p 기본 set
for (var i = 0; i < 22; i++) {
    TweenMax.set(p[i], { autoAlpha: 0, y: 10 }); 
}

let noboxText = document.querySelectorAll(".마지막-container");
for (var i = 0; i < noboxText.length; i++) {
    TweenMax.set(noboxText[i], { autoAlpha: 0}); 
}

//for (var i = 22; i < p.length-1; i++) {
//    TweenMax.set(p[i], { autoAlpha: 1, y: 10 }); 
//}
console.log(p.length);
//vid 기본 set
TweenMax.set(vid, { autoAlpha: 1 });




//본격 비디오 타임라인!
function revealHide(j) {
    var duraReveal = 0.6;
    var duraHide = 0.6;
    var hideTiming = "+=2.5";
    var revealTiming = "+=0.6";
    var hideTiming_Late = "+=1";
    var revealTiming_Late = "+=1.2";
    if (j == 0) {
        tl.to("#본문1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
            .to("#본문1", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .to("#본문2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming)
            .to("#본문2", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .to("#본문3", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming)
            .to("#본문3", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .to("#본문4", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, "+=3")
            .to("#본문4", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .call(reveal, [trWindow], "+=0");
        ani.call(Play, [vid], 0)
            .call(Pause, [vid], 20.5);
        console.log("0");
        
    } else if (j == 1) {
        tl.clear();
        tl.restart();
        tl.to("#본문5", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming)
            .to("#본문5", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .to("#본문6", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming)
            .to("#본문6", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .to("#본문7", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming)
            .to("#본문7", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .to("#본문8", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming)
            .to("#본문8", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .to("#본문9", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming)
            .to("#본문9", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .to("#본문10", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, revealTiming_Late)
            .to("#본문10", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .call(etcTActivate, [trBurst], "+=0");
        ani.call(Play, [vid])
            .call(Pause, [vid], 48);
        console.log("1");
    } else if (j == 2) {
        tl.clear();
        tl.restart();
        tl.to("#본문12-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
            .to("#본문13-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 2)
            .to("#본문12-1, #본문13-1", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            .call(etcTActivate, [trMouse], 7);;
        ani.call(Play, [vid])
            .call(Pause, [vid], 51)
            ;
        console.log("2-0");   
    } else if (j == 3) {
        tl.clear();
        tl.restart();
        tl.to("#본문14-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
            .to("#본문14-1", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
            .to("#본문15-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 5)
            .to("#본문16-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 6)
            .to("#본문15-1, #본문16-1", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming)
            ;
        ani.call(Play, [vid])
            .call(Pause, [vid], 65)
            .to(vid, 0.6, { autoAlpha: 0, ease: "quad" }, 62)
            .to("#마지막1", duraReveal, { autoAlpha: 1, ease: "quad" }, 64)
            .to("#마지막1", duraReveal, { color: "black", ease: "quad" }, 65.5)
            .to('body', duraReveal, { backgroundColor: 'white', ease: "quad" }, 65.5)
            .to("#마지막1", duraHide, { autoAlpha: 0, ease: "quad" }, 67)
            .to("#마지막2", duraReveal, { autoAlpha: 1,  ease: "quad" }, revealTiming_Late)
            .to("#마지막3", duraReveal, { autoAlpha: 1, ease: "quad" }, revealTiming_Late)
            .to("#마지막4", duraReveal, { autoAlpha: 1,  ease: "quad" }, revealTiming_Late)
            .to("#마지막2, #마지막3, #마지막4", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming_Late)
            .to("#마지막5", duraReveal, { autoAlpha: 1,  ease: "quad" }, revealTiming_Late)
            .to("#마지막6", duraReveal, { autoAlpha: 1, ease: "quad" }, revealTiming_Late)
            .to("#마지막7", duraReveal, { autoAlpha: 1, ease: "quad" }, revealTiming_Late)
            .to("#마지막5, #마지막6, #마지막7", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming_Late)
            .to("#마지막8", duraReveal, { autoAlpha: 1, ease: "quad" }, revealTiming_Late)
            .to("#마지막9", duraReveal, { autoAlpha: 1, ease: "quad" }, revealTiming_Late)
            .to("#마지막8, #마지막9", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming_Late)
            .to("#마지막10", duraReveal, { autoAlpha: 1, ease: "quad" }, revealTiming_Late)
            .to("#마지막11", duraReveal, { autoAlpha: 1, ease: "quad" }, revealTiming_Late)
            .to("#마지막10, #마지막11", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming_Late)
            .to("#마지막12", duraReveal, { autoAlpha: 1, ease: "quad" }, revealTiming_Late)
            .to("#마지막13", duraReveal, { autoAlpha: 1, ease: "quad" }, revealTiming_Late)
            .to("#마지막12, #마지막13", duraHide, { autoAlpha: 0, ease: "quad" }, hideTiming_Late)
            .call(DriveInfoCursor, [], "+=1");
            ;
        console.log("3-0");
    } 
}



let h = window.innerHeight;
Draggable.create(trWindow, {
        bounds: { minY:0,maxY:h * 0.7 },
        type: 'y',
        dragResistance: 0.6,
        //edgeResistance: 0.2,
        onDrag: function (e) {
            vid.currentTime = 20.5 + 3.5 * this.y / this.maxY
            console.log("y: " + this.y);
            console.log("maxY: " + this.maxY);
            console.log("Math.floor(this.maxY  * 0.5): " + Math.floor(this.maxY  * 0.5));
            },
        onDragEnd: function (e) {
            if (Math.floor(this.y) > Math.floor(this.maxY * 0.5)) {
                console.log("drag complete");
                this.disable(e);
                a = 1;
                revealHide(a);
                hide(trWindow);
            }
        },
        zIndexBoost:false
    });
    


console.log(a);

var a = 0;



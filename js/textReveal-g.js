//비디오
var vidAll = document.querySelectorAll("video");
var vid1 = document.querySelector("#vid1");
var vid2 = document.querySelector("#vid2");
var vid3 = document.querySelector("#vid3");
var vid4 = document.querySelector("#vid4");
var vid5 = document.querySelector("#vid5");
var vid6 = document.querySelector("#vid6");
var vid7 = document.querySelector("#vid7");
var vid8 = document.querySelector("#vid8");
var vid9 = document.querySelector("#vid9");
var vid10 = document.querySelector("#vid10");
var vid11 = document.querySelector("#vid11");


//텍스트
var p = document.querySelectorAll('p');
//트리거, 다음장
var textTriggers = document.querySelectorAll('.textTrigger');
var etcTriggers = document.querySelectorAll('.etcTrigger');
var trFace = document.querySelector('#trFace');
var trHand = document.querySelector('#trHand');
var trPicture = document.querySelector('#trPicture');
var trEye = document.querySelector('#trEye');
var trKnock = document.querySelector('#trKnock');
var trEye2 = document.querySelector('#trEye2');

var letters=document.querySelectorAll('.letter');

var count = 0;

var nexts = document.querySelectorAll(".next");
var next1 = document.querySelector('#next1');
var next2 = document.querySelector('#next2');

var letter2ndP = document.querySelectorAll(".letter-main-2nd");
var addPage = false;



//타임라인
var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();

var ani = new TimelineMax();
var ani2 = new TimelineMax();
var ani3 = new TimelineMax();
var ani4 = new TimelineMax({paused:true});
var ani5 = new TimelineMax();
var ani6 = new TimelineMax();
var ani7 = new TimelineMax();
var ani8 = new TimelineMax();
var ani9 = new TimelineMax();
var ani10 = new TimelineMax();



//trigger 클릭이벤트 활성화 함수
function triggerActivate(tr) {
    // hint(tr);
    tr.addEventListener("click", function addA() {
        a++;
        revealHide(s, a);
        this.removeEventListener("click", addA);
    });
}
function etcTActivate(tr) {
    reveal(tr);
    // hint(tr);
    tr.addEventListener("click", function addA() {
        a++;
        revealHide(s, a);
        this.removeEventListener("click", addA);
        hide(tr);
    });
    console.log("clicked");
}
function specTActivate(tr) {
    reveal(tr);
    // hint(tr);
    tr.addEventListener("click", function addA() {
        count++;
        if (count === 3) {
            a++;
            revealHide(s, a);
            this.removeEventListener("click", addA);
            hide(tr);
            console.log("hide complete?");
        }
    });
}
//다음장 [next] 클릭이벤트
nexts.forEach(nt => {
    nt.addEventListener("click", function addS() {
        a = 0;
        s++;
        revealHide(s, a);
        this.removeEventListener("click", addS);
    });
    // hint(nt);
});

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
for (var i = 1; i < vidAll.length; i++) {
    hide(vidAll[i]);
}
for (var i = 0; i < vidAll.length; i++) {
    Pause(vidAll[i]);
}
for (var i = 0; i < etcTriggers.length; i++) {
    hide(etcTriggers[i]);
}
TweenMax.set(vid8, { autoAlpha: 0 });


//전체 p 기본 set
for (var i = 0; i < 74; i++) {
    TweenMax.set(p[i], { autoAlpha: 0, y: 10 }); 
}
for (var i = 74; i < 94; i++) {
    TweenMax.set(p[i], { autoAlpha: 0 }); 
}

//다음장 [next] 기본 set 
for (var i = 0; i < nexts.length; i++) {
    hide(nexts[i]);
    TweenMax.set(nexts[i], { autoAlpha: 0 });
}

//letter 기본set
for (var i = 0; i < letters.length; i++) {
    hide(letters[i]);
    TweenMax.set(letters[i], { top: "120%" });
    TweenMax.set(letter2ndP[i], { autoAlpha: 0 });
}



//다음 비디오 재생
function startVid3() {
    vid2.onended = function () {
        reveal(vid3);
        Play(vid3);
    };
}
// function startNextvid(i) {
//     vidAll[i].onended = function () {
//         reveal(vidAll[i+1]);
//         Play(vidAll[i+1]);
//     };
// }

// for (var i = 0; i < p.length; i++) {
//     console.log(i+p[i].id+p[i].innerHTML);
// }


//본격 비디오 타임라인!
function revealHide(x, y) {
    //영상시작 타이밍(딜레이)
    let ani1startTime = 1;
    let ani2startTime = 1;
    let ani3startTime = 5;
    let ani4startTime = 1;
    let ani5startTime = 2;
    let ani6startTime = 0;
    let ani7startTime = 1;
    let ani8startTime = 35;
    let ani9startTime = 0;
    let ani10startTime = 18;


    //페이드 딜레이
    var duraReveal = 0.6;
    var duraRevealSlow = 1;
    var duraHide = 0.6;
    //x=장, y=클릭
    if (x == 0) {
        if (y == 0) {
            tl1.to("#본문1", 0.6, { autoAlpha: 1, y: 0, ease: "quad" }, 2)
                .to("#본문1", 0.6, { autoAlpha: 0 }, 5)
                .to("#대사1", 0.6, { autoAlpha: 1 }, 4);
            ani.call(Play, [vid1], ani1startTime)
                .call(Pause, [vid1], ani1startTime + 5.8)
                .call(triggerActivate, [textTriggers[0]], 4);
        } else if (y == 1) {
            ani
                .call(Play, [vid1])
                .call(Pause, [vid1], ani1startTime + 14.5)
                .call(triggerActivate, [textTriggers[1]], 13);
            tl2.to("#대사1", duraHide, { autoAlpha: 0, ease: "quad" }, 1)
                .to("#본문2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 4)
                .to("#본문2", duraHide, { autoAlpha: 0, ease: "quad" }, "+=3")
                .to("#대사2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, "-=1");
        } else if (y == 2) {
            ani.remove(Pause)
                .call(Play, [vid1])
                .call(Pause, [vid1], ani1startTime + 23)
                .call(triggerActivate, [textTriggers[2]], 21);
            tl3.to("#대사2", duraHide, { autoAlpha: 0, ease: "quad" }, 1)
                .to("#본문3", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 4)
                .to("#본문3", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#대사3", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, "-=1");
        } else if (y == 3) {
            ani.remove(Pause)
                .call(Play, [vid1])
                .call(Pause, [vid1], ani1startTime + 32)
                .call(triggerActivate, [textTriggers[3]], 31);
            tl4.to("#대사3", duraHide, { autoAlpha: 0, ease: "quad" }, 1)
                .to("#본문4-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 4)
                .to("#본문4-1", duraHide, { autoAlpha: 0, ease: "quad" }, 7)
                .to("#본문4-2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 5)
                .to("#본문4-2", duraHide, { autoAlpha: 0, ease: "quad" }, 7)
                .to("#본문5", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 8)
                .to("#본문5", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#대사4", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 11);
        } else if (y == 4) {
            ani.remove(Pause)
                .call(Play, [vid1])
                .call(Pause, [vid1], ani1startTime + 45)
                .call(reveal, [next1])
                .to(next1, duraRevealSlow, { autoAlpha: 1, ease: "quad" })
                ;
            tl5.to("#대사4", duraHide, { autoAlpha: 0, ease: "quad" }, 2)
                .to("#대사5", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
                .to("#대사5", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2.5")
                .to("#대사6", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
                .to("#대사6", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2.5");
        }
    }
    else if (x == 1) {
        if (y == 0) {
            tl1.clear();
            tl1.restart();
            tl1.to(next1, duraHide, { autoAlpha: 0, ease: "quad" })
                .call(hide, [next1])
                .to("#본문7", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 2)
                .to("#본문7", duraHide, { autoAlpha: 0, ease: "quad" }, 5)
                .to("#본문8", duraReveal, { autoAlpha: 1, ease: "quad" }, 3)
                .to("#본문8", duraHide, { autoAlpha: 0, ease: "quad" }, 5)
                .to("#본문9", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 6)
                .to("#본문9", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .call(etcTActivate, [trFace], 8);
            ani2.call(reveal, [vid2])
                .call(Play, [vid2], ani2startTime)
                .call(Pause, [vid2], ani2startTime + 0.7);
        } else if (y == 1) {
            tl2.clear();
            tl2.restart();
            startVid3();
            ani2.call(Play, [vid2])
                .call(Pause, [vid2], ani2startTime + 7)
                .call(reveal, [vid4], ani2startTime + 17)
                .call(Play, [vid4], ani2startTime + 17)
                .call(reveal, [next2])
                .to(next2, duraRevealSlow, { autoAlpha: 1, ease: "quad" }, ani2startTime + 32);
            tl2.to("#대사7", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
                .to("#대사7", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#대사8", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 4)
                .to("#대사8", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#대사9-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 7)
                .to("#대사9-1", duraHide, { autoAlpha: 0, ease: "quad" }, 11)
                .to("#대사9-2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 9)
                .to("#대사9-2", duraHide, { autoAlpha: 0, ease: "quad" }, 11)
                .to("#대사10", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 12)
                .to("#대사10", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#대사11", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 15)
                .to("#대사11", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#대사12", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 18)
                .to("#대사12", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문10", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 23.5)
                .to("#본문10", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문10-2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 27)
                .to("#본문10-2", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2");
        }
    }
    else if (x == 2) {
        if (y == 0) {
            tl1.clear();
            tl1.restart();
            tl1.to(next2, duraHide, { autoAlpha: 0, ease: "quad" })
                .call(hide, [next2])
                .to("#본문11-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
                .to("#본문11-1", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문11-2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 3)
                .to("#본문11-2", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문12", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 6)
                .to("#본문12", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문13", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 9)
                .to("#본문13", duraHide, { autoAlpha: 0, ease: "quad" }, 13)
                .to("#본문14", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 11)
                .to("#본문14", duraHide, { autoAlpha: 0, ease: "quad" }, 13);
            ani3.call(reveal, [vid5], ani3startTime)
                .call(Play, [vid5], ani3startTime)
                .call(Pause, [vid5], ani3startTime + 6.5)
                .call(etcTActivate, [trHand], 11);
        } else if (y == 1) {
            tl2.clear();
            tl2.restart();
            ani3.remove(Pause)
                .call(Play, [vid5])
                .call(Pause, [vid5], ani3startTime + 17);
            ani3.eventCallback("onComplete", function () {
                ani4.play(0);
            });
            ani4.call(reveal, [vid6], ani4startTime)
                .call(Play, [vid6], ani4startTime)
                .call(Pause, [vid6], ani4startTime + 12)
                .call(etcTActivate, [trPicture], ani4startTime + 12);
            tl2.to("#본문15", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
                .to("#본문15", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문16-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 3)
                .to("#본문16-1", duraHide, { autoAlpha: 0, ease: "quad" }, 6)
                .to("#본문16-2", duraReveal, { autoAlpha: 1, ease: "quad" }, 4)
                .to("#본문16-2", duraHide, { autoAlpha: 0, ease: "quad" }, 6)
                .to("#본문17", duraReveal, { autoAlpha: 1, ease: "quad" }, ani4startTime + 12)
                .to("#본문17", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문18", duraReveal, { autoAlpha: 1, ease: "quad" }, ani4startTime + 15)
                .to("#본문18", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문19", duraReveal, { autoAlpha: 1, ease: "quad" }, ani4startTime + 18)
                .to("#본문19", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문20", duraReveal, { autoAlpha: 1, ease: "quad" }, ani4startTime + 22);
        } else if (y == 2) {
            tl3.clear();
            tl3.restart();
            tl3.to("#본문20", duraHide, { autoAlpha: 0, ease: "quad" }, 0);
            ani4.
                call(Play, [vid6], 4)
                .call(Pause, [vid6], ani4startTime + 30)
                .call(reveal, [next3], ani4startTime + 17)
                .to(next3, duraRevealSlow, { autoAlpha: 1, ease: "quad" }, ani4startTime + 17);
        }
    }
    else if (x == 3) {
        if (y == 0) {
            tl1.clear();
            tl1.restart();
            tl1.to(next3, duraHide, { autoAlpha: 0, ease: "quad" })
                .call(hide, [next3])
                .to("#본문21-1", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
                .to("#본문21-1", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문21-2", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 3)
                .to("#본문21-2", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문22", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 10)
                .to("#본문22", duraHide, { autoAlpha: 0, ease: "quad" }, 17)
                .to("#본문23", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 11)
                .to("#본문23", duraHide, { autoAlpha: 0, ease: "quad" }, 13.5)
                .to("#본문24", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 14.5)
                .to("#본문24", duraHide, { autoAlpha: 0, ease: "quad" }, 17)
                .to("#본문25", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 19)
                .to("#본문25", duraHide, { autoAlpha: 0, ease: "quad" }, 23.5)
                .to("#본문26", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 21)
                .to("#본문26", duraHide, { autoAlpha: 0, ease: "quad" }, 23.5)
                .to("#본문27", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 24.5)
                .to("#본문27", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2");
            ani5.call(reveal, [vid7], ani5startTime)
                .call(Play, [vid7], ani5startTime)
                .call(Pause, [vid7], ani5startTime + 27)
                .call(etcTActivate, [trEye], ani5startTime + 27);
        } else if (y == 1) {
            tl2.clear();
            tl2.restart();
            tl2.to("#본문28", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" })
                .to("#본문28", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문29", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 4)
                .to("#본문29", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문30", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 7)
                .to("#본문30", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문31", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 11)
                .to("#본문31", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문32", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 16)
                .to("#본문32", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2");
            ani5.call(Play, [vid7])
                .call(Pause, [vid7], ani5startTime + 48)
                .call(reveal, [next4])
                .to(next4, duraRevealSlow, { autoAlpha: 1, ease: "quad" }, ani5startTime + 49);
        }
    }
    else if (x == 4) {
        if (y == 0) {
            tl1.clear();
            tl1.restart();
            tl1.to(next4, duraHide, { autoAlpha: 0, ease: "quad" })
                .call(hide, [next4])
                .to("#본문33", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
                .to("#본문33", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문34", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 4)
                .to("#본문34", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                ;
            ani6.call(Play, [vid8])
                .call(reveal, [vid8])
                .to(vid8, 0.6, { autoAlpha: 1, ease: "quad" }, 0.5)
                .call(specTActivate, [trKnock], 6);
        } else if (y == 1) {
            tl2.clear();
            tl2.restart();
            tl2.to("#본문35", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, ani7startTime + 1)
                .to("#본문35", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문36", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, ani7startTime + 4)
                .to("#본문36", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문37", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, ani7startTime + 8)
                .to("#본문37", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                ;
            ani6.to(vid8, 0.6, { autoAlpha: 0, ease: "quad" })
                .call(hide, [vid8]);
            ani7.call(reveal, [vid9], ani7startTime)
                .call(Play, [vid9], ani7startTime)
                .call(Pause, [vid9], ani7startTime + 10.5)
                .call(etcTActivate, [trSweat], ani7startTime + 10);
                
        } else if (y == 2) {
            tl3.clear();
            tl3.restart();
            tl3.to("#본문38", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 1)
                .to("#본문38", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문39", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 4)
                .to("#본문39", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문40", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 7)
                .to("#본문40", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문41", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 10)
                .to("#본문41", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문42", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 13)
                .to("#본문42", duraHide, { autoAlpha: 0, ease: "quad" }, 17)
                .to("#본문43", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 15)
                .to("#본문43", duraHide, { autoAlpha: 0, ease: "quad" }, 17)
                .to("#대사13", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 19)
                .to("#대사13", duraHide, { autoAlpha: 0, ease: "quad" }, 20)
                .to("#대사14", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 20)
                .to("#대사14", duraHide, { autoAlpha: 0, ease: "quad" }, 21)
                .to("#대사15", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 21)
                .to("#대사15", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문44", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 26)
                .to("#본문44", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문45", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 30)
                .to("#본문45", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문46", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 36)
                .to("#본문46", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문47", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 39)
                .to("#본문47", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문48", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 42)
                .to("#본문48", duraHide, { autoAlpha: 0, ease: "quad" }, 47)
                .to("#본문49", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 44)
                .to("#본문49", duraHide, { autoAlpha: 0, ease: "quad" }, 47)
                .to("#본문50", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 48)
                .to("#본문50", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                ;
            ani7.call(Play, [vid9])
                .call(Pause, [vid9], ani7startTime + 48)
                .call(hide, [vid9]);
            ani8.call(reveal, [vid10], ani8startTime)
                .call(Play, [vid10], ani8startTime)
                .call(Pause, [vid10], ani8startTime + 16)
                .call(etcTActivate, [trEye2], ani8startTime + 15.5);
        } else if (y == 3) {
            tl4.clear();
            tl4.restart();
            tl4.to("#본문51", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 0.5)
                .to("#본문51", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#본문52", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 3)
                .to("#본문52", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#대사16", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 7)
                .to("#대사16", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                .to("#대사17", duraReveal, { autoAlpha: 1, y: 0, ease: "quad" }, 10)
                .to("#대사17", duraHide, { autoAlpha: 0, ease: "quad" }, "+=2")
                ;
            ani8.call(Play, [vid10])
                .call(etcTActivate, [trDiary], ani8startTime + 29.5)
                .call(Pause, [vid10], ani8startTime + 29.5)
                ;
        } else if (y == 4) {
            for (let i = 0; i < letters.length; i++) {
                reveal(letters[i]);
            }
            ani9.to(vid10, 1, { autoAlpha: 0, ease: "quad" },ani9startTime)
                .call(hide, [vid10])
                .to(letters[0], 1.6, { top: "85%", ease: Power2.easeOut }, ani9startTime+2);
        }
    }
    else if (x == 5) {
        if (y == 0) {
            tl5.clear();
            tl5.restart();
            tl5.to("#마지막1", duraReveal, { autoAlpha: 1, ease: "quad" }, 0.5)
                .to("#마지막1", duraHide, { autoAlpha: 0, ease: "quad" }, 4.5)
                .to("#마지막2", duraReveal, { autoAlpha: 1, ease: "quad" }, 1.5)
                .to("#마지막2", duraHide, { autoAlpha: 0, ease: "quad" }, 4.5)
                .to("#마지막3", duraReveal, { autoAlpha: 1, ease: "quad" }, 2.5)
                .to("#마지막3", duraHide, { autoAlpha: 0, ease: "quad" }, 4.5)
                .to("#마지막4", duraReveal, { autoAlpha: 1, ease: "quad" }, 6.5)
                .to("#마지막4", duraHide, { autoAlpha: 0, ease: "quad" }, 8.5)
                .to("#마지막5", duraReveal, { autoAlpha: 1, ease: "quad" }, 9.5)
                .to("#마지막5", duraHide, { autoAlpha: 0, ease: "quad" }, 12.5)
                .to("#마지막6", duraReveal, { autoAlpha: 1, ease: "quad" }, 14)
                .to("#마지막6", duraHide, { autoAlpha: 0, ease: "quad" }, 17)
                .to("#마지막7", duraReveal, { autoAlpha: 1, ease: "quad" }, 18.5)
                .to("#마지막7", duraHide, { autoAlpha: 0, ease: "quad" }, 23)
                .to("#마지막8", duraReveal, { autoAlpha: 1, ease: "quad" }, 20)
                .to("#마지막8", duraHide, { autoAlpha: 0, ease: "quad" }, 23)
                .to("#마지막9", duraReveal, { autoAlpha: 1, ease: "quad" }, 24.5)
                .to("#마지막9", duraHide, { autoAlpha: 0, ease: "quad" }, 29)
                .to("#마지막10", duraReveal, { autoAlpha: 1, ease: "quad" }, 26)
                .to("#마지막10", duraHide, { autoAlpha: 0, ease: "quad" }, 29)
                .to("#마지막11", duraReveal, { autoAlpha: 1, ease: "quad" }, 30)
                .to("#마지막11", duraHide, { autoAlpha: 0, ease: "quad" }, 36)
                .to("#마지막12", duraReveal, { autoAlpha: 1, ease: "quad" }, 31.5)
                .to("#마지막12", duraHide, { autoAlpha: 0, ease: "quad" }, 36)
                .to("#마지막13", duraReveal, { autoAlpha: 1, ease: "quad" }, 33)
                .to("#마지막13", duraHide, { autoAlpha: 0, ease: "quad" }, 36)
                ;
            ani10.call(reveal, [vid11], ani10startTime)
                .call(Play, [vid11], ani10startTime)
                .call(Pause, [vid11], ani10startTime + 20)
                .call(etcTActivate, [trMirror], ani10startTime + 19.5);
        } else if (y == 1) {
            tl6.clear();
            tl6.restart();
            tl6.to("#마지막14", duraReveal, { autoAlpha: 1, ease: "quad" }, 0.5)
                .to("#마지막14", duraHide, { autoAlpha: 0, ease: "quad" }, 5)
                .to("#마지막15", duraReveal, { autoAlpha: 1, ease: "quad" }, 2)
                .to("#마지막15", duraHide, { autoAlpha: 0, ease: "quad" }, 5)
                .to("#마지막16", duraReveal, { autoAlpha: 1, ease: "quad" }, 6.5)
                .to("#마지막16", duraHide, { autoAlpha: 0, ease: "quad" }, 10)
                .to("#마지막17", duraReveal, { autoAlpha: 1, ease: "quad" }, 11)
                .to("#마지막17", duraHide, { autoAlpha: 0, ease: "quad" }, 14.5)
                .to("#마지막18", duraReveal, { autoAlpha: 1, ease: "quad" }, 15.5)
                .to("#마지막18", duraHide, { autoAlpha: 0, ease: "quad" }, 20.5)
                .to("#마지막19", duraReveal, { autoAlpha: 1, ease: "quad" }, 17.5)
                .to("#마지막19", duraHide, { autoAlpha: 0, ease: "quad" }, 20.5)
                .to("#마지막20", duraReveal, { autoAlpha: 1, ease: "quad" }, 22)
                .to("#마지막20", duraHide, { autoAlpha: 0, ease: "quad" }, 25)
                ;
            ani10.call(Play, [vid11])
                .call(GrimjaInfoCursor, [], ani10startTime + 48)
                .call(Pause, [vid11], ani10startTime + 60)
                ;
        }
    }
    // else if (x == 6) {
    //     if (y == 0) {
    //         console.log("finally!");
    //         // document.body.classList.toggle('bookinfo');
    //         GrimjaInfoCursor();
    //     }
        
    // }
}

//letters function
for (let i = 0; i < letters.length; i++) {
    let h = window.innerHeight;
    Draggable.create(letters[i], {
        bounds: { minY:0,maxY:-h*0.7 },
        type: 'y',
        dragResistance: 0.4,
        edgeResistance: 0.2,
        onDragEnd: function (e) {
            if (this.y < -500) {
                TweenMax.to(letter2ndP[i], 2, { autoAlpha:1, ease: "quad"});
            }
            
            if (i == 0) {
                if (this.y < -600) {
                    TweenMax.to(letters[i+1], 1.6, { top: "86%", ease: Power2.easeOut, delay:2 });
                }
            }
            if (i == 1) {
                if (this.y < -600) {
                    TweenMax.to(letters[i+1], 1.6, { top: "90%", ease: Power2.easeOut, delay:2 });
                }
            }
            if (i == 2) {
                if (this.y < -600) {
                    addPage = true;
                    console.log(addPage);
                    for (let i = 0; i < letters.length; i++) {
                        TweenMax.to(letters[i], 1.6, { autoAlpha: 0, ease: Power2.easeOut, delay: 10 });
                    }
                    s5a0();
                }
            }
            console.log("y: " + this.y);
            console.log(s,a);
        },
        zIndexBoost:false
    });
    
}

//자동시작
// window.addEventListener("load", function() {

//     revealHide(s,a);
// });

// window.onload = function () {
//     revealHide(s, a);
// }



// bt.addEventListener("click", function () {
//     bt.classList.add("hidden");
//     revealHide(s, a);
// })

function s5a0() {
    if (addPage == true) {
        setTimeout(() => {
            s = 5;
            a = 0;
            revealHide(s, a);
            console.log(s,a);
        }, 11000);
    }
}

var s = 0;
var a = 0;
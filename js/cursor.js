let bookInfo = document.querySelector("#bookInfo");
TweenMax.set(bookInfo, { autoAlpha: 0 });
let Chakatapa = "배명훈, 「차카타파의 열망으로」, 배명훈 외, 『팬데믹: 여섯 개의 세계』, 문학과 지성사, 2020";
let Grimja = "천선란, 「그림자놀이」, 『어떤 물질의 사랑』, 아작, 2020";
let Drive = "천선란, 「마지막 드라이브」, 『어떤 물질의 사랑』, 아작, 2020";

let door = document.querySelector("#door");
let doorAsk = document.querySelector(".doorAsk");

function GrimjaInfoCursor() {
    document.body.classList.toggle('bookinfo');
    
    let t = 0;
    let booktl = new TimelineMax();
    
    function cursor(e) {
        bookInfo.style.top = e.pageY - 10 + 'px';
        bookInfo.style.left = e.pageX + 30 + 'px';    
    }
    
    function bookinfoAni() {
        booktl.clear();
        booktl.restart();
        booktl.to(bookInfo, 0.3, { autoAlpha: 1, ease: "quad" })
            .call(typeGrimja,[],"-0.2")
            .to(bookInfo, 1, { autoAlpha: 0, ease: Power2.easeOut }, 7);
    }
    
    function typeGrimja() {
        const speed = 50;
        if (t < Grimja.length) {
            bookInfo.innerHTML += Grimja.charAt(t);
            t++;
            setTimeout(typeGrimja, speed);
        }
    }
    
    function resetGrimja() {
        t = 0;
        bookInfo.innerHTML = "";
    }
    
    window.addEventListener('mousedown', (e) => {
        resetGrimja();
        cursor(e);
        bookinfoAni();  
    });
    
    window.addEventListener('mousedown', cursor);
}


function ChakatapaInfoCursor() {
    document.body.classList.toggle('bookinfo');
    
    let t = 0;
    let booktl = new TimelineMax();
    
    function cursor(e) {
        bookInfo.style.top = e.pageY - 10 + 'px';
        bookInfo.style.left = e.pageX + 30 + 'px';    
    }
    
    function bookinfoAni() {
        booktl.clear();
        booktl.restart();
        booktl.to(bookInfo, 0.3, { autoAlpha: 1, ease: "quad" })
            .call(typeChakatapa,[],"-0.2")
            .to(bookInfo, 1, { autoAlpha: 0, ease: Power2.easeOut }, 7);
    }
    
    function typeChakatapa() {
        const speed = 50;
        if (t < Chakatapa.length) {
            bookInfo.innerHTML += Chakatapa.charAt(t);
            t++;
            setTimeout(typeChakatapa, speed);
        }
    }
    
    function resetChakatapa() {
        t = 0;
        bookInfo.innerHTML = "";
    }
    
    window.addEventListener('mousedown', (e) => {
        resetChakatapa();
        cursor(e);
        bookinfoAni();  
    });
    
    window.addEventListener('mousedown', cursor);
}

function DriveInfoCursor() {
    document.body.classList.toggle('bookinfo');
    
    let t = 0;
    let booktl = new TimelineMax();
    
    function cursor(e) {
        bookInfo.style.top = e.pageY - 10 + 'px';
        bookInfo.style.left = e.pageX + 30 + 'px';    
    }
    
    function bookinfoAni() {
        booktl.clear();
        booktl.restart();
        booktl.to(bookInfo, 0.3, { autoAlpha: 1, ease: "quad" })
            .call(typeDrive,[],"-0.2")
            .to(bookInfo, 1, { autoAlpha: 0, ease: Power2.easeOut }, 7);
    }
    
    function typeDrive() {
        const speed = 50;
        if (t < Drive.length) {
            bookInfo.innerHTML += Drive.charAt(t);
            t++;
            setTimeout(typeDrive, speed);
        }
    }
    
    function resetDrive() {
        t = 0;
        bookInfo.innerHTML = "";
    }
    
    window.addEventListener('mousedown', (e) => {
        resetDrive();
        cursor(e);
        bookinfoAni();  
    });
    
    window.addEventListener('mousedown', cursor);
}


//door.addEventListener('mouseover', () => {
//    TweenMax.to(door, 0.3, { autoAlpha: 1 });
//    TweenMax.to(doorAsk, 0.5, { autoAlpha: 1 });
//});
//door.addEventListener('mouseout', () => {
//    TweenMax.to(door, 0.3, { autoAlpha: 0.5 });
//    TweenMax.to(doorAsk, 0.3,{ autoAlpha: 0 });
//});

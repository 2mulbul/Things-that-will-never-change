var vid = document.getElementById("vid");

function Play(){
    vid.play();
}
function Pause() {
    vid.pause();
}


function vidcontrol(a) {
    if (a == 1) {
        Play();
        setTimeout(Pause, 1500);
    } else if (a == 2) {
        setTimeout(Play, 1000);
        setTimeout(Pause, 2500);
    } else if (a == 3) {
        Play();
        setTimeout(Pause, 1300);
    } else if (a == 4) {
        Play();
        setTimeout(Pause, 5500);
    } else if (a == 9) {
        Play();
        setTimeout(Pause, 5180);
    } else if (a == 10) {
        Play();
    }
}
function removeGotIt() {
    const button_got = document.getElementById("notification_element");
    button_got.classList.add("slideOut");
    button_got.addEventListener("transitionend", function () {
        button_got.remove();
    });
    document.getElementById("header").style.marginTop = "0px";
    document.getElementById("home").style.marginTop = "0px";
}

let localStorage = {};
let minTimeDiffSeconds = 1300;
// let minTimeDiffSeconds = 10 * 60;

if (document.getElementById("popup") !== undefined) {
    window.addEventListener(
        "scroll",
        function () {
            if (window.pageYOffset >= 800) {
                if (document.getElementById("popup") === null) {
                    null;
                } else {
                    document.getElementById("popup").style.opacity = "1";
                }

                let currentTimeSeconds = new Date().getTime() / 10000;
                // let timeLastClosed = localStorage.getItem("closedTime");
                let timeLastClosed = window.localStorage.closedTime;
                let timeDiffSeconds = currentTimeSeconds - timeLastClosed;
                if (timeDiffSeconds > minTimeDiffSeconds) {
                    document.getElementById("popup").style.display = "block";
                }
            } else {
                null;
            }
        },
        false
    );
} else {
    console.log("Component Tidak Ada");
}

if (window.localStorage.getItem("count_timer")) {
    var count_timer = window.localStorage.getItem("count_timer");
} else {
    var count_timer = 60 * 10;
}
var menitnya = Math.floor(count_timer / 60);
var detiknyanih = count_timer % 60;

function countDownTimer() {
    if (detiknyanih < 10) {
        detiknyanih = "0" + detiknyanih;
    }
    if (menitnya < 10) {
        menitnya = "0" + menitnya;
    }

    if (count_timer <= 0) {
        window.localStorage.clear("count_timer");
    } else {
        count_timer = count_timer - 1;
        menitnya = Math.floor(count_timer / 60);
        detiknyanih = count_timer % 60;
        window.localStorage.setItem("count_timer", count_timer);
        setTimeout("countDownTimer()", 1000);
    }
}

setTimeout("countDownTimer()", 1000);

function hide() {
    const newsPanel = document.getElementById("popup");
    newsPanel.classList.add("slideIn");

    newsPanel.addEventListener("transitionend", function () {
        newsPanel.remove();
    });
}

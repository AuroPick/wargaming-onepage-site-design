document.getElementById("signin-button").addEventListener("click", function () {
    document.getElementById("sign-in").style.display = "flex";
})

document.getElementById("signup-button").addEventListener("click", function () {
    document.getElementById("sign-up").style.display = "flex";
})

document.getElementsByClassName("close")[0].addEventListener("click", function () {
    document.getElementById("sign-in").style.display = "none";
})

document.getElementsByClassName("close")[1].addEventListener("click", function () {
    document.getElementById("sign-up").style.display = "none";
})

window.onclick = function (event) {
    if (event.target == document.getElementById("sign-in")) {
        document.getElementById("sign-in").style.display = "none";
        return;
    }
    if (event.target == document.getElementById("sign-up")) {
        document.getElementById("sign-up").style.display = "none";
        return;
    }
}

window.ontouchend = function (event) {
    if (event.target == document.getElementById("sign-in")) {
        document.getElementById("sign-in").style.display = "none";
        return;
    }
    if (event.target == document.getElementById("sign-up")) {
        document.getElementById("sign-up").style.display = "none";
        return;
    }
}

var hover = (width) => {
    document.getElementsByClassName("footer-text-one")[0].style.width = width
}
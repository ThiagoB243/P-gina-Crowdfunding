function backthispopup() {
    document.querySelector(".back-this-popup").style.display = "block";

    document.querySelector(".page-body").style.background = "rgba(0,0,0,0.7)";
    document.querySelector("body").style.background = "rgba(0,0,0,0.7)";
    document.querySelector(".main-image").style.display = "none"
}

function backthisclose() {
    document.querySelector(".back-this-popup").style.display = "none";
    document.querySelector(".page-body").style.background = "white";
    document.querySelector("body").style.background = "rgba(0,0,0,0)";
    document.querySelector(".main-image").style.display = "block"
}
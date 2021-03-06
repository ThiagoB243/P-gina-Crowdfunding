// Abrir e fechar PopUp do BackThis

function backthispopup() {
    document.querySelector(".back-this-popup").style.display = "block";
    document.querySelector(".background").style.display = "block";
}

function backthisclose() {
    document.querySelector(".back-this-popup").style.display = "none";
    document.querySelector(".background").style.display = "none";
}


// Selecionar itens no forms do PopUp

var noReward = document.querySelector('.no-reward');
var bamboStand = document.querySelector('.bambo-stand-pop');
var blackStand = document.querySelector('.black-stand-pop');

var enterPledge1 = document.querySelector(".enter-pledge1");
var enterPledge2 = document.querySelector(".enter-pledge2");
var enterPledge3 = document.querySelector(".enter-pledge3");

var inputNoReward = document.querySelector("#no-reward-stand");
var inputBamboStand = document.querySelector("#bambo-stand");
var inputBlackStand = document.querySelector("#black-stand");

noReward.addEventListener("click", () => {
    enterPledge1.style.display = "block";
    enterPledge2.style.display = "none";
    enterPledge3.style.display = "none";
    noReward.style.border = "2px solid hsl(176, 50%, 47%)";
    bamboStand.style.border = "1px solid gray";
    blackStand.style.border = "1px solid gray";

    if (inputNoReward.checked == false) {
        inputNoReward.checked = true;
        inputBamboStand.checked = false;
        inputBlackStand.checked = false;
    }
})

bamboStand.addEventListener("click", () => {
    enterPledge1.style.display = "none";
    enterPledge2.style.display = "block";
    enterPledge3.style.display = "none";
    bamboStand.style.border = "2px solid hsl(176, 50%, 47%)";
    noReward.style.border = "1px solid gray";
    blackStand.style.border = "1px solid gray";

    if (inputBamboStand.checked == false) {
        inputNoReward.checked = false;
        inputBamboStand.checked = true;
        inputBlackStand.checked = false;
    }
})

blackStand.addEventListener("click", () => {
    enterPledge1.style.display = "none";
    enterPledge2.style.display = "none";
    enterPledge3.style.display = "block";
    blackStand.style.border = "2px solid hsl(176, 50%, 47%)";
    noReward.style.border = "1px solid gray";
    bamboStand.style.border = "1px solid gray";

    if (inputBlackStand.checked == false) {
        inputNoReward.checked = false;
        inputBamboStand.checked = false;
        inputBlackStand.checked = true;
    }
})

// Controle Bookmark

var bookmarkv = document.querySelector('.bookmark');
var circle = document.querySelector('circle');
var bookmarkText = document.querySelector('.bookmark-text');

bookmarkv.addEventListener("click", () => {
    if (circle.style.fill == "") {
        circle.style.fill = "rgb(60, 180, 172)";
        bookmarkText.innerHTML = "Bookmarked";
    } else if (circle.style.fill == "rgb(60, 180, 172)") {
        circle.style.fill = "rgb(122, 122, 122)";
        bookmarkText.innerHTML = "Bookmark";
    } else {
        circle.style.fill = "rgb(60, 180, 172)";
        bookmarkText.innerHTML = "Bookmarked";
    }


})

// Abrir popup de confirma????o

var inputMoney = document.querySelectorAll('.money-pledge');
var buttonMoney1 = document.querySelector('.continue-button1');
var buttonMoney2 = document.querySelector('.continue-button2');
var buttonMoney3 = document.querySelector('.continue-button3');

var confirmationPopup = document.querySelector('.pop-up-confirmacao');

buttonMoney1.addEventListener("click", () => {
    for (let index = 0; index < inputMoney.length; index++) {
        const element = inputMoney[index];
        if (element.value != "") {
            backthisclose();
            element.value = "";
            confirmationPopup.style.display = "block";
            document.querySelector(".background").style.display = "block";
        }
    }
});

buttonMoney2.addEventListener("click", () => {
    for (let index = 0; index < inputMoney.length; index++) {
        const element = inputMoney[index];
        if (element.value != "" && element.value >= 25) {
            backthisclose();
            element.value = "";
            confirmationPopup.style.display = "block";
            document.querySelector(".background").style.display = "block";
        }
    }
});

buttonMoney3.addEventListener("click", () => {
    for (let index = 0; index < inputMoney.length; index++) {
        const element = inputMoney[index];
        if (element.value != "" && element.value >= 75) {
            backthisclose();
            element.value = "";
            confirmationPopup.style.display = "block";
            document.querySelector(".background").style.display = "block";
        }
    }
});

// Fechar Popup Confirma????o

function closeconfirmacao() {
    document.querySelector(".pop-up-confirmacao").style.display = "none";
    document.querySelector(".background").style.display = "none";
}

// Abrir PopUp com op????o j?? selecionada

function backthispopupbambo() {
    document.querySelector(".back-this-popup").style.display = "block";
    document.querySelector(".background").style.display = "block";
    enterPledge1.style.display = "none";
    enterPledge2.style.display = "block";
    enterPledge3.style.display = "none";
    bamboStand.style.border = "2px solid hsl(176, 50%, 47%)";
    noReward.style.border = "1px solid gray";
    blackStand.style.border = "1px solid gray";

    if (inputBamboStand.checked == false) {
        inputNoReward.checked = false;
        inputBamboStand.checked = true;
        inputBlackStand.checked = false;
    }
}

function backthispopupblack() {
    document.querySelector(".back-this-popup").style.display = "block";
    document.querySelector(".background").style.display = "block";
    enterPledge1.style.display = "none";
    enterPledge2.style.display = "none";
    enterPledge3.style.display = "block";
    blackStand.style.border = "2px solid hsl(176, 50%, 47%)";
    noReward.style.border = "1px solid gray";
    bamboStand.style.border = "1px solid gray";

    if (inputBlackStand.checked == false) {
        inputNoReward.checked = false;
        inputBamboStand.checked = false;
        inputBlackStand.checked = true;
    }
}

// Abrir Menu
var show = document.querySelector(".menu");

function menu() {
    if (show.style.display == "none") {
        document.querySelector(".menu").style.display = "block";
        document.querySelector(".background").style.display = "block";
        document.querySelector(".main-image").style.background = "url('/images/icon-close-menu.svg') no-repeat";

    } else {
        document.querySelector(".menu").style.display = "none";
        document.querySelector(".background").style.display = "none";
        document.querySelector(".main-image").style.background = "url('/images/icon-hamburger.svg') no-repeat";
    }
}
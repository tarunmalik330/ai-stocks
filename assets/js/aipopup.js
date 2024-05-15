//   < !-- =========================== popup =========================== -->
// ----------------Nvidia-------------
var openButton = document.getElementById("openPopup");
var closeButton = document.getElementById("closePopup");
var popup = document.getElementById("popup");
var popupContent = document.querySelector(".popup-content");
openButton.onclick = function () {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "";
}

closeButton.onclick = function () {
    closePopup();
}
popup.onclick = function (event) {
    if (event.target == popup) {
        closePopup();
    }
}

// ----------Microsoft-----------
var openButton = document.getElementById("microsoftOpenPopup");
var closeButton = document.getElementById("microClosePopup");
var micropopup = document.getElementById("micropopup");
var micropopupContent = document.querySelector(".micropopup-content");
openButton.onclick = function () {
    micropopup.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function microClosePopup() {
    micropopup.style.display = "none";
    document.body.style.overflow = "";
}
closeButton.onclick = function () {
    microClosePopup();
}
micropopup.onclick = function (event) {
    if (event.target == micropopup) {
        microClosePopup();
    }
}

// ------------------Amazon--------------
var openButton = document.getElementById("AmazonOpenPopup");
var closeButton = document.getElementById("amazonClosePopup");
var amazonpopup = document.getElementById("amazonpopup");
var amazonpopupContent = document.querySelector(".amazonpopup-content");
openButton.onclick = function () {
    amazonpopup.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function amazonClosePopup() {
    amazonpopup.style.display = "none";
    document.body.style.overflow = "";
}
closeButton.onclick = function () {
    amazonClosePopup();
}
amazonpopup.onclick = function (event) {
    if (event.target == amazonpopup) {
        amazonClosePopup();
    }
}

// -----------------Palantir----------------
var openButton = document.getElementById("palantirOpenPopup");
var closeButton = document.getElementById("palantirClosePopup");
var palantirpopup = document.getElementById("palantirpopup");
var palantirpopupContent = document.querySelector(".palantirpopup-content");
openButton.onclick = function () {
    palantirpopup.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function palantirClosePopup() {
    palantirpopup.style.display = "none";
    document.body.style.overflow = "";
}
closeButton.onclick = function () {
    palantirClosePopup();
}
palantirpopup.onclick = function (event) {
    if (event.target == palantirpopup) {
        palantirClosePopup();
    }
}

// ---------------------Cyber------------------------
var openButton = document.getElementById("cyberOpenPopup");
var closeButton = document.getElementById("cyberClosePopup");
var cyberpopup = document.getElementById("cyberpopup");
var cyberpopupContent = document.querySelector(".cyberpopup-content");
openButton.onclick = function () {
    cyberpopup.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function cyberClosePopup() {
    cyberpopup.style.display = "none";
    document.body.style.overflow = "";
}
closeButton.onclick = function () {
    cyberClosePopup();
}
cyberpopup.onclick = function (event) {
    if (event.target == cyberpopup) {
        cyberClosePopup();
    }
}
// --------------------------Robotic---------------------
var openButton = document.getElementById("roboticOpenPopup");
var closeButton = document.getElementById("roboticClosePopup");
var roboticpopup = document.getElementById("roboticpopup");
var roboticpopupContent = document.querySelector(".roboticpopup-content");
openButton.onclick = function () {
    roboticpopup.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function roboticClosePopup() {
    roboticpopup.style.display = "none";
    document.body.style.overflow = "";
}
closeButton.onclick = function () {
    roboticClosePopup();
}
roboticpopup.onclick = function (event) {
    if (event.target == roboticpopup) {
        roboticClosePopup();
    }
}
// -----------------Arista Networks-----------------
var openButton = document.getElementById("aristaOpenPopup");
var closeButton = document.getElementById("aristaClosePopup");
var aristapopup = document.getElementById("aristapopup");
var aristapopupContent = document.querySelector(".aristapopup-content");
openButton.onclick = function () {
    aristapopup.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function aristaClosePopup() {
    aristapopup.style.display = "none";
    document.body.style.overflow = "";
}
closeButton.onclick = function () {
    aristaClosePopup();
}
aristapopup.onclick = function (event) {
    if (event.target == aristapopup) {
        aristaClosePopup();
    }
}

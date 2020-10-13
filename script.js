var right = document.getElementsByClassName("right")[0];
var left = document.getElementsByClassName("left")[0];
var title = document.getElementsByClassName("title")[0];
var paragraph = document.getElementsByClassName("para1")[0];
var background = document.getElementsByClassName("first")[0]; 
var nav = document.querySelector(".ham");
var end = document.querySelector(".close");
var container = document.querySelector("ul");
var logo = document.querySelector(".logo");
var element = document.querySelectorAll(".element");
var listElement1 = document.querySelector(".one");
var listElement2 = document.querySelector(".two");
var listElement3 = document.querySelector(".three");
var listElement4 = document.querySelector(".four");
var body = document.querySelector("body");
var overlay = document.querySelector("#overlay");

var first = {
    title: "Discover innovative ways to decorate",
    paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    background: "url('./images/desktop-image-hero-1.jpg')"
};

var second = {
    title: "We are available all across the globe",
    paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", 
    background: "url('./images/desktop-image-hero-2.jpg')"
};

var third = {
    title: "Manufactured with the best materials", 
    paragraph: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.", 
    background: "url('./images/desktop-image-hero-3.jpg')"
};

function modifyList (size, weight, color) {
    listElement1.style.fontSize = size;
    listElement1.style.fontWeight = weight;
    listElement1.style.color = color;
    listElement2.style.fontSize = size;
    listElement2.style.fontWeight = weight;
    listElement2.style.color = color;
    listElement3.style.fontSize = size;
    listElement3.style.fontWeight = weight;
    listElement3.style.color = color;
    listElement4.style.fontSize = size;
    listElement4.style.fontWeight = weight;
    listElement4.style.color = color;
}

function switchDisplay(display) {
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = display;
    }
}

function checkWidth() {
    var max = window.matchMedia("(max-width: 480px)");
    if(max.matches) {
        first.background = "url('./images/mobile-image-hero-1.jpg')";
        second.background = "url('./images/mobile-image-hero-2.jpg')";
        third.background = "url('./images/mobile-image-hero-3.jpg')";
    }
}

function switchRight() {
    checkWidth();
    if (title.textContent === first.title) {
        title.textContent = second.title;
        paragraph.textContent = second.paragraph;
        background.style.background = second.background;
    }
    else if (title.textContent === second.title){
        title.textContent = third.title;
        paragraph.textContent = third.paragraph;
        background.style.background = third.background;
    }
    else {
        title.textContent = first.title;
        paragraph.textContent = first.paragraph;
        background.style.background = first.background;
    }
}

function switchLeft() {
    checkWidth();
    if (title.textContent === first.title) {
        title.textContent = third.title;
        paragraph.textContent = third.paragraph;
        background.style.background = third.background;
    }
    else if (title.textContent === second.title){
        title.textContent = first.title;
        paragraph.textContent = first.paragraph;
        background.style.background = first.background;
    }
    else {
        title.textContent = second.title;
        paragraph.textContent = second.paragraph;
        background.style.background = second.background;
    }
}

function showNav() {
    nav.style.display = "none";
    logo.style.display = "none";
    container.style.background = "hsl(0, 0%, 100%)";
    end.style.display = "block";
    body.style.background = "hsl(0, 0%, 63%)";
    document.documentElement.style.setProperty('--dark-gray',"hsl(0, 0%, 27%)");
    switchDisplay("block");
    modifyList("13px", "600", "hsl(0, 0%, 0%)");
}

function hideNav() {
    nav.style.display = "block";
    logo.style.display = "block";
    container.style.background = "none";
    end.style.display = "none";
    body.style.background = "none";
    document.documentElement.style.setProperty('--dark-gray', "hsl(0, 0%, 63%)");
    switchDisplay("none");
    modifyList("11px", "500", "hsl(0, 0%, 100%)");
}

nav.addEventListener("click", showNav, false);
end.addEventListener("click", hideNav, false);
right.addEventListener("click", switchRight, false);
left.addEventListener("click", switchLeft, false);




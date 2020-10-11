var right = document.getElementsByClassName("right")[0];
var left = document.getElementsByClassName("left")[0];
var title = document.getElementsByClassName("title")[0];
var paragraph = document.getElementsByClassName("para1")[0];
var background = document.getElementsByClassName("first")[0]; 

var first = {
    title: "Discover innovative ways to decorate",
    paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    number: 1,
};

var second = {
    title: "We are available all across the globe",
    paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", 
    number: 2,
};

var third = {
    title: "Manufactured with the best materials", 
    paragraph: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.", 
    number: 3,
};

function switchRight() {
    if (title.textContent === first.title) {
        title.textContent = second.title;
        paragraph.textContent = second.paragraph;
        background.style.background = "url('./images/desktop-image-hero-2.jpg')";
    }
    else if (title.textContent === second.title){
        title.textContent = third.title;
        paragraph.textContent = third.paragraph;
        background.style.background = "url('./images/desktop-image-hero-3.jpg')";
    }
    else {
        title.textContent = first.title;
        paragraph.textContent = first.paragraph;
        background.style.background = "url('./images/desktop-image-hero-1.jpg')";
    }
}

function switchLeft() {
    if (title.textContent === first.title) {
        title.textContent = third.title;
        paragraph.textContent = third.paragraph;
        background.style.background = "url('./images/desktop-image-hero-3.jpg')";
    }
    else if (title.textContent === second.title){
        title.textContent = first.title;
        paragraph.textContent = first.paragraph;
        background.style.background = "url('./images/desktop-image-hero-1.jpg')";
    }
    else {
        title.textContent = second.title;
        paragraph.textContent = second.paragraph;
        background.style.background = "url('./images/desktop-image-hero-2.jpg')";
    }
}

right.addEventListener("click", switchRight, false);
left.addEventListener("click", switchLeft, false);




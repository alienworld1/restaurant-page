import "./style.css";
import waterImage from "./Images/water-glass.jpg";

const NavSetter = (function(){
    function createNavigationLink(textContent) {
        const link = document.createElement("li");
        link.textContent = textContent;

        return link;
    }

    function createNavigationBar(linkArray) {
        const nav = document.createElement("ul");
        nav.classList.add("nav");

        linkArray.forEach(link => {
            const linkElement = createNavigationLink(link);
            nav.appendChild(linkElement);
        });

        return nav;
    }

    return {
        createNavigationBar,
    }
})();

function image(imageDetails, credit) {
    const thisImage = new Image();
    thisImage.src = imageDetails.source;
    thisImage.width = imageDetails.width;
    thisImage.height = imageDetails.height;

    const figure = document.createElement("figure");
    const figureCaption = document.createElement("figcaption");
    figureCaption.innerHTML = credit;

    figure.style.width = `${thisImage.width}px`;

    figure.appendChild(thisImage);
    figure.appendChild(figureCaption);

    return {
        figure,
        image: thisImage,
    };
}


function header() {
    const header = document.createElement("header");
    const logo = document.createElement("logo");

    logo.textContent = "Raindrop Cafe";
    logo.classList.add("logo");

    header.appendChild(logo);

    const navBar = NavSetter.createNavigationBar([
        "Home",
        "Menu",
        "Contact",
    ]);

    header.appendChild(navBar);

    return header;
}

const MainPage = (function(){
    function mainBody() {
        const mainBodyElement = document.createElement("div");
        mainBodyElement.classList.add("main-body");

        return mainBodyElement;
    }

    function bodyParagraph(innerHTML) {
        const paragraph = document.createElement("p");
        paragraph.classList.add("main");
        paragraph.innerHTML = innerHTML;

        return paragraph;
    }

    return {
        mainBody,
        bodyParagraph,
    }
})();

function main() {
    const main = document.createElement("main");
    const mainBody = MainPage.mainBody();

    const waterGlass = {
        source: waterImage,
        width: 300,
        height: 400,
    };

    const waterGlassImage = image(waterGlass, 'Photo by <a href="https://unsplash.com/@kobuagency?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">KOBU Agency</a> on <a href="https://unsplash.com/photos/clear-drinking-glass-on-gray-surface-TWIRIAizZFU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>');

    mainBody.appendChild(waterGlassImage.figure);

    const caption = "<strong>Not all water is created the same!</strong>";

    const captionParagraph = MainPage.bodyParagraph(caption);

    const description = "Don't believe us? Visit Raindrop Cafe and we'll prove it to to you! A sip of water here to introduce yourself to the glorious world of water tasting.";

    const descriptionParagraph = MainPage.bodyParagraph(description);

    mainBody.appendChild(captionParagraph);
    mainBody.appendChild(descriptionParagraph);

    main.appendChild(mainBody);
    return main;
}

//TODO: Credit the background image

const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(main());
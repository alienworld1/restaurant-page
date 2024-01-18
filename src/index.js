import { mainBody, bodyParagraph, image } from "./PageElements";
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

function main() {
    const main = document.createElement("main");
    const pageBody = mainBody();

    const waterGlass = {
        source: waterImage,
        width: 300,
        height: 400,
    };

    const waterGlassImage = image(waterGlass, 'Photo by <a href="https://unsplash.com/@kobuagency?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">KOBU Agency</a> on <a href="https://unsplash.com/photos/clear-drinking-glass-on-gray-surface-TWIRIAizZFU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>');

    pageBody.appendChild(waterGlassImage.figure);

    const caption = "<strong>Not all water is created the same!</strong>";

    const captionParagraph = bodyParagraph(caption);

    const description = "Don't believe us? Visit Raindrop Cafe and we'll prove it to to you! A sip of water here to introduce yourself to the glorious world of water tasting.";

    const descriptionParagraph = bodyParagraph(description);

    pageBody.appendChild(captionParagraph);
    pageBody.appendChild(descriptionParagraph);

    main.appendChild(pageBody);
    return main;
}

function footer() {
    const footer = document.createElement("footer");
    footer.innerHTML = 'Background by <a href="https://unsplash.com/@liodp?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lionello DelPiccolo</a> on <a href="https://unsplash.com/photos/blue-ocean-wave-qEswHvOmi1c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

    return footer;
}

//TODO: Credit the background image

const content = document.querySelector("#content");
content.appendChild(header());
content.appendChild(main());
content.appendChild(footer());
import { bodyParagraph, mainBody, image } from "./PageElements";
import evian from "./Images/evian-bottle.jpg";

function card(imageSource, name) {
    const card = document.createElement("div");
    card.classList.add("card");

    const imageDetails = {
        source: imageSource,
        width: 150,
        height: 200,
    };

    const cardImage = image(imageDetails);
    const cardNameElement = document.createElement("p");

    cardNameElement.textContent = name;

    card.appendChild(cardImage.figure);
    card.appendChild(cardNameElement);

    return card;
}

function CardContainer() {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    return cardContainer;
}

export default function menu() {
    const main = mainBody();
    const headline = bodyParagraph("This menu was curated carefully by our experts to provide you with only the best water on this planet!");

    const cardContainer = CardContainer();
    
    const evianCard = card(evian, "Evian");

    cardContainer.appendChild(evianCard);

    main.appendChild(headline);
    main.appendChild(cardContainer);
    return main;
};
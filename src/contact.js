import { mainBody, bodyParagraph,  } from "./PageElements";

export default function contact() {
    const main = mainBody();

    const headline = document.createElement("h1");
    headline.textContent = "Contact Us!";

    const phoneElement = bodyParagraph("<strong>Phone:</strong> 1234567890");
    phoneElement.classList.add("left-align");
    const emailElement = bodyParagraph("<strong>Email:</strong> contactus@raindropcafe.org");
    emailElement.classList.add("left-align");

    main.appendChild(headline);
    main.appendChild(phoneElement);
    main.appendChild(emailElement);
    return main;
};
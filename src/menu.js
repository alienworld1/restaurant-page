import { bodyParagraph, mainBody, image } from "./PageElements";

export default function menu() {
    const main = mainBody();
    const description = bodyParagraph("This menu was curated carefully by our experts to provide you with only the best water on this planet!");

    main.appendChild(description);
    return main;
};
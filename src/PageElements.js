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

function image(imageDetails, credit=null) {
    const thisImage = new Image();
    thisImage.src = imageDetails.source;
    thisImage.width = imageDetails.width;
    thisImage.height = imageDetails.height;

    const figure = document.createElement("figure");
    figure.appendChild(thisImage);

    if (credit) {
        const figureCaption = document.createElement("figcaption");
        figureCaption.innerHTML = credit;
    
        figure.style.width = `${thisImage.width}px`;
    
        figure.appendChild(figureCaption);    
    }

    return {
        figure,
        image: thisImage,
    };
}


export {
    mainBody,
    bodyParagraph,
    image,
};

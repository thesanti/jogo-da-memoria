function createCardsWrapper(){
    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("wrap-cards");

    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    const style = `
        .wrap-cards{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            padding-top: 10px;
        }
        
        .wrap-cards > .memory-card{
            margin-bottom: 10px;
        }
    `;

    $style.textContent = style;

    $head.insertAdjacentElement("beforeend", $style);

    return $cardsWrapper;
}
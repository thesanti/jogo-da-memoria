function createCardsWrapper(){
    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("wrap-cards");

    $cardsWrapper.addEventListener("click", ()=>{
        console.log('eai');
    });

    return $cardsWrapper;
}
function createMemoryCard() {
    const $memoryCard  = document.createElement("article");
    $memoryCard.classList.add("memory-card");

    const $icon = `
        <img src="img/icon-collabcode.png" alt="" class="icon"/>
    `;

    $wrapCards.insertBefore($memoryCard, null);
    $memoryCard.insertAdjacentHTML("beforeend", $icon);
}

function createMemoryCardFront() {
    const $memoryCardFront = document.createElement("article");
    $memoryCardFront.classList.add("memory-card");
    $memoryCardFront.classList.add("-front");

    const $iconFront = `
        <img src="img/icon-c.png" class="icon"/>
    `;

    $wrapCards.insertBefore($memoryCardFront, null)
    $memoryCardFront.insertAdjacentHTML("beforeend", $iconFront);
}
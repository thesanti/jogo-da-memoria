const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
$root.insertAdjacentElement("beforeend", $cardsWrapper);

const $memoryCardGueio = createMemoryCard();

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardGueio);
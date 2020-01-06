const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
$root.insertAdjacentHTML("beforeend", $cardsWrapper);

const $memoryCardGueio = createMemoryCard();

$cardsWrapper.insertAdjacentElement("beforeend", $memoryCardGueio);
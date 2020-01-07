const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
$root.insertAdjacentElement("beforeend", $cardsWrapper);

const $memoryCardGueio = createMemoryCard();

const $memoryCardFront = createMemoryCardFront();

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardGueio);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardGueio);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardGueio);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardGueio);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
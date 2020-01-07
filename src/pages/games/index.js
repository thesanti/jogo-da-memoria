const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
$root.insertAdjacentElement("beforeend", $cardsWrapper);

const $memoryCard = createMemoryCard("-front");

// const $memoryCardFront = createMemoryCardFront();

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
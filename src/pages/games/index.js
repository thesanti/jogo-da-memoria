const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
$root.insertAdjacentElement("beforeend", $cardsWrapper);

const $memoryCard = createMemoryCard("img/icon-collabcode.png", "Gueio da logo da Collabcode", "");
const $memoryCardFrontC = createMemoryCard("img/icon-c.png", "Ícone do livro de C", "-front");
const $memoryCardFrontJs = createMemoryCard("img/icon-js.png", "Ícone do livro de Javascript", "-front");
const $memoryCardFrontJava = createMemoryCard("img/icon-java.png", "Ícone do livro de Java", "-front");

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
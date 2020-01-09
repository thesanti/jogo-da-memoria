const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
$root.insertAdjacentElement("beforeend", $cardsWrapper);

const $memoryCardPhp = createMemoryCard(
    {
        src:"img/icon-php.png",
        alt:"Gueio da logo da Collabcode",
        nameClass:"-front"
    }
);

const $memoryCardC = createMemoryCard(
    {
        src: "img/icon-c.png",
        alt: "Ícone do livro de C",
        nameClass: "-front"
    }
);

const $memoryCardJs = createMemoryCard(
    {
        src:"img/icon-js.png", 
        alt: "Ícone do livro de Javascript",
        nameClass:"-front"
    }
);

const $memoryCardJava = createMemoryCard(
    {
        src:"img/icon-java.png",
        alt: "Ícone do livro de Java",
        nameClass:"-front"
    }
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
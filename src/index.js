const $root = document.querySelector("#root");

const $memoryCard  = document.createElement("article");
$memoryCard.classList.add("memory-card");

const $memoryCardFrontJs = document.createElement("article");
$memoryCardFrontJs.classList.add("memory-card");
$memoryCardFrontJs.classList.add("-front");

const $memoryCardFrontC = document.createElement("article");
$memoryCardFrontC.classList.add("memory-card");
$memoryCardFrontC.classList.add("-front");

const $memoryCardFrontJava = document.createElement("article");
$memoryCardFrontJava.classList.add("memory-card");
$memoryCardFrontJava.classList.add("-front");

const $memoryCardFrontSettings = document.createElement("article");
$memoryCardFrontSettings.classList.add("memory-card");
$memoryCardFrontSettings.classList.add("-front");


const $icon = `<img src="img/icon-collabcode.png" alt="" class="icon">`;
const $iconFrontJs = `<img src="img/icon-js.png" alt="" class="icon">`;
const $iconFrontC = `<img src="img/icon-c.png" alt="" class="icon">`;
const $iconFrontJava = `<img src="img/icon-java.png" alt="" class="icon">`;
const $iconFrontPhp = `<img src="img/icon-php.png" alt="" class="icon">`;
const $iconFrontSettings = `<img src="img/icon-settings.png" alt="" class="icon">`;


$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCardFrontJs, null);
$root.insertBefore($memoryCardFrontC, null);
$root.insertBefore($memoryCardFrontJava, null);
$root.insertBefore($memoryCardFrontSettings, null)

$memoryCard.insertAdjacentHTML("beforeend", $icon);
$memoryCardFrontJs.insertAdjacentHTML("beforeend", $iconFrontJs);
$memoryCardFrontC.insertAdjacentHTML("beforeend", $iconFrontC);
$memoryCardFrontJava.insertAdjacentHTML("beforeend", $iconFrontJava);
$memoryCardFrontSettings.insertAdjacentHTML("beforeend", $iconFrontSettings);
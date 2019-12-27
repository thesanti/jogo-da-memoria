const $root = document.querySelector("#root");

const $memoryCard  = document.createElement("article");
$memoryCard.classList.add("memory-card");

const $icon = `<img src="img/icon-collabcode.png" alt="" class="icon">`;


$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("beforeend", $icon);
const $root = document.querySelector("#root");

const $memoryCard  = document.createElement("article");
$memoryCard.classList.add("memory-card");

const $icon = `<img src="img/icon-collabcode.png" alt="" class="icon">`;

$memoryCard.innerHTML = $icon;

$root.insertBefore($memoryCard, null);
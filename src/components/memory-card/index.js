const createMemoryCard = nameClass =>`
    <article class="memory-card ${nameClass}" onClick="handleClick()">
        <img class="icon"
            src="${nameClass == "-front" ? "img/icon-c.png" : "img/icon-collabcode.png"}"
            alt="${nameClass == "-front" ? "Livro de C" : "Ícone do Gueio"}"
        />
    </article>
`;

function handleClick(){
    console.log('chora');
}
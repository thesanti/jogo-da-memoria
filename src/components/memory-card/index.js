const createMemoryCard = () =>`
    <article class="memory-card" onClick="handleClick()">
        <img class="icon"
            src="img/icon-collabcode.png"
            alt="Ícone do Gueio"
        />
    </article>
`;

const createMemoryCardFront = ()=> `
    <article class="memory-card -front" onClick="handleClick()">
        <img class="icon"
            src="img/icon-c.png"
            alt="Ícone do livro C++"
        />
    </article>
`;

function handleClick(){
    console.log('chora');
}
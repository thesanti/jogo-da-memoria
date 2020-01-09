const createMemoryCard = (card) =>`
    <article class="memory-card ${card.nameClass}" onClick="handleClick()">
        <img class="icon"
            src="${card.src}"
            alt="${card.alt}"
        />
    </article>
`;

function handleClick(){
    console.log('chora');
}
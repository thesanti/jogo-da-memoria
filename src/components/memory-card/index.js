const createMemoryCard = (card) => {
    const nameClass = card.nameClass;
    const src = card.src;
    const alt = card.alt;
    return `
        <article class="memory-card ${nameClass}" onClick="handleClick()">
            <img class="icon"
                src="${src}"
                alt="${alt}"
            />
        </article>
    `;
};

function handleClick(){
    console.log('chora');
}
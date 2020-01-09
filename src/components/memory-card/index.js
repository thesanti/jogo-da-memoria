const createMemoryCard = ({nameClass, src, alt}) =>`
    <article class="memory-card ${nameClass}" onClick="handleClick()">
        <img class="icon"
            src="${src}"
            alt="${alt}"
        />
    </article>
`;

function handleClick(){
    console.log('chora');
}
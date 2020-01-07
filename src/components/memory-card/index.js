const createMemoryCard = nameClass =>  {
    let src = "img/icon-collabcode.png";

    if(nameClass == "-front"){
        src = "img/icon-c.png"
    }
    
    return `
        <article class="memory-card ${nameClass}" onClick="handleClick()">
            <img class="icon"
                src="${src}"
                alt="Ícone do Gueio"
            />
        </article>
    `;
};

// const createMemoryCardFront = ()=> `
//     <article class="memory-card -front" onClick="handleClick()">
//         <img class="icon"
//             src="img/icon-c.png"
//             alt="Ícone do livro C++"
//         />
//     </article>
// `;

function handleClick(){
    console.log('chora');
}

const memoryCard = () => {

    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .memory-card{
            width: 155px;
            height: 155px;
            position: relative;
        }

        .memory-card .card{
            position:absolute;
            width: 155px;
            height: 155px;
            background-color: #f25a70;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            cursor: pointer;
        }

        .memory-card .card.-front{
            background-color: transparent;
        }

        .memory-card.-active .card{
            display: none;
        }

        .memory-card.-active .card.-front{
            display: flex;
        }
        
        .memory-card .card.-front::before{
            content: "";
            background-color: #d5d5d5;
            border-radius: 50%;
            width: 94px;
            height: 94px;
            position: absolute;
        }

        .memory-card .card > .icon{
            width: 100px;
            height: 100px;
        }

        .memory-card .card.-front > .icon{
            position: absolute;
            transform: translateY(-10px);
        }
    `;

    $head.insertAdjacentElement("beforeend", $style);

    console.log("Entrei no memory-card, estou fora da função");

    return ({src, alt}) => `
    <div class="memory-card" onClick="handleClick(this)">
        <article class="card -front">
            <img class="icon"
                src="${src}"
                alt="${alt}"
            />
        </article>
        <article class="card">
            <img class="icon"
                src="./img/icon-collabcode.png"
                alt="Logo da collabcode, o gueio."
            />
        </article>
        </div>
    `;
};

const handleClick = $component => $component.classList.toggle("-active");
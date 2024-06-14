const asianContainer = document.querySelector (".asian-container");

// Hier wordt de route gefetcht
fetch("/asian")
 .then((response) => response.json())
 .then((data) => {

    const asian = data;
    for (let i = 0; i < asian.length; i++) {
                const asianSnacks = asian[i];
                // Hier wordt de card met data in de container gezet
                asianContainer.innerHTML += `
                <div class="snackcard">
                    <h2> ${asianSnacks.title} </h2>
                    <div class="info">
                        <img src="${asianSnacks.img}">
                        <p> ${asianSnacks.description} </p>
                        <p> ${asianSnacks.price} </p>
                    </div>
                </div>
                `;
            }        
 });
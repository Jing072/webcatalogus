const jeansContainer = document.querySelector('.jeans-container');

// Hier wordt de route gefetcht
fetch('/jeans')
    .then((response) => response.json())
    .then((data) => {
        const jeans = data;
        for (let i = 0; i < jeans.length; i++) {
            const j = jeans[i];
            // Hier wordt de card met data in de container gezet
            jeansContainer.innerHTML += `
            <div class="card">
                <h2>${j.title}</h2>
                <div class="content">
                    <img src="${j.imageUrl}">
                    <hr>
                    <p>Beschrijving: ${j.description}</p>
                    <hr>
                    <p>Kleur: ${j.colour}</p>
                    <hr>
                    <p>Prijs: ${j.price}</p>
                    <hr>
                </div>
            </div>
        `;
        }
    });
const hoodieContainer = document.querySelector(".hoodie-container");

// Hier wordt de route gefetcht
fetch('/hoodies')
    .then((response) => response.json())
    .then((data) => {
        const hoodies = data;
        for (let i = 0; i < hoodies.length; i++) {
            const hoodie = hoodies[i];
            // Hier wordt de card met data in de container gezet
            hoodieContainer.innerHTML += `
            <div class="card">
                <h2>${hoodie.title}</h2>
                <div class="content">
                    <img src="${hoodie.imageUrl}">
                    <hr>
                    <p>Beschrijving: ${hoodie.description}</p>
                    <hr>
                    <p>Kleur: ${hoodie.colour}</p>
                    <hr>
                    <p>Prijs: ${hoodie.price}</p>
                    <hr>
                </div>
            </div>
        `;
        }
    });
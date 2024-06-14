const tshirtContainer = document.querySelector('.tshirt-container');

// Hier wordt de route gefetcht
fetch('/tshirts')
    .then((response) => response.json())
    .then((data) => {
        console.log('Ontvangen data is:', data);
        const tshirts = data;
        for (let i = 0; i < tshirts.length; i++) {
            const tshirt = tshirts[i];
            // Hier wordt de card met data in de container gezet
            tshirtContainer.innerHTML += `
            <div class="card">
                <h2>${tshirt.title}</h2>
                <div class="content">
                    <img src="${tshirt.imageUrl}">
                    <hr>
                    <p>Beschrijving: ${tshirt.description}</p>
                    <hr>
                    <p>Kleur: ${tshirt.colour}</p>
                    <hr>
                    <p>Prijs: ${tshirt.price}</p>
                    <hr>
                </div>
            </div>
    
        `;
        }
    });
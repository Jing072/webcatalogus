const euContainer = document.querySelector(".eu-container");

// Hier wordt de route gefetcht
fetch("/europeaan")
    .then((response) => response.json())
    .then((data) => {

        const europeaan = data;
        for (let i = 0; i < europeaan.length; i++) {
            const euSnacks = europeaan[i];
            // Hier wordt de card met data in de container gezet
            euContainer.innerHTML += `
                <div class="snackcard">
                    <h2> ${euSnacks.title} </h2>
                    <div class="info">
                        <img src="${euSnacks.img}">
                        <p> ${euSnacks.description} </p>
                        <p> ${euSnacks.price} </p>
                    </div>
                </div>
                `;
        }
    });


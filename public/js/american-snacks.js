const americanContainer = document.querySelector(".american-container");

// Hier wordt de route gefetcht
fetch("/american")
    .then((response) => response.json())
    .then((data) => {

        const american = data;
        for (let i = 0; i < american.length; i++) {
            const americanSnacks = american[i];
            // Hier wordt de card met data in de container gezet
            americanContainer.innerHTML += `
                <div class="snackcard">
                    <h2> ${americanSnacks.title} </h2>
                    <div class="info">
                        <img src="${americanSnacks.img}">
                        <p> ${americanSnacks.description} </p>
                        <p> ${americanSnacks.price} </p>
                    </div>
                </div>
                `;
        }
    });
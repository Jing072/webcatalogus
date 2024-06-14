// Variabelen
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const btnSend = document.querySelector(".btn-send");

// Event listener
btnSend.addEventListener("click", function () {
    // Hier wordt er gekeken of er iets fouts gaat, als dat gebeurd dan staat er "Vul dit veld in"
    if (!nameInput.checkValidity()) {
        nameInput.reportValidity();
    }

    if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
    }

    if (!messageInput.checkValidity()) {
        messageInput.reportValidity();
    }

    // Als alles klopt dan krijg je een melding te zien
    if (nameInput.checkValidity() && emailInput.checkValidity() && messageInput.checkValidity()) {
        alert("Bedankt voor het bericht, we zullen zo snel mogelijk contact leggen.");
    }
});


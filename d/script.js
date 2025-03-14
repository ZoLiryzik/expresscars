function renderServices(services) {
    const servicesContainer = document.getElementById("services");
    servicesContainer.innerHTML = "";

    services.forEach(service => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("card");

        serviceCard.innerHTML = `
            <div class="card__poster" style="background-image: url(${service.image});"></div>
            <div class="card__databox">
                <h2 class="card-databox__heading">${service.title}</h2>
                <p class="card-databox__description">${service.description}</p>
                <button class="card-databox__read-more-btn" onclick="openModal(${service.id})">Подробнее</button>
            </div>
        `;

        servicesContainer.appendChild(serviceCard);
    });
}

function renderModals(modals) {
    const modalsContainer = document.getElementById("modals");
    modalsContainer.innerHTML = "";

    modals.forEach(modal => {
        const modalElement = document.createElement("div");
        modalElement.classList.add("modal");
        modalElement.setAttribute("id", `modal-${modal.id}`);

        modalElement.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onclick="closeModal(${modal.id})">&times;</span>
                    <h2>${modal.title}</h2>
                </div>
                <div class="modal-body">
                    <p>${modal.modalContent}</p>
                </div>
            </div>
        `;

        modalsContainer.appendChild(modalElement);
    });
}

function openModal(id) {
    document.getElementById(`modal-${id}`).style.display = "block";
}

function closeModal(id) {
    document.getElementById(`modal-${id}`).style.display = "none";
}

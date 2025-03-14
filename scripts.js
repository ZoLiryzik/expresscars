document.addEventListener("DOMContentLoaded", function() {
    const servicesContainer = document.getElementById("services");
    const services = JSON.parse(servicesData);

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
});

function openModal(id) {
    const modal = document.getElementById(`modal${id}`);
    modal.style.display = "block";
}

function closeModal(id) {
    const modal = document.getElementById(`modal${id}`);
    modal.style.display = "none";
}

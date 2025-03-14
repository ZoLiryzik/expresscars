document.addEventListener("DOMContentLoaded", function() {
    const servicesContainer = document.getElementById("services");
    const searchInput = document.getElementById("search");
    const modalsContainer = document.getElementById("modals");

    fetch('data.json')
        .then(response => response.json())
        .then(services => {
            renderServices(services);
            renderModals(services);
            searchInput.addEventListener("input", function() {
                const filteredServices = services.filter(service => 
                    service.title.toLowerCase().includes(this.value.toLowerCase())
                );
                renderServices(filteredServices);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});

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
        `

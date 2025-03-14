document.addEventListener("DOMContentLoaded", function() {
    const servicesContainer = document.getElementById("services");
    const searchInput = document.getElementById("search");
    const modalsContainer = document.getElementById("modals");

    let servicesData = [];
    let modalsData = [];

    Promise.all([
        fetch('data.json')
            .then(response => response.json())
            .then(services => {
                servicesData = services;
                renderServices(services);
            })
            .catch(error => console.error('Ошибка загрузки данных услуг:', error)),

        fetch('modals.json')
            .then(response => response.json())
            .then(modals => {
                modalsData = modals;
                renderModals(modals);
            })
            .catch(error => console.error('Ошибка загрузки данных модальных окон:', error))
    ]);

    searchInput.addEventListener("input", function() {
        const filteredServices = servicesData.filter(service => 
            service.title.toLowerCase().includes(this.value.toLowerCase()) ||
            service.description.toLowerCase().includes(this.value.toLowerCase())
        );
        renderServices(filteredServices);
    });
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

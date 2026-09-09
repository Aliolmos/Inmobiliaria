function getProperties() {
    return JSON.parse(localStorage.getItem('properties')) || [];
}

function getAgencies() {
    return JSON.parse(localStorage.getItem('agencies')) || [];
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function formatPrice(currency, price) {
    return `${currency} ${Number(price).toLocaleString('es-AR')}`;
}

function toggleFavorite(id) {
    let favs = getFavorites();
    const index = favs.indexOf(Number(id));
    if (index > -1) {
        favs.splice(index, 1);
        showToast("Propiedad eliminada de favoritos");
    } else {
        favs.push(Number(id));
        showToast("Propiedad guardada en favoritos");
    }
    saveFavorites(favs);
    renderCards();
}

function createPropertyCard(prop) {
    const favs = getFavorites();
    const isFav = favs.includes(Number(prop.id));
    return `
        <div class="card">
            <div class="card-img-container">
                <span class="card-badge">${prop.operation}</span>
                <button class="card-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite(${prop.id})">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
                <img src="${prop.images[0]}" alt="${prop.title}">
            </div>
            <div class="card-body">
                <div class="card-price">${formatPrice(prop.currency, prop.price)}</div>
                <h3 class="card-title">${prop.title}</h3>
                <p class="card-location"><i class="fa-solid fa-location-dot"></i> ${prop.neighborhood}, ${prop.city}</p>
                <div class="card-features">
                    <span><i class="fa-solid fa-bed"></i> ${prop.bedrooms} hab.</span>
                    <span><i class="fa-solid fa-bath"></i> ${prop.bathrooms} baño${prop.bathrooms > 1 ? 's' : ''}</span>
                    <span><i class="fa-solid fa-ruler-combined"></i> ${prop.area} m²</span>
                </div>
                <div class="card-footer">
                    <span>Por <strong>${prop.agency}</strong></span>
                    <a href="propiedad.html?id=${prop.id}" class="btn btn-primary btn-sm">Ver propiedad</a>
                </div>
            </div>
        </div>
    `;
}
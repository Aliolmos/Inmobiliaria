const initialAgencies = [
    {
        id: 1,
        name: "Inmobiliaria Norte",
        logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        description: "Líderes en comercialización de desarrollos residenciales y comerciales en la zona norte de Córdoba.",
        city: "Córdoba",
        phone: "+54 9 351 456-7890",
        email: "contacto@inmobi-norte.com",
        whatsapp: "+5493514567890",
        instagram: "@inmobiliarianorte",
        address: "Av. Rafael Núñez 4500",
        schedule: "Lun a Vie 9:00 a 18:00 hs"
    },
    {
        id: 2,
        name: "Urbania Propiedades",
        logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        description: "Especialistas en departamentos de categoría en Nueva Córdoba, Centro y Alberdi.",
        city: "Córdoba",
        phone: "+54 9 351 789-1234",
        email: "info@urbaniaprop.com",
        whatsapp: "+5493517891234",
        instagram: "@urbaniaprop",
        address: "Obispo Trejo 850",
        schedule: "Lun a Vie 9:30 a 19:00 hs"
    },
    {
        id: 3,
        name: "Sierras & Asociados",
        logo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
        banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        description: "Expertos en casas de categoría, barrios cerrados y terrenos en las Sierras de Córdoba.",
        city: "Villa Carlos Paz",
        phone: "+54 9 354 122-3344",
        email: "ventas@sierrasasociados.com",
        whatsapp: "+5493541223344",
        instagram: "@sierrasasociados",
        address: "Av. General Paz 120",
        schedule: "Lun a Sáb 10:00 a 17:00 hs"
    }
];

const initialProperties = [
    {
        id: 1,
        title: "Moderno Departamento 2 Dormitorios en Nueva Córdoba",
        description: "Excelente departamento ubicado en zona estratégica de Nueva Córdoba. Cuenta con living comedor luminoso, cocina integrada totalmente equipada, dos dormitorios con placares y un baño completo. Balcón al frente con hermosa vista.",
        operation: "alquiler",
        type: "departamento",
        city: "Córdoba",
        neighborhood: "Nueva Córdoba",
        address: "Buenos Aires 750",
        price: 450000,
        currency: "$",
        bedrooms: 2,
        bathrooms: 1,
        area: 65,
        garage: false,
        pool: true,
        balcony: true,
        terrace: false,
        pets: true,
        agencyId: 2,
        agency: "Urbania Propiedades",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1000&q=80"
        ],
        date: "2026-08-01",
        status: "PUBLICADA",
        views: 1250,
        consultas: 24
    },
    {
        id: 2,
        title: "Exclusiva Casa en Barrio Cerrado El Durazno",
        description: "Propiedad premium de categoría sobre lote central de 1200m². Living comedor con doble altura, cocina comedor, 4 dormitorios (principal en suite con vestidor), quincho cerrado con asador, piscina climatizada y jardín parquizado.",
        operation: "venta",
        type: "casa",
        city: "Córdoba",
        neighborhood: "Valle Escondido",
        address: "Los Álamos 300",
        price: 320000,
        currency: "USD",
        bedrooms: 4,
        bathrooms: 3,
        area: 320,
        garage: true,
        pool: true,
        balcony: true,
        terrace: true,
        pets: true,
        agencyId: 1,
        agency: "Inmobiliaria Norte",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80"
        ],
        date: "2026-08-05",
        status: "PUBLICADA",
        views: 3400,
        consultas: 52
    },
    {
        id: 3,
        title: "Lote Panorámico en Villa Carlos Paz",
        description: "Excelente terreno con pendiente positiva y vista abierta al Lago San Roque. Todos los servicios subterráneos listos para construir. Escritura inmediata.",
        operation: "venta",
        type: "terreno",
        city: "Villa Carlos Paz",
        neighborhood: "Costa Azul",
        address: "Las Golondrinas s/n",
        price: 65000,
        currency: "USD",
        bedrooms: 0,
        bathrooms: 0,
        area: 850,
        garage: false,
        pool: false,
        balcony: false,
        terrace: false,
        pets: true,
        agencyId: 3,
        agency: "Sierras & Asociados",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1524813686514-a57563d77840?auto=format&fit=crop&w=1000&q=80"
        ],
        date: "2026-08-10",
        status: "PUBLICADA",
        views: 890,
        consultas: 14
    }
];

// Inicializar LocalStorage si no existe
if (!localStorage.getItem('properties')) {
    localStorage.setItem('properties', JSON.stringify(initialProperties));
}
if (!localStorage.getItem('agencies')) {
    localStorage.setItem('agencies', JSON.stringify(initialAgencies));
}
if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]));
}
if (!localStorage.getItem('currentUser')) {
    localStorage.setItem('currentUser', JSON.stringify({ role: 'agency', id: 1, name: 'Inmobiliaria Norte' }));
}
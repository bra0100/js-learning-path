// 🎯 JavaScript Basics - Variables Practice
// Repositorio: js-learning-path

console.log("🚀 Iniciando mi aprendizaje de JavaScript!");

// 1. Variables y constantes
let userName = "Bryant";
const MAX_SCORE = 100;

// 2. Arrays y objetos
const metalBands = ["Emperor", "Gorguts", "Ulcerate", "Imperial Triumphant"];
const bandInfo = {
    name: "Ulcerate",
    genre: "Avant-garde/Progressive Death Metal",
    formed: 2000,
    active: true
};

// 3. Funciones básicas
function calculateConcertPrice(basePrice, vip = false) {
    return vip ? basePrice * 1.5 : basePrice;
}

// 4. Ejemplos prácticos
console.log(`🤘 Hola ${userName}, bienvenido al aprendizaje!`);
console.log(`🎸 Bandas: ${metalBands.join(", ")}`);
console.log(`💵 Precio VIP: $${calculateConcertPrice(50, true)}`);

// Exportar para uso futuro
module.exports = {
    userName,
    MAX_SCORE,
    metalBands,
    bandInfo,
    calculateConcertPrice
};
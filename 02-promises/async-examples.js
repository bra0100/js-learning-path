// ⚡ JavaScript Promises & Async/Await Practice
// Repositorio: js-learning-path

console.log("🔮 Practicando Promesas y Async/Await");

// 1. Promesa simple - Simular buscar información de banda
function fetchBandInfo(bandName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!bandName) {
                reject("❌ Error: Nombre de banda requerido");
            } else {
                resolve(`🎸 Información de ${bandName} cargada correctamente`);
            }
        }, 2000);
    });
}

// 2. Async/Await - Manejar la promesa
async function getBandData(bandName) {
    try {
        console.log("📡 Buscando datos...");
        const result = await fetchBandInfo(bandName);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

// 3. Múltiples promesas - Obtener varias bandas
async function getMultipleBands() {
    const bands = ["Gorguts", "Ulcerate", "Tool"];

    try {
        console.log("🔄 Obteniendo múltiples bandas...");
        const requests = bands.map(band => fetchBandInfo(band));
        const results = await Promise.all(requests);

        results.forEach((result, index) => {
            console.log(`✅ ${bands[index]}: ${result}`);
        });

        return results;
    } catch (error) {
        console.error("Error en una de las peticiones:", error);
    }
}

// Ejecutar ejemplos
getBandData("Tool")
    .then(() => getMultipleBands())
    .catch(console.error);

module.exports = {
    fetchBandInfo,
    getBandData,
    getMultipleBands
};
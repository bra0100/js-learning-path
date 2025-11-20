// 🎨 DOM Manipulation & Event Handlers Practice
// Repository: js-learning-path

console.log("🖱️ Practicing DOM Manipulation");

// Simulating functions to manage a metal concerts page
class ConcertManager {
    constructor() {
        this.concerts = [];
        this.favoriteBands = new Set();
    }

    // 1. Add concert
    addConcert(concert) {
        this.concerts.push(concert);
        console.log(`🎫 Concert added: ${concert.band} in ${concert.city}`);
        return this.concerts;
    }

    // 2. Find concerts by city
    findConcertsByCity(city) {
        const results = this.concerts.filter(concert =>
            concert.city.toLowerCase().includes(city.toLowerCase())
        );
        console.log(`📍 Concerts in ${city}: ${results.length} found`);
        return results;
    }

    // 3. Add band to favorites
    addToFavorites(bandName) {
        this.favoriteBands.add(bandName);
        console.log(`⭐ ${bandName} added to favorites`);
        return this.favoriteBands;
    }

    // 4. Simulate click event
    handleConcertClick(concertId) {
        console.log(`🎯 Concert clicked: ${concertId}`);
        // In a real app, we would show details here
        return `Showing details for concert ${concertId}`;
    }

    // 5. Find concerts by band
    findConcertsByBand(bandName) {
        const results = this.concerts.filter(concert =>
            concert.band.toLowerCase().includes(bandName.toLowerCase())
        );
        console.log(`🎸 ${bandName} concerts: ${results.length} found`);
        return results;
    }
}

// Usage examples
const manager = new ConcertManager();

// Add some technical/progressive death metal concerts
manager.addConcert({
    band: "Gorguts",
    city: "Berlin",
    date: "2024-06-15",
    price: 45,
    genre: "Technical Death Metal"
});

manager.addConcert({
    band: "Ulcerate",
    city: "London",
    date: "2024-07-20",
    price: 40,
    genre: "Technical Death Metal"
});

manager.addConcert({
    band: "Deathspell Omega",
    city: "Paris",
    date: "2024-08-10",
    price: 50,
    genre: "Avant-garde Black Metal"
});

manager.addConcert({
    band: "Ihsahn",
    city: "Oslo",
    date: "2024-09-05",
    price: 55,
    genre: "Progressive Metal"
});

manager.addConcert({
    band: "Gorguts",
    city: "Amsterdam",
    date: "2024-10-12",
    price: 48,
    genre: "Technical Death Metal"
});

// Test the functions
manager.findConcertsByCity("berlin");
manager.findConcertsByBand("gorguts");
manager.addToFavorites("Ulcerate");
manager.addToFavorites("Deathspell Omega");
manager.handleConcertClick("gorguts-berlin-2024");

// Display favorite bands
console.log(`🤘 Favorite bands: ${Array.from(manager.favoriteBands).join(', ')}`);

module.exports = ConcertManager;
function main() {
    //Here code to exe
}

// theres many way of functions:

// 🎸 Metal Band Examples for Learning Functions

// Array of technical/progressive metal bands
const metalBands = [
    { name: "Gorguts", genre: "Technical Death Metal", country: "Canada" },
    { name: "Ulcerate", genre: "Technical Death Metal", country: "New Zealand" },
    { name: "Deathspell Omega", genre: "Avant-garde Black Metal", country: "France" },
    { name: "Ihsahn", genre: "Progressive Metal", country: "Norway" },
    { name: "Meshuggah", genre: "Djent", country: "Sweden" }
];

// Practice filter() method
const technicalDeathBands = metalBands.filter(band =>
    band.genre === "Technical Death Metal"
);

// Practice map() method  
const bandNames = metalBands.map(band => band.name);

// Practice find() method
const frenchBand = metalBands.find(band => band.country === "France");

console.log("🎸 Learning array methods with metal bands!");
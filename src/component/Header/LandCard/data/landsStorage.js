const STORAGE_KEY = "lands";

const initialLands = [
  {
    id: 1,
    price: 5000,
    area: 10,
    city: "Hama",
    description: "Agricultural land suitable for investment.",
    firstName: "Asaad",
    lastName: "Ali",
    landMedia: ["../../../../public/lands/p1.jpg"],
  },
  {
    id: 2,
    price: 7500,
    area: 15,
    city: "Homs",
    description: "Fertile agricultural land with a large area.",
    firstName: "Mohammad",
    lastName: "Khaled",
    landMedia: ["../../../../public/lands/p1.jpg"],
  },
  {
    id: 3,
    price: 6000,
    area: 12,
    city: "Aleppo",
    description: "Land suitable for growing different crops.",
    firstName: "Sara",
    lastName: "Hassan",
    landMedia: ["../../../../public/lands/p1.jpg"],
  },
  {
    id: 4,
    price: 6000,
    area: 12,
    city: "Aleppo",
    description: "Land suitable for growing different crops.",
    firstName: "Nour",
    lastName: "Hasan",
    landMedia: ["../../../../../public/lands/p1.jpg"],
  }
];


export function getLands() {
  const savedLands = localStorage.getItem(STORAGE_KEY);

  if (savedLands !== null) {
    try {
      const parsedLands = JSON.parse(savedLands);

      if (Array.isArray(parsedLands)) {
        return parsedLands;
      }
    } catch (error) {
      console.error("Invalid lands data:", error);
    }
  }

 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialLands));

  return initialLands;
}


export function addLand(land) {
  const lands = getLands();

  const newLand = {
    ...land,
    id: Date.now(),
    landMedia: land.landMedia || [],
  };

  const updatedLands = [...lands, newLand];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLands));

  return newLand;
}


export function getLandById(id) {
  return getLands().find((land) => land.id === Number(id));
}



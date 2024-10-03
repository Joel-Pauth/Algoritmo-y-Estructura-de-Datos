console.log("Proyecto de asignacion Algoritmo y Estructura de Datos") 

//1.Ejercicio Marcas
export const marcas = [
    { marca: "Toyota", "modelo": "Corolla", "combustible": "Gasolina" },
    { marca: "Honda", "modelo": "Civic", "combustible": "Gasolina" },
    { marca: "Ford", "modelo": "Focus", "combustible": "Gasolina" },
    { marca: "Chevrolet", "modelo": "Malibu", "combustible": "Gasolina" },
    { marca: "Nissan", "modelo": "Altima", "combustible": "Gasolina" },
    { marca: "BMW", "modelo": "X5", "combustible": "Diesel" },
    { marca: "Audi", "modelo": "A4", "combustible": "Gasolina" },
    { marca: "Mercedes-Benz", "modelo": "C-Class", "combustible": "Gasolina" },
    { marca: "Volkswagen", "modelo": "Golf", "combustible": "Gasolina" },
    { marca: "Hyundai", "modelo": "Elantra", "combustible": "Gasolina" },
    { marca: "Kia", "modelo": "Sorento", "combustible": "Gasolina" },
    { marca: "Mazda", "modelo": "CX-5", "combustible": "Gasolina" },
    { marca: "Subaru", "modelo": "Outback", "combustible": "Gasolina" },
    { marca: "Tesla", "modelo": "Model S", "combustible": "Eléctrico" },
    { marca: "Volvo", "modelo": "XC90", "combustible": "Gasolina" },
    { marca: "Lexus", "modelo": "RX", "combustible": "Gasolina" },
    { marca: "Jaguar", "modelo": "F-Pace", "combustible": "Gasolina" },
    { marca: "Land Rover", "modelo": "Range Rover", "combustible": "Diesel" },
    { marca: "Porsche", "modelo": "Cayenne", "combustible": "Gasolina" },
    { marca: "Ferrari", "modelo": "488", "combustible": "Gasolina" },
    { marca: "Lamborghini", "modelo": "Huracan", "combustible": "Gasolina" },
    { marca: "Maserati", "modelo": "Levante", "combustible": "Gasolina" },
    { marca: "Bentley", "modelo": "Bentayga", "combustible": "Gasolina" },
    { marca: "Rolls-Royce", "modelo": "Phantom", "combustible": "Gasolina" },
    { marca: "Aston Martin", "modelo": "DBX", "combustible": "Gasolina" },
    { marca: "McLaren", "modelo": "720S", "combustible": "Gasolina" },
    { marca: "Bugatti", "modelo": "Chiron", "combustible": "Gasolina" },
    { marca: "Pagani", "modelo": "Huayra", "combustible": "Gasolina" },
    { marca: "Koenigsegg", "modelo": "Jesko", "combustible": "Gasolina" },
    { marca: "Rimac", "modelo": "C_Two", "combustible": "Eléctrico" }
];

//metodo o funcion para que me cuente el numero de marcas 
function contarYOrdenarMarcas(marcas: string[]): { total: number; marcasOrdenadas: string[] } {
    const marcasOrdenadas = marcas.sort();
    const total = marcasOrdenadas.reduce((contador) => contador + 1, 0);
    return { total, marcasOrdenadas };
}
const contar = marcas.reduce((A) => A + 1, 0);
//metodo para que me ordene de la A a la Z 
marcas.sort((A, B) => A.marca.localeCompare(B.marca));

console.log("Numero de marcas :",contar,
  "Orden alfabetico :", marcas);
 
  


//Ejercicio Inventario
export const inventory = [
    { name: "asparagus", "type": "vegetables", quantity: 5 },
    { name: "carrot", "type": "vegetables", quantity: 10 },
    { name: "broccoli", "type": "vegetables", quantity: 7 },
    { name: "spinach", "type": "vegetables", quantity: 12 },
    { name: "potato", "type": "vegetables", quantity: 20 },
    { name: "tomato", "type": "vegetables", quantity: 15 },
    { name: "cucumber", "type": "vegetables", quantity: 8 },
    { name: "bell pepper", "type": "vegetables", quantity: 6 },
    { name: "lettuce", "type": "vegetables", quantity: 9 },
    { name: "onion", "type": "vegetables", quantity: 14 },
    { name: "garlic", "type": "vegetables", quantity: 11 },
    { name: "zucchini", "type": "vegetables", quantity: 4 },
    { name: "eggplant", "type": "vegetables", quantity: 5 },
    { name: "cabbage", "type": "vegetables", quantity: 13 },
    { name: "cauliflower", "type": "vegetables", quantity: 7 },
    { name: "peas", "type": "vegetables", quantity: 16 },
    { name: "corn", "type": "vegetables", quantity: 18 },
    { name: "beetroot", "type": "vegetables", quantity: 3 },
    { name: "radish", "type": "vegetables", quantity: 5 },
    { name: "pumpkin", "type": "vegetables", quantity: 2 },
    { name: "mushroom", "type": "vegetables", quantity: 10 },
    { name: "apple", "type": "fruits", quantity: 25 },
    { name: "banana", "type": "fruits", quantity: 30 },
    { name: "orange", "type": "fruits", quantity: 20 },
    { name: "grape", "type": "fruits", quantity: 15 },
    { name: "strawberry", "type": "fruits", quantity: 18 },
    { name: "blueberry", "type": "fruits", quantity: 12 },
    { name: "pineapple", "type": "fruits", quantity: 5 },
    { name: "mango", "type": "fruits", quantity: 10 },
    { name: "watermelon", "type": "fruits", quantity: 7 },
    { name: "peach", "type": "fruits", quantity: 8 },
    { name: "cherry", "type": "fruits", quantity: 14 },
    { name: "pear", "type": "fruits", quantity: 9 },
    { name: "kiwi", "type": "fruits", quantity: 6 },
    { name: "plum", "type": "fruits", quantity: 11 },
    { name: "lemon", "type": "fruits", quantity: 13 },
    { name: "lime", "type": "fruits", quantity: 4 },
    { name: "coconut", "type": "fruits", quantity: 3 },
    { name: "avocado", "type": "fruits", quantity: 5 },
    { name: "milk", "type": "dairy", quantity: 20 },
    { name: "cheese", "type": "dairy", quantity: 15 },
    { name: "yogurt", "type": "dairy", quantity: 10 },
    { name: "butter", "type": "dairy", quantity: 8 },
    { name: "cream", "type": "dairy", quantity: 6 },
    { name: "bread", "type": "bakery", quantity: 25 },
    { name: "croissant", "type": "bakery", quantity: 12 },
    { name: "bagel", "type": "bakery", quantity: 18 },
    { name: "muffin", "type": "bakery", quantity: 10 }
];
 //Buscando el producto mayor  frecuencia y mencionar cuanto hay

function Producto_con_Mucha_cantidad(inventory: { name: string; type: string; quantity: number }[]): { name: string; quantity: number } | undefined {
    let maxQuantity = 0;
    let product_With_Quantity: { name: string; quantity: number } | undefined;
  
    for (const product of inventory) {
      if (product.quantity > maxQuantity) {
        maxQuantity = product.quantity;
        product_With_Quantity = product;
      }
    }
  
    return product_With_Quantity;
  }
  
  const producto_de_Inventorio = Producto_con_Mucha_cantidad(inventory);
  
  if (producto_de_Inventorio) {
    console.log(`El producto con mayor existencia es ${producto_de_Inventorio.name} con ${producto_de_Inventorio.quantity} units.`);
  } else {
    console.log("No hay producto en el inventario.");
  }






//Ejercicio Heroes
export const heroes = [
    {
      "name": "Superman",
      city: "Metropolis",
      "power": "Super strength, flight, x-ray vision",
      "type": "Alien"
    },
    {
      "name": "Batman",
      city: "Gotham",
      "power": "Peak human condition, martial arts, detective skills",
      "type": "Human"
    },
    {
      "name": "Wonder Woman",
      city: "Themyscira",
      "power": "Super strength, agility, combat skills",
      "type": "Demigod"
    },
    {
      "name": "Spider-Man",
      city: "New York",
      "power": "Wall-crawling, spider-sense, agility",
      "type": "Mutated Human"
    },
    {
      "name": "Iron Man",
      city: "New York",
      "power": "Genius intellect, powered armor suit",
      "type": "Human"
    },
    {
      "name": "Thor",
      city: "Asgard",
      "power": "God of Thunder, super strength, control over lightning",
      "type": "God"
    },
    {
      "name": "Hulk",
      city: "New York",
      "power": "Super strength, invulnerability",
      "type": "Mutated Human"
    },
    {
      "name": "Black Widow",
      city: "Stalingrad",
      "power": "Expert martial artist, spy skills",
      "type": "Human"
    },
    {
      "name": "Captain America",
      city: "Brooklyn",
      "power": "Super strength, agility, expert tactician",
      "type": "Enhanced Human"
    },
    {
      "name": "Flash",
      city: "Central City",
      "power": "Super speed",
      "type": "Mutated Human"
    },
    {
      "name": "Green Lantern",
      city: "Coast City",
      "power": "Power ring with various abilities",
      "type": "Human"
    },
    {
      "name": "Aquaman",
      city: "Atlantis",
      "power": "Underwater breathing, super strength, control over sea life",
      "type": "Atlantean"
    },
    {
      "name": "Doctor Strange",
      city: "New York",
      "power": "Mastery of magic, time manipulation",
      "type": "Human"
    },
    {
      "name": "Black Panther",
      city: "Wakanda",
      "power": "Enhanced strength, agility, advanced technology",
      "type": "Enhanced Human"
    },
    {
      "name": "Scarlet Witch",
      city: "Sokovia",
      "power": "Reality manipulation, telekinesis",
      "type": "Mutated Human"
    },
    {
      "name": "Vision",
      city: "New York",
      "power": "Density manipulation, super strength, flight",
      "type": "Android"
    },
    {
      "name": "Ant-Man",
      city: "San Francisco",
      "power": "Size manipulation, communication with insects",
      "type": "Human"
    },
    {
      "name": "Wasp",
      city: "San Francisco",
      "power": "Size manipulation, flight, bio-electric energy blasts",
      "type": "Human"
    },
    {
      "name": "Hawkeye",
      city: "Waverly",
      "power": "Expert marksman, martial artist",
      "type": "Human"
    },
    {
      "name": "Star-Lord",
      city: "Missouri",
      "power": "Expert pilot, marksman, enhanced durability",
      "type": "Human/Celestial Hybrid"
    }
];
  
// Contar héroes por ciudad y visualizar en que ciudad hay mas heroes
const city: { [key: string]: number } = heroes.reduce((acc, hero) => {
    acc[hero.city] = (acc[hero.city] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
  
  
const mostCity = Object.keys(city).reduce((a, b) => city[a] > city[b] ? a : b);
  
console.log(city);  
console.log(`El lugar donde hay mas heroes es ${mostCity}`); 






//Ejercicio Persona

export const people = [
    { "id": 1, "name": "Juan", edad: 30, "sexo": "Masculino" },
    { "id": 2, "name": "Pedro", edad: 25, "sexo": "Masculino" },
    { "id": 3, "name": "María", edad: 28, "sexo": "Femenino" },
    { "id": 4, "name": "Ana", edad: 22, "sexo": "Femenino" },
    { "id": 5, "name": "Luis", edad: 35, "sexo": "Masculino" },
    { "id": 6, "name": "Sofía", edad: 27, "sexo": "Femenino" },
    { "id": 7, "name": "Carlos", edad: 32, "sexo": "Masculino" },
    { "id": 8, "name": "Laura", edad: 26, "sexo": "Femenino" },
    { "id": 9, "name": "Jorge", edad: 29, "sexo": "Masculino" },
    { "id": 10, "name": "Marta", edad: 24, "sexo": "Femenino" },
    { "id": 11, "name": "Andrés", edad: 31, "sexo": "Masculino" },
    { "id": 12, "name": "Elena", edad: 23, "sexo": "Femenino" },
    { "id": 13, "name": "Miguel", edad: 34, "sexo": "Masculino" },
    { "id": 14, "name": "Lucía", edad: 21, "sexo": "Femenino" },
    { "id": 15, "name": "Fernando", edad: 33, "sexo": "Masculino" },
    { "id": 16, "name": "Isabel", edad: 30, "sexo": "Femenino" },
    { "id": 17, "name": "Ricardo", edad: 28, "sexo": "Masculino" },
    { "id": 18, "name": "Patricia", edad: 27, "sexo": "Femenino" },
    { "id": 19, "name": "Roberto", edad: 26, "sexo": "Masculino" },
    { "id": 20, "name": "Gabriela", edad: 25, "sexo": "Femenino" },
    { "id": 21, "name": "Alberto", edad: 24, "sexo": "Masculino" },
    { "id": 22, "name": "Verónica", edad: 23, "sexo": "Femenino" },
    { "id": 23, "name": "Daniel", edad: 22, "sexo": "Masculino" },
    { "id": 24, "name": "Natalia", edad: 21, "sexo": "Femenino" },
    { "id": 25, "name": "Francisco", edad: 35, "sexo": "Masculino" },
    { "id": 26, "name": "Carmen", edad: 34, "sexo": "Femenino" },
    { "id": 27, "name": "Héctor", edad: 33, "sexo": "Masculino" },
    { "id": 28, "name": "Alicia", edad: 32, "sexo": "Femenino" },
    { "id": 29, "name": "Sergio", edad: 31, "sexo": "Masculino" },
    { "id": 30, "name": "Paula", edad: 30, "sexo": "Femenino" }
];

//En este metodo se utiliza para hacer la suma de las edades y tambien se da el promedio de todas las edades
const EdadesTotal = people.reduce((sumarEdad,edades)=> sumarEdad+edades.edad,0)
const promedio=EdadesTotal/people.length

console.log(`La suma de las edades es: ${EdadesTotal}\n  El Promedio de las edades es:${promedio}`);


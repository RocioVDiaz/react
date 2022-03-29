/* import titular from "./img/camiseta_2022.jpg";
import alternativa from "./img/alternativa-2022-blanca.jpg";
import paladar from "./img/paladar-negro-2022.jpg";
import retro from "./img/retro_1995.jpeg";
import campeon from "./img/campeon_2010.jpg";
import sudamericana from "./img/camiseta_2017.jpg"; */

const camisetas = [
  {
    id: 0,
    nombre: "Camiseta Titular 2021/22",
    descripcion: "Camiseta Puma Titular de Juego 2021/22 ",
    precio: 8999,
    talle: ["S", "M", "L", "XL"],
    img: '/img/camiseta_2022.jpg',
  },
  {
    id: 1,
    nombre: "Camiseta Alternativa Blanca",
    descripcion: "Camiseta Puma Alternativa de Juego 2021-22 ",
    precio: 10599,
    talle: ["S", "M", "L", "XL"],
    img: '/img/alternativa-2022-blanca.jpg',
  },
  {
    id: 2,
    nombre: "Camiseta Paladar Negro",
    descripcion: "Camiseta Puma 3° Edición 2021-22",
    precio: 11399,
    talle: ["S", "M", "L", "XL"],
    img: '/img/paladar-negro-2022.jpg',
  },
  {
    id: 3,
    nombre: "Camiseta Retro Adidas 1995",
    descripcion: "Camiseta Adidas sponsor Ades titular",
    precio: 5500,
    talle: ["S", "M", "L", "XL"],
    img: '/img/retro_1995.jpeg',
  },
  {
    id: 4,
    nombre: "Camiseta Campeón 2010",
    descripcion: "Camiseta Puma sponsor Motomel alternativa",
    precio: 4300,
    talle: ["S", "M", "L", "XL"],
    img: '/img/campeon_2010.jpg',
  },
  {
    id: 5,
    nombre: "Camiseta Campeón 2017",
    descripcion: "Camiseta Puma roja con parche Sudamericana",
    precio: 7000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/camiseta_2017.jpg',
  },
];

export const getFetch = new Promise((resolve, reject) => {
  let condition = true;

  setTimeout(() => {
    if (condition) {
      resolve(camisetas);
    } else {
      reject("400 not found");
    }
  }, 2000);
});

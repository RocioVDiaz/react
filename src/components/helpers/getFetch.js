const indumentaria = [
  {
    id: 0,
    nombre: "Camiseta Titular 2021/22",
    descripcion: "Camiseta Puma Titular de Juego 2021/22 ",
    precio: 10500,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/camiseta/nueva.jpg',
    categoria: "camiseta",
  },
  {
    id: 1,
    nombre: "Camiseta Alternativa Pro Azul",
    descripcion: "Camiseta Puma Alternativa 2020 ",
    precio: 6500,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/camiseta/azul.png',
    categoria: "camiseta",
  },
  {
    id: 2,
    nombre: "Camiseta Entrenamiento Azul ",
    descripcion: "Camiseta de Entrenamiento 2022",
    precio: 8000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/camiseta/entrenamiento.jpg',
    categoria:"camiseta",
  },
  {
    id: 3,
    nombre: "Camiseta Titular 2021",
    descripcion: "Camiseta Puma titular 2021",
    precio: 7000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/camiseta/roja.jpg',
    categoria:"camiseta",
  },
  {
    id: 4,
    nombre: "Camiseta Arquero",
    descripcion: "Camiseta Puma Arquero Naranja",
    precio: 7000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/camiseta/arquero.png',
    categoria:"camiseta",
  },
  {
    id: 5,
    nombre: "Camiseta Campeón 2017",
    descripcion: "Camiseta Puma roja con parche Sudamericana",
    precio: 7000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/camiseta/sudamericana.jpg',
    categoria: "camiseta"
  },
  {
    id: 6,
    nombre: "Campera Azul",
    descripcion: "Campera Azul Puma",
    precio: 10000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/abrigo/campera.jpg',
    categoria: "campera"
  },
  {
    id: 7,
    nombre: "Campera Puma Iconic Azul",
    descripcion: "Campera Iconic Azul",
    precio: 12000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/abrigo/camuflado.jpg',
    categoria: "campera"
  },
  {
    id: 8,
    nombre: "Botinero",
    descripcion: "Botinero Diablo",
    precio: 2000,
    img: '/img/independiente/accesorios/botinero.png',
    categoria: "accesorios"
  },
  {
    id: 9,
    nombre: "Gorra Paladar Negro",
    descripcion: "Gorra Negra y Blanca",
    precio: 1000,
    img: '/img/independiente/accesorios/gorraAzul.png',
    categoria: "accesorios"
  },
  {
    id: 10,
    nombre: "Mochila",
    descripcion: "Mochila Roja con Red para Pelotas",
    precio: 3500,
    img: '/img/independiente/accesorios/mochila.png',
    categoria: "accesorios"
  },
  {
    id: 11,
    nombre: "Pelota CAI",
    descripcion: "Pelota Dribbling",
    precio: 2500,
    img: '/img/independiente/accesorios/pelota.png',
    categoria: "accesorios"
  },
  {
    id: 12,
    nombre: "Short IFC ",
    descripcion: "Short Azul Alternativo",
    precio: 4000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/short/shortAzul.png',
    categoria: "shorts"
  },
  {
    id: 13,
    nombre: "Short Titular 2022 ",
    descripcion: "Short Blanco Lanzamiento",
    precio: 5000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/short/shortBlanco.jpg',
    categoria: "shorts"
  },
  {
    id: 14,
    nombre: "Short Urbano",
    descripcion: "Short Jogging Negro",
    precio: 3000,
    talle: ["S", "M", "L", "XL"],
    img: '/img/independiente/short/shortNegro.png',
    categoria: "shorts"
  },
];

export const getFetch = new Promise((resolve, reject) => {
  let condition = true;

  setTimeout(() => {
    if (condition) {
      resolve(indumentaria);
    } else {
      reject("400 not found");
    }
  }, 2000);
});

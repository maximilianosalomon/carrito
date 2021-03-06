const data = [
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/616VM20%2BAzL.__AC_SY300_SX300_QL70_ML2_.jpg",
    title: "Ryzen 5900x",
    description: "este es el primer producto",
    category: "Procesadores",
    price: "73000",
    stock: "4",
  },
  {
    id: 2,
    image: "https://i.blogs.es/588c7d/amd6/original.jpeg",
    title: "Ryzen 5800x",
    description: "este es el primer producto",
    category: "Procesadores",
    price: "58000",
    stock: "10",
  },
  {
    id: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_884972-MLA40182457265_122019-O.jpg",
    title: "Ryzen 2200G",
    description: "este es el primer producto",
    category: "Procesadores",
    price: "22000",
    stock: "5",
  },
  {
    id: 4,
    image:
      "https://app.contabilium.com/files/explorer/20302/Productos-Servicios/concepto-4886285.jpg",
    title: "Radeon 6800XT",
    description: "este es el primer producto",
    category: "Placas-de-video",
    price: "280000",
    stock: "3",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/81U5H5c0jyL._AC_SL1500_.jpg",
    title: "Radeon 6900XT",
    description: "este es el primer producto",
    category: "Placas-de-video",
    price: "305000",
    stock: "15",
  },
];

const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export default getProducts;

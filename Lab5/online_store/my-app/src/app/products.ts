export interface Product {
  id: number;
  url: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  pic: string[];
  category: string;
  likes: number;
  }
  
  export const products = [
    {
      id: 1,
      url: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
      name:  'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
      price: 269,
      description:'диагональ: 6.6 дюйм\n' +
      'размер оперативной памяти: 6 ГБ\n' +
      'процессор: 8-ядерный Snapdragon 680\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
      rating: 4.9,
      pic: [ 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg'],
      likes: 0,
      category: "Samsung"
    },
    { 
      id: 2,
      url: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
      name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
      price: 269,
      description: 'диагональ: 6.71 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 8-ядерный Qualcomm Snapdragon 680\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
      rating: 5.0,
      pic: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg'],
      likes: 0,
      category: "Xiaomi"
    },
    {
      id: 3,  
      url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
      name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
      price: 499,
      description: 'диагональ: 6.67 дюйм\n' +
      'размер оперативной памяти: 8 ГБ\n' +
      'процессор: 8-ядерный Qualcomm Snapdragon 732G\n' +
      'объем встроенной памяти: 256 ГБ\n' +
      'емкость аккумулятора: 5020 мАч',
      rating: 5.0,
      pic: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg'],
      likes: 0,
      category: "Xiaomi"
    },
    {
      id: 4,
      url: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
      name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
      price: 799,
      description: 'диагональ: 6.6 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 8-ядерный Exynos 850\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
      rating: 4.8,
      pic: ["https://resources.cdn-kaspi.kz/img/m/p/h9b/hb8/64344297930782.jpg?format=gallery-large"],
      likes: 0,
      category: "Samsung"
    },
    {
      id: 5,
      url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      price: 499,
      description: 'диагональ: 6.1 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 6-ядерный Apple A15 Bionic\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 3095 мАч',
      rating: 3.8,
      pic: ["https://cdn.shoplightspeed.com/shops/662820/files/47556238/1400x1400x3/apple-iphone-13-128-gb.jpg"],
      likes: 0,
      category: "Apple"
    },
    {
      id: 6,
      url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
      name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
      price: 1099,
      description:  'диагональ: 6.7 дюйм\n' +
      'размер оперативной памяти: 6 ГБ\n' +
      'процессор: 6-ядерный Apple A16 Bionic\n' +
      'объем встроенной памяти: 256 ГБ\n' +
      'емкость аккумулятора: 3095 мАч',
      rating: 5.0,
      pic: ["https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium"],
      likes: 0,
      category: "Apple"
    },
    {
      id: 7,
      url:  'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item',
      name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
      price: 1399,
      description: 'диагональ: 6.4 дюйм\n' +
      'размер оперативной памяти: 6 ГБ\n' +
      'процессор: 8-ядерный Exynos 1280\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
      rating: 5.0,
      pic: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg'],
      likes: 0,
      category: "Samsung"
    },
    {
      id: 8,
      url: 'https://kaspi.kz/shop/p/nokia-g11-plus-4-gb-64-gb-seryi-106514096/?c=750000000#!/item',
      name: 'Смартфон Nokia G11 Plus 4 ГБ/64 ГБ серый',
      price: 1299,
      description:  'диагональ: 6.52 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: Unisoc Tiger T606\n' +
      'объем встроенной памяти: 64 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
      rating: 5.0,
      pic: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/hff/62594924150814/nokia-g11-plus-4-gb-64-gb-seryj-106514096-1.jpg'],
      likes: 0,
      category: "Nokia"
    },
    {
      id: 9,
      url: 'https://kaspi.kz/shop/p/nokia-g11-plus-4-gb-64-gb-seryi-106514096/?c=750000000#!/item',
      name: 'Мобильный телефон Nokia 105 2019 DS черный',
      price: 799,
      description:  'диагональ: 6.52 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: Unisoc Tiger T606\n' +
      'объем встроенной памяти: 64 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
      rating: 5.0,
      pic: ["https://tgrad.kz/upload/iblock/733/pp8laklmlq62glsg82z1ch4975vt640k.webp"],
      likes: 0,
      category: "Nokia"
    },
    {
      id: 10,
      url: 'https://kaspi.kz/shop/p/nokia-g11-4-gb-64-gb-seryi-105017983/?c=750000000#!/item',
      name: 'Смартфон Nokia G21 4 ГБ/128 ГБ синий',
      price: 399,
      description: 'технология NFC: Да\n' +
      'цвет: синий\n' +
      'тип экрана: IPS, сенсорный, мультитач\n' +
      'диагональ: 6.5 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 8-ядерный Unisoc Tiger T606\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 5050 мАч',
      rating: 5.0,
      pic: ["https://resources.cdn-kaspi.kz/img/m/p/h2d/hb7/64529445257246.jpg?format=gallery-medium"],
      likes: 0,
      category: "Nokia"
    },
    {
      id: 11,
      url: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
      name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
      price: 399,
      description:  'диагональ: 6.52 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: Unisoc Tiger T606\n' +
      'объем встроенной памяти: 64 ГБ\n' +
      'емкость аккумулятора: 5000 мАч',
      rating: 5.0,
      pic: ["https://resources.cdn-kaspi.kz/img/m/p/h1c/hac/64381277929502.jpg?format=gallery-medium"],
      likes: 0,
      category: 'Samsung'
    },
    {
      id: 12,
      url:  'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',
      name:  'Смартфон Apple iPhone 13 128Gb белый',
      price: 399,
      description:  'технология NFC: Да\n' +
      'цвет: белый\n' +
      'тип экрана: OLED, Super Retina XDR\n' +
      'диагональ: 6.1 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 6-ядерный Apple A15 Bionic\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 3095 мАч',
      rating: 5.0,
      pic: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg'],
      likes: 0,
      category: 'Apple'
    }

  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
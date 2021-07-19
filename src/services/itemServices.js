var data = [
  {
    _id: "1284566a9as5d8f121",
    title: "Backpack - Vanellope",
    description: "This is a description of a product",
    image: "img_1.PNG",
    price: 12.33,
    category: "Backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f12111",
    title: "Funko - Vanellope",
    description: "This is a description of a product",
    image: "img_111.jpg",
    price: 12.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f122",
    title: "Backpack - Cheshire Cat",
    description: "This is a description of a product",
    image: "img_2.PNG",
    price: 13.33,
    category: "Backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f122222",
    title: "Funko - Cheshire Cat",
    description: "This is a description of a product",
    image: "img_222.png",
    price: 13.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f1222",
    title: "Wallet - Cheshire Cat",
    description: "This is a description of a product",
    image: "img_22.PNG",
    price: 13.33,
    category: "Wallet",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f123",
    title: "Backpack - Aliens",
    image: "img_3.png",
    description: "This is a description of a product",
    price: 14.33,
    category: "Backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f123333",
    title: "Funko - Aliens",
    image: "img_333.png",
    description: "This is a description of a product",
    price: 14.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f1233",
    title: "Wallet - Aliens",
    image: "img_33.png",
    description: "This is a description of a product",
    price: 14.33,
    category: "Wallet",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f12444",
    title: "Funko - Hades",
    description: "This is a description of a product",
    image: "img_444.jpg",
    price: 122.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f1244",
    title: "Wallet - Hades",
    description: "This is a description of a product",
    image: "img_44.png",
    price: 122.33,
    category: "Wallet",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f125",
    title: "Backpack - Scar",
    description: "This is a description of a product",
    image: "img_5.PNG",
    price: 122.33,
    category: "Backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f125555",
    title: "Funko - Scar",
    description: "This is a description of a product",
    image: "img_555.png",
    price: 122.33,
    category: "Funko",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f1255",
    title: "Wallet - Scar",
    description: "This is a description of a product",
    image: "img_55.png",
    price: 122.33,
    category: "Wallet",
    discount: 5,
  },
];

class ItemService {
  getCatalog() {
    // logic to connect to a server a retrieve the list items

    return data;
  }

  getStock(itemId) {}

  getItemprice(coupon) {}
}

export default ItemService;

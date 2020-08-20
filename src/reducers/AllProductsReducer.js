const { default: productAddReducer } = require("./AddProductReducer");

const AllProductsReducer = function AllProductsReducer(state = null, action) {
  var products = [
    {
      productName: "Women's cloth",
      productDescription: "ILLI LONDON Women's Maxi Dresss",
      productPrice: 40,
      categoryName: "Dress",
      inStock: true,
      quantity: 8,
      productImage:
        "https://images-na.ssl-images-amazon.com/images/I/71xJeqBSXFL._UL1500_.jpg",
      id: 1,
      count:1
    },
   
    
    {
      productName: "Toy",
      productDescription: "NKK PNP Newly Kids Sofa Cum Bed (Pink)",
      productPrice: 40,
      categoryName: "Kids",
      inStock: true,
      quantity: 8,
      productImage:
        "https://images-na.ssl-images-amazon.com/images/I/51sud34Mp1L.jpg",
      id: 2,
      count:2
    },


    {
      productName: "Camera",
      productDescription: "Digital Camera",
      productPrice: 400,
      categoryName: "Electronics",
      inStock: true,
      quantity: 8,
      productImage:
        "https://images-na.ssl-images-amazon.com/images/I/51sud34Mp1L.jpg",
      id: 3,
      count:3
    },

    {
      productName: "TV",
      productDescription: "Digital TV",
      productPrice: 80,
      categoryName: "Electronics",
      inStock: true,
      quantity: 8,
      productImage:
        "https://images-na.ssl-images-amazon.com/images/I/51sud34Mp1L.jpg",
      id: 4,
      count:4
    },
    {
      productName: "Women's kurta",
      productDescription: "ILLI LONDON Women's Maxi Dresss",
      productPrice: 80,
      categoryName: "Dress",
      inStock: true,
      quantity: 8,
      productImage:
        "https://images-na.ssl-images-amazon.com/images/I/71xJeqBSXFL._UL1500_.jpg",
      id: 5,
      count:5
    },

















  ];

  switch (action.type) {
    case "PRODUCT_ADD":
      console.log(state);
      let newProduct = [
        {
          productName: action.payload.productName,
          productDescription: action.payload.productDescription,
          productPrice: action.payload.productPrice,
          categoryName: action.payload.categoryName,
          inStock: action.payload.inStock,
          quantity: action.payload.quantity,
          productImage: action.payload.image,
          id: action.payload.id,
        },
        ...state,
      ];
      return newProduct;

    case "PRODUCT_UPDATE":
      console.log(action.payload.id);
      let filteredArray = state.filter((p) => {
        return p.id !== action.payload.id;
      });
      console.log(filteredArray);

      let updatedProduct = [
        {
          productName: action.payload.productName,
          productDescription: action.payload.productDescription,
          productPrice: action.payload.productPrice,
          categoryName: action.payload.categoryName,
          inStock: action.payload.inStock,
          quantity: action.payload.quantity,
          productImage: action.payload.productImage,
          id: action.payload.id,
          count:action.payload.count
        },
        ...filteredArray,
      ];
    return updatedProduct

    case "PRODUCT_DELETE":
      console.log(action.payload);
      let NewArray = state.filter((p) => {
        return p.id !== action.payload;
      });
      console.log(NewArray);

      return NewArray;
  }
    

  return products;
};

export default AllProductsReducer;

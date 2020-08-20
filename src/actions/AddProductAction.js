export const addNewProductByAction = (newproduct) => {
  console.log(newproduct)
  return {
    type: "PRODUCT_ADD",
    payload: newproduct,
  };
};

export const updateProductByAction = (product) => {
  console.log(product)
  return {
    type: "PRODUCT_UPDATE",
    payload: product,
  };
};
export const deleteButtonClicked = (product) => {
  console.log(product)
  return {
    type: "PRODUCT_DELETE",
    payload: product,
  };
};

export const getProductItem = (store) => store.product.product;
export const getProductItemError = (store) => store.product.errors;
export const getProductItemLoading = (store) => store.product.isLoading;
export const getProductItemPrice = (store) => store.product.price;
export const getProductItemClearProduct = (store) => store.product.clearProduct;

// Pizzas
export const getProductItemPizzaSize = (store) => store.product.size;
export const getProductItemPizzaType = (store) => store.product.type;

// Rolls
export const getProductItemRollQuantity = (store) => store.product.quantity;
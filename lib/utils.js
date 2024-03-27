export const discountedPrice = (product) => {
    return product.price - product.price * (product.discountPercentage / 100);
};

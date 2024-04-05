import Products from "./Products";

const getProducts = async () => {
  const res = fetch("https://fakestoreapi.com/products");
  return (await res).json();
};

const ProductList = async ({ products }) => {
  const product = await getProducts();

  return (
    <>
      <Products products={product} />
    </>
  );
};

export default ProductList;

import { useParams } from "react-router-dom";

const ProductDetailsPage = ({ products }) => {
  const { category, id } = useParams();

  const product = products.find((p) => p.category === category && String(p.id) === String(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
};

export default ProductDetailsPage;

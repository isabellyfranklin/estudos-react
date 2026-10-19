export default function ProductItem({ product }) {
  return (
    <li>
      <p>#{product.id} Nome do produt</p>
      <p className="price">{product.price}</p>
      <p>{product.description}</p>
    </li>
  );
}

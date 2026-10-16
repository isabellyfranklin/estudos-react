import { useEffect, useState } from "react";

export default function ProductsList() {
  //link da nossa api
  const API_BASE_URL = "https://6ad2275e66cd28aed82db3b6.mockapi.io";

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}/products`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("An error ocurred when fetch product list");
        }

        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.message);
      });
  }, []);

  if(isLoading) {
    return (
        <div>
            <h2>Products</h2>
            <p>Loading data.... </p>
        </div>
    )
  }

  return (
    <div>
      <h2>Products</h2>
      <ul className="list">
        {product.map(( {id, product, price,description} ) => (
          <li key={id}>
            <p>#{product} Nome do produto</p>
            <p className="price">{price}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

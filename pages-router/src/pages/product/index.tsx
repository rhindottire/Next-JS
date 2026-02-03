import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
}

const ProductPage = () => {
  const [ isLogin ] = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data)
        console.log(response)
      });
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product: productType) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductPage;
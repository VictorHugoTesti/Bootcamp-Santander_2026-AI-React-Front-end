import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../settings";
import Productitem from "../ProductItem";
//import withDataFetching from "../DataFetchingFunctionalComponent";
import withDataFetching from "../DataFetchingClassComponent";


// Smart Component
const ProductsList = ({ data: products }) => {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`${API_BASE_URL}/bootcamp/santander/products`)
  //     .then(async (response) => {
  //       if (!response.ok) {
  //         throw new Error("An error ocurred when fetch products list");
  //       }

  //       const data = await response.json();
  //       setProducts(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       alert(error.message);
  //     });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h2>Products</h2>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h2>Products:</h2>
      <ul className="list">
        {products.map((item) => (
          <Productitem key={item.id} product={item} />
        ))}
      </ul>
    </div>
  );
};

// DataFetchingFunctionalComponent
// const ProductsListWithData = withDataFetching(
//   "Products",
//   ProductsList,
//   "/bootcamp/santander/products",
// );

// DataFetchingClassComponent
const ProductsListWithData = withDataFetching(
  "Products",
  ProductsList,
  "/bootcamp/santander/products",
);

export default ProductsListWithData
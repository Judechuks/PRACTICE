import Product from "./product";
import data from "./data";

function ProductList() {
  return (
    <div className="products">
      {data.map((item) => {
        return <Product {...item} key={item.id} />;
      })}
    </div>
  );
}
export default ProductList;

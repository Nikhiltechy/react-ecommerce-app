import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product =
    products.find(
      (item) =>
        item.id === Number(id)
    );

  if (!product) {
    return (
      <h1>
        Product Not Found
      </h1>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="rounded-2xl w-full h-[500px] object-cover"
      />

      {/* Content */}
      <div>

        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <p className="text-yellow-500 text-lg mt-3">
          ⭐ {product.rating}
        </p>

        <p className="text-green-600 text-3xl font-bold mt-4">
          ₹{product.price}
        </p>

        <p className="text-gray-600 mt-5">
          Premium quality product
          with amazing performance
          and durability.
        </p>

        <button onClick={()=>addToCart(product)} className="bg-black text-white px-6 py-3 rounded-xl mt-6 hover:opacity-80" >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;
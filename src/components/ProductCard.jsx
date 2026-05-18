import { Link } from "react-router-dom";

function ProductCard({ product
}) {
  return (
    <Link to={`/product/${product.id}`}>

    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      <img
        src={ product.image}
        alt={product.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">

        <h2 className="text-lg font-semibold">
          {product.title}
        </h2>

        <p className="text-green-600 font-bold text-xl mt-2">
          ₹{product.price}
        </p>

        <p className="text-yellow-500">
          ⭐ {product.rating}
        </p>

        <button className="bg-black text-white px-4 py-2 rounded-lg w-full mt-4 hover:opacity-80">
          Add to Cart
        </button>

      </div>
    </div>
    </Link>
  );
}

export default ProductCard;
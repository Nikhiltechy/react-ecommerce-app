import { useCart }
from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCart();

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (

        <h2>
          Cart is Empty
        </h2>

      ) : (

        <div className="space-y-4">

          {cartItems.map(
            (item) => (

              <div
                key={item.id}
                className="flex items-center gap-5 border rounded-xl p-4"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div className="flex-1">

                  <h2 className="font-bold text-lg">
                    {item.title}
                  </h2>

                  <p className="text-green-600 font-bold">
                    ₹{item.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.id
                        )
                      }
                      className="bg-gray-200 px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.id
                        )
                      }
                      className="bg-gray-200 px-3 py-1 rounded"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* Remove */}
                <button
                  onClick={() =>
                    removeItem(
                      item.id
                    )
                  }
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>
            )
          )}

          {/* Total */}
          <div className="border-t pt-6 flex justify-between items-center">

            <h2 className="text-2xl font-bold">
              Total:
            </h2>

            <h2 className="text-2xl font-bold text-green-600">
              ₹{totalPrice}
            </h2>

          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;
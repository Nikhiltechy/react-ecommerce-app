const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    rating: 4.5,
  },

  {
    id: 2,
    title: "Smart Watch",
    price: 3999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    rating: 4.2,
  },

  {
    id: 3,
    title: "Gaming Mouse",
    price: 1499,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    rating: 4.7,
  },

  {
    id: 4,
    title: "Mechanical Keyboard",
    price: 3499,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    rating: 4.6,
  },

  {
    id: 5,
    title: "Running Shoes",
    price: 2999,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    rating: 4.4,
  },
];

/*
Generate fake products automatically
*/

const expandedProducts =
  Array.from(
    { length: 50 },
    (_, index) => ({
      ...products[
        index %
        products.length
      ],

      id: index + 1,

      title:
        products[
          index %
          products.length
        ].title +
        ` ${index + 1}`,
    })
  );

export default expandedProducts;
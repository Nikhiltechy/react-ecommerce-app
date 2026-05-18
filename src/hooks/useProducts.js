import {
  useEffect,
  useState,
} from "react";

import products
from "../data/products";

function useProducts() {

  const [search,
    setSearch] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const [
    visibleProducts,
    setVisibleProducts,
  ] = useState([]);

  const [page,
    setPage] =
    useState(1);

  const PRODUCTS_PER_PAGE =
    8;

  const categories = [
    "All",
    "Electronics",
    "Accessories",
    "Fashion",
  ];

  const filteredProducts =
    products.filter(
      (product) => {

        const matchesSearch =
          product.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =
          selectedCategory ===
            "All" ||
          product.category ===
            selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );

  // load products
  useEffect(() => {

   setVisibleProducts(
  filteredProducts.slice(
    0,
    page *
      PRODUCTS_PER_PAGE
  )
);

  }, [
    page,
    search,
    selectedCategory,
  ]);

  // scroll logic
  useEffect(() => {

    const handleScroll =
      () => {

        const reachedBottom =
          window.innerHeight +
            window.scrollY >=
          document.body
            .offsetHeight - 100;

        if (
          reachedBottom
        ) {

          setPage(
            (prev) =>
              prev + 1
          );
        }
      };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  

  return {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    categories,
    visibleProducts,
  };
}

export default useProducts;
import Hero from "../components/Hero";
import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/ProductGrid";

import useProducts from "../hooks/useProducts";

function Home() {

  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    categories,
    visibleProducts,
  } = useProducts();

  return (
    <div>
      <Hero />

      <ProductFilters
        search={search}
        setSearch={setSearch}
        categories={categories}
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">
          Trending Products
        </h2>
      </div>

      <ProductGrid
        filteredProducts={
          visibleProducts
        }
      />
    </div>
  );
}

export default Home;
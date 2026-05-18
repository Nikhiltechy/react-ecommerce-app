function ProductFilters({
  search,
  setSearch,
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border rounded-xl px-4 py-3 w-full md:w-96 outline-none"
      />

      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setSelectedCategory(cat)
            }
            className={`px-4 py-2 rounded-lg border transition
            ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductFilters;
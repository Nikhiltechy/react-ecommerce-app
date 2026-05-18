function Hero() {
  return (
    <section className="bg-gray-100 rounded-3xl px-8 py-16 flex flex-col md:flex-row items-center justify-between mb-10">

      {/* Left */}
      <div className="max-w-xl">
        <p className="text-blue-600 font-semibold mb-2">
          New Collection 2026
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Discover Amazing
          <span className="block">
            Products For You
          </span>
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Shop trending gadgets,
          fashion, electronics and
          much more at the best prices.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-xl mt-6 hover:opacity-80">
          Shop Now
        </button>
      </div>

      {/* Right */}
      <div className="mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
          alt="hero"
          className="rounded-3xl w-[450px] h-[300px] object-cover"
        />
      </div>

    </section>
  );
}

export default Hero;
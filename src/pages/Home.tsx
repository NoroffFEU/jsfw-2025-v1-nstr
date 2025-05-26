import { useState, useEffect, useRef } from "react";
import { useProducts } from "../features/products/useProducts";
import ProductCard from "../components/ProductCard";
import { useToast } from "../components/Toast";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Home() {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const { addToast } = useToast();
  const hasShownToast = useRef(false);

  const filteredProducts = products
  .filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((product) =>
    category ? product.tags?.includes(category) : true
  );


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm.trim() && filteredProducts.length === 0 && !hasShownToast.current) {
        addToast("No products found 😞");
        hasShownToast.current = true;
      }
      if (filteredProducts.length > 0) {
        hasShownToast.current = false;
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm, filteredProducts.length, addToast]);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">Error: {error}</p>;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.discountedPrice - b.discountedPrice;
      case "price-high":
        return b.discountedPrice - a.discountedPrice;
      case "name-asc":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const popular = sortedProducts.filter((p) => p.rating >= 4);
  const latest = sortedProducts.slice(-4);

  return (
    <div className="bg-neutral-100 min-h-screen text-black">
      {/* Hero Slider for New Arrivals */}
<section className="bg-gray-100 py-12 px-4">
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 tracking-tight text-center">SUPER DEALS</h2>
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {latest.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


      {/* Search + sort */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 mb-10">
  {/* Search */}
  <div className="relative w-full md:w-1/3">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0a2342] transition"
    />
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
  </div>

  {/* Sort + Category */}
  <div className="flex flex-col md:flex-row gap-4 w-full md:w-2/3">
    {/* Sort */}
    <div className="w-full md:w-1/2">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0a2342] transition"
      >
        <option value="">Sort by</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name-asc">Name: A–Z</option>
      </select>
    </div>

    {/* Category */}
    <div className="w-full md:w-1/2">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0a2342] transition"
      >
        <option value="">All Categories</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="shoes">Shoes</option>
        <option value="accessories">Accessories</option>
      </select>
    </div>
  </div>
</div>


        {/* Popular */}
        <section id="popular" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">All items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {popular.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}

export default Home;

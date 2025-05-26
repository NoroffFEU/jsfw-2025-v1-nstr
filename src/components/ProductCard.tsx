import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { RiStarLine } from "react-icons/ri";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercent = Math.round(((product.price - product.discountedPrice) / product.price) * 100);

  return (
    <div className="relative bg-white/80 border border-gray-300 hover:border-gray-500 rounded-lg shadow-md p-4 transition">
      <Link to={`/product/${product.id}`} className="block">
        {/* Discount badge */}
        {discountPercent > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercent}% OFF
          </span>
        )}

        {/* Product image */}
<img
  src={product.image?.url || product.imageUrl || "/fallback.jpg"}
  alt={product.image?.alt || product.title}
  onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
  className="w-full h-48 object-cover rounded-t-lg"
/>


        {/* Title */}
        <h2 className="text-xl font-semibold mt-4">{product.title}</h2>

        {/* Price */}
        <div className="mt-2">
          {product.discountedPrice < product.price ? (
            <>
              <p className="text-green-600 text-lg font-bold">${product.discountedPrice.toFixed(2)}</p>
              <p className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</p>
            </>
          ) : (
            <p className="text-green-600 text-lg font-bold">${product.price.toFixed(2)}</p>
          )}
        </div>

        {/* Rating */}
        <p className="text-yellow-500 flex items-center mt-1">
          <RiStarLine className="mr-1" /> {product.rating} / 5
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;

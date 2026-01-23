import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    image: string;
    category: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              View Detail
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}

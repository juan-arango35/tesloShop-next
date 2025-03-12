import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductGridItem = ({ product }: Props) => {
  console.log(product);
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${product.images[0]}`}
          alt={product.title}
          width={500}
          height={500}
          className="w-full object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`} className="hover:text-blue-600 hover:font-bold">{product.title}</Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductGridItem;

import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";


interface Props {
  params: {
    id: Category;
  };
}

const CategoryPage = ({ params }: Props) => {
  const { id } = params;
  const seedProducts = initialData.products;
  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "para Todos",
  };

  return (
    <>
      <Title
        title={`Articulos para ${labels[id]}`}
        subTitle="Todos los Productos"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
};

export default CategoryPage;
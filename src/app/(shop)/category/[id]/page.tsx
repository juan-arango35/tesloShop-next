import ProductGridItem from "@/components/products/product-grid/ProductGridItem";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const CategoryPage = ({ params }: Props) => {
  const { id } = params;
/* if (id !== "kid" || id !== "men" || id !== "women") {
    notFound();
  } */
  const productosFiltrados = initialData;

  const productos = productosFiltrados.products.filter(
    (product) => product.gender === id
  );

  let idAlterno = id;
  if(id === "kid"){idAlterno = "niños"; } 
  else if(id ==="men") {idAlterno = "hombres"; } 
  else if(id ==="women") {idAlterno = "mujeres";}
  else {notFound();}
  
  return (
    <>
      <Title
      title = {`Articulos para  ${idAlterno}`} 
      className="mb-2"
      />
      <div className="grid grid-col-2 sm:grid-cols-3 gap-10 mb-10">
        {productos.map((product) => (
          <ProductGridItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;

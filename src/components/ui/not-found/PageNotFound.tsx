import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return <div className="bg-slate-400 flex flex-col-reverse md:flex-row h-[50rem] w-full justify-center items-center align-middle">
    <div className="text-center px-5 mx-5">
      <h2 className="antialiased font-bold text-9xl">404</h2>
      <p className="font-semibold text-xl"> Woops! Lo sentimos mucho</p>
      <p className="font-light">

      <span>Puedes regresar a la página principal </span>
      <Link href="/" className="hover:underline font-bold transition-all">Volver</Link>
      </p>
    </div>
    <div className="px-5 mx-5">
  <Image 
  src={"/imgs/starman_750x750.png"}
  alt="Starman"
  className="p-5 sm:p-0"
  width={550}
  height={550}
  />
    </div>
  </div>;
};

export default PageNotFound;

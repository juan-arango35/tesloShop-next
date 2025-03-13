"use client";
import Link from "next/link";
import {
  IoCloseCircleOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      {/*    color de fondo negro */}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      {/*    color de fondo negr */}
      <div className="fade-in fixed top-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>

      {/*  SideMenu */}
      <nav
        //todo: efecto de ocultar
        className="fixed p-5 right-0 top-0 w-[31.25rem] h-screen bg-white z-20 shadow-xl transform transition-all duration-300"
      >
        <IoCloseCircleOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => OCultarPanelLateral()}
        />
        {/*    INput de la busqueda */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded pl-10 py1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/*   menu del navbar */}
        <Link
          href={"/"}
          className="flex item-center mt-10 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={25} />
          <span className="ml-3 text-xl">Perfil</span>
        </Link>

        <Link
          href={"/"}
          className="flex item-center mt-10 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={25} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          href={"/"}
          className="flex item-center mt-10 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={25} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>
        <Link
          href={"/"}
          className="flex item-center mt-10 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={25} />
          <span className="ml-3 text-xl">Salir</span>
        </Link>
        {/*   linea divisoria */}
        <div className="w-full h-px bg-gray-200 my-10"></div>
        {/*   menu del navbar -adicional de productos*/}
        <Link
          href={"/"}
          className="flex item-center mt-10 hover:bg-gray-100 rounded transition-all"
        >
          <IoShirtOutline size={25} />
          <span className="ml-3 text-xl">Productos</span>
        </Link>
        <Link
          href={"/"}
          className="flex item-center mt-10 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={25} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          href={"/"}
          className="flex item-center mt-10 hover:bg-gray-100 rounded transition-all"
        >
          <IoPeopleOutline size={25} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

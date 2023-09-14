import React from "react";
import Link from "next/link";

const Create = () => {
 
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-red-400">Pagina para agregar tareas</h1>

      <form className="flex flex-col">
        <input type="text" placeholder="Ingresar tarea" />
        <button type="submit">Agregar</button>
      </form>

      <Link href="/" className="hover:text-cyan-400 mt-10">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Create;

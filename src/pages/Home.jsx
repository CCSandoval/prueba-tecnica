import React from "react";
import me from "../styles/img/Sandoval.png";
const Home = () => {
  return (
    <div className="w-full flex">
      <div className="flex flex-col mx-auto justify-center items-center rounded-b-md w-2/4 p-3 bg-gray-800 bg-opacity-40">
        <h1 className="text-4xl font-extrabold text-white">
          Cristian Camilo Sandoval Torres
        </h1>
        <a
          href="https://www.linkedin.com/in/cristian-sandoval-67278017a"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={me}
            alt="Cristian Sandoval"
            className="duration-300 transform hover:-rotate-3 hover:scale-105 rounded-full h-64 w-64 my-6"
          />
        </a>
        <p className="text-lg text-justify font-bold text-white">
          Nací el 17 de abril del 2004 en Buenaventura - Valle del Cauca,
          actualmente resido en Ibagué - Tolima. Soy una persona recursiva y
          alegre, me gusta equivocarme ya que me presenta un reto diferente cada
          vez, soy calmado y a menudo callado pero una vez me siento confiado en
          un ambiente soy cálido y sociable, mis metas actuales son terminar el
          tecnólogo que estoy haciendo en el sena y conseguir empleo como
          desarrollador web preferiblemente enfocado al frontend para poder
          pagar la universidad y estudiar Ingenieria de Software, soy confiado
          en mis habilidades usando React, GraphQL, Express y MongoDB, También
          me desarrollo eficientemente usando apis REST y Web Sockets por medio
          de Socket.io y dentro de poco culmino el curso Mision TIC que fue el
          que me impulsó a este mundo del desarrollo web. De lo que más
          orgulloso me siento son dos cosas, el primer pago que recibí por
          merito propio haciendo un trabajo en Java para un conocido, y&nbsp;
          <span className="underline hover:text-blue-300">
            <a
              href="https://powerful-savannah-89124.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              esta aplicación
            </a>
          </span>
          &nbsp;que fue la primer app funcional que creé por mi cuenta y me
          parece un gran logro
        </p>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const Preguntas = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col h-full mx-auto justify-around rounded-b-md w-3/5 p-3 bg-gray-800 bg-opacity-40">
        <h1 className="text-5xl text-white font-extrabold text-center my-3">
          Preguntas
        </h1>
        <div className="border-t border-l h-full flex flex-col justify-center">
          <h2 className="text-2xl text-white font-bold my-2">
            <i className="far fa-hand-point-right mx-2" />
            ¿Para qué son los software de gestión documental?
          </h2>
          <p className="text-white m-2 text-justify w-4/5">
            Son sistemas que se usan para administrar documentos en una empresa
            digitalmente teniendo así un record digital en lugar de uno fisico,
            disminuyendo el impacto ambiental y financiero de la empresa que usa
            este tipo de software, también facilita las tareas de una empresa a
            la hora de almacenar grandes cantidades de papeleo y asegura el
            manejo responsable de estos datos.
          </p>
        </div>
        <div className="border-t border-r h-full flex flex-col justify-center">
          <h2 className="text-2xl text-white font-bold my-2 text-right">
            ¿Qué percibe del proyecto MiContrato?
            <i className="far fa-hand-point-left mx-2" />
          </h2>
          <p className="text-white m-2 text-justify w-4/5 self-end">
            Vine a conocer de MiContrato por medio de esta vacante de
            desarrollador Frontend y francamente no me di a la labor de
            averigüar cuál era su labor, no obstante, según la información que
            encontre en la página oficial, me parece una solución efectiva al
            manejo de papeleo poco efectivo que se puede presentar en un
            procedimiento legal, MiContrato provee una plataforma confiable para
            facilitar el intercambio de documentos, el firmado remoto y el
            almacenamiento seguro de los datos.
          </p>
        </div>
        <div className="border-t border-l h-full flex flex-col justify-center">
          <h2 className="text-2xl text-white font-bold my-2">
            <i className="far fa-hand-point-right mx-2" />
            ¿Qué es una prueba unitaria, que tipos de pruebas se realizan al
            frontend?
          </h2>
          <p className="text-white m-2 text-justify w-4/5">
            Una prueba unitaria es la manera en la que el equipo de desarrollo
            se asegura del correcto funcionamiento de una unidad del código. Se
            escriben casos de prueba conociendo cuál será el resultado esperado
            y se aplican a cierta parte del código para asegurar que su
            resultado sea el deseado. Al frontend de una aplicación se le pueden
            aplicar estas pruebas unitarias, pruebas de integracion, que
            consiste en probar que dos o mas elementos de una aplicación sean
            compatibles y las pruebas end-to-end, que consisten en probar una
            aplicación desde la perspectiva del usuario final y asegurarse que
            su fucnionamiento sea el deseado desde el inicio hasta el final, de
            la manera en que la aplicacion fue pensada.
          </p>
        </div>
        <div className="border-t border-r h-full flex flex-col justify-center">
          <h2 className="text-2xl text-white font-bold my-2 text-right">
            Explicar al menos un método de consumo de servicios rest de forma
            segura.
            <i className="far fa-hand-point-left mx-2" />
          </h2>
          <p className="text-white m-2 text-justify w-4/5 self-end">
            Para consumir servicios rest de manera segura solo he usado un
            metodo, el de autorización por tokens, consiste en otorgarle al
            usuario de mi sitio web un token cuando inicia sesión que verifique
            su identidad y le permita acceso por cierta cantidad de tiempo a
            este, y revisar en cada una de las comunicaciones con el api que el
            token este presente y sea valido, si ambas de estas condiciones se
            cumplen, el sitio hace la comunicación con el api, si no, se le
            restringe el acceso al usuario.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;

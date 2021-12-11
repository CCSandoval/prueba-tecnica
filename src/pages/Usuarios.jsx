import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUsers } from "../utils/api";
import UserCard from "../components/UserCard";

const Usuarios = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers(
      (res) => {
        setUsers(res.data.data);
      },
      (err) => {
        if (err) toast.error("Error consiguiendo los usuarios");
      },
      page
    );
  }, [page]);

  return (
    <div className="w-full">
      <div className="flex flex-col mx-auto justify-center items-center rounded-b-md w-3/5 p-3 bg-gray-800 bg-opacity-40">
        <h1 className="text-4xl my-2 text-white font-extrabold">
          Usuarios
        </h1>
        {users.map((u) => {
          return <UserCard key={u.id} userData={u} />;
        })}
        <button
          onClick={(e) => {
            e.preventDefault();
            page === 1 ? setPage(2) : setPage(1);
          }}
        >
          {page === 1 ? (
            <>
            <span className="text-white text-xl mx-1 font-bold">Siguiente página</span>
            <i className="fas fa-arrow-right text-white" />
            </>
          ) : (
            <>
            <i className="fas fa-arrow-left text-white" />
            <span className="text-white text-xl mx-1 font-bold">Página anterior</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Usuarios;

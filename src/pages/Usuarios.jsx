import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUsers } from "../utils/api";
const Usuarios = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getUsers(
      (res) => {
        setUsers(res.data.data);
      },
      (err) => {
        toast.error("Error consiguiendo los usuarios");
      },
      page
    );
  }, [page]);
  return (
    <div className="w-full">
      <p className="text-5xl text-white font-extrabold">Usuarios</p>
      {users.map((u) => {
        return <p className="text-white">{u.email}</p>;
      })}
      <button
        className="bg-red-100"
        onClick={(e) => {
          e.preventDefault();
          page === 1 ? setPage(2) : setPage(1);
        }}
      >
        change page
      </button>
    </div>
  );
};

export default Usuarios;

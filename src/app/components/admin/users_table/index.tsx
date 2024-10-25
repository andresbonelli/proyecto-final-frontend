"use client";

import { updateUserInfo } from "@/actions/user";
import { Role, UserFromDB } from "@/utils/interfaces";
import { useState } from "react";

type UsersSortCriteria = keyof UserFromDB;

export default function AdminUsersTable({ users }: { users: UserFromDB[] }) {
  const [userFilter, setUserFilter] = useState("staff");
  const filteredUsers = users.filter((user) => user.role === userFilter);
  const [sortCriteria, setSortCriteria] =
    useState<UsersSortCriteria>("username");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(() => "desc");

  function handleSort(criteria: UsersSortCriteria) {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  }

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortCriteria) {
      const aValue = a[sortCriteria] ?? "";
      const bValue = b[sortCriteria] ?? "";
      const comparison = String(aValue).localeCompare(String(bValue));
      return sortOrder === "asc" ? comparison : -comparison;
    } else {
      return 0;
    }
  });

  async function handleActivateUser(userId: string, isActive: boolean) {
    await updateUserInfo(userId, { is_active: !isActive });
    window.location.reload();
  }

  async function handleMakeUserAdmin(userId: string) {
    await updateUserInfo(userId, { role: Role.ADMIN }, true);
    window.location.reload();
  }

  return (
    <div className="h-[700px] overflow-y-auto border-y">
      <div className="w-full flex flex-row justify-start items-center p-2  gap-5">
        <p className="text-sm font-MontserratSemibold">Ver</p>
        <select
          name="show-customers"
          id="show-customers"
          className="w-40 p-2 rounded-md border border-gray-300 text-sm"
          onChange={(e) => setUserFilter(e.target.value)}
        >
          <option value={Role.STAFF}>empleados</option>
          <option value={Role.CUSTOMER}>compradores</option>
          <option value={Role.ADMIN}>administradores</option>
        </select>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-background border-b border-t text-xs text-gray-500 h-12">
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("username")}
            >
              USUARIO{"  "}
              {sortCriteria === "username" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("firstname")}
            >
              NOMBRE{"  "}
              {sortCriteria === "firstname" &&
                (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("lastname")}
            >
              APELLIDO{"  "}
              {sortCriteria === "lastname" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("email")}
            >
              EMAIL{"  "}
              {sortCriteria === "email" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th className="p-2">ROL</th>
            <th className="p-2">ACCIONES</th>
          </tr>
        </thead>

        <tbody>
          {sortedUsers.map((user) => {
            return (
              <tr
                key={user.id}
                className="bg-white hover:bg-background border-y text-sm text-center"
              >
                <td className="p-4 font-MontserratSemibold">{user.username}</td>
                <td className="p-4 font-MontserratSemibold">
                  {user.firstname ?? ""}
                </td>
                <td className="p-4 font-MontserratSemibold">
                  {user.lastname ?? ""}
                </td>
                <td className="p-4 text-gray-500">{user.email}</td>
                <td className="p-4 font-MontserratSemibold">{user.role}</td>
                <td className="p-4 flex flex-row justify-center items-center gap-2">
                  <button
                    disabled={user.role === Role.ADMIN}
                    className={`w-24 text-sm font-MontserratSemibold text-white p-2  rounded-md ${
                      user.role === Role.ADMIN
                        ? "bg-grey"
                        : user.is_active
                        ? "bg-red hover:bg-redder"
                        : "bg-softGreen hover:bg-green"
                    }`}
                    onClick={() => handleActivateUser(user.id, user.is_active)}
                  >
                    {user.is_active ? "desactivar" : "activar"}
                  </button>
                  {user.role === Role.STAFF && user.is_active && (
                    <button
                      className="text-sm font-MontserratSemibold text-white p-2 bg-softBlue hover:bg-blue rounded-md"
                      onClick={() => handleMakeUserAdmin(user.id)}
                    >
                      hacer admin
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

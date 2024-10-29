import { getAdminUsers } from "@/actions/admin";
import AdminUsersTable from "@/app/components/admin/users_table";
import { verifySession } from "@/lib/session";
import { Role, UserFromDB } from "@/utils/interfaces";
import Link from "next/link";

export default async function AdminUsers() {
  const session = await verifySession();
  const users: UserFromDB[] =
    session.role === Role.ADMIN ? await getAdminUsers() : null;

  return (
    <div className="flex flex-col justify-start bg-white">
      <div className="flex flex-col justify-start p-8 gap-8">
        <h1 className="w-full text-left font-MontserratBold text-2xl ">
          Usuarios
        </h1>
        <div className="flex flex-row justify-between items-center  ">
          {/* <input
            type="text"
            placeholder="buscar..."
            className="bg-background border p-2 text-grey rounded-md"
          /> */}
          <Link
            href="/dashboard/users/create_new"
            className="text-sm font-MontserratSemibold bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
          >
            Nuevo usuario
          </Link>
        </div>
      </div>

      {users && <AdminUsersTable users={users} />}
    </div>
  );
}

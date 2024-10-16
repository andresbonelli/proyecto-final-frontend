import { getAdminUsers } from "@/actions/admin";
import AdminUsersTable from "@/app/components/admin/users_table";
import { verifySession } from "@/lib/session";
import { Role, UserFromDB } from "@/utils/interfaces";


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
      </div>
      
        {users && <AdminUsersTable users={users}/>}
   
    </div>
  );
}

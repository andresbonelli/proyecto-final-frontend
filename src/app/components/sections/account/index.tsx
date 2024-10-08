"use client";

import { UserFromDB } from "@/utils/interfaces";
import { colors } from "@/utils/constants";
import ArrowIcon from "../../icons/Arrow";
import UserIcon from "../../icons/User";
import EditCircleIcon from "../../icons/EditCircle";
import { logout } from "@/actions/auth";
import { UpdateUserForm } from "../../forms/update_user";

export default function AccountForm({
  isOpen,
  onClose,
  user,
  token,
}: {
  isOpen: boolean;
  onClose: Function;
  user: UserFromDB;
  token?: string;
}) {
  function handleLogout() {
    logout();
    onClose();
  }

  return (
    <aside
      className={`absolute top-0 z-50 
                  bg-background sm:px-12 px-5 shadow-2xl
                  flex flex-col place-content-center
                  min-w-fit min-h-screen 
                  transition-transform ease-in-out duration-300 ${
                    isOpen
                      ? "right-0 translate-x-0 "
                      : "-right-full translate-x-full "
                  }`}
    >
      <div
        id="account-details-container"
        className="relative flex flex-col
                   justify-between place-items-center
                   min-w-96 max-h-full 
                   px-5  pt-7 pb-10
                   bg-white shadow-lg"
      >
        <button
          onClick={() => {
            onClose();
          }}
          className="absolute top-5 left-5"
        >
          <ArrowIcon width={40} height={40} fill={colors.softBlue} />
        </button>
        <div
          id="profile-pic-container"
          className="relative w-20 h-20
                     flex flex-col justify-center place-items-center
                     rounded-full shadow-xl mb-8"
        >
          <UserIcon width={35} height={35} fill="gray" />
          <button type="button" className="absolute bottom-0 right-0 ">
            <EditCircleIcon height={20} width={20} fill="#3163E2" />
          </button>
        </div>
        <h1 className="font-MontserratBold text-xl w-full text-center ">
          Hi, {user.username}
        </h1>

        {/* UPDATE USER INFO FORM */}
        <div className="w-full flex flex-col justify-between place-items-center gap-2 px-8 ">
          <UpdateUserForm user={user} token={token} />
          <button
            type="button"
            onClick={handleLogout}
            className="w-full bg-grey hover:bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </aside>
  );
}

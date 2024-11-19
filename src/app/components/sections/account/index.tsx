"use client";

import { Role, UserFromDB } from "@/utils/interfaces";
import { colors } from "@/utils/constants";
import ArrowIcon from "../../icons/Arrow";
import UserIcon from "../../icons/User";
import EditCircleIcon from "../../icons/EditCircle";
import { logout } from "@/actions/auth";
import { UpdateUserForm } from "../../forms/update_user";
import { uploadUserProfileImg } from "@/actions/user";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function AccountForm({
  isOpen,
  onClose,
  user,
}: {
  isOpen: boolean;
  onClose: () => void;
  user: UserFromDB;
}) {
  function handleLogout() {
    logout();
    onClose();
  }
  const [showImgForm, setShowImgForm] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  async function handleUploadImg(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      const result = await uploadUserProfileImg(user.id, formData);
      if (result?.success) {
        window.location.reload();
      }
      setImageFile(null);
      setShowImgForm(false);
    }
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
                   px-5 pt-7 pb-10
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
                      mb-8"
        >
          {/* PROFILE PIC */}
          {user.image ? (
            <Image
              height={35}
              width={35}
              alt={user.username}
              src={user.image}
              unoptimized={true}
              className="object-scale-down w-full h-full rounded-full  shadow-2xl"
            />
          ) : (
            <UserIcon width={35} height={35} fill="gray" />
          )}
          <button
            onClick={() => setShowImgForm(!showImgForm)}
            type="button"
            className="absolute bottom-0 right-0"
          >
            <EditCircleIcon height={20} width={20} fill="#3163E2" />
          </button>
        </div>
        {showImgForm && (
          <form
            onSubmit={handleUploadImg}
            className="w-full flex flex-col place-items-center"
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="mb-4 text-xs"
            />
            <button
              type="submit"
              className="bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
            >
              subir
            </button>
          </form>
        )}

        <h1 className="font-MontserratBold text-xl w-full text-center ">
          Hi, {user.username}
        </h1>

        {/* UPDATE USER INFO FORM */}
        <div className="w-full flex flex-col justify-between place-items-center gap-5 px-8 ">
          <UpdateUserForm user={user} />
          {user.role === Role.CUSTOMER && (
            <Link
              href="/orders"
              className="w-full bg-softGreen hover:bg-green text-white text-center py-2 px-4 rounded-md"
            >
              Ver mis compras
            </Link>
          )}
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

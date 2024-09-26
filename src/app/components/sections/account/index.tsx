"use client";

import { useState } from "react";
import Loader from "../../loader";
import ArrowIcon from "../../icons/Arrow";
import UserIcon from "../../icons/User";
import { colors } from "@/app/constants";
import { Address, EditUserInfoDto } from "@/app/utils/interfaces";
import AddIcon from "../../icons/Add";
import EditSquareIcon from "../../icons/EditSquare";
import LocationIcon from "../../icons/Location";

export default function AccountForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: Function;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [newAdress, setNewAddress] = useState<Address | null>(null);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onUpdateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      alert("updating user");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <aside
      className={`absolute top-0 bg-background px-12 shadow-2xl
        flex flex-col place-content-center
        min-w-fit min-h-screen 
        transition-transform ease-in-out duration-300 ${
          isOpen ? "right-0 translate-x-0 " : "-right-full translate-x-full "
        }`}
    >
      <div
        id="account-details-container"
        className="relative flex flex-col justify-between place-items-center min-w-96  py-5 px-5 gap-5 pt-8 bg-white "
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
          className="w-16 h-16 rounded-full flex flex-col justify-center place-items-center shadow-xl"
        >
          <UserIcon width={30} height={30} fill="gray" />
        </div>
        <h1 className="font-MontserratBold text-xl w-full text-center ">
          Account details
        </h1>
        {/* UPDATE USER INFO FORM */}
        <form
          onSubmit={(e) => onUpdateUser(e)}
          className="w-full flex flex-col justify-between place-items-center gap-2 px-8"
        >
          {/* First name */}
          <div>
            <label
              htmlFor="first-name"
              className="w-full font-MontserratLight text-sm ml-2"
            >
              First name:
            </label>
            <input
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-300 mt-2"
            ></input>
          </div>
          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="w-full font-MontserratLight text-sm ml-2"
            >
              Last name:
            </label>
            <input
              type="text"
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-300 mt-2"
            ></input>
          </div>
          <div
            id="divider-line"
            className="border border-grey w-full my-3"
          ></div>
          {/* Addresses */}
          <section
            id="my-addresses"
            className="w-full flex flex-col justify-between place-items-center gap-5  mb-2 "
          >
            <div className="w-full flex flex-row justify-between place-items-center mb-3">
              <h1 className="font-MontserratBold text-lg  text-left">
                My addresses:
              </h1>
              <button type="button">
                <AddIcon height={28} width={28} fill="black" />
              </button>
            </div>
            <div
              id="address"
              className="w-full flex flex-row justify-between place-items-center text-left text-xs "
            >
              {/* <LocationIcon width={22} height={22} stroke="black" /> */}
              <p className="flex-auto ">
                Scalabrini Ortiz 2088, CABA, Argentina
              </p>
              <EditSquareIcon width={18} height={18} fill="black" />
            </div>
            <div
              id="address"
              className="w-full flex flex-row justify-between place-items-center text-left text-xs "
            >
              {/* <LocationIcon width={22} height={22} stroke="black" /> */}
              <p className="flex-auto ">
                Scalabrini Ortiz 2088, CABA, Argentina
              </p>
              <EditSquareIcon width={18} height={18} fill="black" />
            </div>
            <div
              id="address"
              className="w-full flex flex-row justify-between place-items-center text-left text-xs "
            >
              {/* <LocationIcon width={22} height={22} stroke="black" /> */}
              <p className="flex-auto ">
                Scalabrini Ortiz 2088, CABA, Argentina
              </p>
              <EditSquareIcon width={18} height={18} fill="black" />
            </div>
          </section>
          <div
            id="divider-line"
            className="border border-grey w-full my-3"
          ></div>
          {isLoading && (
            <div className="flex flex-row justify-center mb-3">
              <Loader />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
          >
            Save
          </button>
        </form>
      </div>
    </aside>
  );
}

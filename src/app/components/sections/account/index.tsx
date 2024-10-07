"use client";

import { useState } from "react";
import AddNewAddressForm from "../../forms/add_new_address";
import EditAddressForm from "../../forms/edit_address";
import Loader from "../../loader";
import { Address, SubjectFromToken, UserInfoDto } from "@/app/utils/interfaces";
import { colors } from "@/app/utils/constants";
import AddIcon from "../../icons/Add";
import ArrowIcon from "../../icons/Arrow";
import PencilIcon from "../../icons/Pencil";
import UserIcon from "../../icons/User";
import EditCircleIcon from "../../icons/EditCircle";
import { useRouter } from "next/navigation";
import { logout } from "@/app/actions/auth";

export default function AccountForm({
  isOpen,
  onClose,
  user,
}: {
  isOpen: boolean;
  onClose: Function;
  user: SubjectFromToken;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [isEditingAddress, setIsEdittingAddress] = useState(false);
  const [editAddressIndex, setEditAddressIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onUpdateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const user: UserInfoDto = {
      firstname: firstName,
      lastname: lastName,
      address: addresses,
    };
    try {
      alert("updating user");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleAddNewAddress(newAddress: Address) {
    setAddresses((addresses) => [newAddress, ...addresses]);
    setIsAddingNewAddress(!isAddingNewAddress);
  }

  function handleEditAddress(editedAddress: Address) {
    const updated_addresses = addresses.map((address, index) => {
      if (index === editAddressIndex) {
        return editedAddress;
      }
      return address;
    });
    setAddresses(updated_addresses);
    setIsEdittingAddress(!isEditingAddress);
  }

  function handleDeleteAddress() {
    const updated_addresses = addresses.filter(
      (_, index) => index !== editAddressIndex
    );
    setAddresses(updated_addresses);
    setIsEdittingAddress(!isEditingAddress);
  }

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
        <p
          className={`text-xs ${
            errorMessage ?? "hidden"
          } text-red text-center py-2`}
        >
          {errorMessage}
        </p>
        {/* UPDATE USER INFO FORM */}
        <form
          onSubmit={(e) => onUpdateUser(e)}
          className="w-full flex flex-col justify-between place-items-center gap-2 px-8 "
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
            <div className="w-full flex flex-row justify-between place-items-center ">
              <h1 className="font-MontserratBold text-lg  text-left">
                My addresses:
              </h1>
              <div
                className={`${
                  (isAddingNewAddress || isEditingAddress) && "rotate-45"
                }  transition-transform duration-200 ease-in-out`}
              >
                <button
                  type="button"
                  onClick={() => {
                    isEditingAddress
                      ? setIsEdittingAddress(false)
                      : setIsAddingNewAddress(!isAddingNewAddress);
                  }}
                >
                  <AddIcon height={28} width={28} fill="black" />
                </button>
              </div>
            </div>
            {isAddingNewAddress && (
              <AddNewAddressForm onAddNewAddress={handleAddNewAddress} />
            )}
            {isEditingAddress && (
              <EditAddressForm
                onEditAddress={handleEditAddress}
                onDeleteAddress={handleDeleteAddress}
                address={addresses[editAddressIndex ?? 0]}
              />
            )}
            {!isEditingAddress && !isAddingNewAddress && (
              <>
                {addresses.map((address, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full flex flex-row justify-between place-items-center text-left text-xs "
                    >
                      {/* <LocationIcon width={22} height={22} stroke="black" /> */}
                      <p className="flex-auto ">
                        {address.address_street_name ?? ""}{" "}
                        {address.address_street_no ?? ""},{" "}
                        {address.address_city ?? ""},{" "}
                        {address.address_country_code ?? ""}
                      </p>
                      <button
                        className="mr-1"
                        type="button"
                        onClick={() => {
                          setEditAddressIndex(index);
                          setIsEdittingAddress(true);
                        }}
                      >
                        <PencilIcon width={18} height={18} fill="black" />
                      </button>
                    </div>
                  );
                })}
              </>
            )}
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
          {!isAddingNewAddress && !isEditingAddress && (
            <button
              type="submit"
              className="w-full bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          )}
          <button
            type="button"
            onClick={handleLogout}
            className="w-full bg-grey hover:bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}

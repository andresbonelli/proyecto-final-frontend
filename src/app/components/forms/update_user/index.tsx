"use client";

import { useState } from "react";
import Loader from "../../loader";
import AddIcon from "../../icons/Add";
import PencilIcon from "../../icons/Pencil";
import AddNewAddressForm from "../add_new_address";
import EditAddressForm from "../edit_address";
import { Address, UserFromDB } from "@/utils/interfaces";
import { updateUserInfo } from "@/actions/user";

export function UpdateUserForm({ user }: { user: UserFromDB }) {
  const { firstname, lastname, address, id } = user;
  const [firstnameInput, setFirstnameInput] = useState(firstname ?? "");
  const [lastnameInput, setLastnameInput] = useState(lastname ?? "");
  const [addresses, setAddresses] = useState<Address[]>(address ?? []);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [isEditingAddress, setIsEdittingAddress] = useState(false);
  const [editAddressIndex, setEditAddressIndex] = useState<number | null>(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

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

  async function handleUpdateUser() {
    setStatus("loading");

    const actionResult = await updateUserInfo(id, {
      firstname: firstnameInput,
      lastname: lastnameInput,
      address: addresses,
    });
    if (actionResult?.success) {
      setStatus("success");
      window.location.reload();
    } else {
      setStatus("error");
      setMessage(actionResult?.error);
    }
  }

  return (
    <form onSubmit={handleUpdateUser}>
      {/* First name */}
      {status === "error" && (
        <p className="text-xs text-red text-center py-2">{message}</p>
      )}
      <div>
        <label
          htmlFor="first-name"
          className="w-full font-MontserratLight text-sm ml-2"
        >
          Nombre:
        </label>
        <input
          type="text"
          placeholder="nombre"
          value={firstnameInput ?? ""}
          onChange={(e) => setFirstnameInput(e.target.value)}
          className="w-full py-2 px-3 rounded-md border border-gray-300 mt-2"
        ></input>
      </div>
      {/* Last Name */}
      <div>
        <label
          htmlFor="last-name"
          className="w-full font-MontserratLight text-sm ml-2"
        >
          Apellido:
        </label>
        <input
          type="text"
          placeholder="apellido"
          value={lastnameInput ?? ""}
          onChange={(e) => setLastnameInput(e.target.value)}
          className="w-full py-2 px-3 rounded-md border border-gray-300 mt-2"
        ></input>
      </div>

      <div id="divider-line" className="border border-grey w-full my-3"></div>
      {/* Addresses */}
      <section
        id="my-addresses"
        className="w-full flex flex-col justify-between place-items-center gap-5  mb-2 "
      >
        <div className="w-full flex flex-row justify-between items-center ">
          <h1 className="font-MontserratBold text-lg  text-left">
            Mis direcciones:
          </h1>
          <div
            className={`${
              (isAddingNewAddress || isEditingAddress) && "rotate-45"
            }  transition-transform duration-300 ease-in-out flex items-center`}
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
      <div id="divider-line" className="border border-grey w-full my-3"></div>
      {!isAddingNewAddress && !isEditingAddress && (
        <button
          disabled={status === "loading"}
          type="submit"
          className="w-full bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
        >
          {status === "loading" ? <Loader /> : "Guardar"}
        </button>
      )}
    </form>
  );
}

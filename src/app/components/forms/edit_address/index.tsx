import { useState } from "react";
import { countryCodes } from "@/utils/constants";
import { Address } from "@/utils/interfaces";

export default function EditAddressForm({
  address,
  onEditAddress,
  onDeleteAddress,
}: {
  address: Address;
  onEditAddress: (address: Address) => void;
  onDeleteAddress: () => void;
}) {
  const [streetName, setStreetName] = useState(
    address.address_street_name || ""
  );
  const [streetNo, setStreetNo] = useState(address.address_street_no || "");
  const [cityName, setCityName] = useState(address.address_city || "");
  const [stateName, setStateName] = useState(address.address_state || "");
  const [countryCode, setCountryCode] = useState(
    address.address_country_code || ""
  );
  const [postalCode, setPostalCode] = useState(
    address.address_postal_code || ""
  );

  function handleEditAddress() {
    const editedAddress: Address = {
      address_street_name: streetName,
      address_street_no: streetNo,
      address_city: cityName,
      address_state: stateName,
      address_country_code: countryCode,
      address_postal_code: postalCode,
    };
    onEditAddress(editedAddress);
  }

  return (
    <form>
      <div>
        <label
          htmlFor="calle"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          Calle:
        </label>
        <input
          type="text"
          value={streetName}
          onChange={(e) => setStreetName(e.target.value)}
          className="w-full py-1 px-3 rounded-md border border-gray-300 "
        ></input>
      </div>
      <div>
        <label
          htmlFor="numero"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          Nº:
        </label>
        <input
          type="text"
          value={streetNo}
          onChange={(e) => setStreetNo(e.target.value)}
          className="w-full py-1 px-3 rounded-md border border-gray-300"
        ></input>
      </div>
      <div>
        <label
          htmlFor="ciudad"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          Ciudad:
        </label>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="w-full py-1 px-3 rounded-md border border-gray-300 "
        ></input>
      </div>
      <div>
        <label
          htmlFor="provincia, estado o región"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          Provincia/Estado:
        </label>
        <input
          type="text"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          className="w-full py-1 px-3 rounded-md border border-gray-300"
        ></input>
      </div>
      <div>
        <label
          htmlFor="pais"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          País:
        </label>
        <select
          id="countrySelect"
          aria-label="Default select example"
          name="country"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="w-full py-1 px-3 rounded-md border border-gray-300 text-xs"
        >
          <option value="" disabled>
            Seleccionar país
          </option>
          {Object.entries(countryCodes).map(([key, value]) => {
            return (
              <option aria-selected="true" key={key} value={value[0]}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="código postal"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          CP:
        </label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="w-full py-1 px-3 rounded-md border border-gray-300"
        ></input>
      </div>
      <button
        type="button"
        onClick={() => handleEditAddress()}
        className="w-full bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md mt-3"
      >
        Editar dirección
      </button>
      <button
        type="button"
        onClick={() => onDeleteAddress()}
        className="w-full bg-red hover:bg-redder text-white py-2 px-4 rounded-md mt-3"
      >
        Eliminar dirección
      </button>
    </form>
  );
}

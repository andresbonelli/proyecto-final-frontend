import { CountryCode } from "@/app/utils";
import { countryCodes } from "@/app/utils/constants";
import { Address } from "@/app/utils/interfaces";

import { useState } from "react";

export default function EditAddressForm({
  address,
  onEditAddress,
  onDeleteAddress,
}: {
  address: Address;
  onEditAddress: Function;
  onDeleteAddress: Function;
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
          htmlFor="street-name"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          Street name:
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
          htmlFor="street-no"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          Street Nº:
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
          htmlFor="city-name"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          City:
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
          htmlFor="state-name"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          Province/State:
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
          htmlFor="country-name"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          Country:
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
            Select a country
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
          htmlFor="postal-code"
          className="w-full font-MontserratLight text-xs ml-2"
        >
          ZIP Code:
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
        Edit Address
      </button>
      <button
        type="button"
        onClick={() => onDeleteAddress()}
        className="w-full bg-red hover:bg-redder text-white py-2 px-4 rounded-md mt-3"
      >
        Delete Address
      </button>
    </form>
  );
}

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { RootState } from "../reduxToolkit/store";

const AllVehicle: React.FC = () => {
  const result = useSelector((state: any) => state.VehicleListSlice);
  console.log(result, "result");

  const [selectedTransmission, setSelectedTransmission] = useState<
    string | null
  >(null);
  const [selectedOwner, setSelectedOwner] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedFuelType, setSelectedFuelType] = useState<string | null>(null);
  const [searchBrand, setSearchBrand] = useState<string>("");

  interface Vehicle {
    brandName: string;
    color: string;
    externalFitment: string;
    insuranceUpTo: string;
    kms: string;
    location: string;
    noOfOwner: string;
    transmission: string;
    yearMft: string;
    fuelType: string;
  }

  const transmissionOptions = ["Manual", "Automatic", "Other"].map(
    (transmission) => ({ value: transmission, label: transmission })
  );
  const ownerOptions = ["Owner1", "Owner2", "Owner3"].map((owner) => ({
    value: owner,
    label: owner,
  }));
  const locationOptions = ["Delhi", "Mumbai", "Bangalore"].map((location) => ({
    value: location,
    label: location,
  }));
  const fuelTypeOptions = ["Petrol", "Diesel", "Electric"].map((fuelType) => ({
    value: fuelType,
    label: fuelType,
  }));

  const filteredData = result.filter((vehicle) => {
    return (
      (!selectedTransmission ||
        vehicle.transmission === selectedTransmission) &&
      (!selectedOwner || vehicle.noOfOwner === selectedOwner) &&
      (!selectedLocation || vehicle.location === selectedLocation) &&
      (!selectedFuelType || vehicle.fuelType === selectedFuelType) &&
      (!searchBrand ||
        vehicle.brandName.toLowerCase().includes(searchBrand.toLowerCase()))
    );
  });

  return (
    <>
      <div className="max-w-screen-xl px-4 py-3 mx-auto bg-gray-200 my-10 rounded-md">
        <div className="flex space-x-4 mb-4">
          <Select
            options={transmissionOptions}
            onChange={(option: any) =>
              setSelectedTransmission(option ? option.value : null)
            }
            value={transmissionOptions.find(
              (option) => option.value === selectedTransmission
            )}
            placeholder="Select Transmission"
          />
          <Select
            options={ownerOptions}
            onChange={(option: any) =>
              setSelectedOwner(option ? option.value : null)
            }
            value={ownerOptions.find(
              (option) => option.value === selectedOwner
            )}
            placeholder="Select Owner"
          />
          <Select
            options={locationOptions}
            onChange={(option: any) =>
              setSelectedLocation(option ? option.value : null)
            }
            value={locationOptions.find(
              (option) => option.value === selectedLocation
            )}
            placeholder="Select Location"
          />
          <Select
            options={fuelTypeOptions}
            onChange={(option: any) =>
              setSelectedFuelType(option ? option.value : null)
            }
            value={fuelTypeOptions.find(
              (option) => option.value === selectedFuelType
            )}
            placeholder="Select Fuel Type"
          />
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Brand"
            value={searchBrand}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchBrand(e.target.value)
            }
          />
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto border-collapse  w-full border-gray-800">
            <thead>
              <tr>
                <th className="border border-gray-800 px-4 py-2">Brand Name</th>
                <th className="border border-gray-800 px-4 py-2">Color</th>
                <th className="border border-gray-800 px-4 py-2">
                  Transmission
                </th>
                <th className="border border-gray-800 px-4 py-2">Owner</th>
                <th className="border border-gray-800 px-4 py-2">Location</th>
                <th className="border border-gray-800 px-4 py-2">Fuel Type</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((vehicle, index) => (
                <tr key={index}>
                  <td className="border border-gray-800 px-4 py-2">
                    {vehicle.brandName}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {vehicle.color}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {vehicle.transmission}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {vehicle.noOfOwner}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {vehicle.location}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {vehicle.fuelType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllVehicle;

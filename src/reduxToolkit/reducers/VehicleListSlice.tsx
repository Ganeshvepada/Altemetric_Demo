import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: Vehicle[] = [
  {
    brandName: "Audi",
    color: "Blue",
    externalFitment: "Test",
    insuranceUpTo: "2025",
    kms: "12",
    location: "Delhi",
    noOfOwner: "Owner1",
    transmission: "Manual",
    yearMft: "2024",
    fuelType: "Petrol",
  },
];

const vehicleListSlice = createSlice({
  name: "vehicleList",
  initialState,
  reducers: {
    addVehicle: (state, action: PayloadAction<Vehicle>) => {
      //   console.log(current(state), "state");
      //   console.log(action, "action");
      state.push(action.payload);
    },
  },
});

export const { addVehicle } = vehicleListSlice.actions;

export default vehicleListSlice.reducer;

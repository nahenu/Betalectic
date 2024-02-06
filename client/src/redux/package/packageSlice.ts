import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Package {
  selectedPackage: string;
  description: string;
}

interface PackageState {
  favouritePackage: Package[];
}

const initialState: PackageState = {
  favouritePackage: [],
};


export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    addFavouritePackage: (state, action: PayloadAction<Package>) => {
      state.favouritePackage = state.favouritePackage.concat(action.payload);
    },
    deleteFavouritePackage: (state, action: PayloadAction<number>) => {
      state.favouritePackage.splice(action.payload, 1);
    },
  },
});

export const { addFavouritePackage, deleteFavouritePackage } = packageSlice.actions;

export default packageSlice.reducer;

export type PackageStateType = PackageState;
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Address, PaymentMethod, Person, Profile } from "./types";
import { processData } from "./utils";

export interface DATA {
  profiles: Profile[];
  persons: Person[];
  addresses: Address[];
  paymentMethods: PaymentMethod[];
}

export interface STATE extends DATA {
  isLoading: boolean;
}

const initialState: STATE = {
  profiles: [],
  persons: [],
  addresses: [],
  paymentMethods: [],
  isLoading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfiles.pending, (state: STATE) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProfiles.fulfilled,
        (state: STATE, action: PayloadAction<Profile[]>) => {
          const data: DATA = processData(action.payload);
          //console.log("data:", data);
          state.profiles = data.profiles;
          state.persons = data.persons;
          state.addresses = data.addresses;
          state.paymentMethods = data.paymentMethods;
          state.isLoading = false;
        }
      )
      .addCase(
        fetchProfiles.rejected || deleteProfile.rejected,
        (state, action) => {
          console.log("Error:", action.payload);
          state.isLoading = false;
        }
      )
      .addCase(deleteProfile.pending, (state: STATE) => {
        state.isLoading = true;
      })
      .addCase(deleteProfile.fulfilled, (state: STATE) => {
        state.isLoading = false;
      });
  },
});

export const fetchProfiles = createAsyncThunk("fetchProfiles", async () => {
  const res = await fetch(`http://127.0.0.1:3001/profiles`);
  return res?.json();
});

export const deleteProfile = createAsyncThunk(
  "deleteProfile",
  async ({ profileId }: { profileId: string }, { dispatch }) => {
    const res = await fetch(`http://127.0.0.1:3001/profiles/${profileId}`, {
      method: "DELETE",
    });
    await dispatch(fetchProfiles());
    return res?.json();
  }
);

export default profileSlice.reducer;

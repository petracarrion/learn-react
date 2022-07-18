import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type filterContainerType = {
  id: string;
  filterOptions: string[];
};

type filterOptionType = {
  id: string;
  name: string;
  weight: number;
  checked: boolean;
};

export type FilterStateType = {
  filter: {
    byId: { [key: string]: filterContainerType };
    allIds: string[];
  };
  filterOption: {
    byId: { [key: string]: filterOptionType };
    allIds: string[];
  };
};

const entities: FilterStateType = {
  filter: {
    byId: {
      Company: {
        id: "Company",
        filterOptions: ["Company/Vodafone", "Company/O2", "Company/Telekom"],
      },
      City: {
        id: "City",
        filterOptions: ["City/Berlin", "City/Hamburg", "City/Heilbronn"],
      },
    },
    allIds: ["Company", "City"],
  },
  filterOption: {
    byId: {
      "Company/Vodafone": {
        id: "Company/Vodafone",
        name: "Vodafone",
        weight: 99,
        checked: false,
      },
      "Company/O2": {
        id: "Company/O2",
        name: "O2",
        weight: 99,
        checked: false,
      },
      "Company/Telekom": {
        id: "Company/Telekom",
        name: "Telekom",
        weight: 99,
        checked: false,
      },
      "City/Berlin": {
        id: "City/Berlin",
        name: "Berlin",
        weight: 99,
        checked: false,
      },
      "City/Hamburg": {
        id: "City/Hamburg",
        name: "Hamburg",
        weight: 99,
        checked: false,
      },
      "City/Heilbronn": {
        id: "City/Heilbronn",
        name: "Heilbronn",
        weight: 99,
        checked: false,
      },
    },
    allIds: [
      "Company/Vodafone",
      "Company/O2",
      "Company/Telekom",
      "City/Berlin",
      "City/Hamburg",
      "City/Heilbronn",
    ],
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: entities,
  reducers: {
    // increment: (state) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.value += 1
    // },
    // decrement: (state) => {
    //     state.value -= 1
    // },
    // toggleFilter: (state, action) => {
    //     state.value += action.payload
    // },
  },
});

export const selectAllFilterIds = (state: RootState) =>
  state.filter.filter.allIds;
export const selectFilterById = (state: RootState, filterId: string) =>
  state.filter.filter.byId[filterId];
export const selectFilterOptionById = (
  state: RootState,
  filterOptionId: string
) => state.filter.filterOption.byId[filterOptionId];

export default filterSlice.reducer;

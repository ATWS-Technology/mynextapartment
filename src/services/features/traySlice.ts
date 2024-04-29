import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import {Source} from 'react-native-fast-image';
import {ImageRequireSource, ImageSourcePropType} from 'react-native';

// Define a type for the slice state
interface Plate {
  id: string;
  name: string;
  image:
    | Source
    | ImageRequireSource
    | ImageSourcePropType
    | AnimatedNode<ImageSourcePropType | undefined>;
  amount: number;
}

interface PlateState {
  items: Array<Plate>;
}

// Define the initial state using that type
const initialState: PlateState = {
  items: [],
};

export const plateSlice = createSlice({
  name: 'plate',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToPlate: (state, action: PayloadAction<Plate>) => {
      state.items = [...state?.items, action?.payload];
    },
    removeFromPlate: (state, action: PayloadAction<Plate>) => {
      state.items = [...state?.items, action?.payload];
    },
  },
});

export const {addToPlate, removeFromPlate} = plateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPlateItems = (state: RootState) => state.plate.items;

export const selectPlateItemsWithId = (state: RootState, id: string) =>
  state.plate.items.filter(item => item.id === id);

export default plateSlice.reducer;

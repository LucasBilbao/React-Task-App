import { createSlice } from '@reduxjs/toolkit';
import { FormState } from '../../interfaces/FormState.interface';

const initialState: FormState = {
  isFormShown: false,
};

const { actions, reducer } = createSlice({
  name: "form",
  initialState,
  reducers: {
    toggleForm(state) {
      state.isFormShown = !state.isFormShown;
    }
  }
});

export const { toggleForm } = actions;
export default reducer;
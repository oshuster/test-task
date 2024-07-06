import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formNumber: 1,
  needSubmit: false,
  formValue: {},
};

export const submitSlice = createSlice({
  name: 'submit',
  initialState,
  reducers: {
    submitForm: (state, { payload }) => {
      state.needSubmit = payload;
    },
    setFormNumber: (state, { payload }) => {
      state.formNumber = payload;
    },
    setFormValue: (state, { payload }) => {
      state.formValue = payload;
    },
  },
});

export const { submitForm, setFormNumber, setFormValue } = submitSlice.actions;
export default submitSlice.reducer;

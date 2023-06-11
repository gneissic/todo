import { createSlice } from "@reduxjs/toolkit";
const initialInputState = {
  inputData: [],
  pendingTask: 0,
};
const inputSlice = createSlice({
  name: "input",
  initialState: initialInputState,
  reducers: {
    onAddFormData(state, action) {
      const newInput = action.payload;
      state.pendingTask++;
      state.inputData.push({
        title: newInput.title,
        description: newInput.description,
        random: newInput.random,
      });
    },
    onDeleteTodos(state, action) {
      const id = action.payload;
      state.pendingTask--;
      state.inputData = state.inputData.filter((data) => data.random !== id);
    },
    onClearTodos(state) {
      state.inputData = [];
      state.pendingTask = 0;
    },
  },
});
export const inputActions = inputSlice.actions;
export default inputSlice;

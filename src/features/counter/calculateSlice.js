import { createSlice } from "@reduxjs/toolkit";

export const calculateSlice = createSlice({
  name: "calculate",
  initialState: {
    value: "",
    history: [],
    handle: 0,
  },
  reducers: {
    typeValue: (state, action) => {
      state.value += action.payload;
    },
    deleteValue: (state) => {
      state.value[state.value.length - 1] === " "
        ? (state.value = state.value.slice(0, -3))
        : (state.value = state.value.slice(0, -1));
    },
    refreshValue: (state) => {
      state.history = [];
      state.handle = 0;
      state.value = "";
    },
    addition: (state) => {
      if (state.handle === 0) {
        state.handle = 1;
        state.value += " + ";
      }
    },
    substraction: (state) => {
      if (state.handle === 0) {
        state.handle = 1;
        state.value += " - ";
      }
    },
    multiplication: (state) => {
      if (state.handle === 0) {
        state.handle = 1;
        state.value += " x ";
      }
    },
    division: (state) => {
      if (state.handle === 0) {
        state.handle = 1;
        state.value += " ÷ ";
      }
    },
    percent: (state) => {
      if (state.value) {
        state.value = +state.value / 100;
      }
    },
    resultCalculation: (state) => {
      const dataValue = state.value;
      const temp1 = dataValue.indexOf(" ");
      const temp2 = dataValue.indexOf(" ", temp1 + 1);
      if (temp1 === -1 || temp2 === -1) {
        return;
      }
      const num1 = +dataValue.slice(0, temp1);
      const num2 = +dataValue.slice(temp2, dataValue.length);
      const operation = dataValue.slice(temp2 - 1, temp2);
      switch (operation) {
        case "+":
          state.value = num1 + num2;
          break;
        case "-":
          state.value = num1 - num2;
          break;
        case "x":
          state.value = num1 * num2;
          break;
        case "÷":
          state.value = num1 / num2;
          break;
        default:
        // code block
      }
      state.value = state.value.toString();
      state.handle = 0;
      state.history.push(`${num1} ${operation} ${num2}`);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  typeValue,
  deleteValue,
  refreshValue,
  addition,
  substraction,
  multiplication,
  division,
  percent,
  resultCalculation,
} = calculateSlice.actions;

export default calculateSlice.reducer;

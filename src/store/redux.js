import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter += 2;
    },
    decrement(state) {
      state.counter -= 2;
    },
    incrementby5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementby5(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {counter:counterSlice.reducer,auth:authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions=authSlice.actions;

// const counterSubscriber=()=>{
//     const latestState=store.getState()
//     console.log(latestState)
// }

// store.subscribe(counterSubscriber)

// store.dispatch({type:'increment'})

export default store;

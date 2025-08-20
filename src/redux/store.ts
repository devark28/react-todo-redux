import { configureStore } from "@reduxjs/toolkit";
import todosSlice from './slices/todos';


const store = configureStore({
    reducer: {
        todos: todosSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

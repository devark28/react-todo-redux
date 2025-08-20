import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TodoType } from "../../types/todo";

export const initialState: TodoType[] = [
    { id: 0, title: 'IAmHere', done: false },
    { id: 1, title: 'reactjsexample.com', done: false },
    { id: 2, title: 'A To do app developed using to consolidate your knowledge about React', done: false },
];


const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        create(state, action: PayloadAction<Omit<TodoType, 'id'>>){
            state.push({ id: state.length, ...action.payload });
        },
        markdone(state, action: PayloadAction<number>){
            return state.map(td => td.id == action.payload ? { ...td, done: !td.done } : td);
        },
        remove(state, action: PayloadAction<number>){
            return state.filter(td => td.id != action.payload)
        }
    }
});

export default todosSlice;

export const {create, markdone, remove} = todosSlice.actions;

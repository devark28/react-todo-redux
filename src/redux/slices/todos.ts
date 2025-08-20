import { createSlice } from "@reduxjs/toolkit";
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
        create(state, action){
            state.push({ id: state.length, ...action.payload });
        },
        markdone(state, action){
            return state.map(td => td.id == action.payload ? { ...td, done: !td.done } : td);
        },
        remove(state, action){
            return state.filter(td => td.id != action.payload)
        }
    }
});

export default todosSlice;

export const {create, markdone, remove} = todosSlice.actions;

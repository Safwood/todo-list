import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../store';

type Task = {
    id: string;
    content: string;
};

type TasksState = {
    tasks: Array<Task>;
};

const initialState: TasksState = {
    tasks: [
        {
            id: "1",
            content: 'study theory',
        },
        {
            id: "2",
            content: 'read the book', 
        },
        {
            id: "3",
            content: 'solve codewars tasks'
        },
    ],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks.filter(task => task.id !== action.payload);
        },
    },
});

export const tasksSelector = (state: State) => state.tasks.tasks;

export default tasksSlice.reducer;
export const { addTask } = tasksSlice.actions;

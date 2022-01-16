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
            content: 'Study theory',
        },
        {
            id: "2",
            content: 'Read the book', 
        },
        {
            id: "3",
            content: 'Solve codewars tasks'
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
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    },
});

export const tasksSelector = (state: State) => state.tasks.tasks;

export default tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

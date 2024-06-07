import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
    "2024-05-21": [
        {
            "title": "Save the Tasks",
            "isCompleted": true
        },
        {
            "title": "Save the Tasks",
            "isCompleted": true
        }

    ],
    "2024-05-22": [
        {
            "title": "Save the Tasks By writing ",
            "isCompleted": false
        },
        {
            "title": "Save the Tasks By writing ",
            "isCompleted": false
        }

    ],
    "2024-05-23": [
        {
            "title": "add a new task ",
            "isCompleted": false
        },
        {
            "title": "add a new task ",
            "isCompleted": false
        }
    ],
    "2024-05-24": [
        {
            "title": "change a new task ",
            "isCompleted": false
        },
        {
            "title": "Separate in 3 tabs as: List - Add - Settings ",
            "isCompleted": false
        }
    ]
}


export const tasksSlice = createSlice({

    name: 'tasks',
    initialState: initialTasks,
    reducers: {
        addTask: (state, action) => {
            const { date, task } = action.payload
            if (!state[date]) {
                state[date] = []
            }
            state[date].push(task)
        },

        toggleTaskCompletion: (state, action) => {
            const { date, taskIndex } = action.payload;
            const task = state[date]?.[taskIndex];
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },

        removeTask: (state, action) => {
            const { date, taskIndex } = action.payload;
            if (state[date]) {
                state[date].splice(taskIndex, 1);
            }
        }
    }
})

export const { addTask, toggleTaskCompletion, removeTask } = tasks.actions;

export default Tasks.reducer;
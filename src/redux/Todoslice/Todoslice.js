import { createSlice } from '@reduxjs/toolkit'

const initialState = [
   { id: Math.random(),
    title:"todo item 1",
    description:"todo description item 1 ",
    isDone: false ,
    },
    { id: Math.random(),
        title:"todo item 2",
        description:"todo description item 2 ",
        isDone: false ,
    },
    { id: Math.random(),
        title:"todo item 3",
        description:"todo description item 3 ",
        isDone: true ,
    },
]
;

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtask: (state, action) => {
      state.push(action.payload);
    },
    removetask: (state, action) => {
      return state.filter(
        (el)=>el.id!==action.payload.id);
    },
    donetask: (state, action) => { 
      return state.map((el)=>el.id === action.payload.id ? action.payload:el)
    }
  }, 
})

// Action creators are generated for each case reducer function
export const { addtask ,removetask,donetask } = todoSlice.actions

export default todoSlice.reducer
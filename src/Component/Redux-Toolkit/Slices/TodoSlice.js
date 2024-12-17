import { createSlice } from "@reduxjs/toolkit";


const initialState={
    userDetail:{
        name: '',
        role: '',
        date: '',
        address: {
          city: '',
          state: '',
          pincode: '',
        },
    },
    data: []
}
 const TodoSlice= createSlice({
    name: "todoSlice",
    initialState,
    reducers:{
       handleChange: (state, action)=>{
        const {name, value} = action.payload
        if(name in state.userDetail.address){
            state.userDetail.address[name] = value
        }else{
            state.userDetail[name] = value
        }
       },

       submitHandler: (state)=>{
        state.data.push(state.userDetail);
        state.userDetail={
            name: '',
            role: '',
            date: '',
            address: {
              city: '',
              state: '',
              pincode: '',
            },
        }
       },

       removeAddress:(state, action)=>{
        const index = action.payload;
        state.data.splice(index, 1)
       },

       editHandler: (state, action)=>{
        const index = action.payload
          state.userDetail = state.data[index]
          state.data.splice(index, 1)
    },
    },
});

export const { handleChange, submitHandler, editHandler, removeAddress}= TodoSlice.actions;

export default TodoSlice.reducer
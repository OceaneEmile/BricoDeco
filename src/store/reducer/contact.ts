import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
interface ContactStore {
    inputMailUser:string|undefined,
    inputSubjectUser:string|undefined,
    inputContentUser:string|undefined,
}
export const initialState:ContactStore={
    inputMailUser:"",
    inputSubjectUser:"",
    inputContentUser:"",
}

export const inputMailUser=createAction("contact/inputMailUser");
export const inputSubjectUser=createAction("contact/inputSubjectUser");
export const inputContentUser=createAction("contact/inputContentUser");

export const sendMailContact=createAsyncThunk("contact/sendMailContact",async (_,{getState})=>{
    const state=getState() as {contact:ContactStore};
    const response=await axios.post(
        "http://localhost/Apo/projet-13-brico-deco-back/public/api/contact",
        {
            "email":state.contact.inputMailUser,
            "subject":state.contact.inputSubjectUser,
            "contenu":state.contact.inputContentUser
        }
    )
    return response.data;
})

const contactReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(inputMailUser,(state,action)=>{
        state.inputMailUser=action.payload;
    })
    .addCase(inputSubjectUser,(state,action)=>{
        state.inputSubjectUser=action.payload;
        console.log(state.inputSubjectUser);
        
    })
    .addCase(inputContentUser,(state,action)=>{
        state.inputContentUser=action.payload;
        console.log(state.inputContentUser);
        
    })
});
export default contactReducer;
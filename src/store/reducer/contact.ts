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
const APIURL=import.meta.env.VITE_API_URL;
export const inputMailUser=createAction("contact/inputMailUser");
export const inputSubjectUser=createAction("contact/inputSubjectUser");
export const inputContentUser=createAction("contact/inputContentUser");

export const sendMailContact=createAsyncThunk("contact/sendMailContact",async (_,{getState})=>{
    const state=getState() as {contact:ContactStore};
    const response=await axios.post(
        `${APIURL}/contact`,
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
        
    })
    .addCase(inputContentUser,(state,action)=>{
        state.inputContentUser=action.payload;
    })
});
export default contactReducer;
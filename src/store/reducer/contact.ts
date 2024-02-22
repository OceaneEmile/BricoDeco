import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
interface ContactStore {}
export const initialState:ContactStore={}

const contactReducer=createReducer(initialState,(builder)=>{
    builder

});
export default contactReducer;
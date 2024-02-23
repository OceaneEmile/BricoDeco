import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
interface TutoCreateState {
    tutorielCreate:{
        title:string,
        resume:string,
        image:string,
        outils:[
            {
                id:number
            }
        ],
        categories:[
            {
            id:number
            }
        ]

    },
    missingValue:boolean
}
const ImageURL=import.meta.env.VITE_IMAGE_URL;
export const initialState: TutoCreateState = {
    tutorielCreate:{
        title:"",
        resume:"",
        image:"",
        outils:[
            {
                id:0
            }
        ],
        categories:[
            {
            id:0
            }
        ]
    },
    missingValue:true
};
// --------------------------------- Action ---------------------------------
export const titleCreate = createAction<string>("titleCreate");
export const resumeCreate = createAction<string>("descriptionCreate");
export const imageCreate = createAction<string>("imageCreate");
export const toolsCreate = createAction<[{id:number}]>("toolsCreate");
export const categoriesCreate = createAction<[{id:number}]>("categoriesCreate");
export const checkFirstStep = createAction("checkFirstStep");
// --------------------------------- Thunk ---------------------------------


// --------------------------------- Reducer ---------------------------------
const tutorielCreateReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(titleCreate,(state,action)=>{
        state.tutorielCreate.title=action.payload;
    })
    .addCase(resumeCreate,(state,action)=>{
        state.tutorielCreate.resume=action.payload;
    })
    .addCase(imageCreate,(state,action)=>{
        state.tutorielCreate.image=`${ImageURL}${action.payload}`;
    })
    .addCase(toolsCreate,(state,action)=>{
        state.tutorielCreate.outils=action.payload;
    })
    .addCase(categoriesCreate,(state,action)=>{
        state.tutorielCreate.categories=action.payload;
    })
    .addCase(checkFirstStep,(state)=>{
        if(state.tutorielCreate.title!=="" && state.tutorielCreate.resume!=="" && state.tutorielCreate.image!==""){
            if(state.tutorielCreate.categories[0]){
                state.missingValue=false; 
            }           
        }
      
    })
});

export default tutorielCreateReducer;
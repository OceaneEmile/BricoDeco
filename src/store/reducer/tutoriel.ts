import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const initialState = {
    menuBurgerIsOpen:false,
    errorCategories:null,
    loadingCategories:false,
    categories:[],
    errorRandomsTutos:null,
    loadingRandomsTutos:false,
    randomsTutos:[],
    tutoriels:[],
    tutorielsByCategory:[],
    category:[],
    tutoriel:{},
    errorTuto:null,
    loadingTuto:false,
    isAuthor:false,
};

// --------------------------------- Action ---------------------------------
export const openMenuBurger=createAction("tutoriel/openMenuBurger");
export const isAuthor=createAction("tutoriel/isAuthor");

// --------------------------------- Thunk ---------------------------------
export const fetchCategory =createAsyncThunk("tutoriel/fetchCategory",async()=>{
    const response=await axios.get(
        "http://localhost/Apo/projet-13-brico-deco-back/public/api/categorie",
      );    
      return response.data;
})
export const fetchRandomsTutos=createAsyncThunk("tutoriel/fetchRandomsTutos",async()=>{
  const response = await axios.get(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels/random"
  );
  return response.data;
})
export const fetchTutoriels=createAsyncThunk("tutoriel/fetchTutoriels",async()=>{
  const response=await axios.get(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels"
  );
  return response.data;
})
export const fetchTutorielsByCategory=createAsyncThunk("tutoriel/fetchTutorielsByCategory",async(categoryId)=>{
  const response=await axios.get(
    `http://localhost/Apo/projet-13-brico-deco-back/public/api/categorie/${categoryId}/tutoriels`
  );
  return response.data;
})
 export const fetchCategoryById=createAsyncThunk("tutoriel/fetchCategoryById",async(categoryId)=>{
  const response=await axios.get(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/categorie/"+categoryId
  )
  return response.data;
 })
 export const fetchTutorielById=createAsyncThunk("tutoriel/fetchTutorielById",async(tutorielId)=>{
  const response=await axios.get(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels/"+tutorielId
  );
  return response.data;
 })

// --------------------------------- Reducer ---------------------------------
const tutorielReducer=createReducer(initialState,(builder)=>{
builder
.addCase(openMenuBurger,(state)=>{
    state.menuBurgerIsOpen=!state.menuBurgerIsOpen;
})
.addCase(fetchCategory.pending, (state) => {
    state.errorCategories = null;
    state.loadingCategories = true;
  })
  .addCase(fetchCategory.rejected, (state, action) => {
    state.loadingCategories = false;
    state.errorCategories = action.error.message as any;
  })
  .addCase(fetchCategory.fulfilled, (state, action) => {
    state.loadingCategories = false;
    state.categories = action.payload;
  })
  .addCase(fetchRandomsTutos.pending, (state) => {
    state.errorRandomsTutos = null;
    state.loadingRandomsTutos = true;
  })
  .addCase(fetchRandomsTutos.rejected, (state, action) => {
    state.loadingRandomsTutos = false;
    state.errorRandomsTutos = action.error.message as any;
  })
  .addCase(fetchRandomsTutos.fulfilled, (state, action) => {
    state.loadingRandomsTutos = false;
    state.randomsTutos = action.payload;
  })
  .addCase(fetchTutoriels.pending, (state) => {
    state.errorRandomsTutos = null;
    state.loadingRandomsTutos = true;
  })
  .addCase(fetchTutoriels.rejected, (state, action) => {
    state.loadingRandomsTutos = false;
    state.errorRandomsTutos = action.error.message as any;
  })
  .addCase(fetchTutoriels.fulfilled, (state, action) => {
    state.loadingRandomsTutos = false;
    state.tutoriels = action.payload;
  })
  .addCase(fetchTutorielsByCategory.pending, (state) => {
    state.errorRandomsTutos = null;
    state.loadingRandomsTutos = true;
  })
  .addCase(fetchTutorielsByCategory.rejected, (state, action) => {
    state.loadingRandomsTutos = false;
    state.errorRandomsTutos = action.error.message as any;
  })
  .addCase(fetchTutorielsByCategory.fulfilled, (state, action) => {
    state.loadingRandomsTutos = false;
    state.tutorielsByCategory = action.payload;
  })
  .addCase(fetchCategoryById.pending, (state) => {
    state.errorRandomsTutos = null;
    state.loadingRandomsTutos = true;
  })
  .addCase(fetchCategoryById.rejected, (state, action) => {
    state.loadingRandomsTutos = false;
    state.errorRandomsTutos = action.error.message as any;
  })
  .addCase(fetchCategoryById.fulfilled, (state, action) => {
    state.loadingRandomsTutos = false;
    state.category = action.payload;
  })
  .addCase(fetchTutorielById.pending, (state) => {
    state.errorTuto = null;
    state.loadingTuto = true;
  })
  .addCase(fetchTutorielById.rejected, (state, action) => {
    state.loadingTuto = false;
    state.errorTuto = action.error.message as any;
  })
  .addCase(fetchTutorielById.fulfilled, (state, action) => {
    state.loadingTuto = false;
    state.tutoriel = action.payload;
  })
  .addCase(isAuthor, (state,action:any) => {
    if(action.payload){
      if(action.payload.author===action.payload.user ){
      state.isAuthor=true;
    }else{
      state.isAuthor=false;
    }}
  });
    
});
export default tutorielReducer;
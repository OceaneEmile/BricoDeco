import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateProps {
  menuBurgerIsOpen: boolean;
  errorCategories: null | string;
  loadingCategories: boolean;
  errorRandomsTutos: null | string;
  loadingRandomsTutos: boolean;
  tutoriels: any[]; // Remplace "any" par le type réel des tutoriels
  tutorielsByCategory: any[]; // Remplace "any" par le type réel des tutoriels par catégorie
  category: any; // Remplace "any" par le type réel de la catégorie
  tutoriel: any; // Remplace "any" par le type réel du tutoriel
  errorTuto: null | string;
  loadingTuto: boolean;
  isAuthor: boolean;
  tools: any[]; // Remplace "any" par le type réel des outils
  errorTools: null | string;
  loadingTools: boolean;
  categories: any[];
  randomsTutos:any[]
  deleted:boolean;
  tutorielsByUser:any[];
  numberOfTutos:number;
  numberOfTutosCategory:number;
  idCategory:any,
  idTuto:any,
}

export const initialState:initialStateProps = {
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
    tutoriel:[],
    errorTuto:null,
    loadingTuto:false,
    isAuthor:false,
    tools:[],
    errorTools:null,
    loadingTools:false,
    deleted:false,
    tutorielsByUser:[],
    numberOfTutos:12,
    numberOfTutosCategory:12,
    idCategory:undefined,
    idTuto:undefined,
};

const APIURL=import.meta.env.VITE_API_URL;


// --------------------------------- Action ---------------------------------
export const openMenuBurger=createAction("tutoriel/openMenuBurger");
export const isAuthor=createAction("tutoriel/isAuthor");
export const resetDeleted=createAction("tutoriel/resetDeleted");
export const showMoreTutos=createAction("tutoriel/showMoreTutos");
export const showMoreTutosCategory=createAction("tutoriel/showMoreTutosCategory");
export const findIdCategory=createAction("tutoriel/findIdCategory");
export const findIdTuto=createAction("tutoriel/findIdTuto");
// --------------------------------- Thunk ---------------------------------
export const fetchCategory =createAsyncThunk("tutoriel/fetchCategory",async()=>{
    const response=await axios.get(
      `${APIURL}/categorie`
      );    
      return response.data;
})
export const fetchRandomsTutos=createAsyncThunk("tutoriel/fetchRandomsTutos",async()=>{
  const response = await axios.get(
    `${APIURL}/tutoriels/random`
  );
  return response.data;
})
export const fetchTutoriels=createAsyncThunk("tutoriel/fetchTutoriels",async(_,{getState})=>{
const state=getState() as initialStateProps;
  const response=await axios.get(
    `${APIURL}/tutoriels/qty/${state.tutoriel.numberOfTutos}`
  );
  return response.data;
})
export const fetchTutorielsByCategory=createAsyncThunk("tutoriel/fetchTutorielsByCategory",async(_,{getState})=>{
  const state=getState() as initialStateProps;
  const response=await axios.get(
    `${APIURL}/categorie/${state.tutoriel.idCategory}/tutoriels/${state.tutoriel.numberOfTutosCategory}`
  );
  return response.data;
})
 export const fetchCategoryById=createAsyncThunk("tutoriel/fetchCategoryById",async(_,{getState})=>{
  const state=getState() as initialStateProps;
  const response=await axios.get(
    `${APIURL}/categorie/${state.tutoriel.idCategory}`
  )
  return response.data;
 })
 export const fetchTutorielById=createAsyncThunk("tutoriel/fetchTutorielById",async(_,{getState})=>{
  const state = getState() as initialStateProps;
  const response=await axios.get(
    `${APIURL}/tutoriels/${state.tutoriel.idTuto}`
  );
  return response.data;
 })
 export const fetchTools=createAsyncThunk("tutoriel/fetchTools",async()=>{
  const response=await axios.get(
    `${APIURL}/outils`,
  );
  return response.data;
 })
 export const deleteTutorial=createAsyncThunk("tutoriel/deleteTutorial",async(_,{getState})=>{
  const state=getState() as initialStateProps;
  const response=await axios.delete(
    `${APIURL}/tutoriels/${state.tutoriel.idTuto}`
  );
  return response.data;
 })
 export const fetchTutorielsByUser=createAsyncThunk("tutoriel/fetchTutorielsByUser",async()=>{
  const response= await axios.get(
   `${APIURL}/tutoriels/user`,
  )
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
    state.randomsTutos = action.payload ;  
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
  })
  .addCase(fetchTools.pending, (state) => {
    state.errorTools = null;
    state.loadingTools = true;
  })  
  .addCase(fetchTools.rejected, (state, action) => {
    state.loadingTools = false;
    state.errorTools = action.error.message as any;
  })
  .addCase(fetchTools.fulfilled, (state, action) => {
    state.loadingTools = false;
    state.tools = action.payload;
  })
  .addCase(deleteTutorial.pending,(state)=>{
    state.errorTuto=null;
    state.loadingTuto=true;
  })
  .addCase(deleteTutorial.rejected,(state,action)=>{
    state.loadingTuto=false;
    state.errorTuto=action.error.message as any;
  })
  .addCase(deleteTutorial.fulfilled,(state)=>{
    state.loadingTuto=false;
    state.deleted=true;
  })
  .addCase(resetDeleted,(state)=>{
    state.deleted=false;
  })
  .addCase(fetchTutorielsByUser.pending,(state)=>{
    state.errorTuto=null;
    state.loadingTuto=true;
  })
  .addCase(fetchTutorielsByUser.rejected,(state,action)=>{
    state.loadingTuto=false;
    state.errorTuto=action.error.message as any;
  })
  .addCase(fetchTutorielsByUser.fulfilled,(state,action)=>{
    state.loadingTuto=false;
    state.tutorielsByUser=action.payload;
  })
  .addCase(findIdCategory,(state,action)=>{
    state.idCategory=action.payload;
  })
  .addCase(showMoreTutos,(state)=>{
    state.numberOfTutos+=12;
  })
  .addCase(showMoreTutosCategory,(state)=>{
    state.numberOfTutosCategory+=12;
  })
  .addCase(findIdTuto,(state,action)=>{
    state.idTuto=action.payload;
  })
  })
export default tutorielReducer;
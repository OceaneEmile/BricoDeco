import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateProps {
  menuBurgerIsOpen:boolean,
  errorCategories:any,
  loadingCategories:boolean,
  categories:[],
  errorRandomsTutos:any,
  loadingRandomsTutos:boolean,
  randomsTutos:[],
  tutoriels:[],
  tutorielsByCategory:[],
  category:[],
  tutoriel:{},
  errorTuto:any,
  loadingTuto:boolean,
  isAuthor:boolean,
  titleCreate:string,
  descriptionCreate:string,
  categoriesCreate:0,
  tools:[],
  errorTools:null,
  loadingTools:boolean,
  toolsCreate:[],
  imageCreate:string,
  stepContentCreate:string,
  stepImageCreate:string,
};

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
    titleCreate:"",
    descriptionCreate:"",
    categoriesCreate:[],
    tools:[],
    errorTools:null,
    loadingTools:false,
    toolsCreate:[],
    imageCreate:"",
    stepContentCreate:'',
    stepImageCreate:'',
    tutoIsCreated:false,
    idCurrentTutoCreate:"",
    idFisrtStep:"",
};

// --------------------------------- Action ---------------------------------
export const openMenuBurger=createAction("tutoriel/openMenuBurger");
export const isAuthor=createAction("tutoriel/isAuthor");
export const changeInputTitleCreate=createAction<string>("tutoriel/changeInputTitleCreate");
export const changeInputDescriptionCreate=createAction<string>("tutoriel/changeInputDescriptionCreate");
export const changeInputCategoriesCreate=createAction("tutoriel/changeInputCategoriesCreate");
export const changeInputToolsCreate=createAction("tutoriel/changeInputToolsCreate");
export const changeInputImageCreate=createAction<string>("tutoriel/changeInputImageCreate");
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
 export const fetchTools=createAsyncThunk("tutoriel/fetchTools",async()=>{
  const response=await axios.get(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/outils"
  );
  return response.data;
 })
 export const submitCreateTuto=createAsyncThunk("tutoriel/submitCreateTuto",async(_,{getState}  )=>{
  const state=getState() as initialStateProps;
  
  const response =await axios.post(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels",
    {
      titre:state.tutoriel.titleCreate,
      resume:state.tutoriel.descriptionCreate,
      image:state.tutoriel.imageCreate,
      etapes:[
        {
          contenu:"placebo",
        }
      ],
      categories:state.tutoriel.categoriesCreate,
      outils:state.tutoriel.toolsCreate
    }
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
  })
  .addCase(changeInputTitleCreate,(state,action)=>{
    state.titleCreate=action.payload;
    console.log(state.titleCreate);
  })
  .addCase(changeInputDescriptionCreate,(state,action)=>{
    state.descriptionCreate=action.payload;
  })
  .addCase(changeInputCategoriesCreate,(state,action)=>{
    state.categoriesCreate=(action.payload);
    console.log(state.categoriesCreate);
    
  })
  .addCase(changeInputToolsCreate,(state,action)=>{
   
   state.toolsCreate=action.payload;
   console.log(state.toolsCreate);
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
  .addCase(changeInputImageCreate,(state,action)=>{
    state.imageCreate=action.payload;
  })
  .addCase(submitCreateTuto.pending, (state) => {
    state.errorTuto = null;
    state.loadingTuto = true;
  })
  .addCase(submitCreateTuto.rejected, (state, action) => {
    state.loadingTuto = false;
    state.errorTuto = action.error.message as any;
  })
  .addCase(submitCreateTuto.fulfilled, (state, action) => {
    state.loadingTuto = false;
    state.idCurrentTutoCreate=action.payload.id;
    state.tutoIsCreated = true;
    state.idFirstStep=action.payload.etapes[0].id;
  })
});
export default tutorielReducer;
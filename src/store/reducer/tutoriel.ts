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
  titleCreate: string;
  descriptionCreate: string;
  categoriesCreate: any[]|undefined; // Remplace "any" par le type réel des catégories de création
  tools: any[]; // Remplace "any" par le type réel des outils
  errorTools: null | string;
  loadingTools: boolean;
  toolsCreate: any[]|undefined; // Remplace "any" par le type réel des outils de création
  imageCreate: string;
  stepContentCreate: string;
  stepImageCreate: string;
  tutoIsCreated: boolean;
  idCurrentTutoCreate: number;
  idFirstStep: number;
  contentStep1: string;
  contentStep2: string;
  contentStep3: string;
  contentStep4: string;
  contentStep5: string;
  imageStep1: string;
  imageStep2: string;
  imageStep3: string;
  imageStep4: string;
  imageStep5: string;
  categories: any[];
  randomsTutos:any[]
  stepsCreated:boolean;
  createdSuccessful:boolean;
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
    idCurrentTutoCreate:0,
    idFirstStep:0,
    contentStep1:"",
    contentStep2:"",
    contentStep3:"",
    contentStep4:"",
    contentStep5:"",
    imageStep1:"",
    imageStep2:"",
    imageStep3:"",
    imageStep4:"",
    imageStep5:"",
    stepsCreated:false,
    createdSuccessful:false
};

// --------------------------------- Action ---------------------------------
export const openMenuBurger=createAction("tutoriel/openMenuBurger");
export const isAuthor=createAction("tutoriel/isAuthor");
export const changeInputTitleCreate=createAction<string>("tutoriel/changeInputTitleCreate");
export const changeInputDescriptionCreate=createAction<string>("tutoriel/changeInputDescriptionCreate");
export const changeInputCategoriesCreate=createAction("tutoriel/changeInputCategoriesCreate");
export const changeInputToolsCreate=createAction("tutoriel/changeInputToolsCreate");
export const changeInputImageCreate=createAction<string>("tutoriel/changeInputImageCreate");
export const changeStep1ContentCreate=createAction<string>("tutoriel/changeStep1ContentCreate");
export const changeStep2ContentCreate=createAction<string>("tutoriel/changeStep2ContentCreate");
export const changeStep3ContentCreate=createAction<string>("tutoriel/changeStep3ContentCreate");
export const changeStep4ContentCreate=createAction<string>("tutoriel/changeStep4ContentCreate");
export const changeStep5ContentCreate=createAction<string>("tutoriel/changeStep5ContentCreate");
export const changeStep1ImageCreate=createAction<string>("tutoriel/changeStep1ImageCreate");
export const changeStep2ImageCreate=createAction<string>("tutoriel/changeStep2ImageCreate");
export const changeStep3ImageCreate=createAction<string>("tutoriel/changeStep3ImageCreate");
export const changeStep4ImageCreate=createAction<string>("tutoriel/changeStep4ImageCreate");
export const changeStep5ImageCreate=createAction<string>("tutoriel/changeStep5ImageCreate");
// --------------------------------- Thunk ---------------------------------
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

 export const submitStepsCreate=createAsyncThunk("tutoriel/submitStepsCreate",async(_,{getState})=>{
  const state=getState() as initialStateProps;
  const stepsArray=[];
  if (state.tutoriel.contentStep1 && state.tutoriel.contentStep1.length > 0) {
    stepsArray.push({
      ordre:1,
      contenu: state.tutoriel.contentStep1,
      imageEtape: state.tutoriel.imageStep1,
    });
  }
  if (state.tutoriel.contentStep2 && state.tutoriel.contentStep2.length > 0) {
    stepsArray.push({
      ordre:2,
      contenu: state.tutoriel.contentStep2,
      imageEtape: state.tutoriel.imageStep2,
    });
  }
  if (state.tutoriel.contentStep3 && state.tutoriel.contentStep3.length > 0 && state.tutoriel.contentStep2.length > 0) {
    stepsArray.push({
      ordre:3,
      contenu: state.tutoriel.contentStep3,
      imageEtape: state.tutoriel.imageStep3,
    });
  }
  if (state.tutoriel.contentStep4 && state.tutoriel.contentStep4.length > 0  && state.tutoriel.contentStep3.length > 0 && state.tutoriel.contentStep2.length > 0) {
    stepsArray.push({
      ordre:4,
      contenu: state.tutoriel.contentStep4,
      imageEtape: state.tutoriel.imageStep4,
    });
  }
  if (state.tutoriel.contentStep5 && state.tutoriel.contentStep5.length > 0&& state.tutoriel.contentStep4.length > 0  && state.tutoriel.contentStep3.length > 0 && state.tutoriel.contentStep2.length > 0) {
    stepsArray.push({
      ordre:5,
      contenu: state.tutoriel.contentStep5,
      imageEtape: state.tutoriel.imageStep5,
    });
  }
  
  const response=await axios.put(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels/"+state.tutoriel.idCurrentTutoCreate,
    
    {
      etapes:stepsArray
    }
  )
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
    console.log(state.randomsTutos);
    
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
    state.stepsCreated=false;
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
  .addCase(changeStep1ContentCreate,(state,action)=>{
    state.contentStep1=action.payload;    
  })
  .addCase(changeStep2ContentCreate,(state,action)=>{
    state.contentStep2=action.payload;
  })
  .addCase(changeStep3ContentCreate,(state,action)=>{
    state.contentStep3=action.payload;
  })
  .addCase(changeStep4ContentCreate,(state,action)=>{
    state.contentStep4=action.payload;    
  })
  .addCase(changeStep5ContentCreate,(state,action)=>{
    state.contentStep5=action.payload;  
  })
  .addCase(changeStep1ImageCreate,(state,action)=>{
    state.imageStep1=action.payload;    
  })
  .addCase(changeStep2ImageCreate,(state,action)=>{
    state.imageStep2=action.payload;
  })
  .addCase(changeStep3ImageCreate,(state,action)=>{
    state.imageStep3=action.payload;
  })
  .addCase(changeStep4ImageCreate,(state,action)=>{
    state.imageStep4=action.payload;    
  })
  .addCase(changeStep5ImageCreate,(state,action)=>{
    state.imageStep5=action.payload;  
  })
  .addCase(submitStepsCreate.pending, (state) => {
    state.errorTuto = null;
    state.loadingTuto = true;
  })
  .addCase(submitStepsCreate.rejected, (state, action) => {
    state.loadingTuto = false;
    state.errorTuto = action.error.message as any;
  })
  .addCase(submitStepsCreate.fulfilled, (state,) => {
    state.loadingTuto = false;
    state.tutoIsCreated = false;
    state.stepsCreated=true;
    state.idCurrentTutoCreate=initialState.idCurrentTutoCreate;
    state.createdSuccessful=true;
  })
});
export default tutorielReducer;
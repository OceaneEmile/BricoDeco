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
  publication:boolean|undefined;
  deleted:boolean;
  tutorielsByUser:any[];
  updateTitle:string|undefined;
  updateContent:string|undefined;
  updateCategories:any[]|undefined;
  updateImage:string|undefined;
  updateTools:any[]|undefined;
  tutoIsModified:boolean;
  isPublished:boolean;
  tutoBodyIsModified:boolean;
  numberOfTutos:number;
  numberOfTutosCategory:number;
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
    createdSuccessful:false,
    publication:false,
    deleted:false,
    tutorielsByUser:[],
    updateTitle:"",
    updateContent:"",
    updateCategories:[],
    updateImage:"",
    updateTools:[],
    tutoIsModified:false,
    isPublished:false,
    tutoBodyIsModified:false,
    numberOfTutos:12,
    numberOfTutosCategory:12
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
export const publication=createAction("tutoriel/publication");
export const resetDeleted=createAction("tutoriel/resetDeleted");
export const updateTitle=createAction("tutoriel/updateTitle");
export const updateContent=createAction("tutoriel/updateContent");
export const updateCategories=createAction("tutoriel/updateCategories");
export const updateImage=createAction("tutoriel/updateImage");
export const updateTools=createAction("tutoriel/updateTools");
export const isPublished=createAction("tutoriel/isPublished");
export const showMoreTutos=createAction("tutoriel/showMoreTutos");
export const showMoreTutosCategory=createAction("tutoriel/showMoreTutosCategory");
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
export const fetchTutoriels=createAsyncThunk("tutoriel/fetchTutoriels",async(_,{getState})=>{
const state=getState() as initialStateProps;
  const response=await axios.get(
    `http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels/qty/${state.tutoriel.numberOfTutos}`
  );
  return response.data;
})
export const fetchTutorielsByCategory=createAsyncThunk("tutoriel/fetchTutorielsByCategory",async(categoryId,{getState})=>{
  const state=getState() as initialStateProps;
  const response=await axios.get(
    `http://localhost/Apo/projet-13-brico-deco-back/public/api/categorie/${categoryId}/tutoriels/${state.tutoriel.numberOfTutosCategory}`
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
      etapes:stepsArray,
      estPublie:state.tutoriel.publication
    }
  )
  return response.data;
 })
 export const deleteTutorial=createAsyncThunk("tutoriel/deleteTutorial",async(tutorialId)=>{
  const response=await axios.delete(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels/"+tutorialId
  );
  return response.data;
 })
 export const fetchTutorielsByUser=createAsyncThunk("tutoriel/fetchTutorielsByUser",async()=>{
  const response= await axios.get(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels/user",
  )
  return response.data;
 })
 export const updateBodyTutorial=createAsyncThunk("tutoriel/updateBodyTutorial",async(tutorialId,{getState})=>{
  const state=getState() as initialStateProps

  const response= await axios.put(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels/"+tutorialId,
    {
      "titre":state.tutoriel.updateTitle,
      "resume":state.tutoriel.updateContent,
      "image":state.tutoriel.updateImage,
      "categories":state.tutoriel.updateCategories,
      "outils":state.tutoriel.updateTools
    }
  )
  return response.data;
 })
 export const updateBodyTutorialSteps=createAsyncThunk("tutoriel/updateBodyTutorialSteps",async(tutorialId,{getState})=>{
  const state=getState() as initialStateProps

  const response= await axios.put(
    "http://localhost/Apo/projet-13-brico-deco-back/public/api/tutoriels/"+tutorialId,
    {
      "titre":state.tutoriel.updateTitle,
      "resume":state.tutoriel.updateContent,
      "image":state.tutoriel.updateImage,
      "categories":state.tutoriel.updateCategories,
      "outils":state.tutoriel.updateTools
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
    state.createdSuccessful=false;
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
    state.tutoBodyIsModified=false;
    state.stepsCreated=false;
  })
  .addCase(fetchTutorielById.rejected, (state, action) => {
    state.loadingTuto = false;
    state.errorTuto = action.error.message as any;
  })
  .addCase(fetchTutorielById.fulfilled, (state, action) => {
    state.loadingTuto = false;
    state.tutoriel = action.payload;
    state.updateTools=action.payload.outils;
    state.idCurrentTutoCreate=action.payload.id;
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
  })
  .addCase(changeInputDescriptionCreate,(state,action)=>{
    state.descriptionCreate=action.payload;
  })
  .addCase(changeInputCategoriesCreate,(state,action)=>{
    state.categoriesCreate=(action.payload);    
  })
  .addCase(changeInputToolsCreate,(state,action)=>{
   
   state.toolsCreate=action.payload;
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
    state.publication=false;
  })
  .addCase(publication,(state)=>{
    state.publication=true;
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
  .addCase(updateTitle,(state,action)=>{
    state.updateTitle=action.payload;
  })
  .addCase(updateContent,(state,action)=>{
    state.updateContent=action.payload;

  })
  .addCase(updateCategories,(state,action)=>{
    state.updateCategories=action.payload;
    
  })
  .addCase(updateImage,(state,action)=>{
    state.updateImage=action.payload;
    
  })
  .addCase(updateTools,(state,action)=>{
    state.updateTools=action.payload;    
  })
  .addCase(updateBodyTutorial.pending,(state)=>{  
    state.errorTuto=null;
    state.loadingTuto=true;
  })
  .addCase(updateBodyTutorial.rejected,(state,action)=>{
    state.loadingTuto=false;
    state.errorTuto=action.error.message as any;
  })
  .addCase(updateBodyTutorial.fulfilled,(state)=>{
    state.loadingTuto=false;
    state.tutoBodyIsModified=true
  })
  .addCase(updateBodyTutorialSteps.pending,(state)=>{  
    state.errorTuto=null;
    state.loadingTuto=true;
  })
  .addCase(updateBodyTutorialSteps.rejected,(state,action)=>{
    state.loadingTuto=false;
    state.errorTuto=action.error.message as any;
  })
  .addCase(updateBodyTutorialSteps.fulfilled,(state)=>{
    state.loadingTuto=false;
  })

  .addCase(isPublished,(state, action)=>{
    state.publication=action.payload;
  })
  .addCase(showMoreTutos,(state)=>{
    state.numberOfTutos+=12;
    console.log(state.numberOfTutos);
  })
  .addCase(showMoreTutosCategory,(state)=>{
    state.numberOfTutosCategory+=12;
  }) 
  })
export default tutorielReducer;
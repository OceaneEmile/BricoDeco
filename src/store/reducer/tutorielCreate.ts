import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
interface TutoCreateState {
    tutorielCreate:{
        title:string,
        resume:string,
        image:string,
        estPublie:boolean,
        outils:[
            {
                id:number
            }
        ],
        categories:[
            {
            id:number
            }
        ],
        etapes:[
            {
                contenu:string,
                imageEtape:string,
                ordre:number,
            }
        ],
        utilisateur:{
          id:number,
          pseudonyme:string
        }
    },
    missingValue:boolean,
    firstStepContent:string,
    secondStepContent:string,
    thirdStepContent:string,
    fourthStepContent:string,
    fifthStepContent:string
    firstStepImage:string,
    secondStepImage:string,
    thirdStepImage:string,
    fourthStepImage:string,
    fifthStepImage:string,
    idTutoCreated:number,
    allGood:boolean
    
}
const ImageURL=import.meta.env.VITE_IMAGE_URL;
export const initialState: TutoCreateState = {
    tutorielCreate:{
        title:"",
        resume:"",
        image:"",
        estPublie:false,
        outils:[
            {
                id:0
            }
        ],
        categories:[
            {
            id:0
            }
        ],
        etapes:[
            {
                contenu:"",
                imageEtape:"",
                ordre:0,
            }
        ],
        utilisateur:{
            id:0,
            pseudonyme:""
        }
    },
    missingValue:true,
    firstStepContent:"",
    secondStepContent:"",
    thirdStepContent:"",
    fourthStepContent:"",
    fifthStepContent:"",
    firstStepImage:"",
    secondStepImage:"",
    thirdStepImage:"",
    fourthStepImage:"",
    fifthStepImage:"",
    idTutoCreated:0,
    allGood:false
};
// --------------------------------- Action ---------------------------------

export const titleCreate = createAction<string>("titleCreate");
export const resumeCreate = createAction<string>("descriptionCreate");
export const imageCreate = createAction<string>("imageCreate");
export const toolsCreate = createAction<[{id:number}]>("toolsCreate");
export const categoriesCreate = createAction<[{id:number}]>("categoriesCreate");
export const checkFirstStep = createAction("checkFirstStep");
export const firstStepContent = createAction<string>("firstStepContent");
export const secondStepContent = createAction<string>("secondStepContent");
export const thirdStepContent = createAction<string>("thirdStepContent");
export const fourthStepContent = createAction<string>("fourthStepContent");
export const fifthStepContent = createAction<string>("fifthStepContent");
export const firstStepImage = createAction<string>("firstStepImage");
export const secondStepImage = createAction<string>("secondStepImage");
export const thirdStepImage = createAction<string>("thirdStepImage");
export const fourthStepImage = createAction<string>("fourthStepImage");
export const fifthStepImage = createAction<string>("fifthStepImage");
export const registerTuto = createAction("registerTuto");
export const publicationTuto = createAction("publicationTuto");
export const checkSecondStep = createAction("checkSecondStep");
export const resetAllGood = createAction("resetAllGood");

// --------------------------------- Thunk ---------------------------------
export const createTutoriel = createAsyncThunk("createTutoriel", async (_,{getState}) => {
    const state = getState() as {tutorielCreate:TutoCreateState};
    const stepsArray=[];
  if (state.tutorielCreate.firstStepContent !== "") {
    stepsArray.push({
      ordre:1,
      contenu: state.tutorielCreate.firstStepContent,
      imageEtape: state.tutorielCreate.firstStepImage,
    });
    if (state.tutorielCreate.secondStepContent !== "" ) {
      stepsArray.push({
        ordre:2,
        contenu: state.tutorielCreate.secondStepContent,
        imageEtape: state.tutorielCreate.secondStepImage,
      });
      if (state.tutorielCreate.thirdStepContent !== "" ) {
        stepsArray.push({
          ordre:3,
          contenu: state.tutorielCreate.thirdStepContent,
          imageEtape: state.tutorielCreate.thirdStepImage,
        });
        if (state.tutorielCreate.fourthStepContent !== "" ) {
          stepsArray.push({
            ordre:4,
            contenu: state.tutorielCreate.fourthStepContent,
            imageEtape: state.tutorielCreate.fourthStepImage,
          });
          if (state.tutorielCreate.fifthStepContent !== "" ) {
            stepsArray.push({
              ordre:5,
              contenu: state.tutorielCreate.fifthStepContent,
              imageEtape: state.tutorielCreate.fifthStepImage,
            });
            }
        }
      }
    }
  }
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/tutoriels`,
    {
        titre: state.tutorielCreate.tutorielCreate.title,
        resume: state.tutorielCreate.tutorielCreate.resume,
        image: state.tutorielCreate.tutorielCreate.image,
        estPublie: state.tutorielCreate.tutorielCreate.estPublie,
        outils: state.tutorielCreate.tutorielCreate.outils,
        categories: state.tutorielCreate.tutorielCreate.categories,
        etapes: stepsArray,
    }
  )
    return response.data;
});
export const createSteps = createAsyncThunk("createSteps", async (_,{getState}) => {
    const state = getState() as {tutorielCreate:TutoCreateState};
    const stepsArray=[];
  if (state.tutorielCreate.firstStepContent !== "") {
    stepsArray.push({
      ordre:1,
      contenu: state.tutorielCreate.firstStepContent,
      imageEtape: state.tutorielCreate.firstStepImage,
    });
    if (state.tutorielCreate.secondStepContent !== "" ) {
      stepsArray.push({
        ordre:2,
        contenu: state.tutorielCreate.secondStepContent,
        imageEtape: state.tutorielCreate.secondStepImage,
      });
      if (state.tutorielCreate.thirdStepContent !== "" ) {
        stepsArray.push({
          ordre:3,
          contenu: state.tutorielCreate.thirdStepContent,
          imageEtape: state.tutorielCreate.thirdStepImage,
        });
        if (state.tutorielCreate.fourthStepContent !== "" ) {
          stepsArray.push({
            ordre:4,
            contenu: state.tutorielCreate.fourthStepContent,
            imageEtape: state.tutorielCreate.fourthStepImage,
          });
          if (state.tutorielCreate.fifthStepContent !== "" ) {
            stepsArray.push({
              ordre:5,
              contenu: state.tutorielCreate.fifthStepContent,
              imageEtape: state.tutorielCreate.fifthStepImage,
            });
            }
        }
      }
    }
  }
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/tutoriels/${state.tutorielCreate.idTutoCreated}`,
    {
        titre: state.tutorielCreate.tutorielCreate.title,
        resume: state.tutorielCreate.tutorielCreate.resume,
        image: state.tutorielCreate.tutorielCreate.image,
        estPublie: state.tutorielCreate.tutorielCreate.estPublie,
        outils: state.tutorielCreate.tutorielCreate.outils,
        categories: state.tutorielCreate.tutorielCreate.categories,
        etapes: stepsArray,
        utilisateur: state.tutorielCreate.tutorielCreate.utilisateur
    }
  )
    return response.data;
});
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
    .addCase(firstStepContent,(state,action)=>{
        state.firstStepContent=action.payload;
    })
    .addCase(secondStepContent,(state,action)=>{
        state.secondStepContent=action.payload; 
    })
    .addCase(thirdStepContent,(state,action)=>{
        state.thirdStepContent=action.payload;
    })
    .addCase(fourthStepContent,(state,action)=>{
        state.fourthStepContent=action.payload;
    })
    .addCase(fifthStepContent,(state,action)=>{
        state.fifthStepContent=action.payload;
    })
    .addCase(firstStepImage,(state,action)=>{
        state.firstStepImage=`${ImageURL}${action.payload}`
    })
    .addCase(secondStepImage,(state,action)=>{
        state.secondStepImage=`${ImageURL}${action.payload}`      
    })
    .addCase(thirdStepImage,(state,action)=>{
        state.thirdStepImage=`${ImageURL}${action.payload}`
    })
    .addCase(fourthStepImage,(state,action)=>{
        state.fourthStepImage=`${ImageURL}${action.payload}`
    })
    .addCase(fifthStepImage,(state,action)=>{
        state.fifthStepImage=`${ImageURL}${action.payload}`
    })
    .addCase(registerTuto,(state)=>{
        state.tutorielCreate.estPublie=false;
    })
    .addCase(publicationTuto,(state)=>{
        state.tutorielCreate.estPublie=true;
    })
    .addCase(checkSecondStep,(state)=>{
        if(state.firstStepContent!==""){
            state.missingValue=false;
        }else{
            state.missingValue=true;
        }
    })
    .addCase(createTutoriel.pending,(state)=>{
    })
    .addCase(createTutoriel.rejected,(state)=>{
    })
    .addCase(createTutoriel.fulfilled,(state,action)=>{
        state.idTutoCreated=action.payload.id;
        state.tutorielCreate.utilisateur.id=action.payload.utilisateur.id;
        state.tutorielCreate.utilisateur.pseudonyme=action.payload.utilisateur.pseudonyme;
    })
    .addCase(createSteps.pending,(state)=>{})
    .addCase(createSteps.rejected,(state)=>{})
    .addCase(createSteps.fulfilled,(state,action)=>{
        state.missingValue=true
        state.allGood=true
    })
    .addCase("resetAllGood",(state)=>{
        state.allGood=false
    })
});

export default tutorielCreateReducer;
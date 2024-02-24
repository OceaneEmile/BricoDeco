import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

interface TutoUpdateState {
    tutorielUpdate:{
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
    idTutoUpdate:any|undefined,
    allGoodU:boolean
}
const ImageURL=import.meta.env.VITE_IMAGE_URL;
export const initialState: TutoUpdateState = {
    tutorielUpdate:{
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
    idTutoUpdate:0,
    allGoodU:false
};
// --------------------------------- Action ---------------------------------
export const titleUpdate = createAction<string>("titleUpdate");
export const resumeUpdate = createAction<string>("descriptionUpdate");
export const imageUpdate = createAction<string>("imageUpdate");
export const toolsUpdate = createAction<[{id:number}]>("toolsUpdate");
export const categoriesUpdate = createAction<[{id:number}]>("categoriesUpdate");
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
export const resetAllGoodU = createAction("resetAllGoodU");
export const idTuto = createAction<number>("idTuto");
export const userTuto= createAction<any>("userTuto");
// --------------------------------- Thunk ---------------------------------
export const updateTutoriel = createAsyncThunk("createSteps", async (_,{getState}) => {
    const state = getState() as {tutorielUpdate:TutoUpdateState};
    const stepsArray=[];
  if (state.tutorielUpdate.firstStepContent !== "") {
    stepsArray.push({
      ordre:1,
      contenu: state.tutorielUpdate.firstStepContent,
      imageEtape: state.tutorielUpdate.firstStepImage,
    });
    if (state.tutorielUpdate.secondStepContent !== "" ) {
      stepsArray.push({
        ordre:2,
        contenu: state.tutorielUpdate.secondStepContent,
        imageEtape: state.tutorielUpdate.secondStepImage,
      });
      if (state.tutorielUpdate.thirdStepContent !== "" ) {
        stepsArray.push({
          ordre:3,
          contenu: state.tutorielUpdate.thirdStepContent,
          imageEtape: state.tutorielUpdate.thirdStepImage,
        });
        if (state.tutorielUpdate.fourthStepContent !== "" ) {
          stepsArray.push({
            ordre:4,
            contenu: state.tutorielUpdate.fourthStepContent,
            imageEtape: state.tutorielUpdate.fourthStepImage,
          });
          if (state.tutorielUpdate.fifthStepContent !== "" ) {
            stepsArray.push({
              ordre:5,
              contenu: state.tutorielUpdate.fifthStepContent,
              imageEtape: state.tutorielUpdate.fifthStepImage,
            });
            }
        }
      }
    }
  }
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/tutoriels/${state.tutorielUpdate.idTutoUpdate}`,
    {
        titre: state.tutorielUpdate.tutorielUpdate.title,
        resume: state.tutorielUpdate.tutorielUpdate.resume,
        image: state.tutorielUpdate.tutorielUpdate.image,
        estPublie: state.tutorielUpdate.tutorielUpdate.estPublie,
        outils: state.tutorielUpdate.tutorielUpdate.outils,
        categories: state.tutorielUpdate.tutorielUpdate.categories,
        etapes: stepsArray,
        utilisateur: state.tutorielUpdate.tutorielUpdate.utilisateur
    }
  )
    return response.data;
});
// --------------------------------- Reducer ---------------------------------
const tutorielUpdateReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(titleUpdate,(state,action)=>{
        state.tutorielUpdate.title=action.payload;
    })
    .addCase(resumeUpdate,(state,action)=>{
        state.tutorielUpdate.resume=action.payload;
    })
    .addCase(imageUpdate,(state,action)=>{
        state.tutorielUpdate.image=`${ImageURL}${action.payload}`;
    })
    .addCase(toolsUpdate,(state,action)=>{
        state.tutorielUpdate.outils=action.payload;
    })
    .addCase(categoriesUpdate,(state,action)=>{
        state.tutorielUpdate.categories=action.payload;
    })
    .addCase(checkFirstStep,(state)=>{
        if(state.tutorielUpdate.title!=="" && state.tutorielUpdate.resume!=="" && state.tutorielUpdate.image!==""){
            if(state.tutorielUpdate.categories[0]){
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
        state.tutorielUpdate.estPublie=false;
    })
    .addCase(publicationTuto,(state)=>{
        state.tutorielUpdate.estPublie=true;
    })
    .addCase(checkSecondStep,(state)=>{
        if(state.firstStepContent!==""){
            state.missingValue=false;
        }else{
            state.missingValue=true;
        }
    })
    .addCase(idTuto,(state,action)=>{
        state.idTutoUpdate=action.payload;
    })
    .addCase(userTuto,(state,action)=>{
        state.tutorielUpdate.utilisateur=action.payload;
        console.log(state.tutorielUpdate.utilisateur);
        
    })
    .addCase(updateTutoriel.pending,(state)=>{})
    .addCase(updateTutoriel.rejected,(state)=>{})
    .addCase(updateTutoriel.fulfilled,(state)=>{
        state.missingValue=true
        state.allGoodU=true
    })
    .addCase("resetAllGoodU",(state)=>{
        state.allGoodU=false
    })
})

export default tutorielUpdateReducer;
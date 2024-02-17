import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

  interface UserStore {
    connexionFormIsOpen:boolean,
    inputmail:string,
    inputpassword:string,
    cookiesToken:string,
    token:string|undefined,
    error:null
    loading:boolean,
    isLogged:boolean,
    errorUser:string|null,
    loadingUser:boolean,
    user:
      {
        inputmail:string,
        inputpassword:string,
        pseudonyme:string,
        email:string,
        id:string,
        inputUsernameSubscribe:string,
        inputMailSubscribe:string,
        inputPasswordSubscribe:string,
      },
      cookiesTokenIsTrue:boolean,
      inputUsernameSubscribe:string,
      inputMailSubscribe:string,
      inputPasswordSubscribe:string,
  }

export const initialState:UserStore = {
    connexionFormIsOpen:false,
    inputmail:"",
    token:"",
    inputpassword:"",
    error:null,
    loading:false,
    isLogged:false,
    errorUser:null,
    loadingUser:false,
    user:
      {
        inputmail:"",
    inputpassword:"",
        pseudonyme:"",
        email:"",
        id:"",
        inputUsernameSubscribe:"",
        inputMailSubscribe:"",
        inputPasswordSubscribe:"",
      },
    cookiesToken:"",
    cookiesTokenIsTrue:false,
    inputUsernameSubscribe:"",
    inputMailSubscribe:"",
    inputPasswordSubscribe:"",
};


// --------------------------------- Action ---------------------------------
export const openConnexionForm=createAction("user/openConnexionForm");
export const closeConnexionForm=createAction("user/closeConnexionForm");
export const changeInputMail=createAction<string>("user/setUserEmail");
export const changeInputPassword=createAction<string>("user/setUserPassword");
export const logout=createAction<void>("user/logout");
export const checkCookies=createAction<void,string>("user/checkCookies");
export const changeInputUsernameSubscribe=createAction<string>("user/setUsernameSubscribe");
export const changeInputMailSubscribe=createAction<string>("user/setMailSubscribe");
export const changeInputPasswordSubscribe=createAction<string>("user/setPasswordSubscribe");

// --------------------------------- Thunk ---------------------------------
export const sendUser=createAsyncThunk<{token:string}>("user/sendUser",async(_,{getState})=>{
    const state=getState() as UserStore;
    const response=await axios.post(
        "http://localhost/Apo/projet-13-brico-deco-back/public/api/login_check",
        {
          username: state.user.inputmail,
          password: state.user.inputpassword,
        }
      );
      return response.data;
})
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const response = await axios.get(
        "http://localhost/Apo/projet-13-brico-deco-back/public/api/user");
        return response.data;
});
export const subscribeUser=createAsyncThunk("user/subscribeUser",async(_,{getState})=>{
  const states=getState() as UserStore;
  const response=await axios.post(
      "http://localhost/Apo/projet-13-brico-deco-back/public/api/user/create",
      {
          pseudonyme:states.user.inputUsernameSubscribe,
          email: states.user.inputMailSubscribe,
          password: states.user.inputPasswordSubscribe
      }
    );
    return response.data;
});

// --------------------------------- Reducer ---------------------------------
const userReducer=createReducer(initialState,(builder)=>{
builder
.addCase(openConnexionForm,(state)=>{
    state.connexionFormIsOpen=true;
})
.addCase(closeConnexionForm,(state)=>{
    state.connexionFormIsOpen=false;
})
.addCase(changeInputMail,(state,action)=>{
  
    state.inputmail=action.payload;
})
.addCase(changeInputPassword,(state,action)=>{

    state.inputpassword=action.payload;
})
.addCase(sendUser.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
  .addCase(sendUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message as any;
  })
.addCase(sendUser.fulfilled,(state,action)=>{
    Cookies.set("auth",action.payload.token); 
    axios.defaults.headers.common['Authorization'] =`Bearer ${action.payload.token}` ;
    state.connexionFormIsOpen=false;
    state.loading = false;
    state.isLogged=true;
})
.addCase(fetchUser.pending, (state) => {
    state.errorUser = null;
    state.loadingUser = true;
  })
.addCase(fetchUser.rejected, (state, action) => {
    state.loadingUser = false;
    state.errorUser = action.error.message as any;
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("id");
    Cookies.remove("auth");
  })
.addCase(fetchUser.fulfilled,(state,action)=>{
   state.user=action.payload;
   Cookies.set("user",action.payload.pseudonyme);
   Cookies.set("email",action.payload.email);
   Cookies.set("id",action.payload.id);
   state.isLogged=true;
})
.addCase(logout,(state)=>{
    state.isLogged=false;
    state.user=initialState.user;
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("id");
    Cookies.remove("auth");
})
.addCase(checkCookies,(state)=>{
  state.cookiesToken=Cookies.get("auth") as UserStore["cookiesToken"];
  if(state.cookiesToken){
    state.cookiesTokenIsTrue=true;
    axios.defaults.headers.common['Authorization'] =`Bearer ${state.cookiesToken}` ; 
  }
  
})
.addCase(changeInputUsernameSubscribe,(state,action)=>{
  state.inputUsernameSubscribe=action.payload;
})
.addCase(changeInputMailSubscribe,(state,action)=>{
  state.inputMailSubscribe=action.payload;
  console.log(state.inputMailSubscribe);
  
})
.addCase(changeInputPasswordSubscribe,(state,action)=>{
  state.inputPasswordSubscribe=action.payload;
console.log(state.inputPasswordSubscribe);
})
.addCase(subscribeUser.pending, (state) => {
  state.error = null;
  state.loading = true;
})
.addCase(subscribeUser.rejected, (state, action) => {
  state.loading = false;
  state.error = action.error.message as any;
})
// todo gerer les states ect
.addCase(subscribeUser.fulfilled,(state)=>{ 
  state.loading = false;
  state.connexionFormIsOpen=false;})
});
export default userReducer;
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
      passwordIsGood:boolean,
      inputPasswordSubscribeConfirm:string,
      passwordFormatGood:boolean,
      emailFormatGood:boolean,
      usernameFormatGood:boolean,
      createOk:boolean,
      usernameModified:boolean,
      passwordModified:boolean,
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
    inputPasswordSubscribeConfirm:"",
    passwordIsGood:false,
    passwordFormatGood:false,
    emailFormatGood:false,
    usernameFormatGood:false,
    createOk:false,
    usernameModified:false,
    passwordModified:false,
};
const APIURL=import.meta.env.VITE_API_URL;

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
export const changeInputConfirmPasswordSubscribe=createAction<string>("user/setConfirmPasswordSubscribe");
export const resetCreate=createAction("user/resetCreate");

// --------------------------------- Thunk ---------------------------------
export const sendUser=createAsyncThunk<{token:string}>("user/sendUser",async(_,{getState})=>{
    const state=getState() as UserStore;
    const response=await axios.post(
        `${APIURL}/login_check`,
        {
          username: state.user.inputmail,
          password: state.user.inputpassword,
        }
      );
      return response.data;
})
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const response = await axios.get(
        `${APIURL}/user`);
        return response.data;
});
export const subscribeUser=createAsyncThunk("user/subscribeUser",async(_,{getState})=>{
  const states=getState() as UserStore;
  const response=await axios.post(
     `${APIURL}/create`,
      {
          pseudonyme:states.user.inputUsernameSubscribe,
          email: states.user.inputMailSubscribe,
          password: states.user.inputPasswordSubscribe
      }
    );
    return response.data;
});
export const changeUsername=createAsyncThunk("user/changeUsername",async(_,{getState})=>{
  const state=getState() as UserStore;
  const response=await axios.put(
      `${APIURL}/user/edit`,
      {
          pseudonyme:state.user.inputUsernameSubscribe,
      }
    );
    return response.data;
})
export const changePassword=createAsyncThunk("user/changePassword",async(_,{getState})=>{
  const state=getState() as UserStore;
  const response=await axios.put(
      `${APIURL}/user/edit`,
      {
          password:state.user.inputPasswordSubscribe,
      }
    );
    return response.data;
})
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
  if(action.payload.length>2){
    state.inputUsernameSubscribe=action.payload;
    state.usernameFormatGood=true;    
  }else{
    state.usernameFormatGood=false;
  }
})
.addCase(changeInputMailSubscribe,(state,action)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(action.payload)){
    state.emailFormatGood=true;
    state.inputMailSubscribe=action.payload;
  }else{
    state.emailFormatGood=false;
  }
})

.addCase(changeInputPasswordSubscribe,(state,action)=>{
  state.inputPasswordSubscribe=action.payload;
  const regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,50}$/;
  if(regex.test(action.payload)){
    state.passwordFormatGood=true;
  }else{
    state.passwordFormatGood=false;
    state.passwordIsGood=false;
  }

  // check if password is same as confirm password
  if(action.payload===state.inputPasswordSubscribeConfirm){
    state.passwordIsGood=true;
  }else{
    state.passwordIsGood=false;
  }

})
.addCase(changeInputConfirmPasswordSubscribe,(state,action)=>{
  state.inputPasswordSubscribeConfirm=action.payload;
  // check if confirm password is same as password
  if(action.payload===state.inputPasswordSubscribe||action.payload===""){
    state.passwordIsGood=true;
  }else{
    state.passwordIsGood=false;
  }
})

.addCase(subscribeUser.pending, (state) => {
  state.error = null;
  state.loading = true;
})
.addCase(subscribeUser.rejected, (state, action) => {
  state.loading = false;
  state.error = action.error.message as any;
})

.addCase(subscribeUser.fulfilled,(state)=>{ 
  state.loading = false;
  state.connexionFormIsOpen=false;
  state.createOk=true;
})
.addCase(changeUsername.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
.addCase(changeUsername.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message as any;
  })
.addCase(changeUsername.fulfilled,(state)=>{
    state.loading = false;
    state.usernameModified=true;
  })
.addCase(changePassword.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
.addCase(changePassword.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message as any;
  })
.addCase(changePassword.fulfilled,(state)=>{
    state.loading = false;
    state.passwordModified=true;
})
.addCase(resetCreate,(state)=>{
  
  state.createOk=false;
})
});
export default userReducer;
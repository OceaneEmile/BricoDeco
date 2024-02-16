import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";
export const initialState = {
    connexionFormIsOpen:false,
    inputmail:"",
    inputpassword:"",
    token:"",
    error:null,
    loading:false,
    isLogged:false,
    errorUser:null,
    loadingUser:false,
    user:
      {
        pseudonyme:"",
        email:"",
        id:""
      }
,
    cookiesToken:"",
    cookiesTokenIsTrue:false,
};



export const openConnexionForm=createAction("user/openConnexionForm");
export const closeConnexionForm=createAction("user/closeConnexionForm");
export const changeInputMail=createAction<string>("user/setUserEmail");
export const changeInputPassword=createAction<string>("user/setUserPassword");
export const logout=createAction<void>("user/logout");
export const checkCookies=createAction<void>("user/checkCookies");

export const sendUser=createAsyncThunk("user/sendUser",async(_,{getState}):Promise<any>=>{
    const state=getState() as any;
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
  // on envoie les infos pour recuperer le token
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

// on recupere les infos de l'utilisateur
.addCase(fetchUser.fulfilled,(state,action)=>{
   state.user=action.payload;
   Cookies.set("user",action.payload.pseudonyme);
   Cookies.set("email",action.payload.email);
   Cookies.set("id",action.payload.id);
   state.isLogged=true;
})

.addCase(logout,(state)=>{
    state.isLogged=false;
    state.token="";
    state.user=initialState.user;
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("id");
    Cookies.remove("auth");
})
.addCase(checkCookies,(state)=>{
  state.cookiesToken=Cookies.get("auth") as string;
  if(state.cookiesToken){
    state.cookiesTokenIsTrue=true;
    axios.defaults.headers.common['Authorization'] =`Bearer ${state.cookiesToken}` ; 
  }
  
})
});
// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDgwMDgwMzAsImV4cCI6MTcwODAyMjQzMCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYnJpY29AYnJpY28uZnIifQ.LVcOGB8gQo62AEw1bBvWOIitvlPagUrvVOOlqehhCTBjbVYSAyTQppzz7naP1UDGiZBotwFpTdRLzuoBqYQclC7Tjy5KGDbcoKJN8dFDw31WbvTxsDCefGcC8m81gIhUvCySUJmYIUH8rfpfbnbxeuvXf_tKSe--LgFkLWrB5F7lKzSY7zTjdST_5JkBQIjBu6-8pznFurb4r16MubbbdY2aenEhO1rzS8X3VtW5CYuoHq7hizyh8p4uFF-KFnUOhOZgM0rGhpeCzYnoHli2ekX61x63Ck67ZNCnxjpjZgjBWITziVm4Y6NQTl8NhMERauY4t-fkI4u42aGEJzMaYQ
// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDgwMDc1MzEsImV4cCI6MTcwODAyMTkzMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYnJpY29AYnJpY28uZnIifQ.lPGBuDWIpU_ZE4JcRSf2I_V7HxI6Mr8WBazQayfNu938YdWx_8Wpb-jmZb2xr5c3_tcOn-uxZmD6QZXIbwp5sROrtyiTgq3x-_gCm8A7VEAVGhm2z_jDJr1W0utH_qRt8v_UVhlVRTmSYis0A6aN7pu0edb5c9BZmEX5_ze3Bmi86VTcrR2_RWNpi2JCHUBvw9A0IqR7mmHkFzMdDB7Z0h_UNkaEJBfMHYnGi0uHLB6_TGhwO08E64ZPzRS6XGSro9Km4YJOop2h8FDLumJ_L9CdKQvlIQe8PIRhiTCmLTpQ-tv2xWsxKe6Ls5PopEYr3yMe_qxC8LBRTjwQF-evqQ
export default userReducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    userInfo:localStorage.getItem("userInfo")?JSON.parse()
}
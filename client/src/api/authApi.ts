import { FormData } from "@/types/formData";
import { HotelFormData } from "@/types/hotelFormData";
import { LoginFormData } from "@/types/loginFormData";
import axios from "axios";
// import "dotenv/config"

const API_BASE_URL = import.meta.env.VITE_API_AUTH_URL;

export const regitser = async (formData: FormData) => {
    console.log(API_BASE_URL)
  try {
    const { data } = await axios.post(`${API_BASE_URL}/api/auth/v1/register`, {
      ...formData,
    },{
      withCredentials:true
    });
    console.log(data)
    return data
  } catch (error) {
    throw new Error(error as string);
  }
};


export const login = async (loginFormData: LoginFormData) => {
    console.log(API_BASE_URL)
  try {
    const { data } = await axios.post(`${API_BASE_URL}/api/auth/v1/login`, {
      ...loginFormData,
    },{
      withCredentials:true
    });
    console.log(data)
    return data
  } catch (error) {
    throw new Error(error as string);
  }
};

export const validateToken =async () => {
  const {data} = await axios.get(`${API_BASE_URL}/api/auth/v1/validateToken`,{withCredentials:true})

  if(!data)
    throw new Error("Token Invalid")

  return data;
}


export const logout = async()=>{
  try {
    const {data} = await axios.post(`${API_BASE_URL}/api/auth/v1/logout`,{},{withCredentials:true})
    console.log(data)
  } catch (error) {
    throw new Error("Error during sign out");
  }
}


export const addHotel =async (hotelFormData : HotelFormData) => {
  
}
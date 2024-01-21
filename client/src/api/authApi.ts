import { FormData } from "@/types/formData";
import axios from "axios";
// import "dotenv/config"

const API_BASE_URL = import.meta.env.VITE_API_AUTH_URL;

export const regitser = async (formData: FormData) => {
    console.log(API_BASE_URL)
  try {
    const { data } = await axios.post(`${API_BASE_URL}/api/auth/v1/register`, {
      ...formData,
    });
    console.log(data)
    return data
  } catch (error) {
    throw new Error(error as string);
  }
};


export const login = async (formData: FormData) => {
    console.log(API_BASE_URL)
  try {
    const { data } = await axios.post(`${API_BASE_URL}/api/auth/v1/login`, {
      ...formData,
    });
    console.log(data)
    return data
  } catch (error) {
    throw new Error(error as string);
  }
};
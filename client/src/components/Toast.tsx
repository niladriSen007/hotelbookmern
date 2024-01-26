import { ToastProps } from "@/types/toastProps"
import { useEffect } from "react";

const Toast = ({message,type,onClose}:ToastProps) => {

    useEffect(()=>{
        const timer = setTimeout(()=>{
            onClose()
        },5000)

        return  ()=>clearTimeout(timer)
    },[onClose])


    const styles =
    type === "SUCCESS"
      ? "fixed top-12 right-8 z-50 px-8 py-2 rounded-md border-b-4 border-green-500 bg-white text-green-500 text-center max-w-md"
      : "fixed top-12 right-8 z-50 px-8 py-2 rounded-md border-b-4 border-red-500 bg-white text-red-500 text-center max-w-md";


  return (
    <div className={styles}>
    <div className="flex justify-center items-center">
      <span className="text-lg font-semibold">{message}</span>
    </div>
  </div>
  )
}
export default Toast
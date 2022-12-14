import { useState } from "react";
import {auth} from '../firebase/config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { useEffect } from "react";

export const useLogin=()=>{
    const {dispatch}= useAuthContext();
    const [error, setError]=useState(null);
    const [loading, setLoading] = useState(false);
    const [cancel, setCancel] = useState(false);

    useEffect(()=>{
        return ()=> setCancel(true);
    },[])
  
    const login = async (email,password,displayName)=>{
        setError(null);
        setLoading(true);
    

        try {
            const res = await signInWithEmailAndPassword(auth,email,password);
            console.log(res.user);

            if(!res){
                throw new Error("Giriş İşleminde Hata Oldu!");
            }
            dispatch({type:'LOGIN',payload:res.user});

            if(!cancel){
                setLoading(false);
                setError(null);
            }
          

        } catch (error) {
            console.log(error.message);
            if(!cancel){
                setError(error.message);
                setLoading(false);
            }
        }
    }
    return {login, error, loading};
}
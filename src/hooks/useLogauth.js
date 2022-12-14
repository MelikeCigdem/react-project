import { useState } from "react";
import {auth} from '../firebase/config';
import { signOut} from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogouth=()=>{
    const {dispatch}= useAuthContext();
    const [error, setError]=useState(null);
    const [loading, setLoading] = useState(false);

    const logouth = async ()=>{
        setError(null);
        setLoading(true);

        try {
            await signOut(auth)

            dispatch({type:'LOGOUT'});

            setLoading(false);
            setError(null);
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setLoading(false);
        }
    }
    return {logouth, error, loading};
}
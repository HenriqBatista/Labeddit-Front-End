import { useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie"
import {goToLogin} from "../routes/coordinator"


export const useProtectedPage = () => {
    const navigate = useNavigate()
    const cookies = new Cookies()

    useEffect(()=>{
        const token = cookies.get('UserTokenMaster')

        if(!token) {
            goToLogin(navigate)
        }
    },[navigate])
}
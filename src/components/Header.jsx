import { useContext } from "react";
import {GlobalContext} from "../context/GlobalContext"
import { useLocation, useNavigate } from "react-router-dom";
import authenticatorServices from '../services/authenticatorServices'
import { goToLogin } from "../routes/coordinator";
import logo from "../assets/logo.svg";


export const Header = () => {
    const {isLogged, setIsLogged} = useContext(GlobalContext)
    const location = useLocation()
    const navigate = useNavigate()


    if (location.pathname === '/'){
        return <></>
    }

    const button = () => {
        if(isLogged){
            authenticatorServices.logout()
                setIsLogged(false)
                goToLogin(navigate)
        }else{
            goToLogin(navigate)
        }
    }

    const buttonText = isLogged ? "Logout" : "Login"

    return (
        <div class="grid grid-cols-3 items-center bg-gray-header h-12">
            {location.pathname.includes("comments")?(
                <p>Logout</p>
            ):(
                ""
            )}
            <img class="col-start-2 justify-self-center w-7" src={logo} alt="Labeddit" />
                <button class="pl-7 text-blue font-noto font-semibold"
                onClick={button}>
                    {buttonText}
                </button>
        </div>
    )
}
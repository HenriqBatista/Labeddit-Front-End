import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useRequestData } from "../hooks/useRequestData";
import { useToast } from "../hooks/useToast";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useForm } from "../hooks/useForm";
import { goToPosts, goToSignup } from "../routes/coordinator";
import Labeddit_logo from "../assets/Labeddit_logo.svg";


export function LoginPage() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { isLoading, requestData } = useRequestData();
  const { errorToast, Toast } = useToast();
  const { token, setToken } = useContext(UserContext);

  const { form, input, limpaInput } = useForm({
    email: "",
    password: "",
  });

  const handleInput = async (event) => {
    event.preventDefault();
    const response = await requestData("users/login", "POST", undefined, form);
    response.data.token
      ? (limpaInput(),
        cookies.set("UserTokenMaster", response.data.token, { path: "/" }),
        setToken(response.data.token),
        goToPosts(navigate), console.log("fez login"))
        
        
      : errorToast();
  };

  useEffect(() => {
    if (token) {
      goToPosts(navigate);
    }
  }, [navigate]);

  return (
    <>
      <main className="flex min-h-full flex-col justify-center px-8 gap-24">
        <div className="flex justify-center items-center flex-col mt-10">
         
          <img className="mx-auto w-auto" src={Labeddit_logo} alt="Labeddit" />
          <p className="font-light text-center">
            O Projeto de rede social da Labenu
          </p>
        </div>
        <div className="flex flex-col items-center  w-full">
    <form className="form flex flex-col items-center" onSubmit={handleInput}>
    <input type="email" id="email" placeholder="Email" name="email" value={form.email} onChange={input} autoComplete="email" required className="input"/>
    <input type="password" id="password" placeholder="Senha" name="password" value={form.password} onChange={input} autoComplete="password" required className="input"/>
    <div className="w-full h-full flex flex-col items-center gap-4 pt-14">
    <button type="submit" className="button">
        Continuar
    </button>
    <hr className="hr" />
    <button type="button" className="button-outline" onClick={()=>goToSignup(navigate)}>
        Crie uma Conta!
    </button>
    </div>
    </form>
        </div>
      </main>
      <Toast/>
    </>
  );
}

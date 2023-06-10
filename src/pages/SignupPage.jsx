import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { useRequestData } from "../hooks/useRequestData"
import { useToast } from "../hooks/useToast"
import Cookies from "universal-cookie"
import { goToPosts } from "../routes/coordinator"
import { useForm } from "../hooks/useForm"
import { Header } from "../components/Header"

export function SignupPage () {
    const navigate = useNavigate()
    const {token, setToken} = useContext(UserContext)
    const {isLoading, requestData} = useRequestData()
    const {errorToast, Toast} = useToast()
    const cookies =  new Cookies()

    useEffect(()=>{
        if(token) {
            goToPosts(navigate)
        }
    },[])

    const { form, input, limpaInput } = useForm({
        name: "",
        email: "",
        password: "",
      });

      const handleInput = async (event) => {
        event.preventDefault();
        const response = await requestData("users/signup", "POST", undefined, form);
        response.data.token
          ? (limpaInput(),
            cookies.set("UserTokenMaster", response.data.token, { path: "/" }),
            setToken(response.data.token),
            goToPosts(navigate))
          : errorToast();
      };
    
    return(
        <>
      <Header />
      <main className="flex min-h-full flex-col justify-start pt-10 px-8 gap-[194px] sm:gap-24">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-black">Olá, boas vindas ao LabEddit ;)</h1>
        </div>

        <div className="flex items-center flex-col w-full">
          <form
            className="form"
            onSubmit={handleInput}
          >
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={input}
              autoComplete="name"
              placeholder="Nome ou Apelido"
              required
              className="input"
            />
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={input}
              autoComplete="email"
              placeholder="Email"
              required
              className="input"
            />
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={input}
              autoComplete="current-password"
              placeholder="Senha"
              required
              className="input"
            />
            <div className="w-full h-full flex flex-col items-center gap-7 pt-14">
              <fieldset className="text-sm text-gray-900 font-['Noto_Sans']">
                <div className="flex flex-col gap-5">
                  <legend className="font-medium ">
                    Ao continuar, você concorda com o nosso <a href="#" className="text-blue-button">Contrato de usuário</a> e nossa <a href="#" className="text-blue-button">Política de Privacidade</a>
                  </legend>
                  <div className="flex gap-3 items-center">
                    <input
                      id="consentment"
                      name="consentment"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-light-gray text-dark-orange-labeddit focus:ring-light-orange-labeddit"
                    />

                    <label
                      htmlFor="consentment"
                      className="font-normal"
                    >
                      Eu concordo em receber emails sobre coisas legais no
                      Labeddit
                    </label>
                  </div>
                </div>
              </fieldset>

              <button
                type="submit"
                className="button"
              >
                {!isLoading ? (
                  "Cadastrar"
                ) : (
                  <img
                    src={isLoading}
                    alt="Carregando sua requisição"
                    className="inline w-6 h-6 mr-3 animate-spin"
                  />
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
    )
}



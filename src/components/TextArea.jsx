import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useRequestData } from "../hooks/useRequestData";
import { useToast } from "../hooks/useToast";
import { useTextArea } from "../hooks/useTextArea";
import Labenu from "../assets/Labenu.png";





export function TextArea({path, placeholder, button, setNewContent}){
    const {headers} = useContext(UserContext)
    const {isLoading, requestData} = useRequestData()
    const {textAreaForm, onChangeTextArea, limpaInput} = useTextArea("")

    const handleInput = async (event) => {
        event.preventDefault()
        const response = await requestData(path, "POST", headers, textAreaForm)

        response.data.message ?
        (limpaInput(),setNewContent(textAreaForm)) : response.error
    }



    return(
        <>
      <form
        className="form gap-4"
        onSubmit={handleInput}
      >
        <textarea
          className="textarea"
          placeholder={placeholder}
          value={textAreaForm.content}
          onChange={onChangeTextArea}
        />
        <button
          type="submit"
          className="button rounded-xl"
        >
          {isLoading ?(
            <img src={Labenu} alt="Loading" className="inline w-6 h-6 animate-spin"/>
          ):(
            button
          )}
        </button>
      </form>
    </>
    )
}
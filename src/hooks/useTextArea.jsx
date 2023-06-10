import { useState } from "react";


export const useTextArea = (initialState) => {
    const [textAreaForm, setTextAreaForm] = useState({content: initialState});


    const onChangeTextArea = (event) => {
        const value = event.target.value
        setTextAreaForm({content: value});
    }

    const limpaInput = () => {
        setTextAreaForm({content:initialState})
    }

    return {textAreaForm, onChangeTextArea, limpaInput}
}
import { useState } from "react";

export function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const input = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const limpaInput = () => {
    setForm(initialState);
  };
  return { form, input, limpaInput };
}

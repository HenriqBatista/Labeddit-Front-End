import { jwtVerify } from "jose";

export const useTokenManager = () => {
    const input = new TextEncoder().encode("labeddit-fullStack")

    const getPayload = async (token) => {
        try {
            const {payload} = await jwtVerify(token, input)
            return payload
        } catch (error) {
            return "Token Inválido."
        }
    }
    return {getPayload}
}
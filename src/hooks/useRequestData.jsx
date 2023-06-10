import axios from 'axios'
import { useState } from 'react'
import {BASE_URL} from '../constants/url'

export const useRequestData = () => {
    const [isLoading, setIsloading] = useState(false)

    const requestData = async (path, method, headers, body) => {
        try {
          const data = await axios.request({
            url: BASE_URL + "/" + path,
            method: method,
            headers: headers,
            data: body
          })  
          setIsloading(false)
        
          return data
        } catch (error) {
            setIsloading(false)
            return error.response
        }
    }

    return {isLoading, requestData}
}
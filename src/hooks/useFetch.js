import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [datos, setDatos] = useState({data: null})

    const {data} = datos

    const getData = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setDatos({data})
        } catch (error) {
            console.log(`Ocurrio el error: ${error}`)
        }
    }

    useEffect(() => {
        if(!url) return
        getData()
    }, [url])

    return {
        data
    }  
}

import { useState } from "react"
import { useFetch } from "../hooks/useFetch"


export const FormBuscarCiudad = () => {

    const API_KEY = `8e776dbabfad0a0f648f46e66607fde5`
    const kelvin = 273.15

    const [valInput, setValInput] = useState('')
    const [url, setUrl] = useState(null)

    const { data } = useFetch(url)


    const handleChange = (e) => {
        setValInput(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (valInput.trim().length > 0) {
            setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${valInput}&appid=${API_KEY}`)

        }
    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <input type="text" placeholder="Buscar ciudad" value={valInput} onChange={handleChange} />
                <button type="submit" className="btn btn-primary"  >Buscar</button>
            </form>

            {data && (
                <div>
                    <h1>{data.name}</h1>
                    <p>Temperatura: {parseInt((data.main?.temp - kelvin))}</p>
                    <p>Condicion meteorologica: {data.weather[0]?.description}</p>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`}/>
                </div>
            )
            }
        </>
    )
}

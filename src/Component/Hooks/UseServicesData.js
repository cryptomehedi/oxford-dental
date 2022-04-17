import axios from "axios"
import { useEffect, useState } from "react"

const useServicesData  = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('services.json')
        .then(data => setServices(data.data))
    },[])
    return [services]
}

export default useServicesData


import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = ({ url }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = () => {
            axios
                .get(url)
                .then(res => setResponse(res.data))
                .catch(e => setError(e))
                .finally(() => setIsLoading(false))
        }
        getData();
    }, [url])

    return { response, error, isLoading }

}


export default useAxios;
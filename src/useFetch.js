import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)


        useEffect(() => {
            console.log('Refreshed')
            setIsPending(true)
            setTimeout(() => {
                fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch Blog Posts.')
                }
                return res.json();
            })
            .then((data) =>{
                setData(data);
                setIsPending(false);
                setError(null)
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
            }, 1000);
        }, [url]);

        return { data, error, isPending}
}
 
export default useFetch;
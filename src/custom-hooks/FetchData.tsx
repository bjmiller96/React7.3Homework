import {useState, useEffect} from 'react'



export const useGetData = () => {
    const [carData, setData] = useState<[]>([])

    async function handleDataFetch() {

    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return {
        carData, getData:handleDataFetch
    }
}
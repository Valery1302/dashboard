import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from "../types/DashboardTypes"

export default function useFetchData(): OpenMeteoResponse | null {
    const URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature&timezone=America%2FChicago';

    const [data, setData] = useState<OpenMeteoResponse | null>(null);

    useEffect(() => {
        fetch(URL)
        .then(data => data.json())
        .then(obj =>{
            setData(obj)

        })
    },[]);
        

    return data;
}

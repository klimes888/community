import { useState } from "react";
import axios, { AxiosResponse } from "axios"
import { useMutation, useQuery } from "react-query";

type props = {
    method:'get' | 'post' | 'delete';
    url:string;
    data:{};
    params:{};    
}

    // const [fetchData, setFetchData] = useState<AxiosResponse | null>(null);
    export const axiosFetch = (type, method, url, data, params, num) => {

        
    
        const _fetch = () => {
         const test = useMutation([type, num], () => axios({
                method,
                url:`localhost:3000/api/${url}`,
                data
            }).then( res => {
                console.log(res);
                return res
            }).catch( err => console.log(err)))
        };
        
        return _fetch
    }
    
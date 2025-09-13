import { useEffect, useState } from 'react';

export function useLocalStorage(key){
    const [data, setData] = useState([]);
     useEffect(() => {
       const res = localStorage.getItem(key);
       if (!res){
        setData([]);
       }
       else{
        setData(JSON.parse(res));
       }
     }, []);
     const saveData = (data) =>{
        localStorage.setItem(key, JSON.stringify(data));
        setData(data);
     };
    return [data, saveData];
}
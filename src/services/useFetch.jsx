import { useEffect, useState } from "react";

function useFetch(link){
    const [data, setData] = useState(null);
  
    useEffect(()=> {
      const getData = async () => {
        const res = await fetch (link)
        const datos = await res.json();
  
        console.log(datos.results);
        setData(datos.results);
      };
  
      getData();
  
    }, []);
  
    return data;
}

export default useFetch;
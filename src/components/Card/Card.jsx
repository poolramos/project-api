function Card() {
    console.log(url);

    useEffect(()=> {
        const getData = async () => {
          const res = await fetch (url)
          const datos = await res.json();
    
          console.log(datos.results);
          setData(datos.results);
        };
    
        getData();
    
      }, []);

  return (
    <div className="card">
    <img src="data?.sprites.other.home.front-default" alt="{data?.name}" />
    <h1>{data?.name}</h1>
    </div>
  )
}

export default Card
import { useState,useEffect } from "react";


const useFetch = (url) =>{

    const [sotad, setSotad] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
        // useEffect((PrimerArgumento), SegundoArgumento(Este argumento en la array de dependencias))

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    console.log(res);
                    if(!res.ok){
                        throw Error("No se ha podido recuperar la informacion D:");
                    }
                    return res.json();
                })
                .then((datos) => {
                    // console.log(datos);
                    setSotad(datos);
                    setCargando(false);
                    setError(null);
                })
                // 
                .catch(err => {
                    // console.log(err.message);
                    setCargando(false);
                    setError(err.message);
                })
        }, 300);
    }, [url]);
    return {sotad, cargando, error};
}

export default useFetch;

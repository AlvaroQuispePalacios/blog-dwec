import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Inicio = () => {
    /*  Hooks
    useState -> Crea una variable reactiva, la variable reactiva se actualiza en la pagina 
    es como los set y get en java en los objetos

    const [nombre, setNombre] = useState("Alvaro");
    const [edad, setEdad] = useState(22);

    const handleClick = () => {
        setNombre("Pedro");
        setEdad(23);

        console.log(nombre);
        console.log(edad);
    };
    
*/
    const [blogs, setBlogs] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    // useEffect((PrimerArgumento), SegundoArgumento(Este argumento en la array de dependencias))
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then((res) => {
                    console.log(res);
                    if(!res.ok){
                        throw Error("No se ha podido recuperar la informacion D:");
                    }
                    return res.json();
                })
                .then((datos) => {
                    // console.log(datos);
                    setBlogs(datos);
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
    }, []);
    // Promps: Nos permite pasar datos de un componente a otro de un elemento padre que pase la ingormacion a un componente hijo

    return (
        <div className="home">
            {cargando && <div>Cargando...</div>}
            {error && <div>{error}</div>}
            {/* Esto es un promp asi se le pasa la informacion a otro componente --> blogs = {blogs} */}
            {blogs && <BlogList blogs={blogs} titulo="Listado de blogs" />}
            {/* 
            <BlogList blogs = {blogs.filter((blog) => blog.autor === "Alvaro")} titulo = "Blogs de Alvaro" handleEliminarBlog = {handleEliminarBlog}/> 

            <BlogList blogs = {blogs.filter((blog) => blog.titulo === "Pokemon")} titulo = "Blogs de Pokemon" handleEliminarBlog = {handleEliminarBlog}/>

            <BlogList blogs = {blogs.filter((blog) => blog.id === 3)} titulo = "Blogs de Digimon" handleEliminarBlog = {handleEliminarBlog}/> */}
        </div>
    );
};
export default Inicio;

// Hook
/* useEffect
Lanza una funcion cada vez que se renderiza un componente

 */

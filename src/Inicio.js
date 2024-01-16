import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

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
    const {sotad: blogs, cargando, error} = useFetch("http://localhost:8000/blogs");


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

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
    const [blogs, setBlogs] = useState([
        {
            titulo: "Mi nueva Web",
            body: "Texto mostrar",
            autor: "Alvaro",
            id: 1,
        },
        {
            titulo: "Pokemon",
            body: "Mucho texto pokemon",
            autor: "Yo pokemon",
            id: 2,
        },
        {
            titulo: "Digimon",
            body: "Mucho texto digimon",
            autor: "Yo digimon",
            id: 3,
        },
    ]);

    const [nombre, setNombre] = useState("AA");
    const [contador, setContador] = useState(0);

    const handleEliminarBlog = (id) => {
        const nuevoBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(nuevoBlog);
    };

    // useEffect((PrimerArgumento), SegundoArgumento)
    useEffect(() => {
        console.log("useEffect");
        console.log(blogs);
    }, [contador]);
// Promps: Nos permite pasar datos de un componente a otro de un elemento padre que pase la ingormacion a un componente hijo

    return (
        <div className="home">
            {/* Esto es un promp asi se le pasa la informacion a otro componente --> blogs = {blogs} */}
            <BlogList blogs = {blogs} titulo = "Listado de blogs" handleEliminarBlog = {handleEliminarBlog}/> 
{/* 
            <BlogList blogs = {blogs.filter((blog) => blog.autor === "Alvaro")} titulo = "Blogs de Alvaro" handleEliminarBlog = {handleEliminarBlog}/> 

            <BlogList blogs = {blogs.filter((blog) => blog.titulo === "Pokemon")} titulo = "Blogs de Pokemon" handleEliminarBlog = {handleEliminarBlog}/>

            <BlogList blogs = {blogs.filter((blog) => blog.id === 3)} titulo = "Blogs de Digimon" handleEliminarBlog = {handleEliminarBlog}/> */}
            <p>{nombre}</p>
            <button onClick={() => setNombre("AAA")}>Cambio de nombre</button>
        </div>
    );
};
export default Inicio;


// Hook
/* useEffect
Lanza una funcion cada vez que se renderiza un componente

 */
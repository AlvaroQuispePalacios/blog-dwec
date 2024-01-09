import { useState } from "react";
const Inicio = () => {
    /*  Hooks
    useState -> Crea una variable reactiva, la variable reactiva se actualiza en la pagina 

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
            titulo: "Pokemons",
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

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.titulo}</h2>
                    <p>{blog.body}</p>
                    <small>{blog.autor}</small>
                </div>
            ))}
        </div>
    );
};
export default Inicio;

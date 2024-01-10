// Asi se recoge al promp en el parametro de la funcion, luego se le da a una variable el parametro de entrada props pero como es un objeto que contiene todos los datos pasados 
const BlogList = ({blogs, titulo, handleEliminarBlog}) => {
    // console.log(props);
    // const blogs = props.blogs;
    // const titulo = props.titulo;


    return (
        <div className="blog-list">
            <h2>{titulo}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.titulo}</h2>
                    <p>{blog.body}</p>
                    <small>{blog.autor}</small><br/>
                    <button onClick={() => handleEliminarBlog(blog.id)}>Eliminar blog</button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;

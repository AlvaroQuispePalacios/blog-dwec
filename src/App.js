import Navbar from "./Navbar";
import Inicio from "./Inicio";
// Esto se llama jsx lo que se parece a html pero no es html
function App() {
    const titulo = "Bienvenidos al nuevo Blog";
    // Para mostrar una variable tenemos que poner una variable entre llaves
    const likes = 50;
    // Todo se renderiza como un string excepto los objetos(Da error)
    // App.js se le llama componente root
    const link = "https://www.google.com/";
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Inicio />
            </div>
        </div>
    );
}

export default App;

import Navbar from "./Navbar";
import Inicio from "./Inicio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Crear from "./Crear";
import Detalles from "./Detalles";
// Esto se llama jsx lo que se parece a html pero no es html
function App() {
    const titulo = "Bienvenidos al nuevo Blog";
    // Para mostrar una variable tenemos que poner una variable entre llaves
    const likes = 50;
    // Todo se renderiza como un string excepto los objetos(Da error)
    // App.js se le llama componente root
    const link = "https://www.google.com/";
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path = "/">
                            <Inicio /> 
                        </Route>
                        <Route path = "/create">
                            <Crear /> 
                        </Route>
                        <Route path = "/detalle">
                            <Detalles /> 
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

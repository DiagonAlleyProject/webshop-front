import NavBar from "./components/NavBar";
import Rutas from "./routers/Rutas";

const App = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <Rutas />
      </div>
    </>
  );
};

export default App;

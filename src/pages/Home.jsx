import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Spinner from "../components/Spinner";

const Home = () => {
  // modifico el nombre de la ventana de página
  let namePage = "Inicio";
  useEffect(() => {
    document.title = `Web Shop -  ${namePage}`;
  }, []);

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const url = import.meta.env.VITE_PRODUCT;

  // Función que reraliza la petición para obtener los productos.
  const getProduct = async () => {
    try {
      // fetch me devuelve una promesa por eso coloco el awaite para que espere la respuesta.
      const respuesta = await fetch(url);

      // si no esta ok, mando un error a catch
      if (!respuesta.ok) {
        throw new Error(`Ocurrio un error, ${respuesta.status}`);
      }
      // convierto la respuesta em JSON
      const prods = await respuesta.json();

      setProductos(prods.response);
    } catch (error) {
      console.error(`[getProduct]:, ${error}`);
    }
  };

  return (
    <>
      <hr />
      {productos ? (
        productos.map((producto) => (
          <Cards key={producto.idProduct} producto={producto} />
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;

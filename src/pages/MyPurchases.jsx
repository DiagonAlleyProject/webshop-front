import { useEffect } from "react";

const MyPurchases = () => {
  let namePage = "Mis compras";
  useEffect(() => {
    document.title = `Web Shop -  ${namePage}`;
  }, []);

  return (
    <>
      <h1>Mis compras</h1>
    </>
  );
};

export default MyPurchases;

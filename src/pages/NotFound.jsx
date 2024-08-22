import { useEffect } from "react";

const NotFound = () => {
  let namePage = "No encontrado";
  useEffect(() => {
    document.title = `Web Shop -  ${namePage}`;
  }, []);
  return <div>No encontrado</div>;
};

export default NotFound;

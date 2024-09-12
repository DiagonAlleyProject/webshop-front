import { useEffect } from "react";

const MyProfile = () => {
  let namePage = "Mi perfil";
  useEffect(() => {
    document.title = `Web Shop -  ${namePage}`;
  }, []);
  return <div>Mi perfil</div>;
};

export default MyProfile;

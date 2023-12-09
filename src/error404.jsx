import { Link } from "react-router-dom";
import Button from "../components/buttons-component/solidbutton";
import { useEffect } from "react";

const Error404 = () => {
  useEffect(() => {
    document.title = "Bulunamadı";
  }, []);
  return (
    <>
      <nav className="fixed bg-white top-0 py-8 left-0 right-0 flex justify-center items-center">
        <img src="/D.png" alt="D-logo" />
      </nav>
      <div className="flex justify-center items-center min-h-screen text-center">
        <div className="error-container px-5 text-2xl flex flex-col justify-center items-center gap-5">
          <h1 className="text-9xl font-semibold text-red-500">404</h1>
          <h2 className="title-font text-4xl font-medium">
           Yanlış giden bir şeyler var 
          </h2>
          <p>Aradığın sayfaya ulaşılamıyor.</p>
          <Link to={"/"}>
            <Button content={"Back to homepage"} padding={"px-5 py-2"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error404;

import { useContext, useEffect } from "react";
import "./LoadingScreen.css";
import { LoadingContext } from "../../context/Context";

const LoadingScreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  });
  return (
    <section className="laoding-screen">
      <h1>Welcome to our site</h1>
      <img src="../../../public/img/loading.png" alt="Loading Icon" />
    </section>
  );
};

export default LoadingScreen;

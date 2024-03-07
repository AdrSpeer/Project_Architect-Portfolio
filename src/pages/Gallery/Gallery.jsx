import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery">
      <Header />
      <h2>
        Photo<span>Gallery</span>
      </h2>
      <div className="gallery-img">
        <img src="../../../public/img/Rectangle 22.png" alt="" />
        <img src="../../../public/img/Rectangle 23.png" alt="" />
        <img src="../../../public/img/Rectangle 24.png" alt="" />
        <img src="../../../public/img/Rectangle 25.png" alt="" />
        <img src="../../../public/img/Rectangle 26.png" alt="" />
        <img src="../../../public/img/Rectangle 27.png" alt="" />
        <img src="../../../public/img/Rectangle 28.png" alt="" />
        <img src="../../../public/img/Rectangle 29.png" alt="" />
        <img src="../../../public/img/Rectangle 30.png" alt="" />
        <img src="../../../public/img/Rectangle 31.png" alt="" />
      </div>
      <Footer />
    </section>
  );
};

export default Gallery;

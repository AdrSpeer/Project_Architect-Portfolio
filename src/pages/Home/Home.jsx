import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.css";
import Headline from "../../components/Headline/Headline";
import MainBox from "../../components/MainBox/MainBox";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <section className="Home">
      <Header />
      <section className="project">
        <h2>
          Project <span>Lorum</span>
        </h2>
        <div className="project-box">
          <Link>View Project → </Link>
        </div>
      </section>
      <section className="about">
        <div className="about-img">
          <img src="../../../public/img/Rectangle 8.png" alt="Gebäude" />
          <img src="../../../public/img/Rectangle 9.png" alt="Gebäude" />
          <img src="../../../public/img/Rectangle 10.png" alt="Gebäude" />
        </div>
        <div className="about-content">
          <Headline title="About" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Link>Read More → </Link>
        </div>
      </section>
      <section className="main">
        <Headline title="Main Focus/Mission Statement" />
        <div className="main-content">
          <MainBox
            number="1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat."
          />
          <MainBox
            number="2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl."
          />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Home;

import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { DayNightContext } from "../../context/Context";

const Header = () => {
  const { setDayNight, dayNight } = useContext(DayNightContext);

  const dark = () => {
    setDayNight((change) => !change);
  };
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="../../../public/img/nav-logo.png" alt="Logo" />
        </Link>
        <div>
          <Link to="/">Main</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Contacts</Link>
          <img
            onClick={dark}
            src={
              dayNight
                ? "../../../public/img/Mode -  Light.png"
                : "../../../public/img/Mode -  Dark.png"
            }
            alt="Mond Icon"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

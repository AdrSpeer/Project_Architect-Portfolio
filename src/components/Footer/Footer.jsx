import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <img src="../../../public/img/Footer-logo.png" alt="Logo" />
      <div className="information">
        <h5>Information</h5>
        <p>Main</p>
        <p>Gallery</p>
        <p>Projects</p>
        <p>Certifications</p>
        <p>Contacts</p>
      </div>
      <div className="contacts">
        <h5>Contacts</h5>
        <p>Adress: 1234 Sample Street Austin Texas 78704</p>
        <p>Phone: 512.333.2222</p>
        <p>Email: sampleemail@gmail.com</p>
      </div>
      <div className="social">
        <img src="../../../public/img/facebook.png" alt="facebook icon" />
        <img src="../../../public/img/twitter.png" alt="twitter icon" />
        <img src="../../../public/img/Linked In.png" alt="linkedin icon" />
        <img src="../../../public/img/pininterest.png" alt="print icon" />
      </div>
    </footer>
  );
};

export default Footer;

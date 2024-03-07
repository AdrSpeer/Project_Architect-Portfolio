import "./MainBox.css";

const MainBox = (props) => {
  return (
    <div className="main-box">
      <h2>{props.number}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default MainBox;

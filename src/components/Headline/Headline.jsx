import "./Headline.css";

const Headline = (props) => {
  return (
    <div className="headline">
      <h2>{props.title}</h2>
    </div>
  );
};

export default Headline;

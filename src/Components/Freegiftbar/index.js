import "./index.css";

const Freegiftbar = (props) => {
  const { sendsTotal } = props;
  const sub = 1000 - sendsTotal;
  let percent = (sendsTotal / 1000) * 100;

  return (
    <div className="sub-bar-cont">
      <h1 className="head-bar">
        Add ₹{sub} more to get a FREE Wireless Mouse!
      </h1>
      <div
        style={{
          "background-color": "red",
          height: "30px",
          width: "100%",
          "border-radius": "25px",
        }}
      >
        <div
          style={{
            "background-color": "green",
            height: "30px",
            width: `${percent}%`,
            "border-radius": "25px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Freegiftbar;

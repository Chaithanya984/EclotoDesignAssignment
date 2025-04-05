import "./index.css";

const Productitems = (props) => {
  const { sendData, sendFunction } = props;
  const { id, name, price } = sendData;

  const sendidfunction = () => {
    sendFunction(id);
  };

  return (
    <li className="ul-sub-li">
      <h3 className="head-product-name">{name}</h3>
      <p className="head-product-price">₹{price}</p>
      <button className="head-product-button" onClick={sendidfunction}>
        Add to Cart
      </button>
    </li>
  );
};

export default Productitems;

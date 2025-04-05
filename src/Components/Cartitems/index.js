import "./index.css";

const Cartitems = (props) => {
  const { sendLis, sendaddminuscart, sendaddplusCart } = props;
  const { id, name, price, quantity } = sendLis;
  const quantityprice = price * quantity;

  const callAdds = () => {
    sendaddplusCart(id);
  };
  const callsubs = () => {
    sendaddminuscart(id);
  };

  return (
    <li className="ul-li-sub-cont">
      <div>
        <h3 className="li-sub-cont-head">{name}</h3>
        <p className="li-sub-cont-para">
          ₹{price} x {quantity} = ₹{quantityprice}
        </p>
      </div>
      <div className="li-sub-cont-sub-cont">
        <button className="li-sub-cont-sub-but" onClick={callsubs}>
          -
        </button>
        <p className="li-sub-cont-sub-para">{quantity}</p>
        <button className="li-sub-cont-sub-buts" onClick={callAdds}>
          +
        </button>
      </div>
    </li>
  );
};

export default Cartitems;

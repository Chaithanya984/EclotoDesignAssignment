import { Component } from "react";

import Productitems from "../Productitems";
import Freegiftbar from "../Freegiftbar";
import Cartempty from "../Cartempty";
import Freegift from "../Freegift";
import Cartitems from "../Cartitems";
import Addedgift from "../Addedgift";

import "./index.css";

const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

class Shopping extends Component {
  state = { cartdatalis: [], total: 0 };

  addingtocart = (bringsid) => {
    const { cartdatalis } = this.state;

    this.setState((prevState) => {
      const checkInarray = prevState.cartdatalis.filter(
        (each) => each.id === bringsid
      );
      if (checkInarray.length === 0) {
        const getProduct = products.filter((each) => each.id === bringsid);
        const addnew = { ...getProduct[0], quantity: 1 };
        console.log(addnew);
        return { cartdatalis: [...prevState.cartdatalis, addnew] };
      } else {
        const newArraymake = prevState.cartdatalis.map((each) => {
          if (each.id === bringsid) {
            return {
              ...each,
              quantity: each.quantity + 1,
            };
          } else {
            return each;
          }
        });

        return {
          cartdatalis: newArraymake,
        };
      }
    });
  };

  calltotals = () => {
    const { cartdatalis } = this.state;

    let sumTotal = 0;
    const gettall = cartdatalis.map((each) => {
      sumTotal = sumTotal + each.price * each.quantity;
      return each;
    });

    return sumTotal;
  };

  addplusCart = (getid) => {
    this.setState((prevState) => {
      const makenw = prevState.cartdatalis.map((each) => {
        if (each.id === getid) {
          return { ...each, quantity: each.quantity + 1 };
        } else {
          return each;
        }
      });
      return { cartdatalis: makenw };
    });
  };

  addminuscart = (getsid) => {
    this.setState((prevState) => {
      const maksnews = prevState.cartdatalis.map((each) => {
        if (each.id === getsid) {
          let subquant = each.quantity - 1;
          if (subquant <= 0) {
            return { ...each, quantity: 0 };
          }
          return { ...each, quantity: subquant };
        } else {
          return each;
        }
      });
      const filterss = maksnews.filter((each) => each.quantity !== 0);
      return { cartdatalis: filterss };
    });
  };

  render() {
    const { cartdatalis } = this.state;
    const letfindTotla = this.calltotals();
    console.log(cartdatalis, "checked");
    return (
      <div className="sub-bg-shop">
        <div>
          <h1 className="shop-head">Shopping Cart</h1>
        </div>
        <div className="sub-product-bg">
          <h1 className="product-head">Products</h1>
          <ul className="product-ul-bg">
            {products.map((each) => (
              <Productitems
                key={each.id}
                sendData={each}
                sendFunction={this.addingtocart}
              />
            ))}
          </ul>
        </div>
        <div>
          <h1 className="product-head">Cart Summary</h1>
          <div className="sub-total-bg">
            <div className="sub-total-cont-one">
              <h1 className="sub-total-head">Subtotal:</h1>
              <h1>₹{letfindTotla}</h1>
            </div>
            <hr></hr>
            <div>
              {letfindTotla >= 1000 ? (
                <Freegift />
              ) : (
                <Freegiftbar sendsTotal={letfindTotla} />
              )}
            </div>
          </div>
          <div className="cart-items-cont">
            {cartdatalis.length === 0 ? (
              <Cartempty />
            ) : (
              <ul className="ul-cart-contain">
                <li>
                  <h1>Cart Items</h1>
                </li>
                {cartdatalis.map((each) => (
                  <Cartitems
                    key={each.id}
                    sendLis={each}
                    sendaddplusCart={this.addplusCart}
                    sendaddminuscart={this.addminuscart}
                  />
                ))}
                {letfindTotla >= 1000 && <Addedgift />}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Shopping;

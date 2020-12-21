import React from "react";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../config/StateProvider";
import "../styles/checkout.css";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-link"
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((items, index) => (
            <CheckoutProduct
              key={index}
              id={items.id}
              image={items.image}
              price={items.price}
              title={items.title}
              rating={items.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

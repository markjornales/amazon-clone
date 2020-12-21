import React, { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { useStateValue } from "../config/StateProvider";
import Order from "./Order";
import "../styles/orders.css";
function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <div className="orders__order">
        <h1>Your Orders</h1>
        {orders?.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

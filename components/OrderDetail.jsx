import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  

  const handleClick = () => {
    createOrder({ customer, address, number, info, product, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Vahvista Tilaus</h1>
        <div className={styles.item}>
          <label className={styles.label}>Nimi</label>
          <input
            placeholder="Matti Meikäläinen"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Puhelinnumero</label>
          <input
            type="text"
            placeholder="+358 2342348"
            className={styles.input}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Osoite</label>
          <textarea
            rows={5}
            placeholder="Vauhtikuja 24"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
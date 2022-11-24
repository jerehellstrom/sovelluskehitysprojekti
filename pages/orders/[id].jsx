import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Tilausnumero</th>
              <th>Asiakas</th>
              <th>Osoite</th>
              <th>Kokonaishinta</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{order._id}</span>
              </td>
              <td>
                <span className={styles.name}>{order.customer}</span>
              </td>
              <td>
                <span className={styles.address}>{order.address}</span>
              </td>
              <td>
                <span className={styles.total}>€{order.total}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>OSTOSKORIN KOKONAISHINTA</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Välisumma:</b>€{order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Alennus:</b>€0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Kokonaishinta:</b>€{order.total}
          </div>
          <button disabled className={styles.button}>
            TILAUS VASTAANOTETTU
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`https://ruoka-app.herokuapp.com/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
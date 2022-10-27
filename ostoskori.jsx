import styles from "../styles/ostoskori.module.css";
import Image from "next/image";

const ostoskori = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.otsake}>Ostoskori</h2>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>


               {/*  tähä alle tuotetiedot */}
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                            tähä kuva tuotteesta
                            </div>
                            
                        </td>
                        <td className={styles.lisatiedot}>chili ramen</td>
                        <td>valkosipuli</td>
                        <td>13.20€</td>
                        <td>1</td>
                        <td>13.20€</td>
                    </tr>
            

                </table>
                
                
            </div>


            {/* tähän ostoskori nappi kassalle ja hinnat */}
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>OSTOSKORI</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>79.69€
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>0.00€
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>79.69€
                    </div>
                <button className={styles.button1}>MAKSA</button>

                </div>
            </div>

        </div>
    )
}

export default ostoskori
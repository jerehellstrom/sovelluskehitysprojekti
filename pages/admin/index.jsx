import axios from "axios";
import styles from "../../styles/Admin.module.css"
import Image from "next/image"

const index = ( {orders, products }) => {

    return (
        <div className={styles.container}>
            <div className={styles.addSection}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button className={styles.addButton}>Lisää Tuote</button>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>Tuote</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Kuva</th>
                            <th>Id</th>
                            <th>Tuote</th>
                            <th>Hinta</th>
                        </tr>
                    </tbody>
                    {products.map(product=>(
                    <tbody key={product._id}>
                        <tr className={styles.trTitle}>
                            <td><Image src={product.img} alt="" width={75}height={75}></Image></td>
                            <td>{product._id}</td>
                            <td>{product.title}</td>
                            <td>${product.prices[0]}</td>
                            <td>
                                <button className={styles.button}>Muokkaa</button>
                                <button className={styles.button}>Poista</button>
                            </td>
                        </tr>
                    </tbody>
                     ))}
                </table>
            </div>
            <div className={styles.item}>
            <h1 className={styles.title}>Orders</h1>
            <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Id</th>
                            <th>Asiakas</th>
                            <th>Summa</th>
                            <th>Maksutapa</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <td>894281325380</td>
                            <td>Jaakko Lahtinen</td>
                            <td>50€</td>
                            <td>Cash</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
    )
}


export const getServerSideProps = async ()=>{
    const productRes = await axios.get("https://ruoka-app.herokuapp.com/api/products")
    const orderRes = await axios.get("https://ruoka-app.herokuapp.com/api/orders")

    return{
        props:{
            products:productRes.data,
            pizza: res.data,
            order: res.data,
        },
    };
};

export default index


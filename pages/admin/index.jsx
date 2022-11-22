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
                <button className={styles.addButton}>Add product</button>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>Product</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
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
                                <button className={styles.button}>Edit</button>
                                <button className={styles.button}>Delete</button>
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
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
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
    const productRes = await axios.get("http://localhost:3000/api/products")
    const orderRes = await axios.get("http://localhost:3000/api/orders")

    return{
        props:{
            orders:orderRes.data,
            products:productRes.data,
        },
    };
};

export default index


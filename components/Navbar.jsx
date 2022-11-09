import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div>
                <Image src="/img/logoruokamieles.png" alt="" width="240" height="75"/>
                </div>
        </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Menu</li>                            
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.cart}>
                <div>
                <Image src="/img/cart.png" alt="" width="30" height="30"/>
                <div className={styles.counter}>2</div>   
                </div>
            </div>
        </div>
    )
}

export default Navbar
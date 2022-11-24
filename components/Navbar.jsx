import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div>
                <Image src="/img/logoruokamieles.png" alt="" width="240" height="75"/>
                </div>
        </div>

            <Link href="/cart" passHref>
            <div className={styles.cart}>
                <div>
                <Image src="/img/cart.png" alt="" width="30" height="30"/>
                <div className={styles.counter}>{quantity}</div>   
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Navbar
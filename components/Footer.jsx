import styles from "../styles/Footer.module.css"
import Image from "next/image"


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.appLinks}>
                    <Image src="/img/logoruokamieles.png" alt="" width="160" height="50"/>
                    </div>
                    <div className={styles.appLinks}>
                    <Image src="/img/logoappstorre.png" alt="" width="150" height="50"/>
                    <Image src="/img/logoplaystorre.png" alt="" width="150" height="50"/>
                    </div>
                <div className={styles.info}></div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.bottomTiedot}>
                    <div className={styles.tiedot}>
                        <h1 className={styles.otsake}>Ravintolan sijainti</h1>
                        <p className={styles.text}> kerhokuja 6 H <br/>Kekkola 01234<br/>+358 044 567893</p>
                    </div>
                    <div className={styles.tiedot}>
                        <h1 className={styles.otsake}>Avoinna</h1>
                        <p className={styles.text}>MA - PE <br/>11:00 - 23:00</p>
                        <p className={styles.text}>LA & SU <br/>11:00 - 02:00</p>
                    </div>

                </div>

            </div>

            <div className={styles.copyright}>
                <p className={styles.text}>c ruokamieles 2022</p>
            </div>
        </div>
    )
}

export default Footer
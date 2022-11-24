import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({pizzaList}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Ruokamieles</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () =>{
  const res = await axios.get("https://ruoka-app.herokuapp.com/api/products");
  return {
    props:{
      pizzaList: res.data
    }
  }
};

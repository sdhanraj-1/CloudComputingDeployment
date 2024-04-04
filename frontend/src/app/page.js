
import styles from "./page.module.css";
import connectDB from "./getdb.js";


const cardData = [
  { img: 'house.jpg', price: 'placeholder', address: 'placeholder' },
  { img: 'house.jpg', price: 'placeholder', address: 'placeholder' },
  { img: 'house.jpg', price: 'placeholder', address: 'placeholder' },
  { img: 'house.jpg', price: 'placeholder', address: 'placeholder' },
  { img: 'house.jpg', price: 'placeholder', address: 'placeholder' },
  { img: 'house.jpg', price: 'placeholder', address: 'placeholder' }
];
async function getData() {
  const data = await connectDB();
  return data;
}
export default async function Home() {
  const docs = await connectDB();
  return (
    <main className={styles.main}>
      <div className={styles.heroImage}>
        <div className={styles.heroImageBefore}></div>
        <div className={styles.contentAboveOverlay}>
          <h1 style={{color:"white", textAlign:'center', marginTop:'10%'}}>Welcome to Real Estate</h1>
          <p style={{color:"white", textAlign:'center', marginTop:'5%'}}>A place to find your dream house</p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {cardData.map((doc, index) => (
          <div key={index} className={styles.card}>
            <img src={docs[index]?.img} alt="House" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <p className={styles.cardPrice}>{docs[index]?.price}</p>
              <p className={styles.cardAddress}>{docs[index]?.address}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

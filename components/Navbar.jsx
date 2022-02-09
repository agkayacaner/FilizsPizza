import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>221 44 19</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" width={333} height={74} />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width={30} height={30} />
            <div className={styles.count}>{quantity}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

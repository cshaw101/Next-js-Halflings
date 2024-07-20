import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  togglePaymentForm: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ togglePaymentForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          Halflings Novelties
        </Link>
        <div className={styles.navToggle} onClick={toggleNavbar}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLinks}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLinks}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLinks}>
              Contact
            </Link>
          </li>
          <li className={styles.navItem}>
            <button className={styles.navLinks} onClick={togglePaymentForm}>
              🛒
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

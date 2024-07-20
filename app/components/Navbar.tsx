// app/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  togglePaymentForm?: () => void; // Optional prop for toggling payment form
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
          MyApp
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
            <Link href="/services" className={styles.navLinks}>
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLinks}>
              Contact
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cart" className={styles.navLinks}>
              🛒
            </Link>
          </li>
          {togglePaymentForm && (
            <li className={styles.navItem}>
              <button onClick={togglePaymentForm} className={styles.navLinks}>
                Toggle Payment Form
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

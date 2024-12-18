import React from 'react'
import styles from './WppFloating.module.scss'
import { FaWhatsapp } from "react-icons/fa";

const WppFloating = () => {
  return (
    <button className={styles.wppFloating}>
      <a href="#">
        <FaWhatsapp />
      </a>
    </button>
  )
}

export default WppFloating
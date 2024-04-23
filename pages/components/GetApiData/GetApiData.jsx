import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from '../../../styles/App.module.scss'

export default function Api({children, text, icon, value}) {
  return (
    <>
      <div className={styles.cardsWind}>
        <div className={styles.windIconContainer}>
          <Image src={icon} className={styles.windIcon} alt="tempIcon" />
        </div>
        <div className={styles.icons}>{text}{value}</div>
      </div>
    </>
  )
}

import React from 'react';
import Image from "next/image";
import styles from '../../../styles/App.module.scss';

export default function SpinSlids({ src }) {
  return (
    <div className={styles.spinSlidsBlock}>
      <Image src={src} alt="Slide Image" className={styles.spinSlidsImage} />
    </div>
  );
}

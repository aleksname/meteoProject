import styles from '../../../styles/App.module.scss'
import SettingsImg from '../img/header/Setting_line.png'
import Image  from 'next/image';
import { Link } from 'next/link';

export default function HeaderSetting() {
  return(
    <>
      <Image src={SettingsImg} alt='setting' className={styles.setting} />
    </>
  )
}
import Link from 'next/link'
import styles from '../../../styles/App.module.scss'

export default function HeaderNav() {
  return(
    <>
      <nav className="headerNavBlock">
        <ul className="navUl">
          <li className="navLi">
            <Link href='/' className={styles.link}>Home</Link>
            <Link href='Weather' className={styles.link}>Weather</Link>
            <Link href='News' className={styles.link}>News</Link>
            <Link href='Contact' className={styles.link}>Contact</Link>
          </li>
        </ul>
      </nav>  
    </>
  )
}
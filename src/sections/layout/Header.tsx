import React from 'react'
import { Logo } from '../../design-system/atoms/Logo';
import styles from './Header.module.scss';


export const Header = () => {
  return (
    <header className={styles["header"]}>
       <Logo size={12}/>
    </header>
  )
}

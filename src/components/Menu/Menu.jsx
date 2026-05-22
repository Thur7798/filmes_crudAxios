import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <header className={styles['menu-container']}>
      <h1 className={styles['menu-title']}>CATÁLOGO DE FILMES</h1>
      <nav className={styles['menu-nav']}>
        <Link to='/' className={styles['menu-link']}>Início</Link>
        <Link to='/criar' className={styles['menu-link']}>Criar</Link>
        <Link to='/alterar' className={styles['menu-link']}>Alterar</Link>
        <Link to='/apagar' className={styles['menu-link']}>Apagar</Link>
      </nav>
    </header>
  )
}

export default Menu

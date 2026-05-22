import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://6a107bead2a985707036da2b.mockapi.io/Filmes')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={styles['home-container']}>
      <h2 className={styles['home-title']}>Filmes</h2>
      <ul className={styles['home-list']}>
        {data.map((d, i) => (
          <li key={i} className={styles['home-item']}>
            <span>ID: {d.id}</span>
            <Link to={`/ler/${d.id}`} className={styles['home-link']}>
              {d.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

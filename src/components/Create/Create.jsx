import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Create.module.css'

function Create() {
  const [values, setValues] = useState({
    nome: '',
    genero: '',
    ano: ''
  })

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://6a107bead2a985707036da2b.mockapi.io/Filmes', values)
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles['create-container']}>
      <h1 className={styles['create-title']}>Criação de Filme</h1>
      <form onSubmit={handleSubmit} className={styles['create-form']}>

        <div className={styles['create-field']}>
          <label htmlFor="nome" className={styles['create-label']}>Nome:</label>
          <input 
            type="text" 
            name="nome" 
            placeholder="Digite o nome do filme" 
            className={styles['create-input']}
            onChange={e => setValues({ ...values, nome: e.target.value })}
          />
        </div>

        <div className={styles['create-field']}>
          <label htmlFor="genero" className={styles['create-label']}>Gênero:</label>
          <input 
            type="text" 
            name="genero" 
            placeholder="Digite o gênero do filme" 
            className={styles['create-input']}
            onChange={e => setValues({ ...values, genero: e.target.value })}
          />
        </div>

        <div className={styles['create-field']}>
          <label htmlFor="ano" className={styles['create-label']}>Ano de Lançamento:</label>
          <input 
            type="date" 
            name="ano" 
            className={styles['create-input']}
            onChange={e => setValues({ ...values, ano: e.target.value })}
          />
        </div>

        <button className={styles['create-button']}>Criar</button>
        <Link to="/" className={styles['create-link']}>Voltar</Link>
      </form>
    </div>
  )
}

export default Create

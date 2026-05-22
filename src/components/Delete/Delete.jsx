import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Delete.module.css'

function Delete() {
  const [data, setData] = useState()
  const [id, setId] = useState()
  const navigate = useNavigate()

  const handleFind = (e) => {
    e.preventDefault()
    axios.get("https://6a107bead2a985707036da2b.mockapi.io/Filmes/" + id)
      .then(res => setData(res.data))
      .catch(err => window.alert("Filme não encontrado"))
  }

  const handleDelete = () => {
    if (window.confirm("Quer mesmo remover esse filme?")) {
      axios.delete("https://6a107bead2a985707036da2b.mockapi.io/Filmes/" + id)
        .then(res => navigate('/'))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className={styles['delete-container']}>
      <h1 className={styles['delete-title']}>Remover Filme</h1>

      <form onSubmit={handleFind} className={styles['delete-form']}>
        <div className={styles['delete-field']}>
          <label htmlFor="id" className={styles['delete-label']}>ID:</label>
          <input 
            type="text" 
            name="id" 
            className={styles['delete-input']} 
            onChange={e => setId(e.target.value)} 
          />
        </div>
        <Link to="/" className={styles['delete-link']}>Voltar</Link>
        <button className={styles['delete-button']}>Procurar</button>
      </form>

      {data && (
        <div className={styles['delete-details']}>
          <strong>Nome:</strong> {data.nome}<br />
          <strong>Gênero:</strong> {data.genero}<br />
          <strong>Ano de lançamento:</strong> {data.ano}<br />
          <button onClick={handleDelete} className={styles['delete-button']}>
            Excluir
          </button>
        </div>
      )}
    </div>
  )
}

export default Delete

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Update.module.css'

function Update() {
  const [data, setData] = useState()
  const [id, setId] = useState()
  const [values, setValues] = useState({
    nome: '',
    genero: '',
    ano: ''
  })

  const navigate = useNavigate()

  const handleFind = (e) => {
    e.preventDefault()
    axios.get("https://6a107bead2a985707036da2b.mockapi.io/Filmes/" + id)
      .then(res => setData(res.data))
      .catch(err => window.alert("Filme não encontrado"))
  }

  useEffect(() => {
    if (data) {
      setValues({
        nome: data.nome || "",
        genero: data.genero || "",
        ano: data.ano || ""
      })
    }
  }, [data])

  const handleUpdate = (event) => {
    event.preventDefault()
    axios.put("https://6a107bead2a985707036da2b.mockapi.io/Filmes/" + data.id, values)
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles['update-container']}>
      <h1 className={styles['update-title']}>Atualizar Filme</h1>

      {/* Formulário para buscar pelo ID */}
      <form onSubmit={handleFind} className={styles['update-form']}>
        <div className={styles['update-field']}>
          <label htmlFor="id" className={styles['update-label']}>ID:</label>
          <input 
            type="text" 
            name="id" 
            className={styles['update-input']} 
            onChange={e => setId(e.target.value)} 
          />
        </div>
        <Link to="/" className={styles['update-link']}>Cancelar</Link>
        <button className={styles['update-button']}>Procurar</button>
      </form>

      {/* Formulário para atualizar os dados */}
      {data && (
        <form onSubmit={handleUpdate} className={styles['update-form']}>
          <div className={styles['update-field']}>
            <label htmlFor="nome" className={styles['update-label']}>Nome:</label>
            <input 
              type="text" 
              value={values.nome} 
              placeholder="Digite o nome do filme" 
              className={styles['update-input']}
              onChange={e => setValues({ ...values, nome: e.target.value })} 
            />
          </div>

          <div className={styles['update-field']}>
            <label htmlFor="genero" className={styles['update-label']}>Gênero:</label>
            <input 
              type="text" 
              value={values.genero} 
              className={styles['update-input']}
              onChange={e => setValues({ ...values, genero: e.target.value })} 
            />
          </div>

          <div className={styles['update-field']}>
            <label htmlFor="ano" className={styles['update-label']}>Ano de Lançamento:</label>
            <input 
              type="date" 
              value={values.ano} 
              className={styles['update-input']}
              onChange={e => setValues({ ...values, ano: e.target.value })} 
            />
          </div>

          <button className={styles['update-button']}>Atualizar</button>
        </form>
      )}
    </div>
  )
}

export default Update

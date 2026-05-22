import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './Read.module.css'

function Read() {
  const [data, setData] = useState([])
  const { id } = useParams()

  const formatarData = (data) => {
    if (!data) return '—'
    const date = new Date(data + 'T00:00:00') // evita bug de fuso horário
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  useEffect(() => {
    axios.get('https://6a107bead2a985707036da2b.mockapi.io/Filmes/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className={styles['read-container']}>
      <h3 className={styles['read-title']}>Detalhes do filme</h3>

      <div className={styles['read-detail']}>
        <strong>Nome:</strong> {data.nome}
      </div>

      <div className={styles['read-detail']}>
        <strong>Gênero:</strong> {data.genero}
      </div>

      <div className={styles['read-detail']}>
        <strong>Ano de Lançamento:</strong> {formatarData(data.ano)}
      </div>
    </div>
  )
}

export default Read

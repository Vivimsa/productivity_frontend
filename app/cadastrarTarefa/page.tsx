'use client'

import { useState } from 'react'
import client from '@/config/client'
import { MeuInput } from '@/components/input'
import { Button } from '@heroui/button'

export default function CadastrarTarefa() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [concluida_em, setConcluidaEm] = useState('')
  const [data_expiracao, setDataExpiracao] = useState('')
  const [status, setStatus] = useState('')
  const [meta_id, setMetaId] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const novaTarefa = {
      titulo,
      descricao,
      concluida_em,
      data_expiracao,
      status,
      meta_id: parseInt(meta_id),
    }

    try {
      await client.post('http://localhost:3000/tarefa', novaTarefa)
      alert('Tarefa cadastrada com sucesso!')
    } catch (error) {
      console.error('Erro ao cadastrar cadastrarTarefa:', error)
      alert('Falha ao cadastrar cadastrarTarefa')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <MeuInput
        label="Título:"
        type="text"
        variant="bordered"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <MeuInput
        label="Descrição:"
        type="text"
        variant="bordered"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <MeuInput
        label="Concluída em:"
        type="date"
        variant="bordered"
        value={concluida_em}
        onChange={(e) => setConcluidaEm(e.target.value)}
      />

      <MeuInput
        label="Data de Expiração"
        type="date"
        variant="bordered"
        value={data_expiracao}
        onChange={(e) => setDataExpiracao(e.target.value)}
      />

      <MeuInput
        label="Status"
        type="text"
        variant="bordered"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <MeuInput
        label="Meta"
        type="number"
        variant="bordered"
        value={meta_id}
        onChange={(e) => setMetaId(e.target.value)}
      />

      <Button type="submit" color="primary">
        Cadastrar Tarefa
      </Button>
    </form>
  )
}

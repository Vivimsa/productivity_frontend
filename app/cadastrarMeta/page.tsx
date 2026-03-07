'use client'
import { useState } from 'react'
import { Button } from '@heroui/button'
import client from '@/config/client'
import { MeuInput } from '@/components/input'

export default function MetaPage() {
  const [titulo, setTitulo] = useState('')
  const [prioridade, setPrioridade] = useState('')
  const [data_expiracao, setDataExpiracao] = useState('')
  const [concluida_em, setConcluidaEm] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const novaMeta = {
      titulo,
      descricao,
      prioridade: Number(prioridade),
      data_expiracao,
      concluida_em,
    }

    await client.post('/api/metas', novaMeta)
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <MeuInput
            label="Título"
            type="text"
            variant="bordered"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <MeuInput
            label="Descrição"
            type="text"
            variant="bordered"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <MeuInput
            label="Prioridade"
            type="number"
            variant="bordered"
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
          />
        </div>
        <div>
          <MeuInput
            label="Data expiração"
            type="date"
            variant="bordered"
            value={data_expiracao}
            onChange={(e) => setDataExpiracao(e.target.value)}
          />
        </div>
        <div>
          <MeuInput
            label="Concluída em"
            type="date"
            variant="bordered"
            value={concluida_em}
            onChange={(e) => setConcluidaEm(e.target.value)}
          />
        </div>
        <div>
          <Button
            type="submit"
            color="primary"
            variant="solid"
            className="w-full h-14 text-lg font-medium bg-azul1 hover:bg-azul3"
          >
            Salvar
          </Button>
        </div>
      </form>
    </div>
  )
}

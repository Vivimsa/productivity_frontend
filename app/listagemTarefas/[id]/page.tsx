'use client'
import { useEffect, useState } from 'react'
import client from '@/config/client'
import { Accordion, AccordionItem } from '@heroui/react'

export default function ListagemTarefas({
  params,
}: {
  params: { id: string }
}) {
  const [tarefas, setTarefas] = useState([])

  const listagemTarefas = async (id: string | number) => {
    const response = await client.get(`/api/tarefas_por_meta/${id}`)
    setTarefas(response.data || [])
    console.log(tarefas)
  }

  useEffect(() => {
    listagemTarefas(params.id)
  }, [])

  return (
    <div className="flex flex-col gap-4 items-center">
      {tarefas.length === 0 ? (
        <p className="text-azul1 text-lg">
          Nenhuma tarefa encontrada para esta meta.
        </p>
      ) : (
        tarefas.map((tarefa: any) => (
          <Accordion>
            <AccordionItem
              key={tarefa.id}
              aria-label="Accordion 1"
              title={tarefa.titulo}
            >
              {tarefa.descricao}
              {tarefa.concluida_em}
              {tarefa.data_expiracao}
              {tarefa.status}
            </AccordionItem>
          </Accordion>
        ))
      )}
    </div>
  )
}

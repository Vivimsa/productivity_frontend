'use client'
import { useEffect, useState } from 'react'
import client from '@/config/client'
import { Button } from '@heroui/button'
import { useRouter } from 'next/navigation'

export default function ListagemMetas() {
  const route = useRouter()
  const [metas, setMetas] = useState([])
  const listagemMetas = async () => {
    const response = await client.get('/api/metas')
    setMetas(response.data?.data || response.data || [])
    console.log(metas)
  }

  useEffect(() => {
    listagemMetas()
  }, [])

  return (
    <div className="flex flex-col gap-4 items-center">
      {metas.map((meta: any) => (
        <Button
          className="text-white bg-azul2/70 font-medium text-sm px-6 py-8 rounded-md hover:bg-azul3 transition-colors duration-300 hover:shadow-lg w-full max-w-md"
          color="primary"
          variant="solid"
          onPress={() => route.push(`/listagemTarefas/${meta.id}`)}
          key={meta.id}
        >
          {meta.titulo}
        </Button>
      ))}
    </div>
  )
}

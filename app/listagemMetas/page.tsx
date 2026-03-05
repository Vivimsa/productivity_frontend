'use client'
import {useEffect, useState} from "react";
import client from "@/config/client";
import {Button} from "@heroui/button";
import {useRouter} from "next/navigation";

export default function ListagemMetas(){
    const route = useRouter()
    const [metas,setMetas] = useState([])
    const listagemMetas= async () => {
        const response = await client.get('/api/metas')
        setMetas(response.data?.data || response.data || [])
        console.log(metas)
    }

    useEffect (() => {
        listagemMetas()
    },[])


    return (
        <div className="flex flex-col gap-4 items-center">
            {metas.map((meta: any) => (
                <Button
                    color="primary" variant="solid" onPress={() => route.push(`/listagemTarefas/${meta.id}`)}
                    key={meta.id}
                    >{meta.titulo}
                </Button>
            ))}
        </div>
    )
}

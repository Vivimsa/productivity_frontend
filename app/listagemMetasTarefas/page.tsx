'use client'
import {useEffect, useState} from "react";
import client from "@/config/client";
import {Accordion, AccordionItem} from "@heroui/react";

export default function ListagemMetasTarefas(){
    const [metas,setMetas] = useState([])
    const listagemMetas= async () => {
        const response = await client.get('/metas/metasTarefas/user/1')
        setMetas(response.data.data || [])
        console.log(response.data.data)
    }

    useEffect (() => {
        listagemMetas()
    },[])


    return (
        <div>
            <Accordion selectionMode="multiple">
                {metas.map((meta) => (
                    <AccordionItem
                        key={meta.id}
                        title={meta.descricao}
                    >
                        {meta.tarefa && meta.tarefa.length > 0 ? (
                            meta.tarefa.map((tarefa: any) => (
                                <p key={tarefa.id}>{tarefa.descricao}</p>
                            ))
                        ) : (
                            <p>Sem tarefas cadastradas</p>
                        )}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )

}

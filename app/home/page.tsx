'use client'
import {Button} from "@heroui/react"
import React from "react"
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const route = useRouter()

    return (
        <div>
            <div className="flex flex-wrap gap-4 items-center">
                <Button onPress={() => route.push("/cadastrarMeta")} color="primary" variant="bordered">
                    Cadastrar meta
                </Button>
                <Button onPress={() => route.push("/cadastrarTarefa")} color="primary" variant="bordered" >
                    Cadastrar tarefa
                </Button>
                <Button onPress={() => route.push("/listagemMetasTarefas")} color="primary" variant="bordered" >
                    Ver minhas metas e tarefas
                </Button>
            </div>
        </div>
    )
}




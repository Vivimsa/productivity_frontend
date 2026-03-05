'use client'
import {Button} from "@heroui/react"
import React from "react"
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const route = useRouter()

    const opcoes = [
        {
            label: "Cadastrar Meta",
            onPress: () => route.push("/cadastrarMeta")
        },
        {
            label: "Cadastrar Tarefa",
            onPress: () => route.push("/cadastrarTarefa")
        },
        {
            label: "Visualizar Metas e Tarefas",
            onPress: () => route.push("/listagemMetas")
        }
    ]

    return (
        <div>
            <div className="flex flex-col gap-4 items-center justify-center w-full max-w-sm px-4">
                {opcoes.map((opcao) => (
                    <Button
                        key={opcao.label}
                        color="primary"
                        variant="bordered"
                        onPress={opcao.onPress}
                        className="w-full h-14 text-lg font-medium"
                    >
                        {opcao.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}
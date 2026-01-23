'use client'
import {useState} from "react";
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";
import client from "@/config/client";

export default function MetaPage() {
    const [titulo,setTitulo] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [data_expiracao, setDataExpiracao] = useState("");
    const [concluida_em, setConcluidaEm] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const novaMeta = {
            titulo,
            descricao,
            prioridade: Number(prioridade),
            data_expiracao,
            concluida_em
        };

        await client.post("/api/metas", novaMeta);
    };

    return (
        <div className="w-full flex flex-col gap-4">
            <form onSubmit={handleSubmit}>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        label="Título"
                        type="text"
                        variant="bordered"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        label="Descrição"
                        type="text"
                        variant="bordered"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        label="Prioridade"
                        type="number"
                        variant="bordered"
                        value={prioridade}
                        onChange={(e) => setPrioridade(e.target.value)}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        label="Data expiração"
                        type="date"
                        variant="bordered"
                        value={data_expiracao}
                        onChange={(e) => setDataExpiracao(e.target.value)}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        label="Concluída em"
                        type="date"
                        variant="bordered"
                        value={concluida_em}
                        onChange={(e) => setConcluidaEm(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button type="submit" color="default">
                        Salvar
                    </Button>
                </div>
            </form>
        </div>
    );
}

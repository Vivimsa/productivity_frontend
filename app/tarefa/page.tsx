'use client'

import {useState} from "react";
import client from "@/config/client";
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";

export default function CadastrarTarefa() {
    const [descricao, setDescricao] = useState("");
    const [registro_tempo, setRegistroTempo] = useState("");
    const [data_inicio, setDataInicio] = useState("");
    const [data_fim, setDataFim] = useState("");
    const [metaId, setMetaId] = useState("");
    const [userId, setUserId] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const novaTarefa = {
            descricao,
            registro_tempo,
            data_inicio,
            data_fim,
            metaId,
            userId
        };

        try {
            await client.post("http://localhost:3000/tarefa", novaTarefa);
            alert("Tarefa cadastrada com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar tarefa:", error);
            alert("Falha ao cadastrar tarefa");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto"
        >
            <Input
                label="Descrição"
                type="text"
                variant="bordered"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />

            <Input
                label="Registro tempo"
                type="text"
                variant="bordered"
                value={registro_tempo}
                onChange={(e) => setRegistroTempo(e.target.value)}
            />

            <Input
                label="Data de início"
                type="date"
                variant="bordered"
                value={data_inicio}
                onChange={(e) => setDataInicio(e.target.value)}
            />

            <Input
                label="Data de término"
                type="date"
                variant="bordered"
                value={data_fim}
                onChange={(e) => setDataFim(e.target.value)}
            />

            <Input
                label="Meta"
                type="number"
                variant="bordered"
                value={metaId}
                onChange={(e) => setMetaId(e.target.value)}
            />

            <Input
                label="Usuário"
                type="number"
                variant="bordered"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />

            <Button type="submit" color="primary">
                Cadastrar Tarefa
            </Button>
        </form>
    );
}

'use client'
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import client from "@/config/client";

export default function MetaPage() {
    const [descricao, setDescricao] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");
    const [user, setUser] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const novaMeta = {
            descricao,
            dataInicio,
            dataFim,
            user
        };

        await client.post("/metas", novaMeta);
    };

    return (
        <div className="w-full flex flex-col gap-4">
            <form onSubmit={handleSubmit}>
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
                        label="Data de início"
                        type="date"
                        variant="bordered"
                        value={dataInicio}
                        onChange={(e) => setDataInicio(e.target.value)}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        label="Data de término"
                        type="date"
                        variant="bordered"
                        value={dataFim}
                        onChange={(e) => setDataFim(e.target.value)}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        label="Usuário"
                        type="number"
                        variant="bordered"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button type="submit" color="default">
                        Default
                    </Button>
                </div>
            </form>
        </div>
    );
}

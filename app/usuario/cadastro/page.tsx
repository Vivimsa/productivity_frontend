'use client'
import {Button} from "@heroui/react";
import {Input} from "@heroui/react"
import React, { useState } from "react"
import client from "@/config/client";

export default function CadastroPage() {
    const sizes = ["lg"];
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        const newUser = {
            name,
            email,
            password,
        }


        await client.post("/api/v1/users", newUser);
    };

    return (
        <div>
            <h2>Criar novo usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-4">
                    {sizes.map((size) => (
                        <div key={size} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input label="Nome" size={"lg"} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    ))}
                    {sizes.map((size) => (
                        <div key={size} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input label="Email" size={"lg"} type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    ))}
                    {sizes.map((size) => (
                        <div key={size} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input label="Senha" size={"lg"} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button color="primary" variant="bordered" type="submit">
                        Cadastrar usuário
                    </Button>
                </div>
            </form>

        </div>
    )
}




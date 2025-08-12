'use client'
import {Button} from "@heroui/react"
import {Input} from "@heroui/react"
import React, { useState } from "react"
import client from "@/config/client"
import {useNavigate} from "react-router-dom"
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const sizes = ["lg"];
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const route = useRouter()


    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()
        const user = {
            email,
            password,
        }

        const loginResponse = await client.post("/auth/login", user)
        console.log(loginResponse)
        route.push("/usuario/cadastro")
   }

    return (
        <div>
            <div className="flex flex-wrap gap-4 items-center">
                <Button color="primary" variant="bordered" type="submit">
                    Cadastrar meta
                </Button>
                <Button color="primary" variant="bordered" type="submit">
                    Cadastrar tarefa
                </Button>
            </div>
        </div>
    )
}




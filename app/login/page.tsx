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
        route.push("/home")
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input label="Email" size={"lg"} type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input label="Senha" size={"lg"} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button color="primary" variant="bordered" type="submit">
                        Login
                    </Button>
                </div>
            </form>

        </div>
    )
}




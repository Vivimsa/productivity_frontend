'use client'
import {Button} from "@heroui/react"
import {Input} from "@heroui/react"
import React, { useState } from "react"
import client from "@/config/client"
import {useNavigate} from "react-router-dom"
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const route = useRouter()

    return (
        <div>
            <div className="flex flex-wrap gap-4 items-center">
                <Button onPress={() => route.push("/meta")} color="primary" variant="bordered">
                    Cadastrar meta
                </Button>
                <Button onPress={() => route.push("/tarefa")} color="primary" variant="bordered" >
                    Cadastrar tarefa
                </Button>
            </div>
        </div>
    )
}




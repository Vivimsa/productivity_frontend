import React, { useState } from "react"
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
})
const CreatePost = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [responseMessage, setResponseMessage] = useState("")




    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        const newUser = {
            name,
            email,
            password,
        }


        await axiosInstance.post("/api/v1/users", newUser);
    };

    return (
        <div>
            <h2>Ciar novo usuário</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar usuário</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default CreatePost;
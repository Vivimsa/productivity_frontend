import React, { useState } from "react"
import axios from "axios"

const CreatePost = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [responseMessage, setResponseMessage] = useState("")

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        const newUser = {
            nome,
            email,
            senha,
        }

        axios
            .post("http://localhost:3000/api/v1/users", newUser)
            .then((response) => {
                setResponseMessage("User created successfully!");
            })
            .catch((err) => {
                setResponseMessage("Error creating user");
            });
    };

    return (
        <div>
            <h2>Ciar novo usuário</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit">Cadastrar usuário</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default CreatePost;
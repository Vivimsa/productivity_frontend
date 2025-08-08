import React, { useState } from "react"
import axios from "axios"

const CreatePost = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [responseMessage, setResponseMessage] = useState("")

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const newPost = {
            email,
            senha,
        }

        axios
            .post("http://localhost:3000/api/v1/users", newPost)
            .then((response) => {
                setResponseMessage("Post created successfully!");
            })
            .catch((err) => {
                setResponseMessage("Error creating post");
            });
    };

    return (
        <div>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Post Title"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Post Body"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit">Create Post</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default CreatePost;
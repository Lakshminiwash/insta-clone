import axios from "axios";

export async function login(email,password) {
        const response = await axios.post("http://localhost:3000/api/auth/login",{
            email,password
        })
        return response.data
}


export async function register(email,username,password){
        const response = await axios.post("http://localhost:3000/api/auth/register",{
            username,email,password
        })
        return response.data
}

export async function getme() {
    const response = await axios.get("http://localhost:3000/api/auth/getme")

    return response.data
    
}
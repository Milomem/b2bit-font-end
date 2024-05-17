import axios from "axios";

const api = axios.create({
    baseURL: "https://api.homologation.cliqdrive.com.br/auth",
    headers: {
        "content-type": "application/json",
        "Accept": "application/json;version=v1_web"
    }
})

export { api }
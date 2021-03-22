import axios from "axios";

class Client {

    get client() {
        return axios.create({
            baseURL: '/',
        })
    }
}

export default new Client()
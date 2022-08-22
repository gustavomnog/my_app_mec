import axios from "axios"

const api = axios.create({
  baseURL: 'https://www.sistemacicom.com.br/api',
})


export default api
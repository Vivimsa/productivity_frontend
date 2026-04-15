import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
})

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

client.interceptors.response.use(
  (response) => {
    if (response.status === 401 && !window.location.href.includes('/login')) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return response
  },
  (error) => {
    if (error.response) {
      console.error('Erro na resposta:', error.response.data)
      console.error('Status:', error.response.status)
      console.error('Cabeçalhos:', error.response.headers)

      if (
        error.response.status === 401 &&
        !window.location.href.includes('/login')
      ) {
        localStorage.removeItem('token')
        window.location.href = '/login'
      }
    } else if (error.request) {
      console.error('Erro na requisição:', error.request)
    } else {
      console.error('Erro:', error.message)
    }
    return Promise.reject(error)
  },
)

export default client

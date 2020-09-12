import axios from 'axios'
import EventBus from './event-bus'

const HTTP = axios.create({
    baseURL: '/api/',
})
const token = localStorage.getItem('token')

if (token) {
    HTTP.defaults.headers.common['X-Auth-Token'] = `Bearer ${token}`
}

const ErrorIntesept = (e) => (
    new Promise((resolve, reject) => {
        if (e.response && [400, 403, 422, 404].includes(e.response.status)) {
            reject(e.response)
        } else {
            EventBus.$emit('error', {
                code: e.response.status,
                title: `Error ${e.response.status}`,
                message: e.response.data.errors,
            })
        }
    })
)

HTTP.interceptors.response.use(r => r.data.data, ErrorIntesept)

export { HTTP }

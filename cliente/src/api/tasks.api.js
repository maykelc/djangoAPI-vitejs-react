import axios from 'axios'


const loginApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/login/'
})
export const getAllTasks = () =>{
    return axios.get('http://localhost:8000/tasks/api/v1/login/')
}
export const createLogin = (login) => { loginApi.post("/", login)};

export const deleteUser = (id) => {loginApi.delete(`/${id}`)};

export const updateUser = (id, login) => {loginApi.put(`/${id}/`, login)};

//obtener Usuario
export const getUser = (id) => loginApi.get(`/${id}/`)
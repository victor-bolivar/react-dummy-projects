import axios from "axios";

export const jobsApi = axios.create({
    baseURL: 'https://bytegrad.com/course-assets/projects/rmtdev/api' // TODO get from .env
})
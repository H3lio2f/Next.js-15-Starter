import axios from 'axios'

export const API_URL = "API_URL"

export const api = axios.create({
  baseURL: process.env.API_URL
})
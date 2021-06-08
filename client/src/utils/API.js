import axios from 'axios'
import { BASE_URL, BASE_ENDPOINT } from './constants'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
export const getMenu = async function () {
  try {
    return await instance
      .get(BASE_ENDPOINT)
  } catch (e) {
    console.error(e)
  }
}

export const addMenuItem = async function (item) {
  try {
    const data = JSON.stringify({ item: item })
    const config = {
    }
    return await instance
      .post(BASE_ENDPOINT, data, config)
  } catch (e) {
    console.error(e)
  }
}

export const deleteMenuItem = async function (id) {
  try {
    return await instance
      .delete(`${BASE_ENDPOINT}/${id}`)
  } catch (e) {
    console.error(e)
  }
}

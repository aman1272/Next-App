// import data from '../../../data/mockData'
import axios from 'axios'

export async function getData() {
    const response = await axios.get('https://mocki.io/v1/cec7731b-141c-4d04-90e1-f376a0328b5c')
    const data = response.data
    return data
}

export default async function handler(req, res) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}
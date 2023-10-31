import axios from 'axios'

const TOKEN = "ckru4c9r01qstsqsh73gckru4c9r01qstsqsh740"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params:{
    token: TOKEN
  }
})
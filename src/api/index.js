import axios from 'axios'
const URL = process.env.REACT_APP_API_URL
export const index = (method, endpoint, setFunc) => {
  const response = axios({ method, url: URL + endpoint })
  response.then(
    (res) => {
      setFunc(res.data)
      console.log(res.data)
    }

  ).catch(
    (err) => {
      alert(err)
    }
  )
  console.log(response)
}

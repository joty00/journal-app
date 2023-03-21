import axios from "axios"


const journalApi = axios.create({
    baseURL: 'https://vue-projects-b1eb1-default-rtdb.firebaseio.com'
})


export default journalApi
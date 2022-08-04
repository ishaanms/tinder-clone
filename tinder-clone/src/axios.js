import axios from 'axios';

const instance=axios.create({
    baseURL:'https://tinder--ackend.herokuapp.com'
})
export default instance;
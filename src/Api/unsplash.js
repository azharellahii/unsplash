import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com'
    ,
    headers: {
        Authorization:
            'Client-ID n1b9JuDiq308e0oAUty_7VSnVwocM8-YHgk1JzqsoF8'
    }
})
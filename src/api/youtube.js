import axios from 'axios';

const KEY = ''

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        //KEY is KEY variable
        key: KEY,
        type: 'video'
    },

})


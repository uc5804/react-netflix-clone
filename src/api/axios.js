import axios from "axios";

const instance = axios.create({
    baseURL: 'http://api.themoviedb.org/3',
    params : {
        api_key : "50292d302efda49d0d0bbea706367e1e",
        language : "ko-KR",
    }
})

export default instance;
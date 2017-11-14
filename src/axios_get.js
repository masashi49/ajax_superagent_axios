import api from './api/api';


const axiosGet = (page)=> {
    return api.get(page);
}

export default  axiosGet


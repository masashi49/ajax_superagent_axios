import axios from 'axios'

const api = axios.create({
  headers: {
    common: {
      //'X-Requested-With': 'XMLHttpRequest' //ここにcreateしよう！
    }
  }
})

api.interceptors.response.use((response) => {
  if (response) {
    console.log('axios：'+ response.data.results[0].title);
    return response
  }
  return Promise.reject({
    error: '失敗した１'
  });
}, function (error) {

  let headerStatus = (error.response && error.response.status) ? error.response.status : 503;

  if (headerStatus === 401) {
    console.log('error401')
  }

  if (error.response && error.response.data && typeof error.response.data === 'object') {
    if (headerStatus === 422) {
      console.log('error422')
    }

    return Promise.reject({
      error: '失敗した2'
    });

  }

  return Promise.reject({
    serverError: [message.common.serverError], headerStatus
  });
});

export default api;
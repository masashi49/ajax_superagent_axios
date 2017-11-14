/**
 * Created by yamadamasashi on 2017/11/10.
 */

const page = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=538d5a0bb971490795914379ca269bc0`;


import jqueryAjax from './jqueryAjax';
import superagent from './superagent';
import axiosGet from  './axios_get';

console.log(jqueryAjax(page));


superagent(page)
.then((resolve) => {
  console.log('superagent1：' + resolve.body.results[0].abstract)
})

.catch((reject) => {
  console.log(reject)
})


axiosGet(page)
.then((resolve) => {
  console.log('superagent1：' + resolve.body.results[0].abstract)
})
.catch((reject) => {
  console.log(reject)
})
/**
 * Created by yamadamasashi on 2017/11/10.
 */

const page = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=`;


import cats from './cats';
import superagent from './superagent';
import axios from  './axios_get';

console.log(cats);
console.log(axios);


superagent(page)
.then((resolve) => {
  console.log('superagent1：' + resolve.body.results[0].abstract)
})
.then((resolve) => {
  superagent(page).then((resolve) => {
    console.log('superagent2：' + resolve.body.results[0].abstract)
  }).then((resolve) => {
    console.log('superagent：3' )
  })
})
.catch((reject) => {
  console.log(reject)
})

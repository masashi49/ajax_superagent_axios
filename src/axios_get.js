import axios from 'axios';


axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=`)
.then(res => {
  if (res.status === 200) {
    console.log(`axios：` + res.data.results[0].abstract,)
  } else {
    console.log(res)
  }

})
.catch(error => {
  this.sending = false
  throw error
})


import request from 'superagent';

const accessApi = (page)=> {
  const promise = new Promise((resolve, reject)=> {
    request.get(page).end((err, res)=> {
      if (err || !res.text) {
        reject(err)
      }
      resolve(res)
    })
  });
  return promise
}

export default accessApi
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
    
  })
promise.
finally(() => {console.log("Promise ready");
}).then((result) => {console.log(result);
}).catch((error) => {console.log(error)});
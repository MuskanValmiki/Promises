var roomClean = new Promise((resolve , reject) => {
    let isClean = true;
    if (isClean){
        resolve("Room is clean");
    }
    else{
        reject("Not clean");
    }

});
roomClean.
then(function(v) {console.log(v);
}).
catch(function(err) {roomClean(err)
});



const mypromise = new Promise((resolve,reject) =>{ 
    let value = 500;
    if (value >=500){
        resolve("Yes its correct")
    }
    else{
        reject("No its not")
    }

});

mypromise.
then((ans)=> { console.log(ans);
}).
catch((err) => {console.log(err);
});





var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('Success, You are a GEEK');
      }).
      catch(function () {
          console.log('Some error has occurred');
      });
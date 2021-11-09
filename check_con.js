var promise = new Promise(function(resolve, reject) {
    if (true){
        resolve('Geeks For Geeks');
    }
    else{
        reject("noo")
    }
    
    
})

   
promise.then(function(successMessage) {
       //success handler function is invoked
        console.log(successMessage);}, 
        function(errorMessage) {
        console.log(errorMessage);
    })
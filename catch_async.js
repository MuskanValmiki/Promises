var promise = new Promise(function(resolve, reject) {
    if (false){
        resolve('Geeks For Geeks');
    }
    else{
        reject("noo")
    }
    
    
})

async function get_info(){ 
    try{
        const result = await promise
        console.log(result)
        return result
    }
    catch(error){
        console.log(error)
    }
   

}
console.log(get_info());
var promise = new Promise(function(resolve, reject) {
    if (true){
        resolve('Geeks For Geeks');
    }
    else{
        reject("noo")
    }
    
    
})
async function get_info(){ 
    const result = await promise
    console.log(result)
    return result

}
console.log(get_info());
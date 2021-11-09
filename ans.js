var demo =  new Promise((resolve,reject)=>{
    let res = 74;
    if (res != 74){
        resolve(`yes its is equal ${res}`)
    }
    else{
        reject(`Nope ${res}`)
    }
    
    });
    
demo.
then((ans)=> {console.log(ans);
}).
catch((err)=> {console.log(err);
});
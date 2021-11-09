const promiseA = new Promise( (resolve,reject) => {
    resolve(78);
});
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");
//promise example 1

const myPromise=new Promise((resolve,reject)=>{
      resolve("Maa we will meet soon after getting my job")
});
myPromise.then((val)=>{
    console.log("love you maa,",val)
})
//promise example 2

async function wish(){
    let a ='I want to help my father.Spot my family.'
    return a
}
console.log(wish())
// it return promise 

async function dream(){
    let b=await("I want software job related to python,javascript and node.")
    return b
}
console.log(dream())
//it gave output but it will wait for sometime then it gave output.Q
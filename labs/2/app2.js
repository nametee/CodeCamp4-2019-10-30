async function work() { 
    //Coding here 
} 

new Promise( async (resolve) => {
     resolve(await work()) 
}).then( () => {
          console.log('Successful')
    })
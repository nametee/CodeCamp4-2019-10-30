const axios = require('axios') 
 
const getUserbyPage = async function(page){ 
    const authorize = { Authorization: 'Bearer someToken' } 
    const response = await axios.get('https://reqres.in/api/users?page=' + page, 
        { header: authorize }) 
    console.log(response.status) 
    console.log(response.statusText) 
    console.log(response.data) 
}

const addUser = async (userName,userJob)=>{
    const authorize = { Authorization: 'Bearer someToken' } 
    const response = await axios.post('https://reqres.in/api/users', 
        { name: userName, job: userJob }, 
        { header: authorize } ) 
    console.log(response.status) 
    console.log(response.statusText) 
    console.log(response.data) 
}

const updateUser = async (userID,userName,userJob) =>{
    const authorize = { Authorization: 'Bearer someToken' } 
    const response = await axios.put('https://reqres.in/api/users/' + userID,  
        { name: userName, job: userJob }, 
        { header: authorize } )  
    console.log(response.status) 
    console.log(response.statusText) 
}

const deleteUser = async (userID) => {
    const authorize = { Authorization: 'Bearer someToken' } 
    const response = await axios.delete('https://reqres.in/api/users/' + userID,   
        { header: authorize } )  
    console.log(response)   
}

getUserbyPage(2)
addUser("test","test")
updateUser(2,"test1","test1")
deleteUser(2)
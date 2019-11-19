const dataModel = require('../model/dataModel')

const get = (req,res) => {
    const { key } = req.params 
    let value = dataModel.get(key) 
    value ? res.status(200).send(value) : res.status(404).send(key + ' is not found')  
}

const add = (req,res) => {
    const { key, value } = req.params 
    dataModel.set(key, value) 
    res.status(200).send('Success') 
}

const update = (req,res) => {
    const { key, value } = req.params 
    if(dataModel.has(key) ) {
        dataModel.set(key, value) 
        res.status(200).send('Success') 
    }else{
        res.status(404).send(key + ' is not found')
    } 
}

const remove = (req,res) => {
    const { key } = req.params 
    if (dataModel.has(key)) { 
        dataModel.delete(key) 
        res.status(200).send('Success') 
    } else { 
        res.status(404).send(key + ' is not found') 
    }
}

module.exports = {
    get,add,update,remove
}
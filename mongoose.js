//CRUD Operations
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId =mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'

const id = new ObjectID()
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionUrl,{useNewUrlParser:true, useUnifiedTopology:true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to DB');
    }
    console.log('Connected to DB.');

    const db = client.db(dbName)

//CREATE OPERATION

    // db.collection('task').insertMany([{
    //     description:'Eating',
    //     completed: true
    // },{
    //     description:'Driving',
    //     completed: false
    // },{
    //     description: 'Sleeping',
    //     completed: false
    // }],(error, output)=>{
    //     if(error)
    //         return console.log('Insert task failed.');
    //     console.log(output.ops);
    // }
        
    // )
    // db.collection('users').insertOne({
    //     _id: id,
    //     name:'Don',
    //     age: 24
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert docs to DB.');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([{
    //     _id: id,
    //     name:'Don',
    //     age: 24
    // },{
    //     _id: id,
    //     name: 'Luke',
    //     age: 14
    // }], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert docs to DB.');
    //     }
    //     console.log(result.ops, result.insertedCount);
    // })

//READ OPERATION


    // db.collection('users').findOne({
    //     name:'Aneena'
    // }, (error, output)=>{
    //     if(error)   return console.log('Unable to find the record.');
    //     console.log(output);
    // })

    // // find is using Cursor
    // db.collection('users').find({
    //     name:'Aneena'
    // }).toArray((error, output)=>{
    //     if(error)   return console.log('Unable to find the record.');
    //     console.log(output);
    // })

    // db.collection('users').find({
    //     name:'Aneena'
    // }).count((error, count)=>{
    //     if(error)   return console.log('Unable to find the record.');
    //     console.log(count);
    // })


    // db.collection('task').findOne({_id: new ObjectID("5f7ee4e795ca7c3390f4809d")}, (error, output)=>{
    //     if (error)  return console.log('Unable to find record')
    //     console.log(output);
    // })
    // db.collection('task').find({completed:false}).toArray((error, output)=>{
    //     if (error)  return console.log('Unable to find record')
    //     console.log(output);
    // })

//UPDATE OPERATION

    // db.collection('users').updateOne({
    //     _id : new ObjectID('5f7ee30976698c45b4e5c792')
    // },{
    //     $set :{
    //         name: 'God',
    //         age: 100
    //     }
    // }).then((result)=>{
    //     console.log(result);    
    // }).catch((error)=>{
    //     console.log(error);
    // })


    // db.collection('users').updateOne({
    //     _id : new ObjectID('5f7ee30976698c45b4e5c792')
    // },{
    //     $inc :{
    //         age: 2
    //     }
    // }).then((result)=>{
    //     console.log(result);    
    // }).catch((error)=>{
    //     console.log(error);
    // })


    // db.collection('task').updateMany({
    //     completed: true
    // },{
    // $set: {
    //     completed: false
    //     }
    // }).then((output)=>{
    //     console.log(output.modifiedCount);
    // }).catch((error)=>{
    //     console.log(error);
    // })

// DELETE OPERATION

    db.collection('users').deleteMany({
        age: 102
    }).then((output)=>{
        console.log(output);
    }).catch((error)=>{
        console.log(error);
    })

    db.collection('task').deleteOne({
        description: 'Eating'
    }).then((output)=>{
        console.log(output);
    }).catch((error)=>{
        console.log(error);
    })

})
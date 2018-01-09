


const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


   


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a501e388b52550ce47507a0")
    },{
        $set: {
            name: "Thanh"
        },
        $inc: { age: 1 }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a54a52c3937bcc876a456b6")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // })
});    


    
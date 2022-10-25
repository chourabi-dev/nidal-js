const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/add-product', (req, res) => {
    

    const mongoClient = require('mongodb').MongoClient;

    mongoClient.connect('mongodb://localhost:27017').then((dbServer)=>{

        dbServer.db('apex').collection('products')
        .deleteOne
        .updateMany
        .updateOne
        .find

        
        
        .insertOne( 
            {
                title:"hp pavillion",
                price:5000
            }
         ).then(()=>{
            res.send({ success:true })
         })

    })
    

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
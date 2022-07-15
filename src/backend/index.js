//data.js
var db=require('./server')
const { ConnectableObserveble } = require('rxjs');
const express = require('express');
const app = express();
const cors = require('cors');
const { privateDecrypt } = require('crypto');
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
db.connect(err=>{
    if(err){ console.log('err');
   }
    console.log('Database connected.......');
})

app.get('/user',(req,res)=>{    
    let qr = 'select * from public."food_info"'
    db
     .query({
        // rowMode:"array",
         text: qr
     })
     .then(result=>{
         var data1 = [];
         for(var i=0;i<result.rows.length;i++){
             data1.push({
                 food_id:result.rows[i].food_id,
                 food_name:result.rows[i].food_name,
                 price:result.rows[i].price,
                 rating:result.rows[i].rating,
                 category:result.rows[i].category,
                 cook_time:result.rows[i].cook_time,
                 image_url:result.rows[i].image_url
             });
         }    
         res.send(data1);
     })
     .catch(err=> console.log(err,'err'));
});
app.listen(3000,()=>{
    console.log('Server Running');
})


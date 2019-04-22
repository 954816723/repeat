const express = require('../lib/express');
const app = express();

app.get('/hello',function(req,res){
    res.end('hello')
});
app.listen(8080,function(){
    console.log('server started at 8080');
})
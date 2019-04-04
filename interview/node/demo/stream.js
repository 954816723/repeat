let fs = require('fs');

let rs = fs.createReadStream('./1.txt',{
    highWaterMark:1
});
// rs.on('data',function(data){
//     console.log(data.toString());
// })
rs.on('readable',function(){
    let char = rs.read(1);
    console.log(char);
})
const express = require('express')
const path=require('path');
const app = express();

//Set static path to public folder
app.use(express.static(path.join(__dirname,'public')));

// app.get('/users/:name', function (req, res) {
//     let user = req.params.name;
//     res.send('Hello: ' + user);
// })

app.get('/users',(req,res)=>{
    let users=[
        {
            first_name:"Ilgu",
            last_name:"Lee",
            age:45,
            gender:"male"
        },
        {
            first_name:"Yeonhee",
            last_name:"Seo",
            age:43,
            gender:"female"
        },
        {
            first_name:"Samho",
            last_name:"Lee",
            age:41,
            gender:"male"
        }
    ];
     res.json(users);
});

app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'/downloads/testfile.pdf'));
});
app.listen(3000, () => {
    console.log('Server is running');
})
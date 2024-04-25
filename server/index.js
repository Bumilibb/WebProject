const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config() 
const users = require('./controllers/userController.js');
const path = require('path');
const jwt = require('jsonwebtoken');

// Middlware for file upload 
multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req,res,cb){
    cb(null,'./uploads');
  },
  filename: function(req,file,cb){
    cb(null,file.originalname);
  }
})

const upload = multer({storage});


const app = express();
const PORT = process.env.PORT;

const corsOption = {
  origin: 'http://localhost:5173'
}


// Middlewares 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOption));

app.post('/signup',upload.single('file'), (req,res)=>{
  let user = {pic_url: __dirname.replaceAll('\\','/')+ '/uploads/' + req.file.originalname, ...req.body};
  
  try{
    users.add(user);

    res.status(201); 
    res.json({'message':'success'});
    console.log('Successfuly added user to the database');
  } catch {
    console.log('Unable to add user to the database');
    res.status(500);
    res.json({'message':'Username already exists in the database'});
  }

  
});

app.post('/login', (req,res)=>{
  const loginCredentials = req.body; 
  const result = users.getByUsername(loginCredentials.username);

  if (result)
  {

    if(result.password === loginCredentials.password){
      const token = jwt.sign({username: loginCredentials.username}, process.env.SECRET_KEY);
      res.status(200);
      res.json({'message':'success','authToken':token,'user':result});
      return;
      }
      
  }
  res.status(500); 
  res.json({'message':'invalid username or password'})
});



app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
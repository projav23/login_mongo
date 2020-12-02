const express = require("express");
const bodyParser = require("body-parser")
const InitMongoServer = require("./config/config")
const app = express();
//HBS
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

//Iniciar Mongo Server
InitMongoServer()

//PORT
app.listen(4000, console.log("Connected server"))


//Import model schema
const UserLogin = require("./models/user.model")


//Use body-parser to parse the form data
app.use(bodyParser.urlencoded({extended: true}));


//Routes
app.get("/", (req, res)=>{
  res.render("index")
})
app.get("/login", (req, res)=>{
  res.render("login")
})
app.post("/login", (req,res)=>{
  UserLogin.findOne({email: req.body.email}).then((user)=>{
    if(!user){
      res.send("El usuario no existe")
    } else {
      if(req.body.password === user.password){
        res.send("Login OK")
      } else {
        res.send("Password no coincide")
      }
    }
  })
})
app.get("/singup", (req, res)=>{
  res.render("singup")
})
app.post("/singup", (req,res)=>{
  const newUser = req.body
  UserLogin.create(newUser).then(()=>{
    console.log("usuario creado")
    res.render("index")
  }).catch((error)=>{
    console.log(error)
    res.status(404).send(error)
  })
  // CreateUser(newUser)
  // res.send(req.body)
})

// async function CreateUser(user){
//   try{
//     const createUser = await UserLogin.create(user)
//     console.log("Usuario creado")
//   }catch(error){
//     console.error("El usuario ya existe", error)
//   }


// }

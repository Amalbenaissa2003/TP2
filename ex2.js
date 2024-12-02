const express =require('express');
const app=express();

app.use(express.json());

//Midelware de validation des champs 
const validateUserFields = (req,res,next) =>{
    const { username , password } =req.body;
    
    //vérifier si les champs sont présents
    if(!username || !password){
        return res.status(400).send('Erreur : les champs "username" et "password" sont requis');

    }
    next();
};

//route d'exemple utilisant le middleware de validation 
app.post('/login', validateUserFields , (req,res) => {
    res.send('connexion réussie ');
});


app.listen(3000,() =>{
    console.log("serveur démarré sur le port 3000");
});
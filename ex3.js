const express =require('express');
const app=express();

app.use(express.json());

//Midelware de validation des champs 
const validateAge = (req,res,next) =>{
    const { age } =req.body;
    if(age){
        //vérifier si les champs sont présents
        if ( isNaN(age)) {
            return res.status(400).send('Erreur :L\'âge doit être un nombre valide.');
        }
        if (age < 0) {
            return res.status(400).send('Erreur : L\'âge ne peut pas être négatif.');
        }
    }else{
        return res.status(400).send('Erreur : Le champ age est requis.');

    }
    next();
};

//route d'exemple utilisant le middleware de validation 
app.post('/age', validateAge , (req,res) => {
    res.send('Requête reçue avec un âge valide ! ');
});

app.listen(3000,() =>{
    console.log("serveur démarré sur le port 3000");
});
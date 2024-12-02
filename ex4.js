const express =require('express');
const app=express();

app.use(express.json());

//Midelware de validation des champs 
const validateProductData = (req,res,next) =>{
    const { name , prix } =req.body;
    
    //vérifier si les champs sont présents
    if (typeof name !== 'string' || !name) {
        return res.status(400).send('Erreur : Le champ "name" est requis, doit être de type chaîne et ne peut pas être vide.');
    }

    if (typeof prix !== 'number' || prix < 0) {
        return res.status(400).send('Erreur : Le champ "price" est requis et doit être un nombre positif.');
    }
    next();
};

// Route d'exemple utilisant le middleware de validation des champs du produit
app.post('/add-product', validateProductData, (req, res) => {
    res.send('Produit valide !');
});

app.listen(3000,() =>{
    console.log("serveur démarré sur le port 3000");
});
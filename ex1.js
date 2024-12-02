const express =require('express');
const app=express();

//Middleware de journalisation
const loggerMiddelware=(req,res,next) => {
    const now= new Date();
    const date= now.toLocaleDateString();
    const time= now.toLocaleTimeString();
    console.log(`[${date} ${time}] ${req.method} ${req.path}`);

    next();
}

//utiliser le Middleware dans l'app
app.use(loggerMiddelware);

//exemple de route pour tester le middleware
app.get('/',(req,res) => {
    res.send('Exercice1');
});

app.get('/exercice1',(req,res) => {
    res.send("une deuxieme API");
});

app.listen(3000,() =>{
    console.log("serveur démarré sur le port 3000");
});

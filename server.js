const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    
    const jsonFilePath = path.join(__dirname, 'data', 'cvData.json');

    fs.readFile(jsonFilePath, (error, dataFromFile) => {
        if(error) {
            console.error('Failed to read from file', error);
            return response.status(500).send('Failed to read from file.');
        }

        const jsonData = JSON.parse(dataFromFile);
        response.render('index', {recipe: jsonData} );
        
        //console.log(jsonData);
        //response.json(JSON.parse(dataFromFile));

    })

});


//app.use(express.static(path.join(__dirname, 'public')));

//app.get("/", (req, res) => {
   // response.sendFile(path.join(__dirname, "index.html"));
//});

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});
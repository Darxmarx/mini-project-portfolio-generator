const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = function(answers) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
    <header class="jumbotron">
        <h1>Your Own Portfolio</h1>
        <h2>Name: ${ answers.name }</h2>
        <p>Location: ${ answers.location }</p>
        <p>Bio: ${ answers.bio }</p>
        <p>LinkedIn: ${ answers.linkedin }</p>
        <p>GitHub: ${ answers.github }</p>
    </header>
</body>
</html>`
}

inquirer
.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "location",
            message: "Where are you located?",
        },
        {
            type: "input",
            name: "bio",
            message: "What are some fun facts about yourself?",
        },
        {
            type: "input",
            name: "linkedin",
            message: "What is your LinkedIn username?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        },
    ]).then((response) => { //take answers and write them to the HTML file
        generateHTML(response);
        //const HTMLContent = generateHTML(response);
        fs.writeFile("index.html", generateHTML(response), (err) =>
        err ? console.error(err) : console.log("Good job! Woo!"));
    });
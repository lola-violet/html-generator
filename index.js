// create require variables
const inquirer = require('inquirer');
const fs = require('fs');

/// create object for questions
// name, location, bio, linkedin url, github url, etc.
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Where do you live?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Please enter your bio:',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github',
    },
])
.then((response) => {
    console.log("success");

    const username = response.username;
    const location = response.location;
    const bio = response.bio;
    const linkedin = response.linkedin;
    const github = response.github;

    console.log(username, location, bio, linkedin, github);

    const htmlPage = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${username}</title>
        </head>
        <body>
            <header>
                <h1>${username}</h1>
            </header>
            <main>
                <h2>I'm located in ${location}</h2>
                <br>
                <p>${bio}</p>
                <br>
                <h2>Contact Me</h2>
                <a href="${linkedin}" target="_blank">${linkedin}</a>
                <br>
                <a href="${github}" target="_blank">${github}</a>
            </main>
        </body>
        </html>`
    ;
    fs.writeFile(`${username}.html`, htmlPage, (error, data) =>
        error ? console.error(error) : console.log("success")
    );

});


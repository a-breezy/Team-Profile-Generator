const index = require("../index.js");
const Employee = require("../lib/Employee.js");

const blankHtml = data => { 
    console.log(data)
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Team Profile Generator</title>
    </head>

    <body>
        <!-- Navigation -->
        <header>
            <h1>
                <a href="/">Team Profile Generator</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">About</a>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- end header -->
        
        <!-- hero -->
        <section class="hero">
            <h2>Meet the Manager:</h2>
                ${generateManager()}
            <h2>And the rest of the Team:</h2>
                ${generateEmployee()}
        </section>
    </body>
</html>`};

const generateManager = () => {
	`<div>
        <h2>${manager.name}</h2>
        <p>Email: ${manager.email}</p>
        <p>ID: ${manager.id}</p>
        <p>Office Number: ${manager.officeNumber}</p>
        <p>Email: ${manager.email}</p>
    </div>`;
};

const generateEmployee = () => {
	`<div>
        <h2>${employee.name}</h2>
        <p>Email: ${employee.email}</p>
        <p>ID: ${employee.id}</p>
        <p>School: ${employee.school}</p>
        <p>GitHub UserName\: ${employee.github}</p>
    </div>`;
};

module.exports = blankHtml;
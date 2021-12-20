const Engineer = require("../lib/Engineer");

const blankHtml = data => {
	return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
            <title>Team Profile Generator</title>
        </head>
    
        <body>
            <header>
                <h1 class="shadow bg-primary ps-5 bg-opacity-50 blue-300">Team Profile Generator</h1>
            </header>
        
        <!-- hero -->
        <section class="hero">
        ${teamProfile(data)}
        </section>
    </body>
</html>`;
};

const teamProfile = data => {
	return `
    <section class="hero">
    <!-- manager team -->
    <h2 class="ps-4">Meet the Manager</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        ${data
					.filter(role => {
						if (role.getRole() === "Manager") {
							return role;
						}
					})
					.map(manager => generateManager(manager))}
    <div>

    <!-- interns and engineers -->
    <h2 class="ps-4">And the rest of the Team:</h2>
    
    <div class="row row-cols-1 row-cols-md-3 g-4">
        
        ${console.log("In Employee")}
        ${data.filter(role => {
					if (role.getRole === "Engineer") {
						console.log("In Engineer");
						return generateEngineer();
					}
				})}
        ${data.filter(role => {
					if (role.getRole() === "Intern") {
						console.log("In Intern");
						return generateIntern();
					}
				})}
    </div>`;
};

const generateManager = managerData => {
	return `<div class="col">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title bg-success bg-opacity-50">${managerData.getName()}</h4>
                <h5>Manager</h5>
                <p class="card-text">email: 
                <a href="${managerData.getEmail()}">${managerData.getEmail()}}</a>
                </p>
                <p class="card-text">${managerData.getId()}</p>
                <p class="card-text">Office Number: ${managerData.getOfficeNumber()}</p>
            </div>
        </div>
    </div>
    `;
};

const generateEngineer = engineerData => {
	engineer.filter(role => {
		if (role.getRole() === "Engineer") {
			console.log("In engineer");
			return `<div class="col">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title bg-success bg-opacity-50">Engineer Mark</h4>
                <h5>Engineer</h5>
                <p class="card-text">email: 
                  <a href="${engineerData.getEmail()}">${engineerData.getEmail()}</a>
              </p>
              <p class="card-text">ID: ${engineerData[i].getId()}</p>
              <p class="card-text">GitHub: ${engineerData[i].getGithub()}</p>
              </div>
            </div>
          </div>`;
		}
	});
};
const generateIntern = internData => {
	intern.filter(role => {
		if (role.getRole() === "Intern") {
			console.log("In Intern");
			return `<div class="col">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title bg-success bg-opacity-50">Engineer Mark</h4>
                <h5>Engineer</h5>
                <p class="card-text">email: 
                  <a href="${internData.getEmail()}">${internData.getEmail()}</a>
              </p>
              <p class="card-text">ID: ${internData[i].getId()}</p>
              <p class="card-text">GitHub: ${internData[i].getSchool()}</p>
              </div>
            </div>
          </div>`;
		}
	});
};

// const generateEmployee = employeeData => {
// 	let html = [];
// 	for (let i = 0; i < employeeData.length; i++) {
// 		console.log("IN employee function");
// 		html.push(`<div>
//         <h4>${employeeData[i].getName()}</h4>
//         <p>Email: ${employeeData[i].getEmail()}</p>
//         <p>ID: ${employeeData[i].getId()}</p>
//         ${addtionalInfo(employeeData[i])}
//     </div>`);
// 	}
// 	return html.join("");
// };

// const addtionalInfo = data => {
// 	if (data.getRole() === "Engineer") {
// 		return `<p>GitHub UserName: ${data.getGithub()}</p>`;
// 	} else {
// 		return `<p>School: ${data.getSchool()}</p>`;
// 	}
// };

module.exports = blankHtml;

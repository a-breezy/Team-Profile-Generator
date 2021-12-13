const Employee = require("./Employee.js");

class Engineer extends Employee {
	constructor(name, id, email, github, role) {
		super(name, id, email);
		this.github = github;
		this.role = role;
	}
}

// // write function to get engineers gh
// getGithub() =
// // write function to get engineers role
// getRole() =

module.exports = Engineer;

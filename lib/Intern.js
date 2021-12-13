const Employee = require("./Employee.js");

class Intern extends Employee {
	constructor(name, id, email, school, role) {
		super(name, id, email);
		this.school = school;
		this.role = role;
	}
}

// // write function to get engineers gh
// getGithub() =
// // write function to get engineers role
// getRole() =

module.exports = Intern;

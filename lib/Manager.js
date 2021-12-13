const Employee = require("./Employee.js");

class Manager extends Employee {
	constructor(name, id, email, officeNumber, role) {
		super(name, id, email);
		this.officeNumber = officeNumber;
		this.role = role;
	}
}

// // write function to get engineers gh
// getGithub() =
// // write function to get engineers role
// getRole() =

module.exports = Manager;

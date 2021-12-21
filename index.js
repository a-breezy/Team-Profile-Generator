const inquirer = require("inquirer");
const generateHtml = require("./src/generateHtml.js");
const fs = require("fs");
const path = require("path");

// const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
let teamMember = [];

// function to create manager
const createManager = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your name?",
				validate: nameInput => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter your name");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "What is your email?",
				validate: emailInput => {
					if (emailInput) {
						return true;
					} else {
						console.log("Please enter your email");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "id",
				message: "What is your ID?",
				validate: idInput => {
					if (idInput) {
						return true;
					} else {
						console.log("Please enter your ID");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "officeNumber",
				message: "What is your office number?",
				validate: officeNumberInput => {
					if (officeNumberInput) {
						return true;
					} else {
						console.log("Please enter your office number");
						return false;
					}
				},
			},
		])
		.then(answer => {
			const manager = new Manager(
				answer.name,
				answer.email,
				answer.id,
				answer.officeNumber
			);
			teamMember.push(manager);
		});
};

// function to build engineer and intern profiles
const newEmployee = () => {
	return inquirer
		.prompt([
			{
				type: "confirm",
				name: "addEmployee",
				message: "Would you like to add a new employee?",
				default: true,
			},
			{
				type: "input",
				name: "name",
				message: "What is your name?",
				when: check => check.addEmployee === true,
				validate: nameInput => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter your name");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "What is your email?",
				when: check => check.addEmployee === true,
				validate: emailInput => {
					if (emailInput) {
						return true;
					} else {
						console.log("Please enter your email");
						return false;
					}
				},
			},
			{
				type: "list",
				name: "employee",
				message: "Are you an intern or an engineer?",
				when: check => check.addEmployee === true,
				choices: ["Intern", "Engineer"],
			},
			{
				type: "input",
				name: "id",
				message: "What is your ID?",
				when: check => check.addEmployee === true,
				validate: idInput => {
					if (idInput) {
						return true;
					} else {
						console.log("Please enter your ID");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "github",
				message: "What's your GitHub account?",
				when: check => check.employee === "Engineer",
				validate: githubInput => {
					if (githubInput) {
						return true;
					} else {
						console.log("Please enter your github username");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "school",
				message: "What's your school?",
				when: check => check.employee === "Intern",
				validate: schoolInput => {
					if (schoolInput) {
						return true;
					} else {
						console.log("Please enter your school");
						return false;
					}
				},
			},
		])
		.then(answer => {
			if (answer.addEmployee) {
				if (answer.employee === "Intern") {
					const intern = new Intern(
						answer.name,
						answer.email,
						answer.id,
						answer.school
					);
					teamMember.push(intern);
				} else if (answer.employee === "Engineer") {
					const engineer = new Engineer(
						answer.name,
						answer.email,
						answer.id,
						answer.github
					);
					teamMember.push(engineer);
				}
				return newEmployee();
			}
		});
};

const writeToFile = fileContent => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/teamProfile.html", fileContent, err => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: "Team Profile Generated",
			});
		});
	});
};

createManager()
	.then(newEmployee)
	.then(() => writeToFile(generateHtml(teamMember)))
	.then(results => console.log(results))
	.catch(err => console.log(err));

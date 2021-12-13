const inquirer = require("inquirer");
const generateHtml = require("./src/generateHtml.js");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// function to create manager

// function to create new employee
// both engineer and intern
// function to build Employee profile
const createManager = inquirer.prompt([
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
	// {
	//     type: "confirm",
	//     name: "newEmployee",
	//     message: "Would you like to add another employee?"
	//     default: true
	// }
]);

// function to build engineer profile
const createEmployee = inquirer.prompt(
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
		type: "list",
		name: "employee",
		message: "Are you an intern or an engineer?",
		choices: ["intern", "Engineer"],
		validate: employeeInput => {
			if (employeeInput) {
				return true;
			} else {
				console.log("Are you an intern or an engineer?");
				return false;
			}
		},
	}
);

// function to build intern profile
const getIntern = [];

// function to build team profile
const buildTeamProfile = function () {};

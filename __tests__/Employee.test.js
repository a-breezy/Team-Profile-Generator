const Employee = require("../lib/Employee.js");

test("creates employee object", () => {
	const employee = new Employee("Mark", "1234", "mark@here.com");

	expect(employee.name).toBe("Mark");
	expect(employee.id).toBe("1234");
	expect(employee.email).toBe("mark@here.com");
});

test("tests employee name function", () => {
	const employee = new Employee("Mark", "1234", "mark@here.com");

	expect(employee.getName()).toBe("Mark");
});

test("tests employee getID function", () => {
	const employee = new Employee("Mark", "1234", "mark@here.com");

	expect(employee.getId()).toBe("1234");
});

test("tests employee getEmail function", () => {
	const employee = new Employee("Mark", "1234", "mark@here.com");

	expect(employee.getEmail()).toBe("mark@here.com");
});

test("tests employee getRole function", () => {
	const employee = new Employee("Mark", "1234", "mark@here.com");

	expect(employee.getRole()).toBe("employee");
});

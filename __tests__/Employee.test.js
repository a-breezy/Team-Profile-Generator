const Employee = require("../lib/Employee.js");

test("creates employee object", () => {
	const employee = new Employee("Mark", "1234", "mark@here.com", "manager");

	expect(employee.name).toBe("Mark");
	expect(employee.id).toBe("1234");
	expect(employee.email).toBe("mark@here.com");
	expect(employee.role).toBe("manager");
});

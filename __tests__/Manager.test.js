const Manager = require("../lib/Manager.js");

test("Creates manager object", () => {
	const manager = new Manager("mark", "1234", "mark@here.com", "room 404");

	expect(manager.name).toBe("mark");
	expect(manager.id).toBe("1234");
	expect(manager.email).toBe("mark@here.com");
	expect(manager.officeNumber).toBe("room 404");
});

test("tests manager getOfficeNumber function", () => {
	const manager = new Manager("Mark", "1234", "mark@here.com", "room 404");

	expect(manager.getOfficeNumber()).toBe("room 404");
});

test("tests getRole function", () => {
	const manager = new Manager("Mark", "1234", "mark@here.com");

	expect(manager.getRole()).toBe("Manager");
});

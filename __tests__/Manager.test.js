const Manager = require("../lib/Manager.js");

test("Creates manager object", () => {
	const manager = new Manager(
		"mark",
		"1234",
		"mark@here.com",
		"room 404",
		"manager"
	);

	expect(manager.name).toBe("mark");
	expect(manager.id).toBe("1234");
	expect(manager.email).toBe("mark@here.com");
	expect(manager.officeNumber).toBe("room 404");
	expect(manager.role).toBe("manager");
});

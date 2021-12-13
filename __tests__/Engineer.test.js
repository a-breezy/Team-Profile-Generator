const Engineer = require("./lib/Engineer.js");

test("Creates engineer object", () => {
	const engineer = new Engineer(
		"mark",
		"1234",
		"mark@here.com",
		"@mark",
		"engineer"
	);

	expect(engineer.name).toBe("mark");
	expect(engineer.id).toBe("1234");
	expect(engineer.email).toBe("mark@here.com");
	expect(engineer.github).toBe("@mark");
	expect(engineer.role).toBe("engineer");
});

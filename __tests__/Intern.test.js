const Intern = require("../lib/Intern.js");

test("Creates intern object", () => {
	const intern = new Intern(
		"mark",
		"1234",
		"mark@here.com",
		"school university",
		"intern"
	);

	expect(intern.name).toBe("mark");
	expect(intern.id).toBe("1234");
	expect(intern.email).toBe("mark@here.com");
	expect(intern.school).toBe("school university");
	expect(intern.role).toBe("intern");
});

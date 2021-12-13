const Intern = require("../lib/Intern.js");

test("Creates intern object", () => {
	const intern = new Intern(
		"mark",
		"1234",
		"mark@here.com",
		"school university"
	);

	expect(intern.name).toBe("mark");
	expect(intern.id).toBe("1234");
	expect(intern.email).toBe("mark@here.com");
	expect(intern.school).toBe("school university");
});

test("tests intern getSchool function", () => {
	const intern = new Intern(
		"Mark",
		"1234",
		"mark@here.com",
		"school university"
	);

	expect(intern.getSchool()).toBe("school university");
});

test("tests getRole function", () => {
	const intern = new Intern("Mark", "1234", "mark@here.com");

	expect(intern.getRole()).toBe("Intern");
});

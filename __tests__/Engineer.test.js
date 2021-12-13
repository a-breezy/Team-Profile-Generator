const Engineer = require("../lib/Engineer.js");

test("Creates engineer object", () => {
	const engineer = new Engineer("mark", "1234", "mark@here.com", "@mark");

	expect(engineer.name).toBe("mark");
	expect(engineer.id).toBe("1234");
	expect(engineer.email).toBe("mark@here.com");
	expect(engineer.github).toBe("@mark");
});

test("tests engineer getGithub function", () => {
	const engineer = new Engineer("Mark", "1234", "mark@here.com", "@mark");

	expect(engineer.getGithub()).toBe("@mark");
});

test("tests getRole function", () => {
	const engineer = new Engineer("Mark", "1234", "mark@here.com");

	expect(engineer.getRole()).toBe("Engineer");
});

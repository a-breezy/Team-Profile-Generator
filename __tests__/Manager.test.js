const Engineer = require('./lib/Engineer.js')

test("Creates engineer object", () => {
    const engineer = new Engineer(name, github, role)

    expect(engineer.name) = name;
    expect(engineer.id) = id;
    expect(engineer.email) = email;
    expect(engineer.github) = github;
    expect(engineer.role) = role;
})


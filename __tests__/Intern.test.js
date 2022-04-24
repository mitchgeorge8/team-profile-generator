const Intern = require("../lib/Intern");

test("Creates an intern object", () => {
  const intern = new Intern("Mitch", 123, "mitch@fake.com", "Fake University");

  expect(intern.name).toBe("Mitch");
  expect(intern.id).toBe(123);
  expect(intern.email).toBe("mitch@fake.com");
  expect(intern.school).toBe("Fake University");
});

test("Gets intern's school", () => {
  const intern = new Intern("Mitch", 123, "mitch@fake.com", "Fake University");

  expect(intern.getSchool()).toBe("Fake University");
});

test("Gets intern's role", () => {
  const intern = new Intern("Mitch", 123, "mitch@fake.com", "Fake University");

  expect(intern.getRole()).toBe("Intern");
});

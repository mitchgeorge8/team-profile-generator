const Engineer = require("../lib/Engineer");

test("Creates an engineer object", () => {
  const engineer = new Engineer("Mitch", 123, "mitch@fake.com", "mitchgit");

  expect(engineer.name).toBe("Mitch");
  expect(engineer.id).toBe(123);
  expect(engineer.email).toBe("mitch@fake.com");
  expect(engineer.github).toBe("mitchgit");
});

test("Gets the engineer's github", () => {
  const engineer = new Engineer("Mitch", 123, "mitch@fake.com", "mitchgit");

  expect(engineer.getGithub()).toBe("mitchgit");
})

test("Gets the engineer's role", () => {
  const engineer = new Engineer("Mitch", 123, "mitch@fake.com", "mitchgit");

  expect(engineer.role).toBe("Engineer");
});

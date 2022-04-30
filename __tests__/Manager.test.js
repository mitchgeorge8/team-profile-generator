const Manager = require("../lib/Manager");

test("Creates a manager object", () => {
  const manager = new Manager("Boss", 123, "boss@fake.com", "1A");

  expect(manager.name).toBe("Boss");
  expect(manager.id).toBe(123);
  expect(manager.email).toBe("boss@fake.com");
  expect(manager.officeNumber).toBe("1A");
});

test("Gets the manager's office number", () => {
  const manager = new Manager("Boss", 123, "boss@fake.com", "1A");

  expect(manager.getOfficeNumber()).toBe("1A");
})

test("Gets manager's role", () => {
  const manager = new Manager("Boss", 123, "boss@fake.com", "1A");

  expect(manager.getRole()).toBe("Manager");
});

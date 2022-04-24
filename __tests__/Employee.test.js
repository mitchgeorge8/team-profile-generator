const Employee = require("../lib/Employee");

test("Creates an employee object", () => {
  const employee = new Employee("Mitchell", 123, "mitchell@fake.com");

  expect(employee.name).toBe("Mitchell");
  expect(employee.id).toBe(123);
  expect(employee.email).toBe("mitchell@fake.com");
});

test("Gets the employee's name", () => {
  const employee = new Employee("Mitchell", 123, "mitchell@fake.com");
  employee.name = "Mitchell";

  expect(employee.getName()).toBe("Mitchell");
});

test("Gets the employee's ID", () => {
  const employee = new Employee("Mitchell", 123, "mitchell@fake.com");
  employee.id = 9999;

  expect(employee.getId()).toBe(9999);
});

test("Gets the employee's email", () => {
  const employee = new Employee("Mitchell", 123, "mitchell@fake.com");
  employee.email = "mitchell@fake.com";

  expect(employee.getEmail()).toBe("mitchell@fake.com");
});

test("Gets the employee's role", () => {
  const employee = new Employee("Mitchell", 123, "mitchell@fake.com");

  expect(employee.getRole()).toBe("Employee");
});

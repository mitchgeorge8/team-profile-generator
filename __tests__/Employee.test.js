const Employee = require("../lib/Employee");

test("Creates an employee object", () => {
  const employee = new Employee("Mitchell George", "mitchgeorge8@gmail.com");

  expect(employee.name).toBe("Mitchell George");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("mitchgeorge8@gmail.com");
});

test("Gets the employee's name", () => {
  const employee = new Employee("Mitchell George", "mitchgeorge8@gmail.com");
  employee.name = "Mitchell George";

  expect(employee.getName()).toBe("Mitchell George");
});

test("Gets the employee's ID", () => {
  const employee = new Employee("Mitchell George", "mitchgeorge8@gmail.com");
  employee.id = 9999;

  expect(employee.getId()).toBe(9999);
});

test("Gets the employee's email", () => {
  const employee = new Employee("Mitchell George", "mitchgeorge8@gmail.com");
  employee.email = "mitchgeorge8@gmail.com";

  expect(employee.getEmail()).toBe("mitchgeorge8@gmail.com");
});

test("Gets the employee's role", () => {
  const employee = new Employee("Mitchell George", "mitchgeorge8@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});

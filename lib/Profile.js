const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const { generateCard, generatePage } = require("../src/template");
const writeFile = require("../utils/generate-site");

class Profile {
  initializeProfile() {
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "Enter the team manager's name:",
        },
        {
          type: "number",
          name: "id",
          message: "Enter team manager's employee ID:",
        },
        {
          type: "text",
          name: "email",
          message: "Enter team manager's email address:",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter team manager's office number:",
        },
      ])
      .then(({ name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email, officeNumber);
        generateCard(this.manager);

        this.promptMenu();
      });
  }

  promptMenu() {
    inquirer
      .prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Add an Engineer", "Add an Intern", "Finish"],
      })
      .then(({ action }) => {
        if (action === "Add an Engineer") {
          this.addEngineer();
        } else if (action === "Add an Intern") {
          this.addIntern();
        } else {
          this.finish();
        }
      });
  }

  addEngineer() {
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "Enter the Engineer's name:",
        },
        {
          type: "number",
          name: "id",
          message: "Enter the Engineer's employee ID:",
        },
        {
          type: "text",
          name: "email",
          message: "Enter the Engineer's email address:",
        },
        {
          type: "text",
          name: "github",
          message: "Enter the Engineer's GitHub username:",
        },
      ])
      .then(({ name, id, email, github }) => {
        this.engineer = new Engineer(name, id, email, github);
        generateCard(this.engineer);

        this.promptMenu();
      });
  }

  addIntern() {
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "Enter the Intern's name:",
        },
        {
          type: "number",
          name: "id",
          message: "Enter the Intern's employee ID:",
        },
        {
          type: "text",
          name: "email",
          message: "Enter the Intern's email address:",
        },
        {
          type: "text",
          name: "school",
          message: "Enter the Intern's school:",
        },
      ])
      .then(({ name, id, email, school }) => {
        this.intern = new Intern(name, id, email, school);
        generateCard(this.intern);

        this.promptMenu();
      });
  }
  finish() {
    writeFile(generatePage()).then((writeFileResponse) => {
      console.log(writeFileResponse.message);
    });
  }
}

module.exports = Profile;

let cardArr = [];

const generateCard = (employee) => {
  let card = ``;

  if (employee.getRole() === "Manager") {
    card = `
          <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card my-3 shadow">
              <div class="card-header bg-primary text-white">
                <h3 class="card-title">${employee.getName()}</h4>
                <h4 class="card-title">${employee.getRole()}</h5>
              </div>
              <div class="card-body bg-light">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${employee.getId()}</li>
                  <li class="list-group-item">Email: 
                    <a href="mailto: ${employee.getEmail()}" target="_blank" rel="noopener noreferrer">${employee.getEmail()}</a>
                  </li>
                  <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                </ul>
              </div>
            </div>
          </div>`;
  } else if (employee.getRole() === "Engineer") {
    card = `
          <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card my-3 shadow">
              <div class="card-header bg-danger text-white">
                <h3 class="card-title">${employee.getName()}</h4>
                <h4 class="card-title">${employee.getRole()}</h5>
              </div>
              <div class="card-body bg-light">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${employee.getId()}</li>
                  <li class="list-group-item">Email: 
                    <a href="mailto: ${employee.getEmail()}" target="_blank" rel="noopener noreferrer">${employee.getEmail()}</a>
                  </li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noopener noreferrer">${employee.getGithub()}</a></li>
                </ul>
              </div>
            </div>
          </div>`;
  } else {
    card = `
          <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card my-3 shadow">
              <div class="card-header bg-secondary text-white">
                <h3 class="card-title">${employee.getName()}</h4>
                <h4 class="card-title">${employee.getRole()}</h5>
              </div>
              <div class="card-body bg-light">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${employee.getId()}</li>
                  <li class="list-group-item">Email: 
                    <a href="mailto: ${employee.getEmail()}" target="_blank" rel="noopener noreferrer">${employee.getEmail()}</a>
                  </li>
                  <li class="list-group-item">School: ${employee.getSchool()}</li>
                </ul>
              </div>
            </div>
          </div>`;
  }

  cardArr.push(card);
};

const generatePage = () => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>

  <body class="d-flex flex-column min-vh-100">
    <header>
      <div class="container pt-4">
        <h1 class="bg-primary text-white text-center py-5 shadow">My Team</h1>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="row justify-content-center">${cardArr.join("")}
        </div>
      </div>
    </main>

    <footer class="container text-center mt-auto">
      <h5 class="">&copy; ${new Date().getFullYear()} by Mitchell George</h5>
    </footer>
  </body>
</html>
`;
};

module.exports = { generateCard, generatePage };

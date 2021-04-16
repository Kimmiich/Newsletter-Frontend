import {
  startPageHeader,
  startPageMain,
  createUserHeader,
  createUserMain,
  failedLogInHeader,
  failedLogInMain,
} from "./modules/templates.mjs";

//PICKED UP ELEMENT FROM HTML
const nav = document.getElementById("nav");
const section = document.getElementById("section");

//RUNTIME
// IF-METHOD THAT CHANGES PRINTED PAGE DEPENDING ON USER STILL BEING SIGNED IN
if (localStorage.getItem("id") !== null) {
  loggedIn();
} else {
  startPage();
}

document.addEventListener("click", (evt) => {
  // console.log(evt.target.id);

  switch (evt.target.id) {
    case "mainLogIn":
      checkLogIn();
      break;
    case "btnLogIn":
      startPage();
      break;
    case "btnNewUser":
      createNewUser();
      break;
    case "logOut":
      localStorage.clear();
      startPage();
      break;
    case "saveNewUser":
      addNewUser();
      startPage();
      break;
  }
});

//=== FUNCTIONS ===//

//PRINTING PAGE: SIGNED IN USER
function loggedIn() {
  let currentUser = localStorage.getItem("name");
  nav.innerHTML = `
    <button id="logOut">Log out</button>`;
  section.innerHTML = `
    <h1 id='mainHeadline'>Welcome ${currentUser}!</h1>
    <p> You are now able to use this amazing website, enjoy.</p>`;
}

//FUNCTION FOR PRINTING PAGE: LOGGED OUT USER
function startPage() {
  nav.innerHTML = startPageHeader;
  section.innerHTML = startPageMain;
}
//FUNCTION FOR PRINTING PAGE: FAILED LOG IN
function failedLogIn() {
  nav.innerHTML = failedLogInHeader;
  section.innerHTML = failedLogInMain;
}

//FUNCTION FOR PRINTING PAGE: NEW USER
function createNewUser() {
  nav.innerHTML = createUserHeader;
  section.innerHTML = createUserMain;
}

// LOG IN FUNCTION
function checkLogIn() {
  // CREATE A VARIABEL FROM INPUTS
  let user = {
    id: "",
    userName: document.getElementById("userNameInput").value,
    password: document.getElementById("passwordInput").value,
  };

  // CREATE A POST TO BACKEND
  fetch("http://localhost:3000/users", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((resp) => resp.json())
    .then((user) => {
      console.log(user);
      if (user != "Error") {
        localStorage.setItem("id", user.id);
        localStorage.setItem("name", user.userName);
        loggedIn();
      } else {
        failedLogIn();
      }
    });
}

// NEW USER FUNCTION
function addNewUser() {
  // CREATE A VARIABEL FROM INPUT-VALUES
  let newUser = {
    id: "",
    userName: document.getElementById("newUser").value,
    password: document.getElementById("newPassword").value,
  };
  console.log(newUser);

  // CREATE A POST TO BACKEND
  fetch("http://localhost:3000/users/new", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });
}

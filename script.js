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
startPage();

document.addEventListener("click", (evt) => {
  console.log(evt.target.id);

  switch (evt.target.id) {
    case "mainLogIn":
      logIn();
      loggedIn();
      break;
    case "btnLogIn":
      startPage();
      break;
    case "btnNewUser":
      addingNewUser();
      break;
    case "logOut":
      startPage();
      break;
    case "saveNewUser":
      addUser();
      startPage();
      break;
  }
});

//=== FUNCTIONS ===//

//PRINTING PAGE: SIGNED IN USER
function loggedIn() {
  nav.innerHTML = `
    <button id="logOut">Log out</button>`;
  section.innerHTML = `
    <h1 id='mainHeadline'>Welcome ${localStorage.getItem("user")}!</h1>
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
function addingNewUser() {
  nav.innerHTML = createUserHeader;
  section.innerHTML = createUserMain;
}

// LOG IN FUNCTION
function logIn() {
  // CREATE A VARIABEL FROM INPUT-VALUES
  let user = {
    id: "",
    userName: document.getElementById("userNameInput").value,
    passWord: document.getElementById("passwordInput").value,
  };

  // CREATE A POST TO BACKEND
  fetch("http://localhost:3000/users", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });
}

// NEW USER FUNCTION
function addUser() {
  // CREATE A VARIABEL FROM INPUT-VALUES
  let newUser = {
    id: "",
    userName: document.getElementById("newUser").value,
    passWord: document.getElementById("newPassword").value,
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

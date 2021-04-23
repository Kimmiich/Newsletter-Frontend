import {
  startPageHeader,
  startPageMain,
  createUserHeader,
  createUserMain,
  failedLogInHeader,
  failedLogInMain,
} from "./templates.mjs";

//PRINTING PAGE: SIGNED IN USER
function loggedIn() {
  let currentUser = localStorage.getItem("name");
  let currentSubStatus = localStorage.getItem("subscription");
  let checkboxStatus;

  if (currentSubStatus == "true") {
    checkboxStatus = `<p class="subText">We hope you enjoy our awesome newsletter.</p>
    <button id="subBtn">Unsubscribe</button>`;
  } else {
    checkboxStatus = `<p class="subText">Don't miss out on our awesome newsletter!</p>
    <button id="subBtn">Subscribe</button>`;
  }

  nav.innerHTML = `
    <button id="logOut">Log out</button>`;
  section.innerHTML = `
    <h1 id='mainHeadline'>Welcome ${currentUser}!</h1>
    <p> You are now able to use this amazing website, enjoy.</p>
    ${checkboxStatus}`;
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
    userName: document.getElementById("userNameInput").value,
    password: document.getElementById("passwordInput").value,
  };

  // CREATE A POST TO BACKEND
  fetch("https://kimmie-app.herokuapp.com/users", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((resp) => resp.json())
    .then((user) => {
      console.log(user);
      if (user != "Error") {
        localStorage.setItem("id", user._id);
        localStorage.setItem("name", user.userName);
        localStorage.setItem("subscription", user.subscription);
        loggedIn();
      } else {
        failedLogIn();
      }
    });
}

// NEW USER FUNCTION
function addNewUser() {
  let newUserName = document.getElementById("newUser").value;
  let newUserPw = document.getElementById("newPassword").value;
  let newUserEmail = document.getElementById("email").value;
  if (newUserName == "" || newUserPw == "" || newUserEmail == "") {
    section.innerHTML = createUserMain;
    document.getElementById("tryAgain").style = "display: block";
  } else {
    // CREATE A VARIABEL FROM INPUT-VALUES
    let newUser = {
      userName: newUserName,
      email: newUserEmail,
      password: newUserPw,
      subscription: document.getElementById("subscription").checked,
    };
    console.log(newUser);

    // CREATE A POST TO BACKEND
    fetch("https://kimmie-app.herokuapp.com/users/new", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });

    startPage();
  }
}

function changeSubscribtion() {
  let currentUserId = localStorage.getItem("id");
  let currentSub = localStorage.getItem("subscription");

  console.log(currentSub);

  let userInfo = {
    _id: currentUserId,
    subscription: currentSub,
  };

  // CREATE A POST TO BACKEND
  fetch(`https://kimmie-app.herokuapp.com/users/changes`, {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userInfo),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("subscription", data);
      loggedIn();
    });
}

export {
  loggedIn,
  startPage,
  failedLogIn,
  createNewUser,
  checkLogIn,
  addNewUser,
  changeSubscribtion,
};

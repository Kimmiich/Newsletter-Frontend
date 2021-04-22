import {
  loggedIn,
  startPage,
  createNewUser,
  checkLogIn,
  addNewUser,
  changeSubscribtion,
} from "./modules/functions.mjs";

//PICKED UP ELEMENT FROM HTML
const nav = document.getElementById("nav");
const section = document.getElementById("section");

// IF-METHOD THAT CHANGES PRINTED PAGE DEPENDING ON USER STILL BEING SIGNED IN
if (localStorage.getItem("id") !== null) {
  loggedIn();
} else {
  startPage();
}

//EVT. LISTENER ON WEBSITE
document.addEventListener("click", (evt) => {
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
      break;
    case "subBtn":
      changeSubscribtion();
      break;
  }
});

//HOMEPAGE/STARTPAGE
const startPageHeader = `
    <button id="btnNewUser">Create new account</button>
`;
const startPageMain = `
    <h1 id='mainHeadline'>Welcome!</h1>
    <p class="welcText">Sign in to unlock a world of possibilities.</p>
    <div id="mainCont" class="mainCont">
    <input placeholder="Nickname" type="text" id="userNameInput">
    <input placeholder="Password" type="password" id="passwordInput"> 
    <button id="mainLogIn">Sign in</button>
    </div>
`;
//CREATE NEW USER PAGE
const createUserHeader = `
    <button id="btnNewUser">Create new account</button> 
    <button id="btnLogIn">Sign in</button>
`;
const createUserMain = `
    <h1 id='mainHeadline'>Create a new account</h1>
    <div id="newUserCont" class="newUserCont">
    <input placeholder="Nickname" type="text" id="newUser">
    <input placeholder="Email" type="text" id="email">
    <input placeholder="Password" type="password" id="newPassword"> 
    <div><input type="checkbox" id="subscription" name="subscription"><label for="subscription">Yes, I wan't to subscribe to the newsletter.</label></div> 
    <button id="saveNewUser">Save</button>
    </div>
`;
//ERROR PAGE
const failedLogInHeader = `
    <button id="btnNewUser">Create new account</button>
    <button id="btnLogIn">Sign in</button>
`;
const failedLogInMain = `
    <h1 id='mainHeadline'>Whoops!</h1>
    <p id="logInCont"> We can't seem to find you, please try again.</p>
`;

export {
  startPageHeader,
  startPageMain,
  createUserHeader,
  createUserMain,
  failedLogInHeader,
  failedLogInMain,
};

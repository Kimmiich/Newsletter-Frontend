//PICKED UP ELEMENT FROM HTML
const header = document.getElementById("header");
const main = document.getElementById("main");

//ARRAY WITH USERNAME AND PASSWORDS
let users = [
    {userName: "Janne", password: "test"},
    {userName: "Kimmie", password: "testarigen"},
    {userName: "Kenny", password: "testarinte"}
];

//LOAD ARRAY TO LOCALSTORAGE - NOT SOLVED WITH ADD NEW USERS!
if (localStorage.getItem("users") == null);{
    console.log("Jag har sparat arrayen");
    localStorage.setItem("users", JSON.stringify(users));
};    

//FUNCTION FOR PRINTING PAGE: SIGNED IN USER
function loggedIn() {
    nav.innerHTML = `<button id="logOut">Log out</button>`
    section.innerHTML = `<h1 id='mainHeadline'>Welcome ${localStorage.getItem("user")}!</h1>
        <p> You are now able to use this amazing website, enjoy.</p>`;
    localStorage.setItem("value", "loggedInValue")
    let logOut = document.getElementById("logOut");
    logOut.addEventListener("click", function(){
        console.log("Logga ut");
        loggedOut();
    });
};

//FUNCTION FOR PRINTING PAGE: LOGGED OUT USER
function loggedOut() {
    location.reload();
    localStorage.clear();
};

//FUNCTION FOR PRINTING PAGE: NEW USER
function addingNewUser() {
    nav.innerHTML = `<button id="btnNewUser">Create new account</button> <button id="btnLogIn">Sign in</button>`;
    section.innerHTML = `<h1 id='mainHeadline'>Create a new account</h1>
    <form id="newUserCont" class="newUserCont">
    <input placeholder="Nickname" type="text" id="userNameInput">
    <input placeholder="Password" type="text" id="passwordInput"> <button id="saveNewUser">Save</button>
    </form>`;
    //BUTTON FOR SAVING NEW USER - NOT SOLVED THIS!!
    saveNewUser.addEventListener("click", () => {
        console.log("Sparar ny användare");
        addingNewUserToArray(userNameInput, passwordInput);
    });
    //EXTRA SIGN IN BUTTON
    btnLogIn.addEventListener("click", () => location.reload());
};
    
//FUNCTION FOR PRINTING PAGE: ADD NEW USER - NOT SOLVED THIS!!
function addingNewUserToArray(userNameInput, passwordInput) {
    let newUser = {userName: userNameInput.value, password: passwordInput.value};
    console.log(newUser);

    let getUsers = JSON.parse(localStorage.getItem("users"));

    getUsers.push(newUser);
    console.log(getUsers);

    localStorage.setItem("users", JSON.stringify(getUsers));  
};
    
//HOMEPAGE/STARTPAGE
//CREATE HEADER, NAV WITH BUTTTON "NEW USER"
header.insertAdjacentHTML("beforeend", `<nav id="nav"><button id="btnNewUser">Create new account</button>`);

//CREATE SECTION IN MAIN WITH H1 AND FORM FOR SIGNING IN
main.insertAdjacentHTML("afterbegin", `<section id='section'>
    <h1 id='mainHeadline'>Welcome!</h1><p class="welcText">Sign in to unlock a world of possibilities.</p>
    <form id="mainCont" class="mainCont">
    <input placeholder="Nickname" type="text" id="userNameInput">
    <input placeholder="Password" type="text" id="passwordInput"> 
    <button id="mainLogIn">Sign in</button>
    </form>
    </section>`
);

//SIGN-IN BUTTON
mainLogIn.addEventListener("click", () => {
    let userName = document.getElementById("userNameInput").value;
    let password = document.getElementById("passwordInput").value;
    console.log("Knappen logga in funkar");
    localStorage.setItem("user", userName);
    //FOR LOOP FOR USERS
    for (user in users) {  
        //IF-METHOD THAT SHOWS SIGNED IN PAGE IF LOG IN SUCCEDS
        if (userName == users[user].userName && password == users[user].password) {
            console.log("Du loggas in");
            loggedIn();
            return;
        };
    }; 

    //IF THE IF-METHOD FAILS SHOW ERROR PAGE WITH NEW BUTTONS INSTEAD
    nav.innerHTML = `<button id="btnNewUser">Create new account</button> <button id="btnLogIn">Sign in</button>`;
    section.innerHTML = `<h1 id='mainHeadline'>Whoops!</h1>
    <p id="logInCont"> We can't seem to find you, please try again.</p>`;

    //EXTRA SIGN IN BUTTON
    btnLogIn.addEventListener("click", () => location.reload());
              
    //NEW USER BUTTON
    btnNewUser.addEventListener("click", () => addingNewUser());
});

//ADDITIONAL BUTTON NEW USER
btnNewUser.addEventListener("click", () => addingNewUser());

// IF-METHOD THAT CHANGES PRINTED PAGE DEPENDING ON USER STILL BEING SIGNED IN 
if(localStorage.getItem("value", "loggedInValue")){
    loggedIn();
};

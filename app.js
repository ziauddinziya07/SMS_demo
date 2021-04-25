const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const firebaseConfig = {
  apiKey: "AIzaSyBg8UqCSiZwAj_t7JhhOSTFVpxIuGnN460",
  authDomain: "fir-and-web-app-demo.firebaseapp.com",
  databaseURL: "https://fir-and-web-app-demo-default-rtdb.firebaseio.com",
  projectId: "fir-and-web-app-demo",
  storageBucket: "fir-and-web-app-demo.appspot.com",
  messagingSenderId: "283812025306",
  appId: "1:283812025306:web:39f3fce3c0e7f1e895e6e3"
};

firebase.initializeApp(firebaseConfig);

function signup() {
  console.log("Success");
  var name = document.querySelector(".name").value;
  var regno = document.querySelector(".regno").value;
  var phoneno = document.querySelector(".phoneno").value;
  var email = document.querySelector(".email").value;
  var password = document.querySelector(".password").value;


  console.log(name);
  console.log(regno);
  console.log(phoneno);
  console.log(email);
  console.log(password);

  firebase.database().ref("Students/" + regno).set({
    Name: name,
    Regno: regno,
    Phoneno: phoneno,
    Email: email,
    Password: password
  });

  sessionStorage.setItem("Name", name);
  sessionStorage.setItem("Regno", regno);

  // alert("Successfully registered!");
  window.location.href = "  success_page.html";
}
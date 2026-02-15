// Your Firebase configuration (replace with your project config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "telechatbot-b7bb4",
  storageBucket: "telechatbot-b7bb4.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:123456",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Signup Function
function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  db.collection("users")
    .add({
      email: email,
      password: password,
    })
    .then(() => {
      document.getElementById("message").innerText = "Signup Successful!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "Error: " + error;
    });
}

// Login Function
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  db.collection("users")
    .where("email", "==", email)
    .where("password", "==", password)
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        document.getElementById("message").innerText = "Login Successful!";
      } else {
        document.getElementById("message").innerText = "Invalid Credentials!";
      }
    });
}
